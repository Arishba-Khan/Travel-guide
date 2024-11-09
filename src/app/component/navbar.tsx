import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="text-[#0f4c5c] body-font bg-[#cad2c5] sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-semibold text-2xl items-center text-[#0f4c5c] mb-4 md:mb-0">
          <span className="ml-1 text-2xl font-extrabold">
            Journey Journal
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/"
            className="mr-5 hover:text-[#081c15] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="#reason"
            className="mr-5 hover:text-[#081c15] transition-colors duration-200"
          >
            Reason
          </Link>
          <Link
            href="#view"
            className="mr-5 hover:text-[#081c15] transition-colors duration-200"
          >
            View Point
          </Link>
          <Link
            href="#contact"
            className="mr-5 hover:text-[#081c15] transition-colors duration-200"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
