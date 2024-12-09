import React, { useState } from "react";
import "./bg.css";

function App() {
  // State to store the current background color
  const [bgColor, setBgColor] = useState("#ffffff");

  // List of colors to choose from
  const colors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#F1C40F",
    "#8E44AD",
    "#1ABC9C",
    "#E74C3C",
  ];

  // Function to change the background color
  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "background-color 0.5s ease",
      }}
    >
      <button
        onClick={changeColor}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          backgroundColor: "#ffffff",
          border: "2px solid #ccc",
          borderRadius: "10px",
          cursor: "pointer",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        Change Background Color
      </button>
    </div>
  );
}

export default App;
