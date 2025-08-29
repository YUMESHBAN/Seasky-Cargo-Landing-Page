import { Check } from "lucide-react";
import { useState } from "react";
import banner from "../assets/Seaskybanner.webp";
import truck from "../assets/truck.svg";
import plane from "../assets/plane.svg";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="px-6 md:px-16 lg:px-24 py-12 pt-32 space-y-16">
      {/* ---------- Header Section ---------- */}
      <div className="px-6 md:px-16 lg:px-24 py-12 pt-32 space-y-16">
        <div className="w-full flex justify-center">
          <img
            src={truck}
            alt="About SeaSky Cargo"
            className="object-cover w-full max-w-[1300px] rounded-xl"
          />
        </div>

        {/* Overlay Text */}
        <div className="absolute top-20 left-20 p-4 rounded">
          <h1 className="text-6xl md:text-7xl font-bold text-[#495cb5]">
            About Us
          </h1>
          <p className=" md:text-3xl text-gray-500 mt-4">
            With over 37+ years of experience
          </p>
        </div>
      </div>
      <div className="px-6 md:px-16 lg:px-24 py-12 space-y-16">
        {/* ---------- Tab Buttons ---------- */}
        <div className="flex justify-start gap-6 mb-8">
          {["about", "why", "location"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 text-lg font-semibold rounded-xl shadow-md border-2 transition-all duration-300
        ${
          activeTab === tab
            ? "bg-blue-100 text-[#495cb5] border-[#495cb5]"
            : "bg-white text-gray-700 border-gray-400 hover:bg-blue-50 hover:border-[#495cb5] hover:text-[#495cb5]"
        }`}
            >
              {tab === "about" && "About SeaSky"}
              {tab === "why" && "Why Us?"}
              {tab === "location" && "Our Location"}
            </button>
          ))}
        </div>

        {/* ---------- About Section ---------- */}
        {activeTab === "about" && (
          <>
            <h2 className="text-3xl font-bold">About SeaSky</h2>

            <div className="grid md:grid-cols-2 gap-6 items-center">
              {/* Left Image */}
              <div className="flex justify-center">
                <img
                  src={banner}
                  alt="About SeaSky Cargo"
                  className="rounded-xl shadow-lg object-cover w-full max-w-lg aspect-square"
                />
              </div>

              {/* Right Text */}
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Established in 1988 by Mr. Pankaj Raj Sharma</strong>,
                  SEA SKY CARGO SERVICE (P) LTD pioneered landside operations
                  from Nepal to the world. For <strong>37+ years</strong> we’ve
                  been reshaping the logistics landscape of companies across
                  South Asia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We were among the first to transport freight via the ocean
                  gateway port of Kolkata/Haldia. Today, we stand tall as a
                  trusted freight forwarder and logistics provider in South
                  Asia—serving Bhutan, India, Bangladesh, Pakistan, Maldives,
                  Sri Lanka, and Afghanistan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Specializing in project shipments, our dynamic team and
                  reliable partners enable seamless execution across the region.
                  SEA SKY CARGO offers the best value-for-money with cheap,
                  reliable services that have earned satisfaction worldwide.
                </p>
              </div>
            </div>

            {/* Areas of Operation */}
            <section className="relative">
              <h3 className="text-3xl font-bold mb-6">
                Our Areas of Operation
              </h3>

              <div className="grid md:grid-cols-2 gap-4 relative">
                {[
                  "International Freight Forwarding (Air, Ocean, Road & Rail)",
                  "Door to Door or Door to Port Services",
                  "Project Management",
                  "Flat Racks",
                  "RORO (Roll-on/Roll-off)",
                  "LCL (Less than container load)",
                  "FCL (Full Container Load)",
                  "Break-Bulk, Project Cargo",
                  "Hazardous Materials",
                  "Perishables- Refrigerated",
                  "Temperature Controlled Shipments",
                  "Logistics Services",
                  "Relief / Donation Cargo",
                  "Domestic and In-land Freight Transport",
                  "Consolidation & De-Consolidation (Air and Ocean)",
                  "Heavy loads and Oversize Cargos",
                  "Warehousing and Distribution and Consolidation",
                  "Stevedoring",
                  "Household goods and Personal Effects",
                  "Full/Partial Charter By Ocean and Air",
                  "UN Military Shipments",
                  "Packing and Crating and Cargo Insurance",
                  "IOR AND EOR Services",
                  "Inspection and Certification Services",
                  "Chemical Logistics",
                  "Life Logistics",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check className="text-[#495cb5]" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}

                <img
                  src={plane}
                  alt="Plane"
                  className="absolute bottom-0 right-0 w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
                />
              </div>
            </section>

            {/* Our DNA */}
            <section>
              <h3 className="text-2xl font-semibold mb-6">Our DNA</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Our Mission",
                    text: "Excellent quality and efficient services at competitive costs globally.",
                  },
                  {
                    title: "Our Vision",
                    text: "Reshaping the future of freight and cargo transports.",
                  },
                  {
                    title: "Our Belief",
                    text: "Why settle for sub-par services when we can give you the best.",
                  },
                  {
                    title: "Our Philosophy",
                    text: "Constantly evolving with time to ensure our clients always get the best options irrespective of time.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="bg-[#f3f4f6] rounded-xl p-6 shadow"
                  >
                    <h4 className="font-semibold text-xl mb-2">{card.title}</h4>
                    <p className="text-gray-700">{card.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ---------- Why Us Section ---------- */}
        {activeTab === "why" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <p className="text-gray-700 leading-relaxed">
              With decades of expertise, global reach, and reliable partners,
              Sea Sky Cargo provides unmatched logistics services. We believe in
              cost-effective, fast, and secure delivery solutions tailored to
              each client’s unique needs.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>37+ years of logistics expertise</li>
              <li>Strong global partnerships across South Asia</li>
              <li>
                Proven track record with project cargo & specialized shipments
              </li>
              <li>Commitment to customer satisfaction</li>
            </ul>
          </div>
        )}

        {/* ---------- Our Location Section ---------- */}
        {activeTab === "location" && (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Location</h2>
            <p className="text-gray-700 leading-relaxed">
              Our head office is located in Kathmandu, Nepal with branch offices
              and partners strategically positioned across South Asia for
              seamless operations.
            </p>
            <div className="w-full h-96 rounded-xl overflow-hidden shadow">
              <iframe
                title="SeaSky Cargo Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.11882989748!2d85.3240!3d27.7172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAyLjAiTiA4NcKwMTknMjYuNSJF!5e0!3m2!1sen!2snp!4v163532"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
