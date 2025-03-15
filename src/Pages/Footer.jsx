import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container max-w-screen-xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Left Section - Contact Info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold">Residencia del Hamor</h2>
            <p className="text-sm text-gray-400 mt-1">Luxury & Comfort Awaits You</p>
            <p className="text-sm mt-2">Brgy. Inlagadian, Casiguran, Philippines</p>
            <p className="text-sm">Phone: +63 912 345 6789</p>
            <p className="text-sm">Email: info@residenciadelhamor.com</p>
          </div>

          {/* Center Section - Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <FaFacebookF className="text-white" size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <FaInstagram className="text-white" size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              <FaTwitter className="text-white" size={18} />
            </a>
          </div>

          {/* Right Section - Copyright */}
          <div className="text-center md:text-right mt-4 md:mt-0">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Residencia del Hamor</p>
            <p className="text-xs text-gray-500">All Rights Reserved</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
