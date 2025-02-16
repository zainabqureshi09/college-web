"use client";

import { motion } from "framer-motion";
import { Merienda } from "next/font/google";
import { FaFileAlt, FaClipboardList } from "react-icons/fa";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

const AdmissionPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center">
        <motion.h1
          className={`${merienda.className} text-5xl font-bold text-blue-700`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Admission Process
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Follow these simple steps to complete your admission at Firoza Khatoon Women&apos;s College.
        </motion.p>
      </section>

      {/* Admission Steps Section */}
      <section className="max-w-4xl mx-auto mt-12">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center space-x-4">
            <FaClipboardList className="text-blue-700 text-4xl" />
            <h2 className={`${merienda.className} text-3xl font-bold text-blue-700`}>
              Admission Steps
            </h2>
          </div>

          <ul className="mt-6 space-y-4 text-lg text-gray-700 leading-7">
            <li>✅ Fill out the admission form online or visit the campus.</li>
            <li>✅ Submit the required documents listed below.</li>
            <li>✅ Pay the admission processing fee.</li>
            <li>✅ Appear for the entrance interview (if applicable).</li>
            <li>✅ Receive confirmation and start your journey with us!</li>
          </ul>
        </motion.div>
      </section>

      {/* Required Documents Section */}
      <section className="max-w-4xl mx-auto mt-12">
        <motion.div
          className="bg-white shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center space-x-4">
            <FaFileAlt className="text-blue-700 text-4xl" />
            <h2 className={`${merienda.className} text-3xl font-bold text-blue-700`}>
              Required Documents
            </h2>
          </div>

          <ul className="mt-6 space-y-4 text-lg text-gray-700 leading-7">
            <li>📄 Original & copies of **9th & 10th matriculation marksheet**.</li>
            <li>📄 Original **matriculation enrollment card** & 1 copy.</li>
            <li>📄 Original **matriculation admit card** & 1 copy.</li>
            <li>📜 **Original Character Certificate** from the last institution attended.</li>
            <li>🆔 **B-Form (Original)** & 1 copy.</li>
            <li>🆔 **Parents&apos; CNIC (Original)** & 1 copy each.</li>
            <li>📸 **Two passport-size photographs** (Sky blue background & white scarf).</li>
          </ul>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="text-center mt-12">
        <motion.a
          href="/apply"
          className="px-8 py-4 bg-blue-700 text-white text-lg font-semibold rounded-full shadow-lg hover:scale-105 transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          Apply Now
        </motion.a>
      </section>
    </main>
  );
};

export default AdmissionPage;
