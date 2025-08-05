"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, BookOpen, Users, HelpCircle, Phone } from "lucide-react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Courses", href: "#courses", icon: BookOpen },
    { label: "Mentorship", href: "#mentorship", icon: Users },
    { label: "FAQ", href: "#faq", icon: HelpCircle },
    { label: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <div className="fixed top-4 left-4 z-50 md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button className="p-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700">
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent side="left" className="p-4 flex flex-col justify-between">
          <div>
            <h1 className="text-xl font-bold text-purple-700 mb-4">
              Scoreazy
            </h1>
            <nav className="flex flex-col space-y-4 text-gray-700 font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-purple-700 transition flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            © {new Date().getFullYear()} Scoreazy
          </p>
        </SheetContent>
      </Sheet>
    </div>
  );
}
