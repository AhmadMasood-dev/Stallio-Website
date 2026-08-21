import { redirect } from "@/i18n/navigation";
import { routes } from "@/constants/routes";

type LocaleIndexProps = PageProps<"/[locale]">;

export default async function LocaleIndexPage({ params }: LocaleIndexProps) {
  const { locale } = await params;
  redirect({ href: routes.home, locale });
}
