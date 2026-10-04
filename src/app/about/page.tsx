import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import ContactCTA from "@/components/ContactCTA";
export const metadata: Metadata = {
  title: "About Jack Deeds, CPA",
  description:
    "Meet Jack Deeds, CPA: financial leader, business owner, and property investor. Explore Good Deeds accounting and property services.",
  alternates: { canonical: "/about" },
};
export default function About() {
  return (
    <PageFrame>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:py-20 md:grid-cols-[.75fr_1fr]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="/jack.jpg"
            alt="John ‘Jack’ Deeds"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="eyebrow">John “Jack” Deeds, CPA</p>
          <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
            Numbers matter.
            <br />
            People matter, too.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            My work has always been about making good decisions with the
            information in front of us. As a CPA and financial leader, I help
            connect the numbers to the work. As a business owner and property
            investor, I understand what it means to put those decisions into
            practice.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Good Deeds brings that perspective to two conversations: how to run
            the financial side of a business, and how to make your next property
            decision. Both begin with listening, clear expectations, and
            practical next steps.
          </p>
          <Link href="/contact-us" className="button-primary mt-8">
            Start a conversation
          </Link>
        </div>
      </section>
      <section className="bg-[#F8F6F1]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="font-serif text-4xl">
            Three kinds of experience. One approach.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Financial leadership",
                body: "CFO, controller, and finance-director experience across accounting operations, reporting, cash flow, systems, and government-contracting environments.",
                href: "/accounting",
                action: "Explore accounting support",
              },
              {
                title: "Business operations",
                body: "An owner's perspective on people, customers, workflow, and the daily decisions behind a business.",
                href: "/accounting",
                action: "Connect operations and finance",
              },
              {
                title: "Homes & property",
                body: "Hands-on experience with property investment, renovation, and furnished rentals, alongside a Maryland real estate license.",
                href: "/properties",
                action: "Explore the property collection",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#132B3E]/15 bg-white p-7"
              >
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-gray-600">
                  {item.body}
                </p>
                <a
                  href={item.href}
                  className="mt-6 inline-block font-semibold text-[#096DBC] underline underline-offset-4"
                >
                  {item.action} →
                </a>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl leading-relaxed text-gray-600">
            Good Deeds is my personal business identity: practical financial
            insight, hands-on property experience, and attention to the people
            behind each decision.
          </p>
        </div>
      </section>
      <ContactCTA />
    </PageFrame>
  );
}
