"use client";
import React, { useState } from "react";

export default function Experience({ experienceList }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <h2 style={{ fontSize: "32px", marginBottom: "1.5rem" }}>EXPERIENCE</h2>

      {experienceList.map((exp, i) => (
        <div
          key={i}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            marginBottom: "2rem",
          }}
        >
          {/* Always-visible section: Title & Date */}
          <div style={{ fontWeight: "bold", fontSize: "24px" }}>
            {exp.title}
          </div>
          <div style={{ fontSize: "14px", opacity: 0.8 }}>{exp.date}</div>

          {/* Hidden content container (description + image) */}
          <div
            style={{
              /* We hide/show it using max-height + opacity. */
              overflow: "hidden",
              textAlign: "center",
              transition: "max-height 0.3s ease, opacity 0.3s ease",
              /* Set a maxHeight large enough to fit your text + image */
              maxHeight: hoveredIndex === i ? "600px" : "0",
              opacity: hoveredIndex === i ? 1 : 0,
              marginTop: "0.5rem",
            }}
          >
            {/* Description, centered */}
            <div style={{ marginBottom: "1rem", opacity: 0.6 }}>
              {exp.description}
            </div>

            {/* Image under description, centered horizontally */}
            {exp.image && (
              <img
                src={exp.image}
                alt={exp.title}
                style={{
                  display: "block",
                  margin: "0 auto",       // centers the image horizontally
                  width: "300px",         // or your preferred width
                  borderRadius: "10px",   // rounded corners
                  border: "1px solid #666",
                }}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}
