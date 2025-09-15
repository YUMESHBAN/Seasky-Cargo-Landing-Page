import first from "../assets/gallery/1.png";
import second from "../assets/gallery/2.png";
import third from "../assets/gallery/3.png";
import fourth from "../assets/gallery/4.png";
import fifth from "../assets/gallery/5.png";
import sixth from "../assets/gallery/6.png";

export default function Gallery() {
  const items = [
    {
      title: "132 KV Khimti ",
      img: first,
      desc: "Bhaktapur – Balaju Transmission Line Project",
    },
    {
      title: "Heavy Machinery Transport",
      img: second,
      desc: "The land freight of heavy equipment in Bhutan.",
    },
    {
      title: "Nepal Bhutan Project",
      img: third,
      desc: "The transport of excavators for remote development projects.",
    },
    {
      title: "UNICEF Truck Delivery",
      img: fourth,
      desc: "The on-time shipment of  truck for the developement activities under UNICEF",
    },
    {
      title: "Express Delivery",
      img: fifth,
      desc: "The shipment of products from head office to the destination",
    },
    {
      title: "W.H.O Nepal Project",
      img: sixth,
      desc: "The collaboration  with the SCAN Global Logistics to ensure safe shipment of WHO supplies.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="pl-10 text-5xl font-bold text-left text-[#495cb5] mb-8 pt-20">
        Gallery
      </h1>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-[#495cb5] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
