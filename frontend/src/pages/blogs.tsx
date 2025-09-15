import React from "react";
import link from "../assets/blogs/link.png";
import machinery from "../assets/gallery/3.png";
import guide from "../assets/gallery/6.png";
import service from "../assets/gallery/5.png";
import cargo from "../assets/gallery/4.png";
import unmin from "../assets/gallery/2.png";

import project1 from "../assets/gallery/1.png";

import air from "../assets/air1.png";
import port from "../assets/port.jpg";
import rule from "../assets/rules.jpg";

type BlogPost = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  excerpt: string;
  link: string;
};

const posts: BlogPost[] = [
  // Popular
  {
    id: "roro-logistics",
    title:
      "Understanding RORO Logistics: The Easiest Way to Move Vehicles and Machinery Worldwide",
    category: "Popular",
    imageUrl: machinery,
    excerpt:
      "RORO (Roll-on/Roll-off) shipping is a specialized method ideal for wheeled cargo. Find out why it’s efficient, versatile, and cost-effective.…",
    link: "/blogs/roro-logistics",
  },
  {
    id: "customs-clearance",
    title:
      "Customs Clearance Explained: Your Complete Guide to Smooth International Shipping",
    category: "Popular",
    imageUrl: air,
    excerpt:
      "Understanding the customs clearance process is crucial for timely shipments. Learn documentation, duties, and tips to avoid delays.…",
    link: "/blogs/customs-clearance",
  },
  {
    id: "multimodal-transport",
    title:
      "Multimodal Transport from Nepal: Your Complete Booking Guide with Sea Sky Cargo",
    category: "Popular",
    imageUrl: service,
    excerpt:
      "Moving goods via air, sea, and road under a single contract can optimize cost and speed. Here’s how to book and use Sea Sky Cargo’s multimodal transport.…",
    link: "/blogs/multimodal-transport",
  },

  // Shipping Regulations
  {
    id: "nepal-usa-shipping",
    title: "Nepal-USA Shipping & Imports: A Guide for US & Nepali Companies",
    category: "Shipping Regulations",
    imageUrl: guide,
    excerpt:
      "Trade between Nepal and the USA comes with specific rules for export, import, tariff, and documentation. Here’s what businesses need to know.…",
    link: "/blogs/nepal-usa-shipping",
  },
  {
    id: "shipping-regulations-asia",
    title: "Key Shipping Regulations Across Asian Ports",
    category: "Shipping Regulations",
    imageUrl: port,
    excerpt:
      "Asian ports follow unique compliance standards. Learn about port fees, customs, and required permits before exporting to Asia.…",
    link: "/blogs/shipping-regulations-asia",
  },
  {
    id: "eu-shipping-rules",
    title: "EU Shipping Rules: Tariffs, VAT & Compliance Explained",
    category: "Shipping Regulations",
    imageUrl: rule,
    excerpt:
      "From tariffs to VAT, navigating EU shipping can be complex. This guide breaks down compliance for smooth imports and exports.…",
    link: "/blogs/eu-shipping-rules",
  },

  // Projects
  {
    id: "chi-carpets-denver",
    title:
      "Shipping Nepali Chi Carpets to Denver, Colorado: How Sea Sky Cargo Made It Happen",
    category: "Projects",
    imageUrl: project1,
    excerpt:
      "How we transported delicate Nepali carpets all the way to Denver—handling packing, customs, and transit with care.…",
    link: "/blogs/chi-carpets-denver",
  },
  {
    id: "unmin-logistics",
    title:
      "International Logistics Facilitating Peacekeeping: Seasky Cargo’s Support for UNMIN in Nepal",
    category: "Projects",
    imageUrl: unmin,
    excerpt:
      "Sea Sky Cargo handled essential supplies and equipment for UNMIN, balancing compliance, security, and timely delivery.…",
    link: "/blogs/unmin-logistics",
  },
  {
    id: "hydropower-project-cargo",
    title: "Managing Heavy Cargo for Nepal’s Hydropower Projects",
    category: "Projects",
    imageUrl: cargo,
    excerpt:
      "Transporting turbines and heavy equipment for hydropower plants required custom handling and careful planning.…",
    link: "/blogs/hydropower-project-cargo",
  },
];

const categories = ["Popular", "Shipping Regulations", "Projects"];

const BlogGallery: React.FC = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-72 md:h-96 lg:h-[400px] overflow-hidden mb-16">
        <img
          src={link}
          alt="World Link"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute left-10 bottom-10 text-left">
          <span className="inline-block bg-[#495cb5] text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full mb-3 shadow-lg">
            Recommended⭐
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
            10 Expert Packaging Tips for Safe International Shipping
          </h1>
          <a href="/blogs/packaging-tips" className="inline-block">
            <h3 className="text-xl md:text-2xl font-bold text-gray-400 drop-shadow-lg hover:text-[#495cb5] transition-colors">
              Read More →
            </h3>
          </a>
        </div>
      </div>

      {/* Blog Sections by Category */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {categories.map((category) => {
          const filteredPosts = posts.filter(
            (post) => post.category === category
          );
          return (
            <section key={category} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#495cb5] mb-8">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <a
                    key={post.id}
                    href={post.link}
                    className="group relative block h-72 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <p className="text-xs uppercase text-blue-400">
                        {post.category}
                      </p>
                      <h3 className="text-lg font-semibold group-hover:text-[#495cb5] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-200 mt-1 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default BlogGallery;
