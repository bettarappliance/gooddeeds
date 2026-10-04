import type { Metadata } from "next";
import PageFrame from "@/components/PageFrame";
import ContactInquiry from "@/components/ContactInquiry";
export const metadata: Metadata = {
  title: "Talk with Jack",
  description:
    "Contact Jack Deeds about accounting support, residential or commercial properties, buying or selling in Maryland, or a furnished rental. Call 202-297-2432 or prepare an email inquiry.",
  alternates: { canonical: "/contact-us" },
};
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const { intent } = await searchParams;
  return (
    <PageFrame>
      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow">A personal conversation</p>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
              Tell me about
              <br />
              your next move.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              A good starting point is your location, your timing, and what you
              want to accomplish. If you are asking about a rental, include the
              property and your preferred dates.
            </p>
            <a
              href="tel:202-297-2432"
              className="mt-8 block font-serif text-3xl text-[#BA1038]"
            >
              202-297-2432
            </a>
            <a
              href="mailto:jack@gooddeeds.com"
              className="mt-4 block break-all text-lg text-[#096DBC] underline underline-offset-4"
            >
              jack@gooddeeds.com
            </a>
            <p className="mt-8 text-sm leading-relaxed text-gray-600">
              For Bettar appliance and home-service inquiries, contact the
              Bettar team directly.
            </p>
            <a
              href="https://www.bettarservices.com/contact"
              className="mt-3 inline-block text-sm font-semibold text-[#096DBC] underline underline-offset-4"
            >
              Contact Bettar Appliance Master ↗
            </a>
          </div>
          <ContactInquiry initialIntent={intent} />
        </div>
      </section>
    </PageFrame>
  );
}
