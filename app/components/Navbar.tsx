"use client";

import { useState } from "react";

const links = [
  { href: "#services", label: "Servicios" },
  { href: "#turnos", label: "Turnos" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200/40 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
     <a
  href="#"
  className="flex items-center gap-2 text-spa-500 transition-opacity hover:opacity-80"
>
  <svg
    className="h-7 w-7 md:h-8 md:w-8"
    viewBox="0 0 32 32"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M17 26c0-8.2-5.2-13.5-11-15 0 7.3 4.6 12.4 11 15Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M15 23c1.3-6.8 5.7-11.2 11-12-.2 6.4-4.2 10.6-10.2 12.4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 14.5 17 26m7-12-8 9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>

  <span className="font-playfair text-2xl md:text-[2rem]">
    Estética
  </span>
</a>
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                relative
                tracking-wide
                text-spa-500
                transition-colors
                duration-300
                hover:text-spa-700
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-px
                after:w-0
                after:bg-spa-700
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 rounded-lg p-2 md:hidden"
          aria-label="Menú"
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-spa-500 transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-spa-500 transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-spa-500 transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-stone-200/40 bg-white/95 backdrop-blur-md">
          <div className="flex flex-col px-6 py-4 text-center">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  py-3
                  text-spa-500
                  font-medium
                  border-b
                  border-stone-100
                  last:border-0
                  transition
                  hover:text-spa-700
                "
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}