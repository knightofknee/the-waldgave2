import React, { useState, useRef } from "react";

const WordWithExplanation = ({ word, explanation }) => {
  const [showExplanation, setShowExplanation] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState({});
  const wordRef = useRef(null);

  const handleMouseEnter = () => {
    if (wordRef.current) {
      const rect = wordRef.current.getBoundingClientRect();

      // We'll guess some tooltip dimensions:
      const tooltipWidth = 300;
      const tooltipHeight = 150;

      // Calculate initial position (below the word)
      let top = rect.bottom + 5; // 5px gap
      let left = rect.left;

      // If the tooltip would run outside the viewport on the right,
      // shift it to the left
      if (left + tooltipWidth > window.innerWidth) {
        left = window.innerWidth - tooltipWidth - 10;
      }

      // If the tooltip would run outside the viewport at the bottom,
      // place it above the word instead
      if (top + tooltipHeight > window.innerHeight) {
        top = rect.top - tooltipHeight - 5;
      }

      setTooltipStyle({
        position: "fixed",
        top: `${top}px`,
        left: `${left}px`,
        width: `${tooltipWidth}px`,
        // We'll also apply a maxHeight in case the text is very long
        maxHeight: "200px",
        overflowY: "auto",
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        zIndex: 9999,
        // Helps long words wrap instead of expanding tooltip further
        wordBreak: "break-word",
      });
    }
    setShowExplanation(true);
  };

  const handleMouseLeave = () => setShowExplanation(false);
  const handleClick = () => setShowExplanation((prev) => !prev);

  return (
    <>
      <span
        ref={wordRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          textDecoration: "underline",
          color: "blue",
          cursor: "pointer",
        }}
      >
        {word}
      </span>

      {showExplanation && (
        <div style={tooltipStyle}>
          {explanation}
        </div>
      )}
    </>
  );
};

export default WordWithExplanation;
