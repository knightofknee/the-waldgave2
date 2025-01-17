import React, { useState } from "react";

 const WordWithExplanation = ({ word, explanation }) => {
  const [showExplanation, setShowExplanation] = useState(false);

  const handleMouseEnter = () => setShowExplanation(true);
  const handleMouseLeave = () => setShowExplanation(false);
  const handleClick = () => setShowExplanation((prev) => !prev);

  return (
    <span style={{ position: "relative", cursor: "pointer" }}>
      <span
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ textDecoration: "underline", color: "blue" }}
      >
        {word}
      </span>
      {showExplanation && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "5px",
            zIndex: "1000",
            maxWidth: "200px",
          }}
        >
          {explanation}
        </div>
      )}
    </span>
  );
};
export default WordWithExplanation;
