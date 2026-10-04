import Image from "next/image";
import Link from "next/link";
import { properties, type Property } from "@/lib/site";
export default function PropertyCollection({
  limit = properties.length,
  category,
  offset = 0,
}: {
  limit?: number;
  category?: Property["category"];
  offset?: number;
}) {
  const collection = properties
    .filter((p) => !category || p.category === category)
    .slice(offset, offset + limit);
  return (
    <div className="grid gap-7 sm:grid-cols-2">
      {collection.map((p) => (
        <article
          key={p.slug}
          className="overflow-hidden rounded-2xl border border-[#132B3E]/15 bg-white"
        >
          {p.image ? (
            <div className="relative aspect-[4/3]">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="flex aspect-[4/3] flex-col justify-end bg-[#132B3E] p-8 text-white">
              <p className="text-xs uppercase tracking-[.2em] text-white/70">
                {p.category} portfolio
              </p>
              <p className="mt-4 font-serif text-4xl">{p.name}</p>
              <p className="mt-4 text-sm text-white/80">{p.location}</p>
            </div>
          )}
          <div className="p-6 sm:p-8">
            <p className="eyebrow">
              {p.category} · {p.location}
            </p>
            <h3 className="mt-3 font-serif text-2xl">{p.name}</h3>
            <p className="mt-4 leading-relaxed text-gray-600">
              {p.description}
            </p>
            <Link
              href={`/properties/${p.slug}`}
              className="mt-5 inline-block font-semibold text-[#096DBC] underline underline-offset-4"
            >
              Explore this property →
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
