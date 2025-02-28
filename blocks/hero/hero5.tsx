import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero5 = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "'Influence Insiders' Newsletter.",
      "Neuro-Imprinting Sessions.",
      "50 AI Credits per month.",
      "lessons.",
      "insights.",
      "tips.",
      "strategies.",
      "news.",
      "frameworks.",
      "skills."
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
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 pt-4 pb-20 lg:pb-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4">
              Read our launch article <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h2 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Creating a free account gives you</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-16 md:pt-4 min-h-[200px]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent py-2"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
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
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4 text-2xl px-8 py-8">
              Sign up here <MoveRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
