import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/about";
import Home from "./pages/home";

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
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}
