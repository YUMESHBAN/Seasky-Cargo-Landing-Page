import { useState, useEffect, useRef } from "react";
import quote from "../assets/getQuote.svg";

export default function GetAQuoteOverlay() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // ESC key close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    image: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "image" && files) {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("service", form.service);
    formData.append("message", form.message);
    if (form.image) {
      formData.append("image", form.image);
    }

    console.log("Submitted:", Object.fromEntries(formData.entries()));
    setOpen(false);
  };

  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-[#495cb5] text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-sm md:text-base"
      >
        Get a Quote
      </button>

      {/* Entire screen blur when modal is open */}
      <div className={open ? "blur-sm" : ""}>
        {/* All your page content (including navbar) goes here */}
      </div>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-start pt-24"
          onClick={handleClickOutside}
        >
          <div
            ref={modalRef}
            className="relative bg-blue-100 p-7 rounded-xl shadow-lg w-full max-w-md mx-4"
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 left-3 text-gray-600 hover:text-red-500 text-2xl font-bold"
            >
              ×
            </button>

            <h3 className="text-[#495cb5] text-2xl font-bold text-center mb-4">
              Get a Quotation
            </h3>

            <div className="flex justify-center mb-6">
              <img
                src={quote}
                alt="Quotation Illustration"
                className="w-28 h-28 object-contain"
              />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label className="text-[#495cb5] font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
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
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
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
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="w-full p-2 border border-[#495cb5] rounded-lg h-24"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-[#495cb5] font-medium">
                  Upload Image
                </label>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full p-2 border border-[#495cb5] rounded-lg cursor-pointer"
                />
                <small className="text-gray-500">Optional</small>
              </div>

              <button
                type="submit"
                className="w-full bg-[#495cb5] text-white py-2 px-4 rounded-lg hover:bg-[#394a91] transition"
              >
                Submit Quote
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
