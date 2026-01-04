import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Zapri meni na ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (hash) => (e) => {
    e.preventDefault();
    setOpen(false);
    
    if (isHomePage) {
      // On homepage, smooth scroll to section
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.location.hash = hash;
    } else {
      // On other pages, navigate to homepage with hash
      window.location.href = '/' + hash;
    }
  };

  // Helper function to get href for navigation links
  const getNavHref = (hash) => {
    return isHomePage ? hash : '/' + hash;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/eci3-logo-white.png"
            alt="EUROCOMIT - Profesionalne prevajalske storitve"
            className="h-6 w-auto sm:h-7"
            draggable="false"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 text-sm text-white/80 md:flex">
          <a
            href={getNavHref("#proces")}
            onClick={go("#proces")}
            className="transition hover:text-white"
          >
            MTPE
          </a>
          <a
            href={getNavHref("#quiz")}
            onClick={go("#quiz")}
            className="transition hover:text-white"
          >
            Izbira prevoda
          </a>
          <Link
            to="/blog"
            className="transition hover:text-white"
          >
            Viri
          </Link>
          <a
            href={getNavHref("#faq")}
            onClick={go("#faq")}
            className="transition hover:text-white"
          >
            FAQ
          </a>
          <a
            href={getNavHref("#contact")}
            onClick={go("#contact")}
            className="transition hover:text-white"
          >
            Kontakt
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Desktop CTAs */}
          <a
            href={getNavHref("#contact")}
            onClick={go("#contact")}
            className="hidden h-9 items-center rounded-md border border-white/15 px-3 text-sm font-semibold text-white/90 transition hover:border-white/25 hover:text-white md:inline-flex"
          >
            Pošljite povpraševanje
          </a>
          <a
            href={getNavHref("#quiz")}
            onClick={go("#quiz")}
            className="hidden h-9 items-center justify-center rounded-md bg-gradient-to-r from-sky-500 to-cyan-400 px-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:opacity-95 md:inline-flex"
          >
            Izbira prevoda
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white/90 transition hover:border-white/25 hover:text-white md:hidden"
            aria-label="Odpri meni"
            aria-expanded={open}
          >
            {open ? (
              // X icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-slate-950/85 backdrop-blur-md md:hidden">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <div className="flex flex-col gap-2 text-sm text-white/85">
              <a
                href={getNavHref("#proces")}
                onClick={go("#proces")}
                className="rounded-md px-2 py-2 transition hover:bg-white/5 hover:text-white"
              >
                MTPE
              </a>
              <a
                href={getNavHref("#quiz")}
                onClick={go("#quiz")}
                className="rounded-md px-2 py-2 transition hover:bg-white/5 hover:text-white"
              >
                Izbira prevoda
              </a>
              <Link
                to="/blog"
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 transition hover:bg-white/5 hover:text-white"
              >
                Viri
              </Link>
              <a
                href={getNavHref("#faq")}
                onClick={go("#faq")}
                className="rounded-md px-2 py-2 transition hover:bg-white/5 hover:text-white"
              >
                FAQ
              </a>
              <a
                href={getNavHref("#contact")}
                onClick={go("#contact")}
                className="rounded-md px-2 py-2 transition hover:bg-white/5 hover:text-white"
              >
                Kontakt
              </a>

              <div className="mt-2 grid grid-cols-1 gap-2">
                <a
                  href="#contact"
                  onClick={go("#contact")}
                  className="h-10 rounded-md border border-white/15 px-3 text-sm font-semibold text-white/90 transition hover:border-white/25 hover:text-white inline-flex items-center justify-center"
                >
                  Pošljite povpraševanje
                </a>
                <a
                  href="#quiz"
                  onClick={go("#quiz")}
                  className="h-10 rounded-md bg-gradient-to-r from-sky-500 to-cyan-400 px-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:opacity-95 inline-flex items-center justify-center"
                >
                  Izbira prevoda
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
