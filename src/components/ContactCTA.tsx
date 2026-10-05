import Link from "next/link";
export default function ContactCTA({
  title = "Let's talk about your next move.",
  body = "Tell Jack where you are starting, what matters to you, and your timing.",
  intent = "General",
}: {
  title?: string;
  body?: string;
  intent?: string;
}) {
  return (
    <section className="bg-[#132B3E] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-3xl sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-white/75">{body}</p>
        </div>
        <Link
          href={`/contact-us?intent=${encodeURIComponent(intent)}`}
          className="button-light shrink-0"
        >
          Start a conversation <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
