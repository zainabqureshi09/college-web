"use client";

const LocationPage = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1
        style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}
      >
        Our Location
      </h1>
      <p
        style={{
          textAlign: "center",
          fontSize: "1rem",
          color: "#555",
          marginBottom: "20px",
        }}
      >
        Find us at the following address or view our location on the map below.
      </p>

      {/* Address Section */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333" }}>
         Firoza Khatoon Women College
        </p>
        <p style={{ fontSize: "1rem", color: "#555" }}>
        339 Korangi, Allah Wala Town Sector H Korangi,
          <br />
          Karachi, Sindh, Pakistan
          <br />
          Phone: +923352444024
        </p>
      </div>

      {/* Google Map Embed */}
      <div style={{ textAlign: "center" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.1974634434405!2d67.10708799999999!3d24.8229199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b9ca768ec1d%3A0x53f1741c29e5c526!2sFeroza%20Khatoon%20Girls%20College!5e0!3m2!1sen!2s!4v1734359367317!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{
            border: "0",
            borderRadius: "8px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationPage;
