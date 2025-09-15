import letter from "../assets/letter.png";
import contract from "../assets/contract.jpg";
export default function airfreightcontainer() {
  return (
    <div>
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={contract}
          alt="Contract"
          className="absolute inset-0 w-full h-full object-cover object-[center_70%] -z-10"
          loading="lazy"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="text-center mt-10 mb-8">
        <h1 className="text-4xl font-bold text-[#495cb5]">
          Agent Authorization Letter
        </h1>

        <div className="w-24 h-1 bg-blue-600 mx-auto my-4 rounded"></div>
        <p className="text-gray-700 leading-relaxed">2024-01-31</p>
      </div>

      <h2 className="pl-10 text-2xl font-bold text-gray-800 mb-6">
        Letter Image:
      </h2>
      <div className="w-full bg-gray-100 flex items-center justify-center shadow-md overflow-hidden py-8">
        <img
          src={letter}
          alt="Agent Authorization Letter"
          className="w-full md:w-2/3 lg:w-3/4 object-contain"
        />
      </div>
    </div>
  );
}
