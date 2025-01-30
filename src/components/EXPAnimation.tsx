import { useState, useEffect } from "react";

const words = ["Graphics", "ert", "ressive", "ositive", "erienced"];
const typingSpeed = 125; // Speed of typing in milliseconds
const pauseDuration = 1500; // Pause duration in milliseconds
const mainWordPauseDuration = 3000; // Pause duration for the main word in milliseconds

export default function EXPAnimation() {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (letterIndex < words[wordIndex].length) {
        setDisplayedText((prev) => prev + words[wordIndex][letterIndex]);
        setLetterIndex(letterIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayedText("");
          setLetterIndex(0);
          setWordIndex((prev) => (prev < words.length - 1 ? prev + 1 : 0));
        }, wordIndex == 0 ? mainWordPauseDuration : pauseDuration);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [letterIndex, wordIndex]);

  return (
    <div className="text-white text-7xl font-bold mb-4">
      <span className={`rounded-s-full bg-brand-purple pl-5${wordIndex == 0 ? " pr-3" : ""}`}>EXP</span>
      <span className={`text-brand-purple bg-brand-white rounded-e-full pr-5${wordIndex == 0 ? " pl-3" : ""}`}>
        {displayedText}
      </span>
    </div>
  );
}
