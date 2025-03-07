import { Check, Minus, MoveRight, Brain, Bot, Mail, BookOpen, Zap, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { FeatureDrawer, FeatureInfo } from "@/components/feature-drawer";
import { features } from "@/data/features";
import { motion } from "framer-motion";

export const CustomPricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureInfo | null>(null);
  const [titleNumber, setTitleNumber] = useState(0);

  const titles = [
    "rich inner resources.",
    "emotional state management.",
    "timeless influence principles.",
    "breakthroughs in modern persuasion.",
    "clear connection frameworks.",
    "pure strategic advantage.",
    "possibilities others can't see.",
    "the Keys to Yes."
  ];

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

  const plans = {
    personal: {
      monthly: 27,
      annual: 249,
      savings: Math.round((27 * 12 - 249) / (27 * 12) * 100)
    },
    strategic: {
      monthly: 97,
      annual: 497,
      savings: Math.round((97 * 12 - 497) / (97 * 12) * 100)
    },
    sales: {
      monthly: 297,
      annual: 2997,
      savings: Math.round((297 * 12 - 2997) / (297 * 12) * 100)
    }
  };

  const handleFeatureClick = (featureKey: string) => {
    const feature = features[featureKey];
    if (feature) {
      setSelectedFeature(feature);
    }
  };

  // Add feature categories and feature availability logic
  const featureCategories = {
    coaching: ["Weekly Group Accelerator", "3 Months Private Coaching"],
    neuroTech: ["Inner Influence Tech", "Strategic Influence Tech", "Deep Integration Tech"],
    content: [
      "Reality Creation Pro", 
      "Inner Influence Classics", 
      "Conquering Confidence", 
      "Renegade Persuaders", 
      "MaxPersuasion Classics", 
      "DreamState Selling System", 
      "Power Patterns", 
      "FRAMEworks", 
      "NLP Business Practitioner Certification", 
      "NLP Business Master Practitioner Certification"
    ],
    aiEngine: [
      "Personal Mastery AI",
      "Hypnosis AI",
      "Ads AI",
      "Emails AI",
      "Social Posts AI",
      "Short-Form Video Scripts AI",
      "Strategic Insight AI",
      "Storytelling AI",
      "DreamState Selling AI",
      "Language Mastery AI",
      "Framing Mastery AI"
    ]
  };

  const renderFeatureAvailability = (plan: 'personal' | 'strategic' | 'sales', featureKey: string) => {
    const featureAvailability = {
      personal: [
        "Inner Influence Tech", "Reality Creation Pro", "Inner Influence Classics", 
        "Personal Mastery AI", "Hypnosis AI"
      ],
      strategic: [
        "Inner Influence Tech", "Strategic Influence Tech", "Reality Creation Pro", 
        "Inner Influence Classics", "MaxPersuasion Classics", "Personal Mastery AI", 
        "Hypnosis AI", "Ads AI", "Emails AI", "Social Posts AI", "Short-Form Video Scripts AI", 
        "Strategic Insight AI", "Storytelling AI"
      ],
      sales: [
        "Weekly Group Accelerator", "Inner Influence Tech", "Strategic Influence Tech", 
        "Deep Integration Tech", "Reality Creation Pro", "Inner Influence Classics", 
        "MaxPersuasion Classics", "DreamState Selling System", "Power Patterns", 
        "FRAMEworks", "NLP Business Practitioner Certification", 
        "NLP Business Master Practitioner Certification", "Personal Mastery AI", 
        "Hypnosis AI", "Ads AI", "Emails AI", 
        "Short-Form Video Scripts AI", "Strategic Insight AI", "Storytelling AI", 
        "DreamState Selling AI", "Language Mastery AI", "Framing Mastery AI"
      ]
    };

    const annualOnlyFeatures = [
      "3 Months Private Coaching", "Conquering Confidence", "Renegade Persuaders"
    ];

    if (annualOnlyFeatures.includes(featureKey)) {
      if (featureKey === "Conquering Confidence") {
        return <Badge variant="outline" className={`${isAnnual ? "bg-accent/10 text-accent" : "bg-muted/50 text-muted-foreground"} border-0 text-sm whitespace-nowrap`}>Annual Only</Badge>;
      }
      if (featureKey === "Renegade Persuaders" && plan !== "personal") {
        return <Badge variant="outline" className={`${isAnnual ? "bg-accent/10 text-accent" : "bg-muted/50 text-muted-foreground"} border-0 text-sm whitespace-nowrap`}>Annual Only</Badge>;
      }
      if (featureKey === "3 Months Private Coaching" && plan === "sales") {
        return <Badge variant="outline" className={`${isAnnual ? "bg-accent/10 text-accent" : "bg-muted/50 text-muted-foreground"} border-0 text-sm whitespace-nowrap`}>Annual Only</Badge>;
      }
      return null;
    }

    return featureAvailability[plan].includes(featureKey) ? (
      <Check className="w-4 h-4 text-accent stroke-[3]" />
    ) : null;
  };

  return (
    <div className="w-full py-8 lg:py-20">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-2 flex-col">
          <Badge className="text-2xl px-6 py-2">For the Serious: Invest In Your Success</Badge>
          <div className="flex gap-2 flex-col pt-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter max-w-[800px] text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Commit to Excellence
            </h2>
            <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto pt-4">
              <h3 className="text-2xl md:text-4xl tracking-tighter text-center font-regular">
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
              </h3>
            </div>
          </div>

          <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x border border-border rounded-lg">
            <div className="col-span-3 lg:col-span-1 sticky top-[80px] bg-background flex items-center justify-center border-r border-border">
              {/* Billing Pills */}
              <div className="flex flex-col gap-2 px-3 lg:px-6 py-4">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-full transition-all duration-200 ease-in-out ${
                    !isAnnual 
                      ? "bg-accent text-white shadow-lg shadow-accent/25" 
                      : "bg-white border border-accent text-black hover:bg-gray-50"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-full transition-all duration-200 ease-in-out ${
                    isAnnual 
                      ? "bg-accent text-white shadow-lg shadow-accent/25" 
                      : "bg-white border border-accent text-black hover:bg-gray-50"
                  }`}
                >
                  Annual
                </button>
                <p className="text-base text-muted-foreground text-left mt-2">
                  <b>NOTE:</b> Click on any item below for more details
                </p>
              </div>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col sticky top-[80px] bg-background border-b border-border">
              <div className="border-t-2 border-accent/20 -mx-6 -mt-4 pt-4 px-6">
                <div className="text-xs font-medium text-accent/80 mb-2">Personal Development</div>
                <p className="text-2xl text-foreground">Master of Self</p>
              </div>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                <span className="text-4xl text-foreground">${isAnnual ? plans.personal.annual : plans.personal.monthly}</span>
                <span className="text-sm text-muted-foreground">per {isAnnual ? 'year' : 'month'}</span>
                {isAnnual && (
                  <Badge className="bg-accent/10 text-accent border-0">
                    Save {plans.personal.savings}%
                  </Badge>
                )}
              </p>
              <Button variant="outline" className="gap-4 mt-8 border-[0.25px] border-black dark:border-white text-xl">
                Enroll <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col sticky top-[80px] bg-background border-b border-r border-border">
              <div className="border-t-2 border-accent/20 -mx-6 -mt-4 pt-4 px-6">
                <div className="text-xs font-medium text-accent mb-2">Boost Career Skills</div>
                <p className="text-2xl text-foreground">Master of Strategy</p>
              </div>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                <span className="text-4xl text-foreground">${isAnnual ? plans.strategic.annual : plans.strategic.monthly}</span>
                <span className="text-sm text-muted-foreground">per {isAnnual ? 'year' : 'month'}</span>
                {isAnnual && (
                  <Badge className="bg-accent/10 text-accent border-0">
                    Save {plans.strategic.savings}%
                  </Badge>
                )}
              </p>
              <Button className="gap-4 mt-8 dark:bg-white dark:text-black bg-black text-white hover:bg-black/90 dark:hover:bg-white/90 text-xl">
                Enroll <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col sticky top-[80px] bg-background border-b border-r border-border">
              <div className="border-t-2 border-accent -mx-6 -mt-4 pt-4 px-6">
                <div className="text-xs font-medium text-accent mb-2">Coaching Included</div>
                <p className="text-2xl text-foreground">Master of Sales</p>
              </div>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                <span className="text-4xl text-foreground">${isAnnual ? plans.sales.annual : plans.sales.monthly}</span>
                <span className="text-sm text-muted-foreground">per {isAnnual ? 'year' : 'month'}</span>
                {isAnnual && (
                  <Badge className="bg-accent/10 text-accent border-0">
                    Save {plans.sales.savings}%
                  </Badge>
                )}
              </p>
              <Button className="gap-4 mt-8 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-accent/40 text-xl">
                Enroll <MoveRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Coaching Section */}
            <div className="col-span-4 grid grid-cols-4 bg-gradient-to-r from-accent/5 to-accent/10 border-t border-border">
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                <b className="text-2xl text-foreground">Coaching</b>
              </div>
              <div className="py-4"></div>
              <div className="py-4"></div>
              <div className="py-4"></div>
            </div>
            
            {/* Weekly Group Accelerator */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Weekly Group Accelerator")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Weekly Group Accelerator
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            {/* Private Coaching - Annual Only */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("3 Months Private Coaching")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                3 Months Private Coaching with Kenrick Cleveland
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center h-full border-t border-border">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-lg whitespace-nowrap">Annual Only</Badge>
            </div>

            {/* Neuro-Imprinting Tech Section */}
            <div className="col-span-4 grid grid-cols-4 bg-gradient-to-r from-accent/5 to-accent/10 border-t border-border">
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                <b className="text-2xl text-foreground">Neuro-Imprinting Tech</b>
              </div>
              <div className="py-4"></div>
              <div className="py-4"></div>
              <div className="py-4"></div>
            </div>
            
            {/* Inner Influence Tech */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Inner Influence Tech")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Inner Influence Tech
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            {/* Strategic Influence Tech */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Strategic Influence Tech")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Strategic Influence Tech
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-2" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-2" />
            </div>

            {/* Deep Integration Tech */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Deep Integration Tech")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Deep Integration Tech
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-2" />
            </div>

            {/* Content Section */}
            <div className="col-span-4 grid grid-cols-4 bg-gradient-to-r from-accent/5 to-accent/10 border-t border-border">
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <b className="text-2xl text-foreground">Content</b>
                  <span className="text-lg text-muted-foreground">
                    {isAnnual 
                      ? "(Instant Access to ALL Lessons Inside Each Course)"
                      : "(One Lesson Releases Per Week for Each Course)"}
                  </span>
                </div>
              </div>
              <div className="py-4"></div>
              <div className="py-4"></div>
              <div className="py-4"></div>
            </div>
            
            {/* Content Collections */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Reality Creation Pro")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Reality Creation Pro
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Inner Influence Classics")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Inner Influence Classics
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            {/* Update Conquering Confidence with pill */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Conquering Confidence")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Conquering Confidence
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-lg">Annual Only</Badge>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-lg">Annual Only</Badge>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-lg">Annual Only</Badge>
            </div>

            {/* Update Renegade Persuaders with pill */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Renegade Persuaders")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Renegade Persuaders
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-lg">Annual Only</Badge>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-lg">Annual Only</Badge>
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("MaxPersuasion Classics")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                MaxPersuasion Classics
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("DreamState Selling System")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                DreamState Selling System
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Power Patterns")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Power Patterns
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("FRAMEworks")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                FRAMEworks
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("NLP Business Practitioner Certification")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                NLP Business Practitioner Certification
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("NLP Business Master Practitioner Certification")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                NLP Business Master Practitioner Certification
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            {/* AI Engine Section */}
            <div className="col-span-4 grid grid-cols-4 bg-gradient-to-r from-accent/5 to-accent/10 border-t border-border">
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                <b className="text-2xl text-foreground">AI Engine</b>
              </div>
              <div className="py-4"></div>
              <div className="py-4"></div>
              <div className="py-4"></div>
            </div>
            
            {/* Base AI Credits */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <span className="text-lg text-foreground">Base AI Credits</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <p className="text-lg text-muted-foreground font-medium">200</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <p className="text-lg text-muted-foreground font-medium">1,000</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <p className="text-lg text-muted-foreground font-medium">5,000</p>
            </div>
            
            {/* AI Collections */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Personal Mastery AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Personal Mastery AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Hypnosis AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Hypnosis AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Ads AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Ads AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Emails AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Emails AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Social Posts AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Social Posts AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Short-Form Video Scripts AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Short-Form Video Scripts AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Strategic Insight AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Strategic Insight AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Storytelling AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Storytelling AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("DreamState Selling AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                DreamState Selling AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Language Mastery AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Language Mastery AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t border-r border-border">
              <button 
                onClick={() => handleFeatureClick("Framing Mastery AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Framing Mastery AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-r border-border"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center border-t border-border">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
          </div>
        </div>
      </div>

      {/* Add the FeatureDrawer at the end */}
      {selectedFeature && (
        <FeatureDrawer
          isOpen={!!selectedFeature}
          onClose={() => setSelectedFeature(null)}
          feature={selectedFeature}
        />
      )}
    </div>
  );
}; 