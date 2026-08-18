import {
  ContactHero,
  ContactInfo,
  ContactForm,
  ContactCta,
} from "@/components/contact";

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-12 lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
      <ContactCta />
    </>
  );
}
