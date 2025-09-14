import containerspec from "../../assets/containerspecs.png";
export default function containersize() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-[#495cb5] mb-8 pt-20">
        Container Sizes
      </h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        A container is a sealed, rigid, reusable metal box used to hold goods
        that require transport by vessel, truck or rail. The container must be
        built for repeated use, easy to fill or empty and specially designated
        to facilitate the carriage of goods without intermediate reloading.
      </p>
      <p className=" text-blue-700 font-bold">
        All containers must have construction fittings able to withstand
        transport pressure that may be applied in certain cases in normal use of
        continuous transportation.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        <br />
        Container Specification Explained:
      </h2>
      <div className="w-full  bg-gray-200 flex items-center justify-center shadow-md overflow-hidden">
        <img
          src={containerspec}
          alt="Specification of Container"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
