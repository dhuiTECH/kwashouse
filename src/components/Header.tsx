"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "The Project", href: "/project" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf9f4]/80 dark:bg-[#001229]/80 backdrop-blur-md shadow-[0_40px_40px_rgba(2,39,75,0.06)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Kwas House Logo"
            width={150}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-tight transition-colors pb-1 ${
                  isActive
                    ? "text-[#02274B] dark:text-white border-b-2 border-[#02274B] dark:border-[#f6f3ee]"
                    : "text-[#43474e] dark:text-[#e5e2dd] hover:text-[#02274B] dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Link 
            href="https://kwashouse.org/donate/" 
            className="bg-gradient-to-r from-secondary to-secondary-container text-on-secondary px-6 py-2 rounded-full font-semibold text-sm transition-all active:scale-95 duration-200 ease-in-out shadow-sm inline-block"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary dark:text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#fcf9f4] dark:bg-[#001229] border-t border-surface-variant dark:border-surface-variant/20">
          <div className="flex flex-col px-8 py-4 space-y-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-semibold tracking-tight transition-colors py-2 ${
                    isActive
                      ? "text-[#02274B] dark:text-white"
                      : "text-[#43474e] dark:text-[#e5e2dd] hover:text-[#02274B] dark:hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="https://kwashouse.org/donate/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-gradient-to-r from-secondary to-secondary-container text-on-secondary px-6 py-3 rounded-full font-semibold text-center mt-4 active:scale-95 transition-transform"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
