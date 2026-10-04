import type { Metadata } from "next";
import PageFrame from "@/components/PageFrame";
import PropertyCollection from "@/components/PropertyCollection";
import ContactCTA from "@/components/ContactCTA";
export const metadata: Metadata = {
  title: "Residential & Commercial Properties",
  description:
    "Explore the Good Deeds residential and commercial portfolio: Rittenhouse, Patterson, Nevada, Reedie, Ennals, and Wheatley.",
  alternates: { canonical: "/properties" },
};
export default function Properties() {
  return (
    <PageFrame>
      <section className="bg-[#F8F6F1]">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="eyebrow">The property collection</p>
          <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
            Places to live.
            <br />
            Places to do business.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
            Residential homes, furnished living, and commercial properties. Each
            has its own story, purpose, and possibilities. This is a portfolio,
            not a list of currently available rentals or properties for sale.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#residential" className="button-primary">
              Residential properties
            </a>
            <a
              href="#commercial"
              className="button-light border border-[#132B3E]/20"
            >
              Commercial properties
            </a>
          </div>
        </div>
      </section>
      <section id="residential" className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="mb-8 font-serif text-4xl">The residential collection</h2>
        <PropertyCollection category="Residential" />
        <div className="mt-10 rounded-2xl bg-[#F8F6F1] p-7">
          <h3 className="font-serif text-2xl">Rittenhouse furnished stays</h3>
          <p className="mt-3 text-gray-600">
            Explore the existing Airbnb listings for photos and booking
            information. Confirm the particular residence, dates, and
            arrangements before booking.
          </p>
          <div className="mt-5 flex flex-wrap gap-6">
            <a
              href="https://www.airbnb.com/rooms/53659699"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#096DBC] underline"
            >
              Explore the three-bedroom listing ↗
            </a>
            <a
              href="https://www.airbnb.com/rooms/50658643"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#096DBC] underline"
            >
              Explore the four-bedroom listing ↗
            </a>
          </div>
        </div>
      </section>
      <section id="commercial" className="bg-[#F8F6F1]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <p className="eyebrow">Commercial real estate</p>
          <h2 className="mt-3 mb-8 font-serif text-4xl">
            Space with a business purpose.
          </h2>
          <PropertyCollection category="Commercial" />
        </div>
      </section>
      <ContactCTA
        title="Let’s talk about a property."
        body="Share the property you have in mind and what you would like to know. Availability, pricing, and terms are confirmed individually."
      />
    </PageFrame>
  );
}
