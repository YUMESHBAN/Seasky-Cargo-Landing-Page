import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about";
import Home from "./pages/home";
import AirFreight from "./pages/services/Airfreight";
import SeaFreight from "./pages/services/Seafreight";
import LandTransport from "./pages/services/Landtransport";

import Incoterms from "./pages/resources/incoterms";
import Containersize from "./pages/resources/containersize";
import AirContainer from "./pages/resources/airfreightcontainer";

import CSR from "./pages/csr";
import Career from "./pages/career";
import Gallery from "./pages/gallery";
import Blogs from "./pages/blogs";

export default function App() {
  return (
    <Router>
      {/* Main layout with Navbar + content + Footer */}
      <div className="min-h-screen flex flex-col">
        {/* Navbar always at top */}
        <Navbar />

        {/* Middle Content (changes with route) */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/air-freight" element={<AirFreight />} />
            <Route path="/services/sea-freight" element={<SeaFreight />} />
            <Route
              path="/services/land-transport"
              element={<LandTransport />}
            />
            <Route path="/resources/incoterms" element={<Incoterms />} />
            <Route
              path="/resources/containersize"
              element={<Containersize />}
            />
            <Route
              path="/resources/airfreightcontainer"
              element={<AirContainer />}
            />

            <Route path="/csr" element={<CSR />} />
            <Route path="/career" element={<Career />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}
