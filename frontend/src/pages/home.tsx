import { motion } from "framer-motion";
import { Ship, Plane, Truck } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        id="home"
        className="flex-1 flex flex-col items-center justify-center text-center px-6 pt-32 pb-10 bg-gradient-to-r from-blue-600 to-blue-400 text-white"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Reliable Cargo Solutions, Across Sea and Sky
        </motion.h2>
        <p className="max-w-xl mb-6 text-lg">
          Delivering your goods with speed, safety, and trust.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow">
          Get Started
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100 px-6 md:px-16">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h3>
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
              className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 md:px-16">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
          About Us
        </h3>
        <p className="max-w-3xl mx-auto text-center text-gray-600 text-lg">
          Sea Sky Cargo Service has been delivering goods across the globe for
          over a decade. We combine cutting-edge technology with a commitment to
          customer satisfaction.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 px-6 md:px-16">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Contact Us
        </h3>
        <div className="max-w-xl mx-auto">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="p-3 rounded-lg border"
            ></textarea>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
