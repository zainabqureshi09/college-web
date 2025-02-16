"use client";

import Image from "next/image";
import Link from "next/link";

const StudentPage = () => {
  // Static data for students
  const students = [
    {
      name: "Amna Iqbal",
      class: "XI Pre Medical",
      achievement: "89.45%",
    },
    {
      name: "Mehak Akhlaq",
      class: "XI Pre Medical",
      achievement: "85.64%",
    },
    {
      name: "Gul Afsha",
      class: "XI Pre Medical",
      achievement: "78.95%",
    },
    {
      name: "Dua Asim",
      class: "XI Computer Science",
      achievement: "82.81%",
    },
    {
      name: "Bisma Shafiq",
      class: "XI Computer Science",
      achievement: "77.8%",
    },
    {
      name: "Eman Amjad",
      class: "XI Computer Science",
      achievement: "75%",
    },
    {
      name: "Bushra Zafar",
      class: "XI Commerce",
      achievement: "89.81%",
    },
    {
      name: "Umaima Aziz",
      class: "XI Commerce",
      achievement: "86.36%",
    },
    {
      name: "Rabia Kanwal",
      class: "XI Commerce",
      achievement: "83.63%",
    },
    {
      name: "Ulfat Bibi",
      class: "XI Humanities",
      achievement: "87.64%",
    },
    {
      name: "Laiba Arshad",
      class: "XI Humanities",
      achievement: "85.45%",
    },
    {
      name: "Batool Jaffery",
      class: "XI Humanities",
      achievement: "83.9%",
    },
  ];

  return (
    <>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginBottom: "20px",
          }}
        >
          Our Achievers
        </h1>
        <p
          style={{
            textAlign: "center",
            fontSize: "1rem",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          Below is the list of students and their achievements.
        </p>
        <Image
          src="/olympaid.jpg"
          alt="Slide 5"
          layout="responsive" // Makes the image responsive
          width={700}
          height={200}
          quality={100} // Set image quality to 100 for sharpness
          className="rounded-lg"
        />
        {/* Student List */}
        <div>
          {students.map((student, index) => (
            <div
              key={index}
              style={{
                marginBottom: "20px",
                backgroundColor: "#f9f9f9",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h2
                style={{
                  fontSize: "1.2rem",
                  color: "#007bff",
                  marginBottom: "10px",
                }}
              >
                {student.name}
              </h2>
              <p style={{ fontSize: "1rem", color: "#333" }}>
                <strong>Class:</strong> {student.class}
              </p>
              <p style={{ fontSize: "1rem", color: "#333" }}>
                <strong>Achievements:</strong> {student.achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full h-auto text-center">
        <h1 className="text-2xl font-bold">Our Yearly Calender</h1>
        <Image
          src="/editedfkwc_page-0001.jpg"
          alt="Slide 5"
          layout="responsive" // Makes the image responsive
          width={500}
          height={100}
          priority
          quality={100} // Set image quality to 100 for sharpness
          className="rounded-lg"
        />
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold">Find Your Results</h2>
        <p className="text-2xl">You can find your result here:</p>
        <div className="text-2xl">
          <Link
            className="text-blue-500 hover:text-blue-200 font-semibold  "
            target="blank"
            href="https://script.google.com/macros/s/AKfycbzhkM5BHHceFzFC-bJ741BIJ4KQhmJkz7bVqXpE4Ky1PTtQseLB3saJfpOoWoLqHQrwWg/exec"
          >
            Click here
          </Link>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default StudentPage;
