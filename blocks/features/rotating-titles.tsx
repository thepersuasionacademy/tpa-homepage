import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export const RotatingTitles = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "rich inner resources.",
      "emotional state management.",
      "timeless influence principles.",
      "breakthroughs in modern persuasion.",
      "clear connection frameworks.",
      "pure strategic advantage.",
      "possibilities others can't see.",
      "the Keys to Yes."
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto py-4 -mb-16">
      <h2 className="text-3xl md:text-5xl tracking-tighter text-center font-regular">
        <span className="text-spektr-cyan-50">Inside the Mastery Levels, you wield</span>
        <span className="relative flex w-full justify-center overflow-hidden text-center md:pt-2 min-h-[120px]">
          &nbsp;
          {titles.map((title, index) => (
            <motion.span
              key={index}
              className="absolute font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent py-1"
              initial={{ opacity: 0, y: "-100" }}
              transition={{ type: "spring", stiffness: 50 }}
              animate={
                titleNumber === index
                  ? {
                      y: 0,
                      opacity: 1,
                    }
                  : {
                      y: titleNumber > index ? -100 : 50,
                      opacity: 0,
                    }
              }
            >
              {title}
            </motion.span>
          ))}
        </span>
      </h2>
    </div>
  );
}; 