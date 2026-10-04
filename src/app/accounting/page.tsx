import type { Metadata } from "next";
import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import ContactCTA from "@/components/ContactCTA";
export const metadata: Metadata = {
  title: "Outsourced Accounting & Financial Leadership",
  description:
    "Discuss outsourced accounting, controller support, cash-flow planning, management reporting, and financial systems with Jack Deeds, CPA.",
  alternates: { canonical: "/accounting" },
};
const services = [
  {
    title: "Accounting & monthly close",
    body: "Work through reconciliations, the close process, and the reporting calendar. Establish what needs to be reliable each month and who is responsible for it.",
  },
  {
    title: "Controller support",
    body: "Review accounting workflows, responsibilities, controls, and documentation. Create a practical plan for the work that is falling between people or systems.",
  },
  {
    title: "Cash flow & forecasting",
    body: "Connect receivables, payables, payroll, and commitments to a forward view of cash. Help leadership understand timing and the choices ahead.",
  },
  {
    title: "Management reporting",
    body: "Turn the monthly numbers into a useful conversation about performance, costs, and priorities. Design reports around the decisions management needs to make.",
  },
  {
    title: "GovCon & multi-entity accounting",
    body: "Discuss project accounting, indirect costs, timekeeping workflows, and entity-level reporting. Identify accounting-process improvements and the specialist support your circumstances require.",
  },
  {
    title: "Systems & process improvement",
    body: "Assess how data moves between accounting, payroll, timekeeping, and operational systems. Consider migration planning, clearer ownership, and less repetitive work.",
  },
];
export default function Accounting() {
  return (
    <PageFrame>
      <section className="bg-[#132B3E] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-white/70">
            Good Deeds · Financial leadership
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">
            Know your numbers.
            <br />
            <span className="text-[#E8CFB7]">Know your next move.</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/80">
            Outsourced accounting and controller support, with a CFO&apos;s
            perspective. Start with the reporting, cash-flow, or systems problem
            you need to solve—not a package of work you may not need.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact-us?intent=Accounting" className="button-light">
              Discuss your accounting needs
            </Link>
            <a
              href="tel:202-297-2432"
              className="inline-flex items-center rounded-lg border border-white/40 px-6 py-3 font-semibold"
            >
              Call Jack
            </a>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="eyebrow">Start with the need</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
          Financial work that helps you run the business.
        </h2>
        <div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-[#132B3E]/15 p-7"
            >
              <h3 className="font-serif text-2xl">{service.title}</h3>
              <p className="mt-4 leading-relaxed text-gray-600">
                {service.body}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-[#F8F6F1]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <p className="eyebrow">Experience behind the conversation</p>
            <h2 className="mt-4 font-serif text-4xl">
              A CPA who understands operations.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Jack&apos;s background includes CFO and controller work,
              government-contracting finance, multi-entity reporting, and
              accounting-system implementation. Experience operating businesses
              and properties keeps the discussion grounded in the work behind
              the numbers.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block font-semibold text-[#096DBC] underline underline-offset-4"
            >
              More about Jack →
            </Link>
          </div>
          <div>
            <h2 className="font-serif text-3xl">
              A useful first conversation.
            </h2>
            <ul className="mt-6 space-y-4 text-gray-600">
              {[
                "What needs to work better: close, reporting, cash, or systems?",
                "Which accounting and operational systems do you use?",
                "Who handles the work now, and where are the gaps?",
                "What decisions or deadlines are driving the need?",
              ].map((item) => (
                <li key={item} className="border-b border-[#132B3E]/15 pb-4">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm leading-relaxed text-gray-600">
              The first step is to define the scope, responsibilities, timing,
              and engagement fit. Services and fees are agreed before work
              begins.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA
        intent="Accounting"
        title="What would better financial visibility change?"
        body="Tell Jack about your organization, current systems, and the problem you want to address. Start with a focused conversation."
      />
    </PageFrame>
  );
}
