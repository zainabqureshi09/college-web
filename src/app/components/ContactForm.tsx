"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Merienda } from "next/font/google";
import LocationPage from "./AdressLocation";

// Apply Merienda Font
const merienda = Merienda({ subsets: ["latin"], weight: "700" });

// Form Animation Variants
const formVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Handle form field updates
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("⚠️ All fields are required.");
      return;
    }

    setError("");

    const res = await fetch("https://formspree.io/f/xpwzgpgj", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setError("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] flex items-center justify-center text-center bg-gradient-to-r from-blue-600 to-blue-800">
        <motion.div
          className="relative z-10 text-white px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className={`${merienda.className} text-5xl font-bold drop-shadow-lg`}>
            Get in Touch
          </h1>
          <p className="mt-4 text-lg font-light drop-shadow-md max-w-2xl mx-auto">
            Have any questions? We&apos;d love to hear from you!
          </p>
        </motion.div>
      </div>

      {/* Contact Form Section */}
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
        <motion.div
          className="w-full max-w-lg p-8 bg-white rounded-lg shadow-2xl"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          {submitted ? (
            <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <h2 className="text-3xl font-bold text-blue-700">🎉 Thank you!</h2>
              <p className="text-lg text-gray-600 mt-2">Your message has been sent successfully.</p>
            </motion.div>
          ) : (
            <motion.form onSubmit={handleSubmit} className="space-y-6">
              <h1 className={`${merienda.className} text-3xl font-bold text-center text-blue-700`}>
                Contact Us
              </h1>
              {error && <p className="text-md text-red-500 text-center">{error}</p>}

              {/* Name Field */}
              <div>
                <label className="block text-lg font-semibold text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="mt-2 block w-full p-3 border rounded-md shadow-md focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-lg font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="mt-2 block w-full p-3 border rounded-md shadow-md focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-lg font-semibold text-gray-700">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={4}
                  className="mt-2 block w-full p-3 border rounded-md shadow-md focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-blue-700 text-white py-3 px-4 rounded-md text-lg font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </div>

      {/* Location Section */}
      <div className="bg-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className={`${merienda.className} text-4xl font-bold text-blue-700 mb-6`}>
            📍 Visit Our Campus
          </h2>
          <p className="text-lg text-gray-700">
            Come visit us at our college campus and explore our environment.
          </p>
        </div>

        {/* Map Component */}
        <div className="mt-8">
          <LocationPage />
        </div>
      </div>
    </>
  );
}
