import { Check, Minus, MoveRight, Brain, Bot, Mail, BookOpen, Zap, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const CustomPricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

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
              <p className="text-2xl text-foreground">Personal Mastery</p>
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
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col sticky top-[80px] pt-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
              <p className="text-2xl text-foreground">Strategic Mastery</p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                <span className="text-4xl text-foreground">${isAnnual ? plans.strategic.annual : plans.strategic.monthly}</span>
                <span className="text-sm text-muted-foreground">/ {isAnnual ? 'year' : 'month'}</span>
                {isAnnual && (
                  <Badge className="bg-accent/10 text-accent border-0">
                    Save {plans.strategic.savings}%
                  </Badge>
                )}
              </p>
              <Button className="gap-4 mt-8 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-accent/40">
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col sticky top-[80px] pt-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
              <p className="text-2xl text-foreground">Sales Mastery</p>
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                <span className="text-4xl text-foreground">${isAnnual ? plans.sales.annual : plans.sales.monthly}</span>
                <span className="text-sm text-muted-foreground">/ {isAnnual ? 'year' : 'month'}</span>
                {isAnnual && (
                  <Badge className="bg-accent/10 text-accent border-0">
                    Save {plans.sales.savings}%
                  </Badge>
                )}
              </p>
              <Button variant="outline" className="gap-4 mt-8">
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Coaching Section */}
            <div className="col-span-4 grid grid-cols-4 bg-gradient-to-r from-accent/5 to-accent/10 border-t mt-4">
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                <b className="text-lg text-foreground">Coaching</b>
              </div>
              <div className="py-4"></div>
              <div className="py-4"></div>
              <div className="py-4"></div>
            </div>
            
            {/* Weekly Group Accelerator */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">Weekly Group Accelerator</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            {/* Private Coaching - Annual Only */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">3 Months Private Coaching with Kenrick Cleveland</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-xs">Annual Only</Badge>
            </div>

            {/* Neuro-Imprinting Tech Section */}
            <div className="col-span-4 grid grid-cols-4 bg-gradient-to-r from-accent/5 to-accent/10 border-t mt-4">
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                <b className="text-lg text-foreground">Neuro-Imprinting Tech</b>
              </div>
              <div className="py-4"></div>
              <div className="py-4"></div>
              <div className="py-4"></div>
            </div>
            
            {/* Inner Influence Tech */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">Inner Influence Tech</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            {/* Strategic Influence Tech */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">Strategic Influence Tech</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            {/* Deep Integration Tech */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">Deep Integration Tech</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            {/* Content Section */}
            <div className="col-span-4 grid grid-cols-4 bg-gradient-to-r from-accent/5 to-accent/10 border-t mt-4">
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                <b className="text-lg text-foreground">Content</b>
              </div>
              <div className="py-4"></div>
              <div className="py-4"></div>
              <div className="py-4"></div>
            </div>
            
            {/* Content Collections */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">Reality Creation Pro</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">Inner Influence Classics</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            {/* Update Conquering Confidence with pill */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">Conquering Confidence</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-xs">Annual Only</Badge>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-xs">Annual Only</Badge>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-xs">Annual Only</Badge>
            </div>

            {/* Update Renegade Persuaders with pill */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">Renegade Persuaders</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-xs">Annual Only</Badge>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-xs">Annual Only</Badge>
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">MaxPersuasion Classics</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">DreamState Selling System</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">Power Patterns</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">FRAMEworks</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">NLP Business Practitioner Certification</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">NLP Business Master Practitioner Certification</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            {/* AI Engine Section */}
            <div className="col-span-4 grid grid-cols-4 bg-gradient-to-r from-accent/5 to-accent/10 border-t mt-4">
              <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                <b className="text-lg text-foreground">AI Engine</b>
              </div>
              <div className="py-4"></div>
              <div className="py-4"></div>
              <div className="py-4"></div>
            </div>
            
            {/* Base AI Credits */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">Base AI Credits</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm font-medium">300</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm font-medium">2,000</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm font-medium">10,000</p>
            </div>
            
            {/* AI Collections */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">Personal Mastery AI</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">Hypnosis AI</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span className="text-foreground">Ads AI</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>Emails AI</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>Social Posts AI</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>Short-Form Video Scripts AI</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>Strategic Insight AI</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>Storytelling AI</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>DreamState Selling AI</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>Language Mastery AI</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>Framing Mastery AI</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Minus className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <Check className="w-4 h-4 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 