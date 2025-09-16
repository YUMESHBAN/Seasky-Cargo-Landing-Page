import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.svg";

import GetAQuoteOverlay from "../pages/getaquote";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [desktopDropdown, setDesktopDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close dropdown if clicked outside (desktop)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const links: {
    name: string;
    href?: string;
    children?: { name: string; href: string }[];
  }[] = [
    { name: "About", href: "/about" },
    {
      name: "Services",
      children: [
        { name: "Air Freight", href: "/services/air-freight" },
        { name: "Sea Freight", href: "/services/sea-freight" },
        { name: "Land Transport", href: "/services/land-transport" },
      ],
    },
    {
      name: "Resources",
      children: [
        {
          name: "INCOTERMS",
          href: "/resources/incoterms",
        },
        {
          name: "Air Freight Containers",
          href: "/resources/airfreightcontainer",
        },
        { name: "Container Sizes", href: "/resources/containersize" },
      ],
    },
    { name: "CSR", href: "/csr" },
    { name: "Career", href: "/career" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <nav
      className="fixed top-3 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%]
                 bg-gray-100/90 backdrop-blur-md shadow-lg rounded-2xl
                 px-6 py-2 z-50"
    >
      {/* Top row */}
      <div className="flex items-center justify-between">
        {/* Left side: ☰ + Logo */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden text-gray-800 text-3xl leading-none"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          <a href="/" className="text-xl font-bold text-[#495cb5]">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </a>
        </div>

        {/* Desktop menu */}
        <div
          ref={dropdownRef}
          className="hidden md:flex gap-6 text-gray-800 items-center  relative"
        >
          {links.map((link, i) =>
            link.children ? (
              <div key={i} className="relative">
                <button
                  onClick={() =>
                    setDesktopDropdown(
                      desktopDropdown === link.name ? null : link.name
                    )
                  }
                  className="hover:text-[#495cb5] transition font-light text-xl flex items-center gap-1"
                >
                  {link.name} {desktopDropdown === link.name ? "-" : "+"}
                </button>
                {desktopDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-xl py-2 z-50">
                    {link.children.map((child, j) => (
                      <a
                        key={j}
                        href={child.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#495cb5] transition"
                        onClick={() => setDesktopDropdown(null)}
                      >
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={i}
                href={link.href}
                className="hover:text-[#495cb5] transition font-light text-xl"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        <div className="flex  ">
          <GetAQuoteOverlay />
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-2 mt-2 rounded-2xl bg-gray-100/95 backdrop-blur-md shadow-xl ring-1 ring-black/5 overflow-hidden">
          <nav className="flex flex-col items-start p-3">
            {links.map((link, i) =>
              link.children ? (
                <div key={i} className="w-full">
                  <button
                    className="w-full text-left px-3 py-3 text-lg font-normal text-gray-800 hover:bg-gray-200/60 hover:text-[#495cb5] rounded-lg transition flex justify-between items-center"
                    onClick={() =>
                      setMobileDropdown(
                        mobileDropdown === link.name ? null : link.name
                      )
                    }
                  >
                    {link.name}
                    <span>{mobileDropdown === link.name ? "-" : "+"}</span>
                  </button>
                  {mobileDropdown === link.name && (
                    <div className="ml-4 flex flex-col">
                      {link.children.map((child, j) => (
                        <a
                          key={j}
                          href={child.href}
                          className="px-3 py-2 text-gray-700 hover:text-[#495cb5] transition"
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={i}
                  href={link.href}
                  className="w-full text-left px-3 py-3 text-lg font-light text-gray-800 hover:bg-gray-200/60 hover:text-[#495cb5] rounded-lg transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </nav>
  );
}
