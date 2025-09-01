import { Check } from "lucide-react";
import { useState } from "react";
import banner from "../assets/Seaskybanner.webp";
import truck from "../assets/truck.svg";
import plane from "../assets/plane.svg";
import belief from "../assets/ourBelief.jpeg";
import mission from "../assets/ourMission.jpeg";
import philo from "../assets/ourPhilosophy.jpeg";
import vision from "../assets/ourVision.jpeg";
import box from "../assets/box.svg";
import globe from "../assets/globe.svg";

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
                    title: "MISSION",
                    text: "Excellent quality and efficient services at competitive costs globally.",
                    image: mission,
                  },
                  {
                    title: "VISION",
                    text: "Reshaping the future of freight and cargo transports.",
                    image: vision,
                  },
                  {
                    title: "BELIEF",
                    text: "Why settle for sub-par services when we can give you the best.",
                    image: belief,
                  },
                  {
                    title: "PHILOSOPHY",
                    text: "Constantly evolving with time to ensure our clients always get the best options irrespective of time.",
                    image: philo,
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="relative rounded-lg overflow-hidden shadow-lg h-48 md:h-56 lg:h-64"
                  >
                    {/* Background Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50" />

                    {/* Text Content */}
                    <div className="relative z-10 flex flex-col justify-center h-full p-6 text-white">
                      <h4 className="uppercase font-bold">
                        OUR <span className="text-[#1DA1F2]">{card.title}</span>
                      </h4>
                      <p className="mt-2 text-sm md:text-base leading-snug">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* ---------- Why Us Section ---------- */}
        {activeTab === "why" && (
          <div className="space-y-10">
            {/* Why Us */}
            <div className="relative bg-white rounded-lg  p-6 overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Why Us?</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
                <li>
                  Over 37+ years’ worth of knowledge and experience in the
                  shipping and forwarding industry
                </li>
                <li>
                  Competitive pricing through decades of building relationships
                  with all the major carriers
                </li>
                <li>
                  Single point of contact throughout the freight process for
                  South Asian countries including Nepal and Bhutan
                </li>
                <li>Friendly and competent staff</li>
                <li>Experts in Project Logistics</li>
                <li>Handling of cargo of all shapes and sizes</li>
                <li>
                  Variety of airlines and shipping lines options to choose from
                </li>
                <li>Tailored door-to-door air freight quotes</li>
                <li>Range of options to protect your cargo in transit</li>
                <li>Beginning to end tracking for your cargo</li>
                <li>Associate and partner in South Asia Countries</li>
                <li>We take proper care of your cargo</li>
              </ul>

              {/* Decorative Image Bottom Right */}
              <img
                src={globe}
                alt="Why Us"
                className="absolute bottom-5 right-10 w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain opacity-90"
              />
            </div>

            {/* Our Commitment */}
            <div className="relative bg-white rounded  overflow-hidden">
              <h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
              <p className="text-gray-700 leading-relaxed max-w-3xl">
                SEA SKY CARGO SERVICE has a deep commitment to the work we do
                and a desire to excel. We use our experienced staff’s talents to
                continuously improve. We love the challenges of the industry and
                the equipment that comes with it. We are willing to take on
                tremendous challenges. Our desire is to achieve things that
                nobody believes to be possible. For us, it is not just about
                accepting the challenge, but about delivering the desired
                results. We go the extra mile and then the extra inch. Safety is
                our top priority. We work with integrity, provide clear feedback
                and recognize results. We care about our results and the way in
                which we achieve them.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4 max-w-3xl">
                We set international standards and drive development. Each of us
                has specific responsibilities and must stand for our work.
                Jointly, we are responsible for the sustainable future of our
                company and for meeting legal, industry, and international
                standards. We are honest. We all step up and take
                responsibility. Our customers demand excellent performance and
                so do we. We believe this can only be achieved through team
                effort, when we all take an active role in the team and
                contribute our best. In a team, diversity drives performance;
                people build on each other’s strengths and step up to compensate
                shortcomings. We welcome people into our team, look out for one
                another, speak honestly to each other, and work together with
                integrity and trust. Our strength is the team of SEA SKY CARGO
                SERVICE.
              </p>

              {/* Box */}
              <img
                src={box}
                alt="Our commitment"
                className="absolute bottom-0 right-0 w-24 h-24 md:w-40 md:h-40 lg:w-80 lg:h-80 object-contain opacity-90"
              />
            </div>
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
