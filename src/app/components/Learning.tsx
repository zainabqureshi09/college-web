"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


// Sample Learning Materials Data
const materials = [
  // 🔹 Pre-Engineering
  { title: "Engineering Mathematics Vol.1", type: "Book", subject: "Pre Engineering", url: "/files/eng-math1.pdf" },
  { title: "Physics Lecture Notes", type: "Notes", subject: "Pre Engineering", url: "/files/physics-notes.pdf" },
  { title: "Mathematics Past Paper (2022)", type: "Past Paper", subject: "Pre Engineering", url: "/files/maths-paper.pdf" },

  // 🔹 Computer Science
  { title: "Introduction to Programming", type: "Book", subject: "Computer Science", url: "/files/programming-intro.pdf" },
  { title: "Data Structures and Algorithms", type: "Book", subject: "Computer Science", url: "/files/data-structures.pdf" },
  { title: "Python Crash Course", type: "Book", subject: "Computer Science", url: "/files/python.pdf" },
  { title: "Computer Science Quiz", type: "Quiz", subject: "Computer Science", url: "/files/cs-quiz.pdf" },

  // 🔹 Pre-Medical
  { title: "Biology for Beginners", type: "Book", subject: "Pre Medical", url: "/files/biology-book.pdf" },
  { title: "Human Anatomy & Physiology", type: "Book", subject: "Pre Medical", url: "/files/anatomy.pdf" },
  { title: "MCQs for Medical Students", type: "Quiz", subject: "Pre Medical", url: "/files/medical-mcqs.pdf" },

  // 🔹 Commerce
  { title: "Principles of Accounting Vol.1", type: "Book", subject: "Commerce", url: "/files/accounting.pdf" },
  { title: "Business Studies Guide", type: "Book", subject: "Commerce", url: "/files/business-studies.pdf" },

  // 🔹 Humanities
  { title: "World History Overview", type: "Book", subject: "Humanities", url: "/files/history.pdf" },
  { title: "Psychology Basics", type: "Book", subject: "Humanities", url: "/files/psychology.pdf" },

  // 🔹 Video Lectures
  { title: "Introduction to Physics", type: "Video", subject: "Physics", url: "https://www.youtube.com/watch?v=sample" },
  { title: "Programming Fundamentals", type: "Video", subject: "Computer Science", url: "https://www.youtube.com/watch?v=sample" },
];

const LearningMaterials = () => {
  const [search, setSearch] = useState("");
  const [filteredMaterials, setFilteredMaterials] = useState(materials);

  useEffect(() => {
    const filtered = materials.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.subject.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredMaterials(filtered);
  }, [search]);

  return (
    <>
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-bold text-center text-blue-700 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📚 FKWC Learning Materials Hub
      </motion.h1>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by subject or title..."
          className="w-full max-w-lg px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Learning Materials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMaterials.map((material, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg border border-gray-200 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {/* Material Type & Subject */}
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">{material.subject}</span>
              <span className="text-sm px-2 py-1 bg-blue-100 text-blue-700 rounded-md">
                {material.type}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold mt-2">{material.title}</h2>

            {/* Actions: View / Download */}
            <div className="mt-4 flex gap-4">
              {material.type === "Video" ? (
                <a
                  href={material.url}
                  target="_blank"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  🎥 Watch Video
                </a>
              ) : (
                <>
                  <button
                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                    onClick={() => alert("Preview Coming Soon!")}
                  >
                    👁️ View
                  </button>
                  <a
                    href={material.url}
                    download
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    📥 Download
                  </a>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
   
    </div>
    </>
  );
};

export default LearningMaterials;
