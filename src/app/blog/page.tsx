import type { Metadata } from "next";
import Link from "next/link";
import PageFrame from "@/components/PageFrame";
export const metadata: Metadata = {
  title: "Practical Planning Guides",
  description:
    "Useful starting points for financial reporting, a home purchase or sale, furnished rentals, and property preparation.",
  alternates: { canonical: "/blog" },
};
export default function Guides() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="eyebrow">Practical starting points</p>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
          Ask better questions.
          <br />
          Make a clearer plan.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
          Start with these questions before a financial or property decision.
          Use them to prepare for a conversation about your own situation.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Is your monthly reporting useful?",
              body: "Can you explain the main changes, identify cash commitments, and see which costs need attention? Begin with the decisions your reports should support.",
              href: "/accounting",
              action: "Discuss financial reporting",
            },
            {
              title: "What will the home really need?",
              body: "Consider condition, recurring costs, and the improvements you want to make alongside the purchase budget.",
              href: "/services/buy-a-home",
              action: "Plan your purchase",
            },
            {
              title: "Which preparation deserves the budget?",
              body: "Start with known issues. Define the work, compare quotes, and ask whether each change supports your sale or leasing plan.",
              href: "/prepare-your-home",
              action: "Plan home preparation",
            },
            {
              title: "What should you confirm about a rental?",
              body: "Check dates, lease length, included furnishings and utilities, parking, pets, and the property's booking or application process.",
              href: "/services/rent-a-home",
              action: "Explore furnished homes",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#132B3E]/15 p-8"
            >
              <h2 className="font-serif text-3xl">{item.title}</h2>
              <p className="mt-4 leading-relaxed text-gray-600">{item.body}</p>
              <Link
                href={item.href}
                className="mt-6 inline-block font-semibold text-[#096DBC] underline underline-offset-4"
              >
                {item.action} →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
