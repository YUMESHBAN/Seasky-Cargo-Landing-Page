import { motion } from "framer-motion";
import home from "../assets/home.mp4";
import GetAQuoteOverlay from "../pages/getaquote";
import {
  Ship,
  Plane,
  Truck,
  Users,
  PackageCheck,
  Globe,
  Warehouse,
} from "lucide-react";
import { Link } from "react-router-dom";
import red from "../assets/home/red.jpeg";
import blue from "../assets/home/blue.png";
import Cta from "../assets/home/CTA.png";

import land from "../assets/land.png";
import energy from "../assets/gallery/1.png";
import corridor from "../assets/gallery/2.png";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ---------- Hero Section ---------- */}
      <div className="relative md:h-[700px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10"
          src={home} // <-- put your video file path here
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-0 w-full px-6 md:px-12 py-8 text-left"
        >
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-7xl font-bold text-blue-500 drop-shadow-lg leading-tight">
              37 Years
            </h1>
            <h2 className="text-xl md:text-4xl font-bold text-white drop-shadow-lg leading-tight mt-2">
              of Trusted International Cargo Shipping & Freight Forwarding in
              South Asia
            </h2>
            <p className="text-base md:text-xl text-white drop-shadow-lg leading-relaxed mt-4">
              From air, sea, rail, and road to door-to-door logistics, project
              cargo, bulk shipping, RORO, dangerous and perishable goods,
              customs clearance, and more — we deliver it all, anywhere, to
              everywhere.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <GetAQuoteOverlay />
              <Link
                to="/about"
                className="px-6 py-3  text-white font-semibold rounded-xl 
             hover:bg-white hover:text-blue-600 transition"
              >
                Learn More
              </Link>
            </div>

            {/* Trusted Companies */}
            <div className="text-center py-8">
              <h3 className="text-3xl  text-gray-100 mb-4">
                Trusted by 50+ Companies
              </h3>
              <div className="overflow-hidden whitespace-nowrap relative">
                <div className="flex animate-marquee">
                  <span className="mx-8 text-lg text-blue-400 font-medium">
                    Company Name • Company Name • Company Name • Company Name •
                    Company Name • Company Name •
                  </span>
                  <span className="mx-8 text-lg text-blue-400 font-medium">
                    Company Name • Company Name • Company Name • Company Name •
                    Company Name • Company Name •
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-16 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block bg-blue-200 text-[#495cb5] text-xl md:text-2xl px-4 py-2 rounded-full mb-3 shadow-md">
              About Us
            </span>

            {/* Decorative underline */}
            <div className="w-20 h-1 bg-blue-400 rounded-full mb-6"></div>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Sea Sky Cargo Service has been delivering goods across the globe
              for over a decade. We combine cutting-edge technology with a
              commitment to customer satisfaction, ensuring every shipment is
              handled with care and efficiency.
            </p>

            {/* Optional feature icons */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-8">
              <div className="flex flex-col items-center text-gray-700">
                <svg
                  className="w-12 h-12 text-blue-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7v4h4V7H3zm0 6v4h4v-4H3zm6-6v4h4V7H9zm0 6v4h4v-4H9zm6-6v4h4V7h-4zm0 6v4h4v-4h-4z"
                  />
                </svg>
                <span className="text-sm font-medium">Global Network</span>
              </div>
              <div className="flex flex-col items-center text-gray-700">
                <svg
                  className="w-12 h-12 text-blue-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm font-medium">On-Time Delivery</span>
              </div>
              <div className="flex flex-col items-center text-gray-700">
                <svg
                  className="w-12 h-12 text-blue-400 mb-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h1l2 8h12l2-8h1M5 10V6h14v4M5 6l1-3h12l1 3"
                  />
                </svg>
                <span className="text-sm font-medium">Secure Handling</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            {/* Red image (background/base) */}
            <img
              src={red}
              alt="Red Base"
              className="w-64 md:w-96 lg:w-[500px] object-contain"
            />

            {/* Blue image (overlay on top of red) */}
            <img
              src={blue}
              alt="Blue Overlay"
              className="w-64 md:w-96 lg:w-[500px] object-contain absolute top-0 left-0"
            />
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Staff */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <Users className="mx-auto text-blue-500 w-8 h-8 mb-2" />
            <p className="text-blue-600 text-3xl md:text-4xl font-bold">35+</p>
            <p className="mt-1 text-gray-600">Staff</p>
          </div>

          {/* Shipment Covered */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <PackageCheck className="mx-auto text-blue-500 w-8 h-8 mb-2" />
            <p className="text-blue-600 text-3xl md:text-4xl font-bold">
              6,900+
            </p>
            <p className="mt-1 text-gray-600">Shipment Covered</p>
          </div>

          {/* Global Locations */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <Globe className="mx-auto text-blue-500 w-8 h-8 mb-2" />
            <p className="text-blue-600 text-3xl md:text-4xl font-bold">9</p>
            <p className="mt-1 text-gray-600">Global Locations</p>
          </div>

          {/* Warehouses */}
          <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
            <Warehouse className="mx-auto text-blue-500 w-8 h-8 mb-2" />
            <p className="text-blue-600 text-3xl md:text-4xl font-bold">9</p>
            <p className="mt-1 text-gray-600">Warehouses</p>
          </div>
        </div>
      </section>
      {/* ---------- Services Section ---------- */}
      <section id="services" className="py-16 bg-gray-100 px-6 md:px-16">
        <span className="inline-block bg-blue-200 text-[#495cb5] text-xl md:text-2xl px-4 py-2 rounded-full mb-3 shadow-md">
          Our Specializations
        </span>
        <div className="w-20 h-1 bg-blue-400 rounded-full mb-6"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Air Cargo",
              icon: Plane,
              desc: "Fast and secure air freight services worldwide.",
            },
            {
              title: "Sea Cargo",
              icon: Ship,
              desc: "Reliable ocean shipping for all types of goods.",
            },
            {
              title: "Land Transport",
              icon: Truck,
              desc: "Efficient trucking and logistics solutions.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Recent Works Section */}
      <section className="py-12 px-6 md:px-16 bg-white">
        <span className="inline-block bg-blue-200 text-[#495cb5] text-xl md:text-2xl px-4 py-2 rounded-full mb-3 shadow-md">
          Our Recent Works
        </span>
        <div className="w-20 h-1 bg-blue-400 rounded-full mb-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Work 1 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src={land}
              alt="Work 1"
              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">
                Bulk Shipment of Zircons from Mumbai to Pokhara, Nepal
              </h3>
            </div>
          </div>

          {/* Work 2 */}
          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src={energy}
              alt="Work 2"
              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">
                Sustainable Shipping and Renewable Energy
              </h3>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg group">
            <img
              src={corridor}
              alt="Work 3"
              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">
                Sea Sky Cargo Services Role in the Trade Corridor
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white px-6 md:px-16 pt-16 pb-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
              From <span className="text-blue-600">Anywhere</span> in the world
              to <span className="text-blue-600">Everywhere.</span>
            </h2>
            <GetAQuoteOverlay />
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center md:justify-end relative">
            <img
              src={Cta}
              alt="Global Cargo"
              className="w-80 md:w-[420px] lg:w-[520px] object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Decorative curved divider at bottom */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 500 50"
            preserveAspectRatio="none"
            className="w-full h-16 text-black"
          ></svg>
        </div>
      </section>
    </div>
  );
}
