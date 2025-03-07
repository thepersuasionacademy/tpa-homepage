import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Play, Video, Brain, MessageSquare, Cpu } from "lucide-react";
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

  const plans = {
    personal: {
      monthly: 27,
      annual: 297,
      savings: Math.round((27 * 12 - 297) / (27 * 12) * 100)
    },
    strategic: {
      monthly: 97,
      annual: 499,
      savings: Math.round((97 * 12 - 499) / (97 * 12) * 100)
    },
    sales: {
      monthly: 297,
      annual: 2999,
      savings: Math.round((297 * 12 - 2999) / (297 * 12) * 100)
    }
  };

  const [activeSection, setActiveSection] = useState("01");

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

  const sections = [
    {
      id: "01",
      title: "On-Demand Streaming",
      subtitle: "Leverage Kenrick Cleveland's 45+ Year Catalogue of Persuasion Training",
      content: (
        <div className="space-y-6 text-lg text-muted-foreground">
          <div className="w-full aspect-video relative rounded-xl overflow-hidden">
            <Image
              src="https://thepersuasionacademycdn.b-cdn.net/Images/Screenshot%202025-03-07%20at%201.14.55%E2%80%AFPM.png"
              alt="On-Demand Streaming"
              fill
              className="object-cover"
            />
          </div>
          <p>
            Known to top business advisors as &quot;The World&apos;s Greatest Persuader&quot; and others as his secret weapon for their success… Kenrick has pioneered the field of business persuasion since the 1980s. His early work still remains the gold standard of getting others to &apos;Yes&apos; quickly, predictably, and ethically.
          </p>
          <p>
            No one on this Earth has produced as much groundbreaking work as Kenrick Cleveland. And The Persuasion Academy is honored to leverage his life&apos;s work into this deep-learning ecosystem so that anyone at any skill level can learn and master Kenrick&apos;s life changing insights.
          </p>
          <p>
            Depending on your Mastery Path Membership Level, you get access to a wide range of these works on-demand.
          </p>
        </div>
      )
    },
    {
      id: "02",
      title: "Neuro-Imprinting Sessions (NIS)",
      subtitle: "Deeply Learn and Integrate Persuasion Principles With Brain-Boosting Technology",
      content: (
        <div className="space-y-6 text-lg text-muted-foreground">
          <div className="w-full aspect-video relative rounded-xl overflow-hidden">
            <Image
              src="https://thepersuasionacademycdn.b-cdn.net/Images/thepowerark_Ultra-realistic_8K_render_of_an_elegant_flowing_neu_c6d59336-97a1-4b5d-8a1c-2ba739e76924.jpeg"
              alt="Neuro-Imprinting Sessions"
              fill
              className="object-cover"
            />
          </div>
          <p>
            In 1985, Kenrick Cleveland accidentally invented a new brain-boosting technology. Through his personal study with Carol Erickson — daughter of Milton Erickson, considered the pioneer of hypnotherapy — Kenrick learned the methods and techniques of breakthrough mental change through hypnosis sessions.
          </p>
          <p>
            While these were the first of their time, they were even more advanced than the kind you see on the market all these years later. That&apos;s because Kenrick blended his mastery of Ericksonian language for change…. with special brainwave encoding technology that helps listeners activate a deep learning state in minutes.
          </p>
          <p>
            Through the years, Kenrick has perfected the production of these Neuro-Imprinting Sessions. Today, they are close to cinematic experiences that place you in the brain state you need to deeply learn strategies for persuasion applied to yourself and others.
          </p>
          <p>
            This technology is also incredibly helpful for emotional state management such as sleep enhancement, stress reduction, and mood boosting. These NIS are included in various programs included in The Persuasion Academy Mastery Paths. They are a core element of deeply learning and applying these life-changing strategies of persuasion.
          </p>
        </div>
      )
    },
    {
      id: "03",
      title: "AI Codex Chat",
      subtitle: "Chat with \"The Great Library of Persuasion\" Seamlessly",
      content: (
        <div className="space-y-6 text-lg text-muted-foreground">
          <div className="w-full aspect-video relative rounded-xl overflow-hidden">
            <iframe
              src="https://supercut.video/embed/the-persuasion-academy/6Orz5C1Ht2g9d0tor9R_vD"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p>
            Indexed with every single framework Kenrick has ever taught…. Every seminar, training, and course made in the past, or continues to make… thousands and thousands of hours of breakthrough insights….
          </p>
          <p>
            Think of The Persuasion Academy AI Codex as the closest thing to a Large Language Model for Persuasion. Any question you have can be answered with crystal clarity, pulling directly from the most relevant persuasion frameworks throughout Kenrick Cleveland&apos;s career.
          </p>
          <p>
            This adds an unrivaled level of personalization in your own journey to mastering persuasive communication, no matter your aim or skill level. One curious question can lead to a deep understanding of the psychology behind what works, and how to put these frameworks into real language.
          </p>
        </div>
      )
    },
    {
      id: "04",
      title: "AI Tool Engine",
      subtitle: "",
      content: (
        <div className="space-y-6 text-lg text-muted-foreground">
          <div className="w-full aspect-video relative rounded-xl overflow-hidden">
            <div style={{ position: 'relative', paddingBottom: '64.63195691202873%', height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/fc92051655b24ced9d9de0216310890e?sid=07e3e341-d7f4-4e4c-abd8-39c774fe3cbc"
                frameBorder="0"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </div>
          </div>
          <p>
            The AI Tool Engine is designed for highly specialized use cases. With these tools, you just put in a few easy inputs and let the advanced AI tools use our highly engineered backend prompting to do the heavy work.
          </p>
          <p>
            Each tool is finely tuned and organized for the use cases you most need. Forget all the other &quot;gurus&quot; giving you a document with the prompts, making you do all the hard work…
          </p>
          <p>
            Now, all you need to know is the simple input you want for each tool, press Generate, and watch the most advanced persuasion frameworks integrate with AI to create outputs that rival the most expert persuaders out there.
          </p>
        </div>
      )
    }
  ];

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

          <div className="w-full max-w-4xl mt-8">
            <div className="grid grid-cols-2 gap-6 mb-8">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all transform hover:-translate-y-1 border border-accent/10 ${
                    activeSection === section.id
                      ? "border-b-2 border-blue-500 bg-accent/10 shadow-lg shadow-blue-500/10"
                      : "border-b-2 border-transparent hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 bg-accent/5"
                  }`}
                >
                  <div className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0 shadow-inner">
                    {section.id === "01" && <Video className="h-5 w-5 text-blue-500" />}
                    {section.id === "02" && <Brain className="h-5 w-5 text-blue-500" />}
                    {section.id === "03" && <MessageSquare className="h-5 w-5 text-blue-500" />}
                    {section.id === "04" && <Cpu className="h-5 w-5 text-blue-500" />}
                  </div>
                  <h3 className="text-xl font-semibold text-left">{section.title}</h3>
                </button>
              ))}
            </div>
            
            <div className="bg-accent/5 rounded-xl p-8 text-left">
              {sections.find(s => s.id === activeSection)?.subtitle && (
                <h4 className="text-xl font-medium mb-4">{sections.find(s => s.id === activeSection)?.subtitle}</h4>
              )}
              {sections.find(s => s.id === activeSection)?.content}
            </div>
          </div>
        </div>

        {/* Newsletter and rotating text section */}
        <div className="flex flex-col items-center justify-center gap-0 pt-12">
          {/* Rotating text */}
          <div className="flex flex-col items-center justify-center w-full max-w-4xl">
            <Badge className="text-2xl px-6 py-2">For the Curious: Experience the Difference</Badge>
            <div className="flex gap-2 flex-col pt-6">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-[800px] text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-tight pb-2">
                The 7-Day Fast Start
              </h2>
              <h3 className="text-2xl md:text-4xl tracking-tighter text-center font-regular pt-4">
                <span className="text-spektr-cyan-50">Your Academy Fast-Start gives you</span>
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
            <div className="w-full flex flex-col items-center">
              <h4 className="text-2xl font-semibold text-center mb-6 pb-2 border-b-2 border-blue-500">Here&apos;s What You Get:</h4>
              <ul className="list-none space-y-4 text-lg mb-8 max-w-2xl w-full">
                <li className="flex items-center gap-3">
                  <MoveRight className="h-4 w-4 text-blue-500" />
                  <span className="text-foreground/90">Your Personal Academy Profile</span>
                </li>
                <li className="flex items-center gap-3">
                  <MoveRight className="h-4 w-4 text-blue-500" />
                  <span className="text-foreground/90">7-Day Path to Mastery Content Series</span>
                </li>
                <li className="flex items-center gap-3">
                  <MoveRight className="h-4 w-4 text-blue-500" />
                  <span className="text-foreground/90">NIS Personal Success Collection</span>
                </li>
                <li className="flex items-center gap-3">
                  <MoveRight className="h-4 w-4 text-blue-500" />
                  <span className="text-foreground/90">5 Fast-Start Precision AI Tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <MoveRight className="h-4 w-4 text-blue-500" />
                  <span className="text-foreground/90">AI Codex Access</span>
                </li>
                <li className="flex items-center gap-3">
                  <MoveRight className="h-4 w-4 text-blue-500" />
                  <span className="text-foreground/90">30 AI Credits</span>
                </li>
              </ul>
            </div>
            <Button size="lg" className="gap-4 text-2xl px-8 py-8 w-full bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white shadow-lg shadow-blue-400/25 transition-all duration-300 hover:shadow-blue-400/40">
              Get the 7-Day Fast-Start For Just $7 <MoveRight className="w-6 h-6" />
            </Button>
            <div className="flex flex-col items-center gap-1 -mt-4">
              <p className="text-base text-muted-foreground">No Hidden Costs. Just $7 One-Time To Fast-Track Your Success.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 