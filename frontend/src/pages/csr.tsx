import containerspec from "../../assets/containerdetail.png";
export default function airfreightcontainer() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-[#495cb5] mb-8 pt-20">
        Air Freight Containers
      </h1>
      <p className="text-gray-700 leading-relaxed mb-4">
        An airline unit or unit load device (ULD) is a pallet or a container
        which is used to hold loose freight to be shipped via airfreight.
        <br />
        <br />
        Airline units are used to protect your goods in transit and to speed
        transitions through customs and airports.
        <br />
        <br />
        ULD come in two different forms:
      </p>
      <ul className="list-disc pl-6 text-gray-700 space-y-1 leading-relaxed">
        <li>
          Pallets – These are large flat base of aluminum with rims designed to
          lock onto cargo net lugs
        </li>
        <li>
          Containers – Also known as cans or pods are closed units that can
          either be fully made out of aluminium or made out of a combination of
          aluminum, polycarbonate sheets and cargo nets. These are designed so
          that they fit perfectly in the circular cargo hold of the plane.
        </li>
        <br />
      </ul>
      <p className=" text-blue-700 font-bold">
        Our Loaders will choose the most appropriate unit for your freight so
        that you don’t have to.
        <br />
        <br />
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        The following guide shows you the different types of airline units.
        <br />
        <br />
        Note: Airline unit’s availability is dependent on the airline and the
        destination.
      </p>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        <br />
        Air Container Explained:
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
