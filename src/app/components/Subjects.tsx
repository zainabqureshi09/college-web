"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import LearningMaterials from "./Learning";
// import Chatbot from "./Agent";

const subjectGroups = [
  {
    group: "Pre Engineering",
    description: "Focuses on core subjects required for engineering fields, emphasizing mathematics and science.",
    subjects: ["Physics", "Chemistry", "Urdu", "Islamiyat / Pak Studies", "English", "Mathematics"],
    color: "from-yellow-600 to-yellow-600",
  },
  {
    group: "Computer Science",
    description: "Designed for students interested in programming, technology, and computer applications.",
    subjects: ["Mathematics", "Physics", "Islamiyat / Pak Studies", "English", "Computer Science", "Urdu"],
    color: "from-red-700 to-red-600",
  },
  {
    group: "Pre Medical",
    description: "Prepares students for careers in medical and biological sciences with subjects like biology and chemistry.",
    subjects: ["English", "Islamiyat / Pak Studies", "Urdu", "Biology", "Chemistry", "Physics"],
    color: "from-green-700 to-green-600",
  },
  {
    group: "Commerce",
    description: "Focuses on trade, accounting, economics, and business-related subjects for future commerce professionals.",
    subjects: [
      "English",
      "Islamiyat / Pak Studies",
      "Urdu",
      "Principles of Commerce - I / Banking (XII)",
      "Principles of Economics - I / Commercial Geography (XII)",
      "Business Maths / Statistics (XII)",
      "Principles of Accounting (I) / Principles of Accounting (II)",
    ],
    color: "from-blue-900 to-blue-700",
  },
  {
    group: "Humanities",
    description: "A diverse group for students interested in arts, social sciences, and education.",
    subjects: ["English", "Islamiyat / Pak Studies", "Urdu", "Education", "Islamic Studies", "Civics"],
    color: "from-red-900 to-red-900",
  },
];

const students = [
  { name: "Amna Iqbal", class: "XI Pre Medical", achievement: "89.45%" },
  { name: "Mehak Akhlaq", class: "XI Pre Medical", achievement: "85.64%" },
  { name: "Gul Afsha", class: "XI Pre Medical", achievement: "78.95%" },
  { name: "Dua Asim", class: "XI Computer Science", achievement: "82.81%" },
  { name: "Bisma Shafiq", class: "XI Computer Science", achievement: "77.8%" },
  { name: "Eman Amjad", class: "XI Computer Science", achievement: "75%" },
  { name: "Bushra Zafar", class: "XI Commerce", achievement: "89.81%" },
  { name: "Umaima Aziz", class: "XI Commerce", achievement: "86.36%" },
  { name: "Rabia Kanwal", class: "XI Commerce", achievement: "83.63%" },
  { name: "Ulfat Bibi", class: "XI Humanities", achievement: "87.64%" },
  { name: "Laiba Arshad", class: "XI Humanities", achievement: "85.45%" },
  { name: "Batool Jaffery", class: "XI Humanities", achievement: "83.9%" },
];

const LearningPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* 🚀 Subject Groups Section */}
      <motion.h1
        className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📚 Explore Your Subjects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {subjectGroups.map((group, index) => (
          <motion.div
            key={index}
            className={`relative p-6 rounded-xl shadow-lg bg-gradient-to-br ${group.color} text-white`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-bold mb-2">{group.group}</h2>
            <p className="text-lg opacity-90">{group.description}</p>
            <ul className="mt-4 bg-white/20 backdrop-blur-md p-4 rounded-lg space-y-2">
              {group.subjects.map((subject, idx) => (
                <li key={idx} className="text-lg font-medium p-2 bg-white/30 rounded-md shadow-md hover:bg-white/40">
                  {subject}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* 🎖️ Student Achievers */}
      <motion.h2 className="text-center text-3xl font-bold text-gray-800 my-12">🎖️ Our Achievers</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {students.map((student, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-blue-600">{student.name}</h3>
            <p className="text-gray-700"><strong>Class:</strong> {student.class}</p>
            <p className="text-gray-700"><strong>Achievement:</strong> {student.achievement}</p>
          </motion.div>
        ))}
      </div>

      {/* 📅 Yearly Calendar */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-bold">📅 Our Yearly Calendar</h2>
        <Image src="/editedfkwc_page-0001.jpg" alt="Yearly Calendar" width={600} height={400} className="rounded-lg mx-auto mt-4" />
      </div>

     
      {/* <LearningMaterials /> */}
    </div>
  );
};

export default LearningPage;
