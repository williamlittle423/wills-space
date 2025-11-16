"use client"; // ensure it's a client component if it uses React hooks or client-only APIs

import React from "react";

export default function About({ skills, currentSkillIndex, showSkill }) {
  return (
    <>
      <h1 style={{ marginBottom: "1rem", fontSize: "32px" }}>
        HI, I'M WILLIAM LITTLE.
      </h1>
      <p style={{ fontSize: "20px" }}>
          I BELIEVE DATA IS A FOUNDATION FOR BUILDING A BETTER FUTURE. I SPECIALIZE IN APPLYING MACHINE LEARNING, AI, AND COMPUTATIONAL MODELLING TO SOLVE COMPLEX PROBLEMS AND DELIVER IMPACTFUL, DATA-DRIVEN INSIGHTS.
      </p>

      {/* Rotating Skills Section */}
      <p style={{ fontSize: "20px", marginTop: "2rem" }}>
        I AM PASSIONATE ABOUT AND SKILLED IN{" "}
        <span
          style={{
            backgroundColor: "#fff",
            color: "#000",
            padding: "2px 4px",
            transition: "opacity 0.5s ease-in-out",
            opacity: showSkill ? 1 : 0,
          }}
        >
          {skills[currentSkillIndex]}
        </span>
        .
      </p>

      {/* Residence/Uni Info */}
      <p style={{ fontSize: "20px", marginTop: "2rem" }}>
          I’M CURRENTLY BASED IN HONOLULU, HAWAI‘I, PURSUING MY MASTER’S IN COMPUTER SCIENCE AT THE UNIVERSITY OF HAWAI‘I AT MĀNOA. I HOLD A BACHELOR’S DEGREE IN ENGINEERING PHYSICS WITH A SPECIALIZATION IN COMPUTING APPLICATIONS FROM QUEEN’S UNIVERSITY.</p>
      {/* GITHUB Link */}
      <p style={{ fontSize: "20px", marginTop: "2rem" }}>
        TAKE A LOOK AT MY WORK ON MY{" "}
        <a
          href="https://www.github.com/williamlittle423"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            padding: "2px 4px",
            textDecoration: "none",
          }}
        >
          GITHUB
        </a>
        .
      </p>
    </>
  );
}
