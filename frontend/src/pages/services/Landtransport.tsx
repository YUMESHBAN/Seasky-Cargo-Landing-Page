import { useState } from "react";
import land from "../../assets/land.png";
import quote from "../../assets/getQuote.svg";
import bhutan from "../../assets/bhutan truck.jpg";
import hilltruck from "../../assets/hill nepal.jpg";
import nepaltruck from "../../assets/truck.jpg";

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
          src={land}
          alt="Land Freight"
          className="absolute inset-0 w-full h-full object-cover object-center lg:object-[center_50%] -z-10"
          loading="lazy"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title at bottom-right */}
        <div className="absolute left-10 bottom-10 inset-x-50 lg:top-3/4 lg:-translate-y-3/4 text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
            Land Freight
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
            <h2 className="text-3xl font-bold mb-4">
              Road Freight (Kolkata-Kathmandu)
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We ensure reliable, efficient, and competitive ground haulage from
              Kolkata or Haldia port to any point in Nepal.
              <br />
              <br />
              We proudly boast our portfolio of 45 self-owned vehicles,
              including:
              <br />
              <br />
              <ol className="list-decimal pl-6 text-gray-700 space-y-1 leading-relaxed">
                <li>9 VOLVOS Low Bed Trailers (capacity up to 100 tons)</li>
                <li>
                  20 VOLVOS Semi Low Bed/High Bed Trailers (capacity 80 tons)
                </li>
                <li>8 10-Wheeler Trucks (capacity 25 tons)</li>
                <li>8 6-Wheeler Punjab Body Trucks (capacity 10 tons)</li>
              </ol>
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Domestic Transport</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Sea Sky Cargo Service also provides domestic transport i.e. the
              movement of goods within Nepal and Bhutan either by Air or Land.
              <br />
              <br />
              Domestic transport is the movement of goods within the national
              borders of a country. The first, and most common mode of
              transportation in logistics, is road. From walking to horses to
              wagons to bikes to cars to trucks, road transportation has been
              around longer than mode and is utilized the most of any mode in
              logistics.
              <br />
              <br />
              Road transport activity in Nepal and Bhutan is the main means of
              communication with remote areas, both for passenger and freight
              transport. The development of the country involves the
              displacement of food products, construction and many others to the
              districts and small villages, where only road transport makes it
              possible.
            </p>
            <p className="text-xl text-blue-700 font-bold">
              Sea Sky Cargo service began its activity in the 90’s, Transporting
              mainly Food Products
              <br />
              <br />
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over the following years, we have been gaining ground in the
              domestic market, through the experience and perseverance in
              fulfilling our obligations and the full satisfaction of our
              customers.
              <br />
              <br />
              In the 2000’s, we were able to organize many fleets, starting to
              operate throughout the country and still fulfilling contracts with
              some international Organizations, INGO, NGO and some foreign
              companies working in Hydro Power. Construction of roads irrigation
              projects, Airport construction etc.
              <br />
              <br />
              We have a control of varied fleet for the transport of various
              goods, as follows:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-1 leading-relaxed">
              <li>Solid Load/Cargo</li>
              <li>Net Load/Cargo</li>
              <li>Dumpers/Tippers</li>
              <li>Low charge (Low Bed)</li>
              <li>Crane</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              The transport system has not been developed well in Nepal and
              Bhutan due to their mountainous topography, landlocked position,
              backward technology and poor economic condition.
              <br />
              <br />
              However the transport department at SEA SKY CARGO SERVICE can
              handle specialist products such as hazardous, chilled or frozen
              (temperature controlled) or out of gauge movements etc.
            </p>
            <p className="text-xl text-blue-700 font-bold">
              Whether the Cargo comes by Sea, Air or Rail, Sea Sky Cargo Service
              is equipped to provide competitive road haulage services in Nepal.
              <br />
              <br />
            </p>
          </div>

          {/* Image Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10">
            <div className="text-center">
              <img
                src={nepaltruck}
                alt="Nepali Truck"
                className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 object-contain"
              />
              <p className="mt-3 text-gray-700">
                Our operation of BULK Cargo from ICD dries Port, Birgunj for
                various destinations in Nepal.
              </p>
            </div>

            <div className="text-center">
              <img
                src={hilltruck}
                alt="Nepal Hill Transport"
                className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 object-contain"
              />
              <p className="mt-3 text-gray-700">
                Sea Sky Cargo Service transporting a Heavy Duty machinery for
                project in Nepal and all roads in Hilly region (project areas).
              </p>
            </div>

            <div className="text-center">
              <img
                src={bhutan}
                alt="Bhutan Truck"
                className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 object-contain"
              />
              <p className="mt-3 text-gray-700">
                Sea Sky Cargo Service is transporting excavator in Bhutan for
                the project. The road in Bhutan and Nepal are almost the same.
              </p>
            </div>
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
