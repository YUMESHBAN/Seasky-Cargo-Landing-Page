import { useState } from "react";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Resources", href: "#resources" },
    { name: "CSR", href: "#csr" },
    { name: "Career", href: "#career" },
    { name: "Gallery", href: "#gallery" },
    { name: "Blogs", href: "#blogs" },
  ];

  return (
    <nav
      className="fixed top-3 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] 
                    bg-gray-200/90 backdrop-blur-md shadow-lg rounded-2xl 
                    px-6 py-6 flex items-center justify-between z-50"
    >
      {/* Logo */}
      <a href="#home" className="text-xl font-bold text-[#495cb5]">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-gray-700 font-medium items-center font-sans">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="hover:text-[#495cb5] transition"
          >
            {link.name}
          </a>
        ))}
        <button className="bg-[#495cb5] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
          Get a Quote
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-100 shadow-md flex flex-col items-center gap-4 py-6 md:hidden rounded-b-2xl">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-[#495cb5] transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
            className="bg-[#495cb5] text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </button>
        </div>
      )}
    </nav>
  );
}
