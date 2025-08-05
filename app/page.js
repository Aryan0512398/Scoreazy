import Image from "next/image";
import Hero from "./_components/Hero";
import Benefits from "./_components/Benefits";
import Testimonials from "./_components/Testimonials";
import FAQ from "./_components/FAQ";
import Footer from "./_components/Footer";
import Header from "./_components/header";
import MobileMenu from "./_components/mobilemenu";
import Courses from "./_components/courses";
import Mentorship from "./_components/mentorship";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Header and Mobile Menu */}
      <Header />
      <MobileMenu />

      {/* Main Landing Page Sections */}
      <div className="pt-20 space-y-0">
        <Hero />
        <Courses />
        <Mentorship />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </main>

  );
}
