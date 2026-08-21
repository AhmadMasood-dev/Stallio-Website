# Spanish i18n for Stallio marketing site

**Date:** 2026-08-22  
**Status:** Approved for implementation planning  
**Stack choice:** `next-intl` with App Router `[locale]` segment

## Goal

Ship a complete English ↔ Spanish experience across all completed marketing and auth pages, with a working language switcher, organized message files, and no major layout breakage from longer Spanish copy.

## Architecture

- **Locales:** `en` (default), `es`
- **Routing:** All app routes live under `src/app/[locale]/...`
  - Marketing: `home`, `about`, `features`, `how-it-works`, `pricing`
  - Auth: `login`, `signup`, `forgot-password`
- **Root redirect:** `/` resolves to a locale-prefixed home (e.g. `/en/home`), with middleware locale detection still ending on a prefixed path
- **Middleware:** `src/middleware.ts` using `next-intl` for locale detection, prefix handling, and cookie persistence
- **HTML lang:** Root layout sets `<html lang={locale}>` from the active locale
- **RSC vs client:**
  - Server Components: `getTranslations` / `getMessages`
  - Client Components: `useTranslations`
- **Language switcher:** Header (and mobile nav) swaps locale segment only (`/en/pricing` → `/es/pricing`), keeps the same logical page

## Copy organization

### Message files

- `messages/en.json` (source of truth)
- `messages/es.json` (full parallel key tree; no missing keys)

### Namespaces

| Namespace | Contents |
|-----------|----------|
| `common` | Shared CTAs and reusable chrome (`Start Free`, etc.) |
| `nav` | Main navigation labels |
| `footer` | Footer groups, tagline, copyright, link labels |
| `home` | Home page sections |
| `about` | About page sections |
| `features` | Features page sections |
| `howItWorks` | How it works page sections |
| `pricing` | Pricing page sections, plan labels, FAQ |
| `auth` | Login, signup, forgot-password forms and chrome |
| `metadata` | Per-page titles and descriptions |

Keys are nested (e.g. `home.hero.title`). Flat mega-keys are not used.

### What is translated vs left as data

**Translated**

- All user-facing marketing and auth UI strings
- Nav, footer, headings, paragraphs, buttons, forms, pricing labels/FAQ
- Page metadata

**Not treated as translation dictionaries**

- Route path segments and href constants
- Numeric prices and currency config (amounts stay numeric; labels translate)
- Color tokens and non-copy constants
- Where useful, `Intl.NumberFormat` uses the active UI locale for display formatting only

### Component pattern

- Keep existing section/component structure and visual design
- Replace hardcoded English with `t("…")` calls
- Shared CTAs read from `common` for consistency
- Pages remain thin composers of existing sections

## Language switcher

- Compact `EN | ES` control in the header beside the theme toggle
- Same control in the mobile menu
- On switch: preserve path after the locale segment
- Persist last choice via next-intl locale cookie
- Accessible: clear labels / `aria-label`, keyboard usable

## Layout resilience

Spanish often runs longer than English. Mitigations:

- Prefer flexible wrapping over fixed widths on nav labels, buttons, and hero lines
- Targeted fixes only where Spanish overflows (nav gaps, CTA whitespace / min-width, heading `text-balance` or breakpoint type tweaks)
- No redesign: same components, spacing tokens, and visual language
- Responsive spot-check at 375px, 768px, and 1280px for every completed page in both locales

## Verification

- `npm run lint` and `npm run build` pass
- Manual: EN ↔ ES on each completed page
- No missing translation keys
- Correct `lang` attribute
- No major overflow, clipping, or broken wrap in Spanish

## Out of scope

- Building missing routes (`/contact`, `/privacy`, `/terms`, `/refund-policy`); footer may keep linking them with translated labels only
- Locales beyond `en` and `es`
- Translating non-user-facing developer docs or agent skill files

## Implementation notes (non-binding detail)

Expected touch points (to be refined in the implementation plan):

- Add `next-intl` and wire `i18n/request.ts` (or project-equivalent next-intl config)
- Introduce `[locale]` layout and move existing routes under it
- Extract strings from `src/constants/site.ts`, layout chrome, and section components into message JSON
- Add `LanguageSwitcher` under `src/components/layout/` (or adjacent layout/theme area)
- Update internal links to be locale-aware via next-intl navigation helpers
