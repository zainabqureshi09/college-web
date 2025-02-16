"use client";
import { useState, useEffect } from "react";
import { auth } from "../lib/firebaseConfig";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState(auth.currentUser);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) router.push("/login");
      setUser(user);
      setName(user?.displayName || "");
    });

    return () => unsubscribe();
  }, [router]);

  const handleNameChange = async () => {
    if (user && name.trim()) {
      await updateProfile(user, { displayName: name });
      setUser({ ...user, displayName: name });
      setIsEditing(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold dark:text-white">👤 Profile</h2>
        <div className="relative w-24 h-24 mx-auto mt-4">
          <Image
            src="/user-avatar.png"
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full border-2 border-gray-300"
          />
        </div>
        <div className="mt-4">
          {isEditing ? (
            <div className="flex items-center justify-center gap-2">
              <input
                type="text"
                className="border p-2 rounded dark:bg-gray-700 dark:text-white"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                className="bg-blue-500 text-white p-2 rounded"
                onClick={handleNameChange}
              >
                Save
              </button>
            </div>
          ) : (
            <h3 className="text-lg dark:text-white">
              {user?.displayName || "No Name Set"}{" "}
              <FaEdit className="inline text-gray-500 cursor-pointer ml-2" onClick={() => setIsEditing(true)} />
            </h3>
          )}
          <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
        </div>
        <button
          className="mt-6 bg-red-500 text-white p-2 w-full rounded flex items-center justify-center gap-2"
          onClick={() => signOut(auth).then(() => router.push("/login"))}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
}
