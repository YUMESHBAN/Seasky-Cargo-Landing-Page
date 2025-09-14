import career from "../assets/career.svg";

export default function AirFreight() {
  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-4xl h-[40vh] md:h-[50vh] lg:h-[50vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={career}
          alt="Career"
          className="absolute w-full h-full object-contain object-bottom -z-10"
          loading="lazy"
        />

        {/* Title at bottom-left / adjusted for large screens */}
        <div className="absolute left-10 bottom-10 lg:top-3/4 lg:-translate-y-3/4 text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-500 drop-shadow-lg leading-tight">
            No Openings
          </h1>
          <h2 className="text-2xl md:text-2xl text-gray-500 drop-shadow-lg leading-tight mt-2">
            Check back soon for new opportunities...
          </h2>
        </div>
      </div>
    </div>
  );
}
