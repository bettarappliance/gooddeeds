import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#F8F6F1] text-[#132B3E]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="font-serif text-3xl">
            <span className="text-[#BA1038]">Good</span>
            <span className="text-[#096DBC]">Deeds</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Accounting insight, thoughtful property decisions, and a personal
            connection.
          </p>
          <p className="mt-4 text-sm text-gray-600">
            Jack Deeds, CPA
            <br />
            Maryland real estate license
          </p>
        </div>
        <nav aria-label="Explore">
          <h2 className="font-semibold">Your next move</h2>
          <div className="mt-4 space-y-3 text-sm">
            {[
              ["Accounting support", "/accounting"],
              ["Buy a home", "/services/buy-a-home"],
              ["Sell a home", "/services/sell-a-home"],
              ["Furnished rentals", "/services/rent-a-home"],
              ["Property collection", "/properties"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="block hover:underline">
                {label}
              </Link>
            ))}
          </div>
        </nav>
        <nav aria-label="More information">
          <h2 className="font-semibold">Good Deeds</h2>
          <div className="mt-4 space-y-3 text-sm">
            {[
              ["About Jack", "/about"],
              ["Prepare your home", "/prepare-your-home"],
              ["Planning guides", "/blog"],
              ["Contact", "/contact-us"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="block hover:underline">
                {label}
              </Link>
            ))}
          </div>
        </nav>
        <div>
          <h2 className="font-semibold">Start a conversation</h2>
          <a
            href="tel:202-297-2432"
            className="mt-4 block text-sm hover:underline"
          >
            202-297-2432
          </a>
          <a
            href="mailto:jack@gooddeeds.com"
            className="mt-3 block break-all text-sm hover:underline"
          >
            jack@gooddeeds.com
          </a>
          <a
            href="https://www.linkedin.com/in/jackdeeds/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm hover:underline"
          >
            Connect with Jack on LinkedIn ↗
          </a>
          <p className="mt-4 text-sm text-gray-600">
            Rental availability and terms are confirmed for each property.
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 border-t border-[#132B3E]/15 px-6 py-6 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Good Deeds. All rights reserved.</p>
        <Link href="/privacy" className="underline underline-offset-4">
          Privacy &amp; contacting us
        </Link>
      </div>
    </footer>
  );
}
