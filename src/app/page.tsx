import Image from "next/image";
import BettarHandoff from "@/components/BettarHandoff";
import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import ContactCTA from "@/components/ContactCTA";
import PropertyCollection from "@/components/PropertyCollection";
import { journeys } from "@/lib/site";
export default function Home() {
  return (
    <PageFrame>
      <section className="bg-[#F8F6F1]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="eyebrow">Good Deeds · Jack Deeds, CPA</p>
            <h1 className="mt-5 font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Good judgment.
              <br />
              <span className="text-[#BA1038]">
                For your business.
                <br />
                For your next move.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
              Clearer numbers. Thoughtful property decisions. A personal
              connection. Good Deeds brings together Jack Deeds’ accounting
              experience and hands-on approach to homes, investments, and
              business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact-us" className="button-primary">
                Talk with Jack <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="/accounting"
                className="button-light border border-[#132B3E]/20"
              >
                Explore accounting support
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-600">
              Personal attention · A financial perspective · Practical property
              experience
            </p>
          </div>
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src="/jack.jpg"
                alt="Jack Deeds, CPA"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-[#FFFEFB]/95 p-5">
              <p className="eyebrow">John “Jack” Deeds, CPA</p>
              <p className="mt-2 font-serif text-2xl">
                Numbers matter. People matter, too.
              </p>
              <Link
                href="/properties"
                className="mt-3 inline-block text-sm font-semibold text-[#096DBC] underline underline-offset-4"
              >
                Explore the property collection →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="eyebrow">Start where you are</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
          What brings you here?
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Get clarity on the numbers.",
              label: "Outsourced accounting",
              body: "Accounting, controller support, cash planning, and useful reporting. Connect your financial information to better business decisions.",
              href: "/accounting",
              action: "Explore accounting support",
            },
            {
              title: "Explore the possibilities.",
              label: "Residential & commercial",
              body: "Discover the property collection, discuss a furnished stay, or start planning a Maryland purchase or sale.",
              href: "/properties",
              action: "Explore the property collection",
            },
            journeys[1],
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col rounded-2xl border border-[#132B3E]/15 p-7 hover:bg-[#F8F6F1]"
            >
              <p className="eyebrow">{item.label}</p>
              <h3 className="mt-4 font-serif text-3xl">{item.title}</h3>
              <p className="mt-4 flex-1 leading-relaxed text-gray-600">
                {item.body}
              </p>
              <p className="mt-6 font-semibold text-[#096DBC]">
                {item.action} <span aria-hidden="true">→</span>
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="border-y border-[#132B3E]/10 bg-[#F8F6F1]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[.65fr_1fr]">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/jack.jpg"
              alt="Jack Deeds"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Meet Jack</p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Good judgment.
              <br />A personal connection.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Jack Deeds brings a CPA&apos;s financial perspective and hands-on
              business and property experience to every conversation. The aim is
              simple: understand your options, weigh the costs, and choose a
              next step that fits your life.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-block font-semibold text-[#096DBC] underline underline-offset-4"
            >
              Get to know Jack →
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Furnished homes</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
              Room to settle in.
            </h2>
          </div>
          <Link
            href="/properties"
            className="font-semibold text-[#096DBC] underline underline-offset-4"
          >
            View the collection →
          </Link>
        </div>
        <PropertyCollection limit={2} offset={2} category="Residential" />
        <p className="mt-6 text-sm leading-relaxed text-gray-600">
          These homes are part of the property collection. Contact Jack to
          confirm availability, pricing, and stay requirements.
        </p>
      </section>
      <div className="mx-auto max-w-7xl px-6 pb-16"><BettarHandoff /></div>
      <ContactCTA />
    </PageFrame>
  );
}
