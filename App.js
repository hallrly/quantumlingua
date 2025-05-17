
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 text-white">
    <img src="/ql-logo.png" alt="QuantumLingua Logo" className="w-24 h-24" />
    <p className="mt-4 text-xl">Initializing QuantumLingua...</p>
  </div>
);

const Navbar = () => (
  <nav className="flex justify-center space-x-6 py-4 border-b border-gray-800 text-white">
    <Link to="/">Main Page</Link>
    <Link to="/about">About Us</Link>
    <Link to="/ongoing">Ongoing Projects</Link>
    <Link to="/upcoming">Upcoming Projects</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

const MainPage = () => (
  <section className="relative overflow-hidden text-white">
    <div className="absolute inset-0 z-0 flex w-[300%] animate-marquee opacity-10">
      <img src="/covers/game1.jpg" className="h-96 object-cover" />
      <img src="/covers/game2.jpg" className="h-96 object-cover" />
      <img src="/covers/game3.jpg" className="h-96 object-cover" />
      <img src="/covers/game4.jpg" className="h-96 object-cover" />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] py-20 text-center">
      <img src="/ql-logo.png" alt="QuantumLingua Logo" className="w-32 h-32 mb-4" />
      <h1 className="text-4xl font-bold">QuantumLingua</h1>
      <p className="text-lg mt-2">Professional Localization for Next-Gen Games</p>
    </div>
  </section>
);

const About = () => (
  <section className="space-y-4 p-6 text-white">
    <h2 className="text-2xl font-semibold">About Us</h2>
    <p>
      QuantumLingua is a professional translation and localization company formed by a team of expert gamers and linguists. With extensive professional training in both language and game development, we combine precision and passion to bring immersive experiences to life in every language.
    </p>
  </section>
);

const OngoingProjects = () => (
  <section className="space-y-4 p-6 text-white">
    <h2 className="text-2xl font-semibold">Ongoing Projects</h2>
    <div className="bg-gray-900 p-4 rounded-lg">
      <img src="/covers/expedition33.jpg" alt="Expedition 33" className="rounded-md mb-4" />
      <h3 className="text-xl font-bold">Clair Obscur: Expedition 33</h3>
      <progress value={35} max={100} className="w-full h-3 mt-2"></progress>
      <p className="text-sm mt-1">35% completed</p>
    </div>
  </section>
);

const UpcomingProjects = () => (
  <section className="space-y-4 p-6 text-white">
    <h2 className="text-2xl font-semibold">Upcoming Projects</h2>
    <div className="bg-gray-900 p-4 rounded-lg">
      <img src="/covers/deliver-at-all-costs.jpg" alt="Deliver At All Costs" className="rounded-md mb-4" />
      <h3 className="text-xl font-bold">Deliver At All Costs</h3>
      <p className="text-sm">Coming soon...</p>
    </div>
  </section>
);

const Contact = () => (
  <section className="space-y-4 p-6 text-white">
    <h2 className="text-2xl font-semibold">Contact</h2>
    <p>support@quantumlingua.com</p>
    <p>business@quantumlingua.com</p>
  </section>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <LoadingScreen />;

  return (
    <Router>
      <div className="bg-black min-h-screen">
        <header className="p-6 text-center border-b border-gray-800 text-white">
          <img src="/ql-logo.png" className="w-16 inline-block" />
          <h1 className="text-3xl font-bold mt-2">QuantumLingua</h1>
        </header>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/ongoing" element={<OngoingProjects />} />
          <Route path="/upcoming" element={<UpcomingProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="text-center text-sm text-gray-400 py-4 border-t border-gray-800">
          © 2025 QuantumLingua. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}
