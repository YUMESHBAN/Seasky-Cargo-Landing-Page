import incoterm from "../../assets/incoterm.png";
export default function IncotermsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-[#495cb5] mb-8 pt-20">
        INCOTERMS
      </h1>

      <div className="w-full  bg-gray-200 flex items-center justify-center shadow-md overflow-hidden">
        <img
          src={incoterm}
          alt="Incoterm of Shipment"
          className="w-full h-full object-contain"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        <br />
        INCO Terms Explained:
      </h2>

      {/* Grid of Terms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* EXW */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-[#495cb5] mb-2">
            Ex Works (EXW)
          </h3>
          <p className="text-gray-700 mb-2">
            The seller fulfills obligations when goods are made available at the
            seller’s premises. Buyer handles transport, export, import, and all
            costs.
          </p>
          <p className="text-gray-600">
            <strong>Risk transfers to buyer:</strong> When goods are available
            at seller’s premises.
          </p>
        </div>

        {/* FCA */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-[#495cb5] mb-2">
            Free Carrier (FCA)
          </h3>
          <p className="text-gray-700 mb-2">
            The seller delivers goods to the carrier or another party nominated
            by the buyer at the seller’s premises or another agreed place.
          </p>
          <p className="text-gray-600">
            <strong>Risk transfers to buyer:</strong> Once goods are handed to
            the carrier.
          </p>
        </div>

        {/* CPT */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-[#495cb5] mb-2">
            Carriage Paid To (CPT)
          </h3>
          <p className="text-gray-700 mb-2">
            The seller pays carriage to the named destination, but risk
            transfers to the buyer once the goods are handed over to the
            carrier.
          </p>
          <p className="text-gray-600">
            <strong>Risk transfers to buyer:</strong> When goods are given to
            the first carrier.
          </p>
        </div>

        {/* CIP */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-[#495cb5] mb-2">
            Carriage and Insurance Paid To (CIP)
          </h3>
          <p className="text-gray-700 mb-2">
            Seller pays carriage and insurance to named destination, but risk
            transfers once goods are handed to the carrier.
          </p>
          <p className="text-gray-600">
            <strong>Risk transfers to buyer:</strong> When goods are delivered
            to the carrier.
          </p>
        </div>

        {/* DAP */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-[#495cb5] mb-2">
            Delivered At Place (DAP)
          </h3>
          <p className="text-gray-700 mb-2">
            The seller delivers goods ready for unloading at the named
            destination. Buyer is responsible for import duties and costs.
          </p>
          <p className="text-gray-600">
            <strong>Risk transfers to buyer:</strong> Once goods are ready for
            unloading at destination.
          </p>
        </div>

        {/* DPU */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-[#495cb5] mb-2">
            Delivered At Place Unloaded (DPU)
          </h3>
          <p className="text-gray-700 mb-2">
            Seller delivers goods unloaded at the named destination. Buyer
            handles import clearance and duties.
          </p>
          <p className="text-gray-600">
            <strong>Risk transfers to buyer:</strong> When goods are unloaded at
            destination.
          </p>
        </div>

        {/* DDP */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-[#495cb5] mb-2">
            Delivered Duty Paid (DDP)
          </h3>
          <p className="text-gray-700 mb-2">
            Seller bears all risks and costs until goods are delivered to
            buyer’s premises, cleared for import, and duties paid.
          </p>
          <p className="text-gray-600">
            <strong>Risk transfers to buyer:</strong> When goods arrive at named
            destination.
          </p>
        </div>

        {/* FAS */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-[#495cb5] mb-2">
            Free Alongside Ship (FAS)
          </h3>
          <p className="text-gray-700 mb-2">
            Seller delivers goods alongside the vessel at the named port of
            shipment. Buyer bears all costs and risks from that point.
          </p>
          <p className="text-gray-600">
            <strong>Risk transfers to buyer:</strong> Once goods are alongside
            the ship.
          </p>
        </div>

        {/* FOB */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-[#495cb5] mb-2">
            Free On Board (FOB)
          </h3>
          <p className="text-gray-700 mb-2">
            Seller delivers goods on board the vessel at the port of shipment.
            Buyer pays for freight, insurance, and unloading.
          </p>
          <p className="text-gray-600">
            <strong>Risk transfers to buyer:</strong> When goods are loaded onto
            the ship.
          </p>
        </div>

        {/* CFR */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-[#495cb5] mb-2">
            Cost and Freight (CFR)
          </h3>
          <p className="text-gray-700 mb-2">
            Seller pays transport to port of destination, but risk passes to
            buyer once goods are loaded on the ship.
          </p>
          <p className="text-gray-600">
            <strong>Risk transfers to buyer:</strong> When goods are on board
            the vessel.
          </p>
        </div>

        {/* CIF */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold text-[#495cb5] mb-2">
            Cost, Insurance and Freight (CIF)
          </h3>
          <p className="text-gray-700 mb-2">
            Seller pays cost, freight, and minimum insurance to destination
            port. Risk passes to buyer once goods are loaded on ship.
          </p>
          <p className="text-gray-600">
            <strong>Risk transfers to buyer:</strong> When goods are on board
            the vessel.
          </p>
        </div>
      </div>
    </div>
  );
}
