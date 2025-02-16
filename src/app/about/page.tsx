"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

// Typing Animation Data
const cursorColors = ["#1E90FF", "#FF4500", "#32CD32", "#FFD700"];
const typingTexts = ["Empowering Women Through Education", "Building a Brighter Future", "Join Us Today!"];

export default function AboutPage() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorColorIndex, setCursorColorIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseDuration = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < typingTexts[textIndex].length) {
        setDisplayText((prev) => prev + typingTexts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === typingTexts[textIndex].length) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
        setCharIndex(0);
        setCursorColorIndex((prev) => (prev + 1) % cursorColors.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-[450px] flex items-center justify-center text-center bg-[url('/image1.webp')] bg-cover bg-center">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm"></div>
        <motion.div
          className="relative z-10 text-white px-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className={`${merienda.className} text-5xl md:text-6xl font-bold drop-shadow-lg`}>
            About Us
          </h1>
          <p className="mt-4 text-lg md:text-2xl flex justify-center">
            {displayText}
            <motion.span
              className="w-2 h-6 md:h-7 inline-block ml-1"
              style={{ backgroundColor: cursorColors[cursorColorIndex] }}
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            ></motion.span>
          </p>
        </motion.div>
      </section>

      {/* About Content Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className={`${merienda.className} text-4xl font-bold text-blue-700`}>Who We Are</h2>
          <p className="text-lg text-gray-700 leading-7 mt-4">
            Firoza Khatoon Women&apos;s College has been a beacon of education since
            its inception in 2018. Our mission is to empower women with academic
            excellence and holistic development, creating a future where they
            can lead with confidence and integrity.
          </p>
        </motion.div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          {/* Left Side (Text) */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className={`${merienda.className} text-2xl font-semibold text-blue-700`}>Our Vision</h2>
            <p className="text-lg text-gray-700 leading-7">
              We envision a future where women are leaders, thinkers, and
              changemakers. Our focus is to cultivate an educational environment
              that nurtures intellectual growth, social responsibility, and
              moral integrity.
            </p>

            <h2 className={`${merienda.className} text-2xl font-semibold text-blue-700`}>Our Mission</h2>
            <p className="text-lg text-gray-700 leading-7">
              Our mission is to provide women with quality education that
              empowers them to realize their full potential. We focus on a blend
              of academics, personality development, and leadership training to
              prepare our students for real-world success.
            </p>
          </motion.div>

          {/* Right Side (Image) */}
          <motion.div
            className="overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/image3.jpeg"
              alt="Campus"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg object-cover"
              priority={true} // Ensures faster loading
            />
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-blue-700 py-20 text-center">
        <h2 className={`${merienda.className} text-3xl font-bold`}>Join Our College Today</h2>
        <p className="mt-4 text-lg">
          Take the next step toward a brighter future with us.
        </p>
        <motion.a
          href="/admissions"
          className="mt-6 inline-block px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-500 hover:scale-105"
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
}
