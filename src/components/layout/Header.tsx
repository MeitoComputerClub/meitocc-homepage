import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Question", href: "/question" },
  ];

  return (
    <>
      <header className="flex items-center p-[15px_10px]">
        <Link href="/">
          <Image
            src="/aurora.png"
            alt="logo"
            width={50}
            height={50}
            className="h-10 w-auto"
          />
        </Link>

        <button
          className="fixed right-5 top-5 z-30 block text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
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
          className={`fixed right-5 top-5 z-20 transition-all duration-300 md:static md:flex-1 md:opacity-100 md:scale-100 ${
            isOpen
              ? "scale-100 opacity-100"
              : "scale-75 opacity-0 pointer-events-none md:pointer-events-auto"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col gap-5 bg-[#444] p-5 md:flex-row md:items-center md:justify-evenly md:bg-transparent md:p-0 md:gap-[30px] md:mt-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative pb-1 text-decoration-none after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#ff8000] after:transition-all after:duration-300 hover:after:w-full ${
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
