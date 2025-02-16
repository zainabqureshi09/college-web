"use client";

import FacultyCard from "@/app/components/FacultyCard";
import { motion } from "framer-motion";
import Image from "next/image";

const facultyData = [
  { id: 1, name: "Miss Bisma", designation: "Senior Lecturer Physics / Masters in Physics" },
  { id: 2, name: "Miss Sadaf", designation: "Masters in Maths / Senior Lecturer Maths" },
  { id: 3, name: "Miss Zareen", designation: "Masters in Botany / Senior Lecturer in Botany" },
  { id: 4, name: "Miss Ayesha", designation: "Senior Lecturer of Zoology" },
  { id: 5, name: "Miss Aneesa", designation: "Senior Lecturer of English" },
  { id: 6, name: "Miss Maryam", designation: "Senior Lecturer of Chemistry" },
  { id: 7, name: "Miss Bejanti Mala", designation: "Senior Lecturer of Computer Science" },
  { id: 8, name: "Miss Saleha", designation: "Senior Lecturer of Urdu Literature" },
  { id: 9, name: "Miss Anusha", designation: "Senior Lecturer of Pakistan Studies / Civics" },
  { id: 10, name: "Miss Shaista", designation: "Senior Lecturer of Accounting" },
  { id: 11, name: "Miss Sehar", designation: "Senior Lecturer of Commerce Faculty" },
  { id: 12, name: "Miss Humaira", designation: "Senior Teacher of Sports" },
  { id: 13, name: "Miss Imrana", designation: "Principal Assistant" },
  { id: 14, name: "Miss Rubina", designation: "Librarian" },
];

export default function FacultyPage() {
  return (
    <main className="py-10 px-6">
      {/* Principal Section */}
      <motion.div
        className="flex flex-col items-center justify-center w-full mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/madam.jpg"
            alt="Madam Sitara Jabeen"
            layout="responsive"
            width={700}
            height={200}
            quality={100}
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Mam Sitara Jabeen</h2>
          <p className="text-gray-600 text-lg">Honourable Principal of FKWC</p>
        </div>
      </motion.div>

      {/* Faculty Section */}
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Our Faculty</h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {facultyData.map((faculty) => (
          <motion.div
            key={faculty.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: faculty.id * 0.05 }}
          >
            <FacultyCard name={faculty.name} designation={faculty.designation} key={0} />
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
