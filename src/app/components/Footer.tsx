"use client";

import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* 📍 Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">📍 Contact Us</h3>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaMapMarkerAlt /> <span>Firoza Khatoon Women College, Karachi</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2 mt-2">
              <FaPhoneAlt /> <span>+923352444024</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2 mt-2">
              <FaEnvelope /> <span>info@fkwcollege.edu.pk</span>
            </p>
          </div>

          {/* 🔗 Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">🔗 Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <a href="/about" className="hover:underline hover:text-gray-300">About Us</a>
              <a href="/admissions" className="hover:underline hover:text-gray-300">Admissions</a>
              <a href="/contact" className="hover:underline hover:text-gray-300">Contact</a>
              <a href="/privacy" className="hover:underline hover:text-gray-300">Privacy Policy</a>
            </div>
          </div>

          {/* 📨 Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">📩 Stay Updated</h3>
            <p className="text-sm opacity-80 mb-3">Subscribe to our newsletter for the latest updates.</p>
            <form onSubmit={handleSubscribe} className="flex items-center justify-center md:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-l-md text-black focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition">
                send
              </button>
            </form>
          </div>

        </div>

        {/* 🔗 Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          {[
            { href: "https://www.facebook.com/jeb.fkwc", icon: <FaFacebook />, color: "hover:text-blue-500" },
            { href: "https://x.com/Zainab345690", icon: <FaTwitter />, color: "hover:text-blue-400" },
            { href: "https://www.instagram.com/firozakhatoon.college/", icon: <FaInstagram />, color: "hover:text-pink-400" },
            { href: "https://www.linkedin.com/in/zainab-ayaz-3081482b5/", icon: <FaLinkedin />, color: "hover:text-blue-300" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white transition duration-300 ${social.color}`}
            >
              {React.cloneElement(social.icon, { size: 30 })}
            </a>
          ))}
        </div>

        {/* Footer Text */}
        <p className="text-sm opacity-80 text-center mt-6">
          &copy; {new Date().getFullYear()} Firoza Khatoon Women College. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
