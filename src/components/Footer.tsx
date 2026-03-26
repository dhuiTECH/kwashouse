import Link from "next/link";
import Image from "next/image";
import { Globe, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#f6f3ee] dark:bg-[#001229] w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full max-w-7xl mx-auto gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Kwas House Logo"
              width={120}
              height={32}
              className="h-8 w-auto object-contain brightness-90 grayscale hover:grayscale-0 transition-all"
            />
          </Link>
          <div className="text-sm text-[#43474e] dark:text-[#e5e2dd] max-w-xs space-y-2">
            <p className="font-bold">Fraser Inclusive and Supportive Housing Society</p>
            <p>477 Hudson Bay Street, Hope, BC, CANADA</p>
            <p>Phone: <a href="tel:+17787832965" className="hover:text-primary transition-colors">+1 (778) 783-2965</a></p>
            <p>Email: <a href="mailto:fishsociety@hotmail.com" className="hover:text-primary transition-colors">fishsociety@hotmail.com</a></p>
            <p>© {new Date().getFullYear()} Kwas House. A Radiant Sanctuary for Community Support.</p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          <Link href="#" className="text-sm text-[#43474e] dark:text-[#e5e2dd] hover:text-[#02274B] dark:hover:text-white underline decoration-2 underline-offset-4 transition-all duration-300">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-[#43474e] dark:text-[#e5e2dd] hover:text-[#02274B] dark:hover:text-white underline decoration-2 underline-offset-4 transition-all duration-300">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm text-[#43474e] dark:text-[#e5e2dd] hover:text-[#02274B] dark:hover:text-white underline decoration-2 underline-offset-4 transition-all duration-300">
            Newsletter Signup
          </Link>
        </div>
        
        <div className="flex gap-4">
          <Link href="#" aria-label="Global Support" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors">
            <Globe className="w-5 h-5" />
          </Link>
          <Link href="/contact" aria-label="Email Us" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors">
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
