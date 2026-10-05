import Image from "next/image";
import Link from "next/link";
import PageFrame from "./PageFrame";
import ContactCTA from "./ContactCTA";
type Props = {
  intent: string;
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  steps: { title: string; body: string }[];
  checklist: string[];
};
export default function PlanningPage({
  intent,
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  steps,
  checklist,
}: Props) {
  return (
    <PageFrame>
      <section className="bg-[#F8F6F1]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {intro}
            </p>
            <Link
              href={`/contact-us?intent=${intent}`}
              className="button-primary mt-8"
            >
              Talk through your plan
            </Link>
            <p className="mt-5 text-sm text-gray-600">
              Maryland real estate inquiries · Jack Deeds, CPA
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="font-serif text-4xl">Start with a clear plan.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-[#132B3E]/15 p-7"
            >
              <p className="eyebrow">0{index + 1}</p>
              <h3 className="mt-4 font-serif text-2xl">{step.title}</h3>
              <p className="mt-4 leading-relaxed text-gray-600">{step.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-[#F8F6F1] p-7 sm:p-10">
          <h2 className="font-serif text-3xl">
            Bring these to the first conversation.
          </h2>
          <ul className="mt-6 grid list-inside list-disc gap-4 sm:grid-cols-2">
            {checklist.map((item) => (
              <li key={item} className="leading-relaxed text-gray-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ContactCTA intent={intent} />
    </PageFrame>
  );
}
