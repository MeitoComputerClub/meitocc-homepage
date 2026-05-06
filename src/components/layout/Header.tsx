import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Question", href: "/question" },
  ];

  return (
    <>
      <header className="flex items-center p-[15px_10px] bg-[#111]">
        <Link href="/">
          <Image
            src="/aurora.svg"
            alt="logo"
            width={50}
            height={50}
            className="h-10 w-auto"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed right-5 top-5 z-30 w-8 h-6 md:hidden flex items-center justify-center"
        >
          {/* 共通スタイル */}
          <span
            className={`absolute left-0 top-1/2 w-full h-[2px] bg-white rounded-full transition-all duration-300
      ${isOpen ? "rotate-45" : "-translate-y-2"}
    `}
          />

          <span
            className={`absolute left-0 top-1/2 w-full h-[2px] bg-white rounded-full transition-all duration-300
      ${isOpen ? "opacity-0" : ""}
    `}
          />

          <span
            className={`absolute left-0 top-1/2 w-full h-[2px] bg-white rounded-full transition-all duration-300
      ${isOpen ? "-rotate-45" : "translate-y-2"}
    `}
          />
        </button>

        {/* Overlay */}
        <div
          className={`fixed inset-0 z-10 bg-white/10 backdrop-blur-[3px] transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Navigation */}
        <nav
          className={`fixed right-5 top-16 z-20 transition-all duration-300 ease-out md:static md:flex-1 md:opacity-100 md:scale-100 ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-5 opacity-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-5 bg-[#222]/90 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40 rounded-xl p-5 md:flex-row md:items-center md:border-none md:shadow-none md:bg-transparent md:p-0 md:gap-10 md:mt-5 text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative pb-1 text-decoration-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-[#ff8000] after:transition-all after:duration-300 hover:after:w-full ${
                    router.pathname === link.href ? "after:w-full" : "after:w-0"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
