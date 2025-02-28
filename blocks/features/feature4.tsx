import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Feature4 = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "'Influence Insiders' Newsletter.",
      "Neuro-Imprinting Sessions.",
      "50 AI Credits per month.",
      "exclusive lessons.",
      "expert insights.",
      "proven tips.",
      "winning strategies.",
      "industry news.",
      "proven frameworks.",
      "breakthrough skills."
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
    <div className="w-full pt-8 pb-0">
      <div className="container mx-auto">
        {/* Original Feature4 content */}
        <div className="flex flex-col items-center justify-center text-center gap-8 mb-4">
          <Badge className="text-2xl px-6 py-2">The Persuasion Academy</Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-[800px] text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Master the Art and Science of Influence
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[600px] text-center">
            While Slicing The Typical Learning Curve With the World&apos;s First Deep Learning Ecosystem, Built For Breakthrough Skill-Building
          </p>
          
          {/* Video Section */}
          <div className="w-full max-w-4xl aspect-video relative rounded-2xl overflow-hidden bg-accent/5 border border-accent/10 mt-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="h-20 w-20 rounded-full bg-accent/90 hover:bg-accent flex items-center justify-center transition-all hover:scale-105">
                <Play className="h-10 w-10 text-background ml-1" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          <div className="w-full max-w-3xl mt-8">
            <Accordion type="multiple" defaultValue={["item-1", "item-2", "item-3"]} className="w-full">
              <AccordionItem value="item-1" className="border-none mb-4">
                <AccordionTrigger className="hover:no-underline bg-accent/5 hover:bg-accent/10 px-6 py-4 rounded-xl transition-all data-[state=open]:rounded-b-none data-[state=open]:bg-accent/10">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-accent">01</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-left">Neuro-Imprinting Technology</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-accent/5 px-6 py-4 rounded-b-xl text-left">
                  <p className="text-lg text-muted-foreground mx-14 text-left">
                    Ericksoninian-inspired hypnosis session + cutting-edge brainwave encoding technology = breakthrough deep learning and emotional state mastery
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-none mb-4">
                <AccordionTrigger className="hover:no-underline bg-accent/5 hover:bg-accent/10 px-6 py-4 rounded-xl transition-all data-[state=open]:rounded-b-none data-[state=open]:bg-accent/10">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-accent">02</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-left">World-Leading Persuasion Frameworks</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-accent/5 px-6 py-4 rounded-b-xl text-left">
                  <p className="text-lg text-muted-foreground mx-14 text-left">
                    Cut the theory and overly technical nonsense... let&apos;s apply modern psychology with masterful language and strategic insights you won&apos;t find anywhere else.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-none">
                <AccordionTrigger className="hover:no-underline bg-accent/5 hover:bg-accent/10 px-6 py-4 rounded-xl transition-all data-[state=open]:rounded-b-none data-[state=open]:bg-accent/10">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-accent">03</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-left">Custom-Built AI Engine</h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-accent/5 px-6 py-4 rounded-b-xl text-left">
                  <p className="text-lg text-muted-foreground mx-14 text-left">
                    It&apos;s okay to laugh at all the other gurus throwing ChatGPT prompts at you... they&apos;re trying to keep up. Here, you have a complete engine, filled with countless AI tools with all the complex prompting pre-built... so all you have to do is put in simple inputs... and receive breath-taking responses.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Newsletter and rotating text section */}
        <div className="flex flex-col items-center justify-center gap-0 pt-12">
          {/* Rotating text */}
          <div className="flex flex-col items-center justify-center w-full max-w-4xl">
            <Badge className="text-2xl px-6 py-2">For the Curious: Test-Drive the Academy</Badge>
            <div className="flex gap-2 flex-col pt-6">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-[800px] text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Taste the Future
              </h2>
              <h3 className="text-2xl md:text-4xl tracking-tighter text-center font-regular pt-4">
                <span className="text-spektr-cyan-50">Creating a free account gives you</span>
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
              </h3>
            </div>
          </div>

          {/* Newsletter mockup and signup */}
          <div className="flex flex-col items-center gap-8 w-full max-w-4xl -mt-4">
            <div className="w-full aspect-[16/9] relative rounded-2xl overflow-hidden border border-accent/20 shadow-xl">
              <Image
                src="https://thepersuasionacademycdn.b-cdn.net/Images/Newsletter-Mockup.png"
                alt="Newsletter Mockup"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            <Button size="lg" className="gap-4 text-2xl px-8 py-8 w-full max-w-md bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white shadow-lg shadow-blue-400/25 transition-all duration-300 hover:shadow-blue-400/40">
              Create Your Free Account <MoveRight className="w-6 h-6" />
            </Button>
            <div className="flex flex-col items-center gap-1 -mt-4">
              <p className="text-sm text-muted-foreground">No Credit Card Required</p>
              <p className="text-sm text-muted-foreground">No Tech Support Given</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 