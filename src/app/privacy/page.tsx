import type { Metadata } from "next";
import PageFrame from "@/components/PageFrame";
export const metadata: Metadata = {
  title: "Privacy & Contacting Us",
  alternates: { canonical: "/privacy" },
};
export default function Privacy() {
  return (
    <PageFrame>
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="eyebrow">Using this website</p>
        <h1 className="mt-4 font-serif text-5xl">
          Privacy &amp; contacting us
        </h1>
        <div className="mt-8 space-y-7 leading-relaxed text-gray-600">
          <div>
            <h2 className="font-serif text-2xl text-[#132B3E]">
              Preparing an inquiry
            </h2>
            <p className="mt-3">
              The inquiry tool prepares an email draft in your browser.
              Preparing or copying the draft does not send it to Good Deeds. To
              contact Jack, send the draft through your email provider, email
              jack@gooddeeds.com directly, or call 202-297-2432.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-[#132B3E]">
              The information you send
            </h2>
            <p className="mt-3">
              Include the contact and project details needed for the
              conversation. Please do not send account numbers, identification
              documents, or sensitive financial records through the inquiry
              tool. If records are needed for an engagement, discuss how to
              provide them with Jack.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-[#132B3E]">
              Website analytics
            </h2>
            <p className="mt-3">
              This website includes Vercel Analytics to help understand website
              use. Hosting and analytics providers may process technical
              information associated with site visits.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-[#132B3E]">
              Other websites
            </h2>
            <p className="mt-3">
              Links to Zillow, Airbnb, Bettar, and other services open their
              websites. Their privacy practices, current information, and terms
              apply when you use those services.
            </p>
          </div>
          <p>
            Questions about this website or your inquiry? Email{" "}
            <a
              href="mailto:jack@gooddeeds.com"
              className="text-[#096DBC] underline underline-offset-4"
            >
              jack@gooddeeds.com
            </a>
            .
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
