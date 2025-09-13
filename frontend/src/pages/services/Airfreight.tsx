import { useState } from "react";
import air from "../../assets/air1.png";
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
          src={air}
          alt="Air Freight"
          className="absolute inset-0 w-full h-full object-cover object-top lg:object-[center_30%] -z-10"
          loading="lazy"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title at bottom-right */}
        <div className="absolute left-10 bottom-10 inset-x-50 lg:top-3/4 lg:-translate-y-3/4 text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
            Air Freight
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
            <h2 className="text-3xl font-bold mb-4">Air Freight with SeaSky</h2>
            <p className="text-gray-700 leading-relaxed">
              Air Freight ensures speedy and secure delivery of your packages.
              When it comes to time and reliability, nothing beats air cargo.
              <br />
              <br />
              Aided by technology and extensive route options - it is the
              fastest-growing and the most time-efficient shipping method.
              Choose our airfreight service for your high-value shipment for
              faster and more reliable transport. We ship both domestic and
              international cargo.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Why Us?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              With decades of expertise, SEA SKY CARGO SERVICE (SSCS) tailors
              solutions to your business needs. We guarantee quality, speed, and
              cost efficiency while optimizing your overall experience.
              <br />
              <br />
              Through vigilant monitoring of carrier partners, we uphold the
              highest standards and precise delivery schedules. Our robust
              relationships with global carriers provide maximum flexibility,
              competitive rates, and service excellence.
            </p>
            <p className=" text-blue-700 font-bold">
              We are committed to delivering a top-tier air freight service with
              competitive rates, prioritizing exceptional customer service.
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-blue-100 p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-3">Types of Air Cargo:</h3>
            <p className="mb-2">
              <strong>General Cargo:</strong>
              <br />
              Household goods, office equipment, sports equipment, garments,
              textiles, and high-value goods like electronics, jewelry, and
              pharmaceuticals.
              <br />
              <br />
            </p>
            <p>
              <strong>Special Cargo:</strong> <br />
              Items requiring special handling such as hazardous goods, fragile
              cargo, perishables, and oversized shipments.
              <br />
              <br />
              This may be because of the value and the ease with which
              attractive articles can be removed (e.g. small items easily
              pilfered) or consumed (eg. liquor). and mainly includes Hazardous
              Goods, Fragile Cargo, Outsized Cargo, Perishable Cargo, and
              High-Value Cargo.
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
