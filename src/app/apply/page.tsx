"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Merienda } from "next/font/google";
import { db } from "../lib/firebaseConfig"; // Firebase import
import { collection, addDoc } from "firebase/firestore";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "applications"), {
        ...formData,
        timestamp: new Date(),
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center">
        <motion.h1
          className={`${merienda.className} text-5xl font-bold text-blue-700`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Apply for Admission
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Complete the form below to apply for admission at **Firoza Khatoon Women College**.
        </motion.p>
      </section>

      {/* Application Form */}
      <section className="max-w-4xl mx-auto mt-12 bg-white shadow-lg rounded-lg p-8">
        {submitted ? (
          <motion.div
            className="text-center py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold text-blue-700">🎉 Application Submitted!</h2>
            <p className="text-lg text-gray-600 mt-4">Thank you for applying. Our admissions team will contact you soon.</p>
          </motion.div>
        ) : (
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="text-lg font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-lg font-semibold text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-lg font-semibold text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="text-lg font-semibold text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="text-lg font-semibold text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Enter your address"
                  className="w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Course Selection */}
              <div className="md:col-span-2">
                <label className="text-lg font-semibold text-gray-700">Select Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Choose a Course</option>
                  <option value="Science">Science</option>
                  <option value="Arts">Arts</option>
                  <option value="Commerce">Commerce</option>
                  <option value="IT">Computer Science</option>
                </select>
              </div>

              {/* Additional Message */}
              <div className="md:col-span-2">
                <label className="text-lg font-semibold text-gray-700">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any additional details..."
                  className="w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
              <motion.button
                type="submit"
                className="px-8 py-4 bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1 }}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </motion.button>
            </div>
          </motion.form>
        )}
      </section>
    </main>
  );
}
