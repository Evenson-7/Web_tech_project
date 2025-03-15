import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import Accommodations from "./Pages/Accommodations";
import Amenities from "./Pages/Amenities";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
        
        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 w-full z-20 bg-transparent text-white">
          <div className="container max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <ScrollLink to="home" smooth={true} duration={800} className="flex items-center space-x-3 cursor-pointer">
              <img src="https://scontent.fmnl4-1.fna.fbcdn.net/v/t39.30808-6/326403783_710644914101385_4266295258903531382_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHzcDFoQfzGCz6VAsy5eMh9jOKvdLk7GtiM4q90uTsa2OXGt4f0eaT7dPKTfZqrfKkbho_CYr_EJF4CNFRKpltW&_nc_ohc=PNlMJ-fk_qIQ7kNvgHJEjqH&_nc_oc=AdgsD8QxaC4icnhIZjPPgvwr9yCL0CG22QscvQ6Pkliskfe4fQexUzSOOBnqb8vMCNY&_nc_zt=23&_nc_ht=scontent.fmnl4-1.fna&_nc_gid=sLQGEkHXhm39_yTR466XrA&oh=00_AYF_DUkRXx8CoWkjIQL2Noqb0C7xdqw5gnnj1hm5Dc_WOg&oe=67D9A8B3"
                className="h-10 w-10 rounded-full object-cover" alt="Residencia del Hamor Logo" />
              <span className="text-2xl font-semibold">Residencia del Hamor</span>
            </ScrollLink>

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-white rounded-lg md:hidden hover:bg-gray-700">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Navigation Links */}
            <div className={`absolute top-full left-0 w-full bg-black/50 md:bg-transparent md:relative md:flex md:items-center md:space-x-8 md:w-auto transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
              <ul className="flex flex-col p-4 md:p-0 md:flex-row md:space-x-8">
                <li><ScrollLink to="home" smooth={true} duration={800} className="block py-2 px-3 text-white hover:text-gray-300">Home</ScrollLink></li>
                <li><ScrollLink to="accommodations" smooth={true} duration={800} className="block py-2 px-3 text-white hover:text-gray-300">Accommodations</ScrollLink></li>
                <li><ScrollLink to="amenities" smooth={true} duration={800} className="block py-2 px-3 text-white hover:text-gray-300">Amenities</ScrollLink></li>
                <li><ScrollLink to="booking" smooth={true} duration={800} className="block py-2 px-3 text-white hover:text-gray-300">Booking</ScrollLink></li>
                <li><ScrollLink to="contact" smooth={true} duration={800} className="block py-2 px-3 text-white hover:text-gray-300">Contact</ScrollLink></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page Sections with Fade Animation */}
        <AnimatePresence mode="wait">
          <motion.div key="page" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
            <div className="flex-grow flex flex-col">
              <section id="home" className="min-h-screen"><Home /></section>
              <section id="accommodations" className="min-h-screen"><Accommodations /></section>
              <section id="amenities" className="min-h-screen"><Amenities /></section>
              <section id="booking" className="min-h-screen"><Booking /></section>
              <section id="contact" className="min-h-screen"><Contact /></section>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
