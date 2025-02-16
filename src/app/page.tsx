"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Merienda } from "next/font/google";
import LocationPage from "./components/AdressLocation";

const merienda = Merienda({ subsets: ["latin"], weight: "700" });

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true); // State to track mute/unmute

  // Toggle Sound
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-5">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/backgroundvid.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-md"></div>
        <div className="relative z-10 max-w-3xl text-white">
          <motion.h1
            className={`${merienda.className} text-5xl md:text-6xl font-bold drop-shadow-lg`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Firoza Khatoon Women College
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-2xl font-light drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A Pathway to a Bright Future!
          </motion.p>
          <motion.a
            href="/about"
            className="mt-6 inline-block px-8 py-4 text-white font-semibold text-lg rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg transition transform hover:scale-110"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.15 }}
          >
            Explore College
          </motion.a>
        </div>
        {/* Sound Toggle Button */}
        <button
          className="absolute bottom-8 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-xl transition hover:bg-gray-700"
          onClick={toggleSound}
        >
          {isMuted ? "🔊 Play Sound" : "🔇 Stop Sound"}
        </button>
      </section>

      {/* Leadership Messages */}
      <section className="container mx-auto px-5 py-20">
        <h2 className={`${merienda.className} text-3xl md:text-4xl text-center font-bold text-blue-600`}>
          Leadership Messages
        </h2>

        {/* Chairman & Hon. Secretary Section */}
        <motion.div
          className="mt-10 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl text-blue-700 font-bold text-center">Chairman & Hon. Secretary</h3>

          {/* Images of Chairman & Hon. Secretary */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
            <Image src="/ahmer-razi.jpg" alt="Ahmer Razi" width={250} height={250} className="rounded-lg shadow-md" />
            <Image src="/senior.jpg" alt="Mansoor Suleman Aziz" width={250} height={250} className="rounded-lg shadow-md" />
          </div>

          {/* Chairman Message */}
          <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center md:text-left">
            The Vision of &apos;Jamiyat Educational Board (JEB) while initiating Women&apos;s college was to make it easy for our female students to study in a safe and secure environment. 
            <br /><br />
            Education weaves a simple picture in our minds, a student learning and a teacher teaching. For JEB, education is beyond the classical paper-pencil or blackboard theory.
            <br /><br />
            While keeping JEB&apos;s mission in view, we are constantly searching for more opportunities to enhance our contribution to the cause of higher education. 
            <br /><br />
            I must extend my heartiest congratulations to my principal, faculty, and staff who have worked with zeal, diligence, and commitment for the development of FKWC.
          </p>

          <p className="mt-4 text-xl font-semibold text-blue-700 text-center">
            - Ahmer Razi | Chairman JEB & Mansoor Suleman Aziz | Hon. Secretary JEB
          </p>
        </motion.div>

        {/* Principal Section */}
        <motion.div
          className="mt-10 bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl text-blue-700 font-bold text-center">Principal&apos;s Message</h3>

          {/* Principal Image */}
          <div className="flex justify-center mt-6">
            <Image src="/principal.png" alt="Principal" width={250} height={250} className="rounded-lg shadow-md" />
          </div>

          <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center md:text-left">
            FKWC is committed to providing an enriched and purposeful learning environment. Our faculty ensures that students receive quality education along with career guidance and personal skill development to prepare them for future success.
            <br /><br />
            We strongly promote academic & moral values among our students. Alongside academics, we emphasize physical, social, and emotional training. Students are involved in assembly, presentations, and workshops for confidence-building.
            <br /><br />
            Periodic meetings with parents help us resolve individual concerns, and we provide students with information about universities and career choices.
          </p>

          <p className="mt-4 text-xl font-semibold text-blue-700 text-center">- Sitara Jabeen | Principal</p>
        </motion.div>
      </section>

      {/* Location Section */}
      <LocationPage />
    </main>
  );
};

export default Home;
