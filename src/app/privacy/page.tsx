import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FKWC College",
  description: "Read our privacy policy to understand how we collect, use, and protect your data.",
};

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-600 dark:text-white mb-4">Privacy Policy</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Welcome to FKWC College. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">1. Information We Collect</h2>
      <p className="text-gray-600 dark:text-gray-300">
        We may collect personal information such as your name, email address, phone number, and other details when you register for courses, use our website, or contact us.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">2. How We Use Your Information</h2>
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
        <li>To provide educational services and resources.</li>
        <li>To communicate important updates about courses and events.</li>
        <li>To improve our website and user experience.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">3. Data Security</h2>
      <p className="text-gray-600 dark:text-gray-300">
        We implement security measures to protect your data. However, no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">4. Third-Party Services</h2>
      <p className="text-gray-600 dark:text-gray-300">
        We may use third-party services such as Google Analytics to analyze traffic and improve our website.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">5. Your Rights</h2>
      <p className="text-gray-600 dark:text-gray-300">
        You have the right to access, update, or delete your personal data. If you have any privacy-related concerns, please contact us.
      </p>

      <h2 className="text-2xl font-semibold mt-6 text-gray-800 dark:text-gray-200">6. Updates to This Policy</h2>
      <p className="text-gray-600 dark:text-gray-300">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page.
      </p>

      <p className="mt-6 text-gray-500 dark:text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
    </div>
  );
};

export default PrivacyPolicy;
