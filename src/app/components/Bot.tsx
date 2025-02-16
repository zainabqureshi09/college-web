"use client";

declare global {
  interface Window {
    voiceflow?: {
      chat: {
        load: (config: { verify: { projectID: string }; url: string; versionID: string }) => void;
      };
    };
  }
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      script.type = "module";

      script.onload = () => {
        if (window.voiceflow) {
          window.voiceflow.chat.load({
            verify: { projectID: "676306d677a8a407e72f8503" },
            url: "https://general-runtime.voiceflow.com",
            versionID: "production",
          });
        }
      };

      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2">
      {/* "Let's Chat With Me" Message */}
      {!isOpen && (
        <motion.div
          className="bg-white text-sm text-gray-800  px-4 py-2 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          💬 Let&apos;s Chat With Me!
        </motion.div>
      )}

      {/* Chat Button */}
      <motion.button
        className=" text-white p-4 rounded-full transition duration-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
      >
        {isOpen ? "❌" : "💬"}
      </motion.button>
      <br />

      {/* Chat Widget */}
      {isOpen && (
        <motion.div
          className="w-80 h-96 shadow-lg rounded-lg p-4 flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <iframe
            src="https://general-runtime.voiceflow.com/embed/676306d677a8a407e72f8503"
            width="100%"
            height="100%"
            className="rounded-lg border"
          />
        </motion.div>
      )}
    </div>
  );
}
