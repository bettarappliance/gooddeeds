import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageFrame from "@/components/PageFrame";
import ContactCTA from "@/components/ContactCTA";
export const metadata: Metadata = {
  title: "Furnished Homes & Rental Inquiries",
  description:
    "Explore furnished homes for your next stay in Chevy Chase and Washington, DC. Ask Jack about dates, lease terms, included furnishings, and current options.",
  alternates: { canonical: "/services/rent-a-home" },
};
export default function Rent() {
  return (
    <PageFrame>
      <section className="bg-[#F8F6F1]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Furnished homes</p>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
              More than a stay.
              <br />A place to live.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Relocating, working away from home, or making room for a
              renovation? Explore furnished homes with space for everyday life.
              Start with your dates and the kind of home you need.
            </p>
            <Link href="/properties" className="button-primary mt-8">
              Explore the collection
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/rent2.1.jpg"
              alt="Furnished home with separate living and work spaces"
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
          Know the details before you settle in.
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Dates & stay requirements",
              body: "Availability and minimum stays vary by property. Check the listing calendar or ask Jack about a longer lease.",
            },
            {
              title: "What is included",
              body: "Confirm furnishings, utilities, parking, workspace, and any other details that matter for your stay.",
            },
            {
              title: "Terms & next steps",
              body: "Ask about rent, deposits, pet arrangements, and the application or booking process for the specific home.",
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
      </section>
      <ContactCTA
        title="Let's find the right starting point."
        body="Tell Jack the home you are interested in, your dates, length of stay, and the space you need. Availability and terms will be confirmed for that property."
        intent="Rent"
      />
    </PageFrame>
  );
}
