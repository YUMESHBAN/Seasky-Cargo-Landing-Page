import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about";
import Home from "./pages/home";
import AirFreight from "./pages/services/Airfreight";
import SeaFreight from "./pages/services/Seafreight";
import LandTransport from "./pages/services/Landtransport";

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
            <Route path="/" element={<Home />} /> {/* Default Home */}
            <Route path="/about" element={<About />} /> {/* About Page */}
            <Route path="/services/air-freight" element={<AirFreight />} />
            <Route path="/services/sea-freight" element={<SeaFreight />} />
            <Route
              path="/services/land-transport"
              element={<LandTransport />}
            />
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}
