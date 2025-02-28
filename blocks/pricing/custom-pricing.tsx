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
            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
              Choose Your Persuasion Path
            </h2>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
              Unlock your persuasion potential with our powerful solution packages
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center gap-4 mt-8">
            <span className={!isAnnual ? "font-semibold" : "text-muted-foreground"}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`w-16 h-8 rounded-full p-1 transition-colors duration-200 ease-in-out ${
                isAnnual ? "bg-accent" : "bg-gray-200"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-white transition-transform duration-200 ease-in-out ${
                  isAnnual ? "translate-x-8" : "translate-x-0"
                }`}
              />
            </button>
            <span className={isAnnual ? "font-semibold" : "text-muted-foreground"}>Annual</span>
          </div>

          <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x pt-20">
            <div className="col-span-3 lg:col-span-1"></div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
              <p className="text-2xl">Personal Mastery</p>
              <p className="text-sm text-muted-foreground">
                Master the fundamentals of persuasion and influence
              </p>
              {isAnnual && (
                <Badge className="self-start mt-4 bg-accent/10 text-accent border-0">
                  Save {plans.personal.savings}%
                </Badge>
              )}
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                <span className="text-4xl">${isAnnual ? plans.personal.annual : plans.personal.monthly}</span>
                <span className="text-sm text-muted-foreground">/ {isAnnual ? 'year' : 'month'}</span>
              </p>
              <Button variant="outline" className="gap-4 mt-8">
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
              <p className="text-2xl">Strategic Mastery</p>
              <p className="text-sm text-muted-foreground">
                Advanced persuasion techniques for professionals
              </p>
              {isAnnual && (
                <Badge className="self-start mt-4 bg-accent/10 text-accent border-0">
                  Save {plans.strategic.savings}%
                </Badge>
              )}
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                <span className="text-4xl">${isAnnual ? plans.strategic.annual : plans.strategic.monthly}</span>
                <span className="text-sm text-muted-foreground">/ {isAnnual ? 'year' : 'month'}</span>
              </p>
              <Button className="gap-4 mt-8 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-accent/40">
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
              <p className="text-2xl">Sales Mastery</p>
              <p className="text-sm text-muted-foreground">
                Complete persuasion system for sales professionals
              </p>
              {isAnnual && (
                <Badge className="self-start mt-4 bg-accent/10 text-accent border-0">
                  Save {plans.sales.savings}%
                </Badge>
              )}
              <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-4">
                <span className="text-4xl">${isAnnual ? plans.sales.annual : plans.sales.monthly}</span>
                <span className="text-sm text-muted-foreground">/ {isAnnual ? 'year' : 'month'}</span>
              </p>
              <Button variant="outline" className="gap-4 mt-8">
                Get Started <MoveRight className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Coaching Section */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t mt-4">
              <b className="text-lg">Coaching</b>
            </div>
            <div className="border-t mt-4"></div>
            <div className="border-t mt-4"></div>
            <div className="border-t mt-4"></div>
            
            {/* Weekly Group Accelerator */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>Weekly Group Accelerator</span>
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
            {isAnnual && (
              <>
                <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                  <div className="flex items-center gap-2">
                    <span>3 Months Private Coaching with Kenrick Cleveland</span>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-xs">Annual Only</Badge>
                  </div>
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
              </>
            )}

            {/* Neuro-Imprinting Tech Section */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t mt-4">
              <b className="text-lg">Neuro-Imprinting Tech</b>
            </div>
            <div className="border-t mt-4"></div>
            <div className="border-t mt-4"></div>
            <div className="border-t mt-4"></div>
            
            {/* Inner Influence Tech */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>Inner Influence Tech</span>
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
              <span>Strategic Influence Tech</span>
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
              <span>Deep Integration Tech</span>
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
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t mt-4">
              <b className="text-lg">Content</b>
            </div>
            <div className="border-t mt-4"></div>
            <div className="border-t mt-4"></div>
            <div className="border-t mt-4"></div>
            
            {/* Content Collections */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>Reality Creation Pro</span>
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
              <span>Inner Influence Classics</span>
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
            {isAnnual && (
              <>
                <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                  <div className="flex items-center gap-2">
                    <span>Conquering Confidence</span>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-xs">Annual Only</Badge>
                  </div>
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
              </>
            )}

            {/* Update Renegade Persuaders with pill */}
            {isAnnual && (
              <>
                <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                  <div className="flex items-center gap-2">
                    <span>Renegade Persuaders</span>
                    <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-xs">Annual Only</Badge>
                  </div>
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
              </>
            )}

            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>MaxPersuasion Classics</span>
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
              <span>DreamState Selling System</span>
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
              <span>Power Patterns</span>
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
              <span>FRAMEworks</span>
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
              <span>NLP Business Practitioner Certification</span>
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
              <span>NLP Business Master Practitioner Certification</span>
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
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4 border-t mt-4">
              <b className="text-lg">AI Engine</b>
            </div>
            <div className="border-t mt-4"></div>
            <div className="border-t mt-4"></div>
            <div className="border-t mt-4"></div>
            
            {/* Base AI Credits */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>Base AI Credits</span>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm">300</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm">2,000</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
              <p className="text-muted-foreground text-sm">10,000</p>
            </div>
            
            {/* AI Collections */}
            <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
              <span>Personal Mastery AI</span>
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
              <span>Hypnosis AI</span>
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
              <span>Ads AI</span>
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