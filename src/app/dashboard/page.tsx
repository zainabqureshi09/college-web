"use client";
import { useState, useEffect, JSX } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebaseConfig";
import { useRouter } from "next/navigation";
import { FaBars, FaTimes, FaBook, FaFilePdf, FaVideo, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LearningMaterials from "../components/Learning";

export default function StudentDashboard() {
  const router = useRouter();
  const [user, setUser] = useState(auth.currentUser);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/login");
      setUser(user);
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar (Mobile + Desktop) */}
      <aside className={`fixed md:static bg-gray-800 text-white w-64 h-full p-4 z-20 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Student Portal</h2>
          <FaTimes className="md:hidden cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
        </div>
        <nav className="mt-6 space-y-4">
          <SidebarLink icon={<FaVideo />} text="Video Lectures" />
          <SidebarLink icon={<FaFilePdf />} text="PDF Notes" />
          <SidebarLink icon={<FaBook />} text="Online Resources" />
          <button className="flex items-center gap-3 mt-6 p-2 text-red-500 hover:text-red-700" onClick={() => signOut(auth)}>
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 transition-all">
        {/* Top Bar (Mobile + Desktop) */}
        <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <FaBars className="md:hidden text-gray-700 cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
            <h1 className="text-2xl font-bold dark:text-white">Welcome, {user?.displayName || "Student"}!</h1>
          </div>
          <Image src="/user-avatar.png" width={40} height={40} className="rounded-full" alt="Profile" />
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <DashboardCard icon={<FaVideo size={40} className="text-red-500" />} title="📺 Video Lectures" description="Watch recorded sessions anytime." linkText="Access Videos" />
          <DashboardCard icon={<FaFilePdf size={40} className="text-green-500" />} title="📂 PDFs & Notes" description="Download study materials." linkText="View PDFs" />
          <DashboardCard icon={<FaBook size={40} className="text-blue-500" />} title="🔗 Online Resources" description="Explore external learning sources." linkText="Visit Links" />
        </div>

        {/* Assignments & Progress */}
        <div >
          <LearningMaterials />
          <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md" whileHover={{ scale: 1.02 }}>
            <h2 className="text-xl font-semibold dark:text-gray-300 mb-4">📋 Upcoming Assignments</h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <AssignmentItem title="📖 Math Homework" dueDate="Feb 20" color="text-red-500" />
              <AssignmentItem title="📜 History Essay" dueDate="Feb 25" color="text-orange-500" />
              <AssignmentItem title="🔬 Science Lab Report" dueDate="Mar 1" color="text-green-500" />
            </ul>
            <br />
            <br />
              
              <Link href="https://prof-zainab-agent.vercel.app/"  className="mt-4 p-2 bg-blue-600 text-white rounded w-full h-[400px] border-none" target="_blank">💬 Chat with Prof. Zainab</Link>
 <br />
 <br />
 <br />

 <div className="text-center">
        <h2 className="text-2xl text-center text-blue-600 font-bold">Find Your Results</h2>
        <p className="text-lg text-blue-600">Click below to check your results:</p>
        <Link href="https://script.google.com/macros/s/AKfycbzhkM5BHHceFzFC-bJ741BIJ4KQhmJkz7bVqXpE4Ky1PTtQseLB3saJfpOoWoLqHQrwWg/exec" target="_blank" className="text-blue-600 font-semibold hover:underline">
          View Results
        </Link>
      </div>
          </motion.div>
        </div>
        </main>
       
          </div>
      
    
  );
}

/** Sidebar Link Component */
const SidebarLink = ({ icon, text }: { icon: JSX.Element; text: string }) => (
  <Link href="#" className="flex items-center gap-3 hover:text-gray-300">
    {icon} <span>{text}</span>
  </Link>
);

/** Dashboard Card Component */
const DashboardCard = ({ icon, title, description, linkText }: { icon: JSX.Element; title: string; description: string; linkText: string }) => (
  <motion.div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all" whileHover={{ scale: 1.05 }}>
    {icon}
    <h2 className="text-xl font-semibold mt-3 dark:text-gray-300">{title}</h2>
    <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
    <Link href="#" className="text-blue-600 dark:text-blue-400 mt-2 block">{linkText}</Link>
  </motion.div>
);

/** Assignment Item Component */
const AssignmentItem = ({ title, dueDate, color }: { title: string; dueDate: string; color: string }) => (
  <li className="flex justify-between border-b pb-2">
    <span>{title}</span> <span className={`font-semibold ${color}`}>{dueDate}</span>
  </li>
);

