import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/lib/site";
import PageFrame from "@/components/PageFrame";
import ContactCTA from "@/components/ContactCTA";
export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = properties.find((p) => p.slug === slug);
  return p
    ? {
        title: p.name,
        description: p.description,
        alternates: { canonical: `/properties/${slug}` },
      }
    : {};
}
export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = properties.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <PageFrame>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Link
          href="/properties"
          className="font-semibold text-[#096DBC] underline"
        >
          ← Back to the collection
        </Link>
        <p className="eyebrow mt-10">
          {p.category} portfolio · {p.location}
        </p>
        <h1 className="mt-4 font-serif text-5xl sm:text-7xl">{p.name}</h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-600">
          {p.description}
        </p>
        {p.image && (
          <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src={p.image}
              alt={p.name}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        )}
        <div className="mt-10 grid gap-7 md:grid-cols-2">
          <div className="rounded-2xl bg-[#F8F6F1] p-8">
            <h2 className="font-serif text-3xl">Start with the details.</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Tell Jack what you have in mind, your timing, and any questions
              about the property. Inclusion in the portfolio does not indicate
              current availability or an offer to lease or sell.
            </p>
            <Link
              href={`/contact-us?intent=${p.intent}`}
              className="button-primary mt-6"
            >
              Ask Jack about {p.name}
            </Link>
          </div>
          <div className="rounded-2xl border border-[#132B3E]/15 p-8">
            <h2 className="font-serif text-3xl">A clear next step.</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Property details, dates, pricing, and terms can change. Confirm
              current information directly before making arrangements.
            </p>
            {p.source && (
              <a
                href={p.source}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-semibold text-[#096DBC] underline"
              >
                View the public Zillow property page ↗
              </a>
            )}
          </div>
        </div>
      </section>
      {p.gallery && p.gallery.length > 1 && <section className="mx-auto max-w-7xl px-6 pb-16"><h2 className="mb-7 font-serif text-4xl">A closer look</h2><div className="grid gap-5 sm:grid-cols-2">{p.gallery.slice(1).map((src, index) => <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={src} alt={`${p.name} listing photo ${index + 2}`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" /></div>)}</div></section>}
      <ContactCTA title="Every property decision starts with a conversation." />
    </PageFrame>
  );
}
