'use client';



interface FacultyCardProps {
  key:number;
  name: string;
  designation: string;
}

export default function FacultyCard({ name, designation}: FacultyCardProps) {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-600">{designation}</p>
      </div>
    </div>
  );
}
