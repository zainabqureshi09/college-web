import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

// ✅ Define Types for Topic & Subject
interface Topic {
  title: string;
  completed: boolean;
}

interface Subject {
  subjectName: string;
  faculty: string;
  topics: Topic[];
}

// ✅ Define Props Type for SubjectCard
interface SubjectCardProps {
  subject: Subject;
}

export default function SubjectCard({ subject }: SubjectCardProps) {
  const [topics, setTopics] = useState<Topic[]>(subject.topics);

  const toggleComplete = (index: number) => {
    const updatedTopics = [...topics];
    updatedTopics[index].completed = !updatedTopics[index].completed;
    setTopics(updatedTopics);
  };

  return (
    <motion.div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-700">{subject.subjectName}</h2>
      <p className="text-gray-500 mb-4">{subject.faculty}</p>
      <ul>
        {topics.map((topic, index) => (
          <li key={index} className="flex justify-between items-center py-2">
            {topic.title}
            <button onClick={() => toggleComplete(index)} className="text-green-500">
              {topic.completed ? <FaCheckCircle /> : "✅ Mark as Done"}
            </button>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
