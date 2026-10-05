import type { Metadata } from "next";
import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import ContactCTA from "@/components/ContactCTA";
import { journeys } from "@/lib/site";
export const metadata: Metadata = {
  title: "Services & Your Next Step",
  description:
    "Find your starting point: outsourced accounting, buying or selling in Maryland, furnished homes, or practical property preparation.",
  alternates: { canonical: "/services" },
};
export default function Services() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="eyebrow">Good Deeds</p>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
          Start with the decision
          <br />
          you need to make.
        </h1>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Financial leadership",
              body: "Discuss accounting operations, controller support, reporting, cash flow, or a systems problem.",
              href: "/accounting",
              action: "Explore accounting support",
            },
            ...journeys,
            {
              title: "Prepare your home",
              body: "Prioritize repairs, presentation, and the work needed before a move, sale, or lease.",
              href: "/prepare-your-home",
              action: "Plan property preparation",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-[#132B3E]/15 p-8 hover:bg-[#F8F6F1]"
            >
              <h2 className="font-serif text-3xl">{item.title}</h2>
              <p className="mt-4 leading-relaxed text-gray-600">{item.body}</p>
              <p className="mt-6 font-semibold text-[#096DBC]">
                {item.action} →
              </p>
            </Link>
          ))}
        </div>
      </section>
      <ContactCTA />
    </PageFrame>
  );
}
