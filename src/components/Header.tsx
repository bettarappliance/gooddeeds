"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
const links = [
  ["Accounting", "/accounting"],
  ["Properties", "/properties"],
  ["Real estate", "/services"],
  ["Prepare your home", "/prepare-your-home"],
  ["About Jack", "/about"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 1280px)");
    const resize = () => {
      if (mq.matches) setOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    mq.addEventListener("change", resize);
    return () => {
      document.removeEventListener("keydown", handleKey);
      mq.removeEventListener("change", resize);
    };
  }, [open]);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="bg-[#132B3E] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-2 px-6 py-2 text-xs sm:text-sm">
          <span>Business. Property. Good judgment.</span>
          <a href="tel:202-297-2432" className="font-semibold">
            Call Jack · 202-297-2432
          </a>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-[#132B3E]/10 bg-[#FFFEFB]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            aria-label="Good Deeds home"
            className="shrink-0 font-serif text-3xl tracking-tight"
          >
            <span className="text-[#BA1038]">Good</span>
            <span className="text-[#096DBC]">Deeds</span>
          </Link>
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 text-sm xl:flex"
          >
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                aria-current={pathname === href ? "page" : undefined}
                className="text-[#132B3E] hover:text-[#BA1038]"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact-us"
            className="button-primary hidden text-sm sm:inline-flex"
          >
            Talk with Jack
          </Link>
          <button
            ref={button}
            type="button"
            onClick={() => setOpen(!open)}
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-lg border border-[#132B3E]/25 px-4 py-2 text-sm font-semibold xl:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="max-h-[70vh] overflow-y-auto border-t border-gray-200 px-6 pb-6 xl:hidden"
          >
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                aria-current={pathname === href ? "page" : undefined}
                className="block border-b border-gray-100 py-3 text-[#132B3E]"
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact-us"
              onClick={() => setOpen(false)}
              className="mt-4 block font-semibold text-[#BA1038]"
            >
              Talk with Jack
            </Link>
            <a href="tel:202-297-2432" className="mt-4 block text-[#132B3E]">
              Call 202-297-2432
            </a>
          </nav>
        )}
      </header>
    </>
  );
}
