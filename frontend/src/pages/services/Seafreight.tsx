import { useState } from "react";
import water from "../../assets/water1.png";
import quote from "../../assets/getQuote.svg";

export default function AirFreight() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div>
      {/* ---------- Hero Section ---------- */}
      <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden">
        {/* Background Image */}
        <img
          src={water}
          alt="Water Freight"
          className="absolute inset-0 w-full h-full object-cover object-center lg:object-[center_40%] -z-10"
          loading="lazy"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title at bottom-right */}
        <div className="absolute left-10 bottom-10 inset-x-50 lg:top-3/4 lg:-translate-y-3/4 text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
            Sea/Ocean Freight
          </h1>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 drop-shadow-lg leading-tight">
            Services
          </h1>
        </div>
      </div>

      {/* ---------- Content Section ---------- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Sea Freight with SeaSky</h2>
            <p className="text-gray-700 leading-relaxed">
              Sea freight, is the dominant method for shipping goods globally,
              accounting for roughly 90% of international shipments.
              <br />
              <br />
              With such a large section of the industry, third-party freight
              forwarders play a huge role in optimizing your freight experience.
              <br />
              <br />
              We, as freight forwarders, ensure proper handling, loading, and
              delivery of your goods, offering trusted assistance in the entire
              shipping process on sea freight.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Why Us?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Shipping with Sea Sky Cargo Service ensures hassle-free global
              merchandise transport. From purchase order to delivery, our
              experienced team manages all details, negotiating contracts,
              booking shipments, and preparing export documentation.
              <br />
              <br />
              Whether it be Full Container Load (FCL) or Less than Container
              Load (LCL), we secure the best freight rates using various lines
              and Non-Vessel Operating Common Carriers (NVOCCs).
              <br />
              <br />
              Our services include consistent road haulage to and from the ocean
              gateway Kolkata/Haldia, FCL and LCL consolidation worldwide,
              competitive rates via direct carriers and NVOCC, negotiable Bill
              of Lading, worldwide door-to-door service, ATA CARNET,
              time-definite haulage, meticulous documentation, and proof of
              delivery.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 leading-relaxed">
              <li>
                Consistent And Reliable Road Haulage For Export / Import Cargo
                To Or From Ocean Gateway Kolkata/Haldia.
              </li>
              <li>
                FCL and LCL Consolidation Services To Most Ports Of The World
              </li>
              <li>
                Very Attractive And Competitive Rates Through Direct Carriers &
                NVOCC
              </li>
              <li>Negotiable Bill of Lading</li>
              <li>Worldwide export/Import Door To Door Service</li>
              <li>ATA CARNET</li>
              <li>Time Definite Haulage Service To And From Gateway Port</li>
              <li>Documentation</li>
              <li>Proof Of Delivery</li>
            </ul>
          </div>

          {/* Info Box */}
          <div className="bg-blue-100 p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-3">
              Types of Sea/Ocean Cargo:
            </h3>
            <p className="mb-2">
              <strong>LCL (Less than Container Load)</strong>
              <br />
              With LCL shipments, the goods intended to be shipped are usually
              less than it takes to fill a container. So, Instead of having a
              container all to you, which can be relatively expensive, You can
              split the cost and share the container with goods belonging to
              other people But the downside to this option is that your goods
              may be more vulnerable to mishandling or damage during the voyage.
              <br />
              <br />
            </p>
            <p>
              <strong>FCL (Full Container Load)</strong> <br />
              FCL shipments involve shipping your goods via one or more
              containers that you use exclusively. Only your goods will be in
              the container, ensuring that your shipment will be undisturbed
              until you open the container by yourself or SEA SKY CARGO SERVICE
              (SSCS) for containers consigned to us.
              <br />
              This option makes the most sense when you have goods that can fill
              a container or that nearly fill it up.
            </p>
          </div>
        </div>

        <div className="bg-blue-100 p-7 rounded-xl shadow space-y-14">
          <h3 className="text-[#495cb5] text-3xl font-bold text-center">
            Get a Quotation
          </h3>
          <div className="flex justify-center">
            <div className="w-32 ">
              <img
                src={quote}
                alt="Quotation Illustration"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label className="text-[#495cb5] font-medium">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-2 border border-[#495cb5] rounded-lg"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#495cb5] font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 border border-[#495cb5] rounded-lg"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#495cb5] font-medium">
                Service <span className="text-red-500">*</span>
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full p-2 border border-[#495cb5] rounded-lg"
                required
              >
                <option value="">Select a Service</option>
                <option value="air">Air Freight</option>
                <option value="sea">Sea Freight</option>
                <option value="land">Land Transport</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-[#495cb5] font-medium">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Enter your message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-2 border border-[#495cb5] rounded-lg h-24"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[#495cb5] font-medium">Upload Image</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                className="w-full p-2 border border-[#495cb5] rounded-lg cursor-pointer"
              />
              <small className="text-gray-500">Optional</small>
            </div>
            <button
              type="submit"
              className="w-full bg-[#495cb5] text-white py-2 px-4 rounded-lg hover:bg-[#394a91] transition"
            >
              Get a Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
