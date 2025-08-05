"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-40 text-center bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="  max-w-7xl mx-auto md:flex  justify-between items-center px-6 py-4">
        <Link href="/" className="text-xl md:text-2xl sm:text-center font-bold text-purple-700">
          Scoreazy
        </Link>
        <nav className="hidden md:flex space-x-6 font-medium text-gray-700">
          <Link href="#courses" className="hover:text-purple-700 transition">
            Courses
          </Link>
          <Link href="#mentorship" className="hover:text-purple-700 transition">
            Mentorship
          </Link>
          <Link href="#faq" className="hover:text-purple-700 transition">
            FAQ
          </Link>
        </nav>
        <Button className="hidden md:inline-block bg-purple-700 hover:bg-purple-800">
          Enroll Now
        </Button>
      </div>
    </header>
  );
}
