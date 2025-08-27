import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-white relative px-8 md:px-20 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Continuing Our Legacy</h2>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <div className="flex flex-wrap gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-[#495cb5]">
              Services
            </a>
            <a href="#" className="hover:text-[#495cb5]">
              Gallery
            </a>
            <a href="#" className="hover:text-[#495cb5]">
              Blogs
            </a>
            <a href="#" className="hover:text-[#495cb5]">
              CSR
            </a>
            <a href="#" className="hover:text-[#495cb5]">
              Career
            </a>
            <a href="#" className="hover:text-[#495cb5]">
              Resources
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex items-start gap-3 text-gray-300">
            <MapPin className="w-5 h-5 mt-1 text-[#495cb5]" />
            <p>
              Sea Sky Cargo Service (P) Ltd, Ward No 26, Dholahiti, <br />
              Lalitpur, Nepal
            </p>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <Phone className="w-5 h-5 text-[#495cb5]" />
            <p>+977-15570460</p>
          </div>
          <div className="flex flex-col gap-1 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#495cb5]" />
              <p>seaskynepal@gmail.com</p>
            </div>
            <p className="ml-8">seaskyshreyash@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Description */}
        <div className="flex items-start gap-4 max-w-xl">
          <img src={logo} alt="Logo" className="w-12 h-12" />
          <div>
            <h4 className="font-semibold text-[#495cb5]">
              SEASKY CARGO SERVICE PVT. LTD
            </h4>
            <p className="text-sm text-gray-400">
              SEA SKY CARGO is an international air and ocean shipping company
              focused on Project, Break-bulk, Abnormal, Over-sized, out of Gauge
              and Heavy lift cargoes, Event logistics, Importers of record
              (IOR).
            </p>
          </div>
        </div>

        {/* Credits */}
        <p className="text-sm text-gray-400 text-center md:text-right w-full md:w-auto">
          © 2025 SEASKY CARGO SERVICE (P) LTD. NEPAL <br />
          <span className="text-gray-500">
            Designed & Developed with <span className="text-[#495cb5]">♥</span>{" "}
            by <span className="font-bold">Yumesh</span>
          </span>
        </p>
      </div>
    </footer>
  );
}
