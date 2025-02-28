import { Check, Minus, MoveRight, Brain, Bot, Mail, BookOpen, Zap, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FeatureDrawer, FeatureInfo } from "@/components/feature-drawer";
import { features } from "@/data/features";

export const CustomPricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureInfo | null>(null);

  const plans = {
    personal: {
      monthly: 29,
      annual: 299,
      savings: Math.round((29 * 12 - 299) / (29 * 12) * 100)
    },
    strategic: {
      monthly: 99,
      annual: 499,
      savings: Math.round((99 * 12 - 499) / (99 * 12) * 100)
    },
    sales: {
      monthly: 299,
      annual: 2999,
      savings: Math.round((299 * 12 - 2999) / (299 * 12) * 100)
    }
  };

  const handleFeatureClick = (featureKey: string) => {
    const feature = features[featureKey];
    if (feature) {
      setSelectedFeature(feature);
    }
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          <Badge>Pricing</Badge>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular text-foreground">
              Choose Your Persuasion Path
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Unlock your persuasion potential with our powerful solution packages
            </p>
          </div>

          <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x pt-20">
            <div className="col-span-3 lg:col-span-1 sticky top-[80px] pt-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
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
              </div>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col sticky top-[80px] pt-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
              <div className="-mx-6 -mt-4 pt-4 px-6">
                <div className="text-xs font-medium text-accent/80 mb-2">Most Affordable</div>
                <p className="text-2xl text-foreground">Personal Mastery</p>
              </div>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                <span className="text-4xl text-foreground">${isAnnual ? plans.personal.annual : plans.personal.monthly}</span>
                <span className="text-sm text-muted-foreground">/ {isAnnual ? 'year' : 'month'}</span>
                {isAnnual && (
                  <Badge className="bg-accent/10 text-accent border-0">
                    Save {plans.personal.savings}%
                  </Badge>
                )}
              </p>
              <Button variant="outline" className="gap-4 mt-8">
                Enroll <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col sticky top-[80px] pt-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
              <div className="border-t-2 border-accent/20 -mx-6 -mt-4 pt-4 px-6">
                <div className="text-xs font-medium text-accent mb-2">Most Popular</div>
                <p className="text-2xl text-foreground">Strategic Mastery</p>
              </div>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                <span className="text-4xl text-foreground">${isAnnual ? plans.strategic.annual : plans.strategic.monthly}</span>
                <span className="text-sm text-muted-foreground">/ {isAnnual ? 'year' : 'month'}</span>
                {isAnnual && (
                  <Badge className="bg-accent/10 text-accent border-0">
                    Save {plans.strategic.savings}%
                  </Badge>
                )}
              </p>
              <Button variant="outline" className="gap-4 mt-8 border-accent text-accent hover:bg-accent hover:text-white">
                Enroll <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col sticky top-[80px] pt-4 bg-gradient-to-r from-accent/5 to-accent/10 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
              <div className="border-t-2 border-accent -mx-6 -mt-4 pt-4 px-6">
                <div className="text-xs font-medium text-accent mb-2">Best Value</div>
                <p className="text-2xl text-foreground">Sales Mastery</p>
              </div>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                <span className="text-4xl text-foreground">${isAnnual ? plans.sales.annual : plans.sales.monthly}</span>
                <span className="text-sm text-muted-foreground">/ {isAnnual ? 'year' : 'month'}</span>
                {isAnnual && (
                  <Badge className="bg-accent/10 text-accent border-0">
                    Save {plans.sales.savings}%
                  </Badge>
                )}
              </p>
              <Button className="gap-4 mt-8 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-accent/40">
                Enroll <MoveRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Coaching Section */}
            <div className="col-span-4 grid grid-cols-4 bg-gradient-to-r from-accent/5 to-accent/10 border-t mt-4">
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                <b className="text-2xl text-foreground">Coaching</b>
              </div>
              <div className="py-4"></div>
              <div className="py-4"></div>
              <div className="py-4"></div>
            </div>
            
            {/* Weekly Group Accelerator */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Weekly Group Accelerator")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Weekly Group Accelerator
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            {/* Private Coaching - Annual Only */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("3 Months Private Coaching")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                3 Months Private Coaching with Kenrick Cleveland
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center h-full">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-lg whitespace-nowrap">Annual Only</Badge>
            </div>

            {/* Neuro-Imprinting Tech Section */}
            <div className="col-span-4 grid grid-cols-4 bg-gradient-to-r from-accent/5 to-accent/10 border-t mt-4">
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                <b className="text-2xl text-foreground">Neuro-Imprinting Tech</b>
              </div>
              <div className="py-4"></div>
              <div className="py-4"></div>
              <div className="py-4"></div>
            </div>
            
            {/* Inner Influence Tech */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Inner Influence Tech")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Inner Influence Tech
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            {/* Strategic Influence Tech */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Strategic Influence Tech")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Strategic Influence Tech
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-2" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-2" />
            </div>

            {/* Deep Integration Tech */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Deep Integration Tech")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Deep Integration Tech
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-2" />
            </div>

            {/* Content Section */}
            <div className="col-span-4 grid grid-cols-4 bg-gradient-to-r from-accent/5 to-accent/10 border-t mt-4">
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
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Reality Creation Pro")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Reality Creation Pro
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Inner Influence Classics")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Inner Influence Classics
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            {/* Update Conquering Confidence with pill */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Conquering Confidence")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Conquering Confidence
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-lg">Annual Only</Badge>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-lg">Annual Only</Badge>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-lg">Annual Only</Badge>
            </div>

            {/* Update Renegade Persuaders with pill */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Renegade Persuaders")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Renegade Persuaders
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-lg">Annual Only</Badge>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-lg">Annual Only</Badge>
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("MaxPersuasion Classics")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                MaxPersuasion Classics
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("DreamState Selling System")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                DreamState Selling System
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Power Patterns")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Power Patterns
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("FRAMEworks")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                FRAMEworks
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("NLP Business Practitioner Certification")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                NLP Business Practitioner Certification
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("NLP Business Master Practitioner Certification")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                NLP Business Master Practitioner Certification
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            {/* AI Engine Section */}
            <div className="col-span-4 grid grid-cols-4 bg-gradient-to-r from-accent/5 to-accent/10 border-t mt-4">
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                <b className="text-2xl text-foreground">AI Engine</b>
              </div>
              <div className="py-4"></div>
              <div className="py-4"></div>
              <div className="py-4"></div>
            </div>
            
            {/* Base AI Credits */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-lg text-foreground">Base AI Credits</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-lg text-muted-foreground font-medium">300</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-lg text-muted-foreground font-medium">2,000</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-lg text-muted-foreground font-medium">10,000</p>
            </div>
            
            {/* AI Collections */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Personal Mastery AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Personal Mastery AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Hypnosis AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Hypnosis AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Ads AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Ads AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Emails AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Emails AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Social Posts AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Social Posts AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Short-Form Video Scripts AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Short-Form Video Scripts AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Strategic Insight AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Strategic Insight AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Storytelling AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Storytelling AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("DreamState Selling AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                DreamState Selling AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Language Mastery AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Language Mastery AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-5 h-5 text-accent stroke-[3]" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <button 
                onClick={() => handleFeatureClick("Framing Mastery AI")}
                className="text-lg text-foreground hover:text-accent transition-colors text-left w-full"
              >
                Framing Mastery AI
              </button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
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