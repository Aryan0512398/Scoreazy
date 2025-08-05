import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-4 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
       
        <div className="text-center md:text-left space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">Let’s connect</h3>
          <p className="text-gray-600 text-sm">
            Got questions or feedback? We’d love to hear from you.
          </p>
          <Link
            href="#contact"
            className="inline-block mt-2 px-4 py-2 text-sm border border-purple-500 text-purple-600 rounded-md hover:bg-purple-50 transition"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-3">
          <div className="flex space-x-4">
            <Link
              href="https://github.com/Aryan0512398/"
              target="_blank"
              className="text-gray-600 hover:text-purple-600 transition"
            >
              <Github className="w-5 h-5" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/aryan-gupta-b1407a2b5/"
              target="_blank"
              className="text-gray-600 hover:text-purple-600 transition"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Scoreazy. Built by Aryan Gupta.
          </p>
        </div>
      </div>
    </footer>
  );
}
