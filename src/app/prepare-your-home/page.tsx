import BettarHandoff from "@/components/BettarHandoff";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import ContactCTA from "@/components/ContactCTA";
export const metadata: Metadata = {
  title: "Prepare Your Home",
  description:
    "Plan property repairs and presentation before selling, leasing, or moving in. Connect directly with Bettar Appliance Master for appliance and home-service inquiries.",
  alternates: { canonical: "/prepare-your-home" },
};
export default function Prepare() {
  return (
    <PageFrame>
      <section className="bg-[#F8F6F1]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Practical property preparation</p>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
              Improve the home.
              <br />
              Keep the plan grounded.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Before a sale, a lease, or a move, decide what needs attention. A
              clear scope helps you compare costs, sequence the work, and avoid
              improving things simply because you can.
            </p>
            <Link
              href="/contact-us?intent=Prepare"
              className="button-primary mt-8"
            >
              Discuss your property plan
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/renovations.jpg"
              alt="Kitchen renovation and appliance preparation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-serif text-4xl">
          Condition. Presentation. Priorities.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Start with condition",
              body: "List appliance problems, maintenance issues, and repairs. Separate urgent needs from optional changes.",
            },
            {
              title: "See the home clearly",
              body: "Consider lighting, furnishings, clutter, and the way rooms are used. Small presentation changes may be the right starting point.",
            },
            {
              title: "Define the work",
              body: "Request written scope and pricing. Confirm who performs the work, what is included, and how it fits your timing.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#132B3E]/15 p-7"
            >
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-gray-600">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10"><BettarHandoff /></div>
      </section>
      <ContactCTA intent="Prepare" />
    </PageFrame>
  );
}
