import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FeatureDrawer, FeatureInfo } from "@/components/feature-drawer";
import { features } from "@/data/features";

export const MobilePricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<FeatureInfo | null>(null);

  const plans = {
    personal: {
      title: "Master of Self",
      description: "Personal Development",
      monthly: 27,
      annual: 249,
      savings: Math.round((27 * 12 - 249) / (27 * 12) * 100)
    },
    strategic: {
      title: "Master of Strategy",
      description: "Boost Career Skills",
      monthly: 97,
      annual: 497,
      savings: Math.round((97 * 12 - 497) / (97 * 12) * 100)
    },
    sales: {
      title: "Master of Sales",
      description: "Coaching Included",
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

  const renderFeatureAvailability = (plan: 'personal' | 'strategic' | 'sales', featureKey: string) => {
    // This function determines if a feature is available for a specific plan
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
        "Hypnosis AI", "Ads AI", "Emails AI", "Social Posts AI", 
        "Short-Form Video Scripts AI", "Strategic Insight AI", "Storytelling AI", 
        "DreamState Selling AI", "Language Mastery AI", "Framing Mastery AI"
      ]
    };

    const annualOnlyFeatures = [
      "3 Months Private Coaching", "Conquering Confidence", "Renegade Persuaders"
    ];

    if (annualOnlyFeatures.includes(featureKey)) {
      // For Conquering Confidence, show Annual Only badge for all plans
      if (featureKey === "Conquering Confidence") {
        return <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-sm whitespace-nowrap">Annual Only</Badge>;
      }
      
      // For Renegade Persuaders, only show for strategic and sales plans
      if (featureKey === "Renegade Persuaders" && plan !== "personal") {
        return <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-sm whitespace-nowrap">Annual Only</Badge>;
      }
      
      // For 3 Months Private Coaching, only show for sales plan
      if (featureKey === "3 Months Private Coaching" && plan === "sales") {
        return <Badge variant="outline" className="bg-accent/10 text-accent border-0 text-sm whitespace-nowrap">Annual Only</Badge>;
      }
      
      return null;
    }

    return featureAvailability[plan].includes(featureKey) ? (
      <Check className="w-4 h-4 text-accent stroke-[3]" />
    ) : null;
  };

  // Feature categories for the table
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

  return (
    <div className="w-full">
      <div className="pt-6 pb-8">
        <div className="container mx-auto">
          <div className="flex text-center justify-center items-center gap-3 flex-col">
            <Badge>Pricing</Badge>
            <div className="flex gap-1 flex-col">
              <h2 className="text-4xl md:text-6xl tracking-tighter max-w-[90vw] text-center font-regular text-foreground">
                Choose Your Mastery Level
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Information */}
      <div className="sticky top-[80px] z-20">
        <div className="container mx-auto">
          <div className="flex justify-center items-center flex-col">
            <div className="grid text-left w-full grid-cols-4 border border-border rounded-t-lg overflow-x-auto">
              {/* Header Row */}
              <div className="col-span-1 border-r border-border bg-background border-b flex flex-col items-center justify-center gap-2 p-4">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`w-full max-w-[140px] px-3 py-1.5 rounded-full transition-all duration-200 ease-in-out text-sm ${
                    !isAnnual 
                      ? "bg-accent text-white shadow-lg shadow-accent/25" 
                      : "bg-white border border-accent text-black hover:bg-gray-50"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`w-full max-w-[140px] px-3 py-1.5 rounded-full transition-all duration-200 ease-in-out text-sm ${
                    isAnnual 
                      ? "bg-accent text-white shadow-lg shadow-accent/25" 
                      : "bg-white border border-accent text-black hover:bg-gray-50"
                  }`}
                >
                  Annual
                </button>
                <p className="text-sm text-muted-foreground mt-4"><span className="font-bold">NOTE:</span> Click on any item below for more details</p>
              </div>
              {Object.entries(plans).map(([key, plan], index) => (
                <div 
                  key={key} 
                  className={`px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col bg-background ${
                    index < 2 ? 'border-r border-border' : ''
                  } ${key === 'strategic' ? 'bg-accent/5' : ''} ${key === 'sales' ? 'bg-gradient-to-r from-accent/5 to-accent/10' : ''}`}
                >
                  <div className="pb-4">
                    <p className="text-sm text-accent pt-1 pb-2 border-b border-border">{plan.description}</p>
                    <p className="text-2xl font-medium pt-3">{key === 'sales' ? (
                      <>
                        Sales<br />Mastery
                      </>
                    ) : plan.title}</p>
                    <p className="flex flex-col lg:flex-row lg:items-center gap-1 text-xl mt-4">
                      <span className="text-4xl font-bold">${isAnnual ? plan.annual : plan.monthly}</span>
                      <span className="text-sm text-muted-foreground">{isAnnual ? 'per year' : 'per month'}</span>
                    </p>
                    {isAnnual && (
                      <p className="text-sm text-accent">Save {plan.savings}%</p>
                    )}
                    <Button 
                      variant={key === 'strategic' ? 'default' : 'outline'} 
                      className={`w-full min-w-0 flex justify-center items-center gap-2 mt-4 text-[clamp(0.75rem,2.5cqw,1.125rem)] py-2 h-auto ${
                        key === 'sales' ? 'bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white' : ''
                      }`}
                    >
                      Enroll <MoveRight className="w-[1em] h-[1em]" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center items-center flex-col">
          {/* Pricing Table */}
          <div className="grid text-left w-full grid-cols-4 border border-border overflow-x-auto">
            {/* Coaching Category */}
            <div className="px-3 lg:px-6 col-span-4 py-4 bg-gradient-to-r from-accent/5 to-accent/10 font-medium border-t border-border">
              Coaching
            </div>
            
            {featureCategories.coaching.map((feature, featureIndex) => (
              <>
                <div 
                  key={feature} 
                  className="px-3 lg:px-6 col-span-1 py-4 cursor-pointer hover:text-accent border-t border-r border-border"
                  onClick={() => handleFeatureClick(feature)}
                >
                  {feature}
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-r border-border">
                  {renderFeatureAvailability('personal', feature)}
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-r border-border">
                  {renderFeatureAvailability('strategic', feature)}
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-border">
                  {renderFeatureAvailability('sales', feature)}
                </div>
              </>
            ))}

            {/* Neuro-Imprinting Tech Category */}
            <div className="px-3 lg:px-6 col-span-4 py-4 bg-gradient-to-r from-accent/5 to-accent/10 font-medium border-t border-border">
              Neuro-Imprinting Tech
            </div>
            
            {featureCategories.neuroTech.map((feature) => (
              <>
                <div 
                  key={feature} 
                  className="px-3 lg:px-6 col-span-1 py-4 cursor-pointer hover:text-accent border-t border-r border-border"
                  onClick={() => handleFeatureClick(feature)}
                >
                  {feature}
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-r border-border">
                  {renderFeatureAvailability('personal', feature)}
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-r border-border">
                  {renderFeatureAvailability('strategic', feature)}
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-border">
                  {renderFeatureAvailability('sales', feature)}
                </div>
              </>
            ))}

            {/* Content Category */}
            <div className="px-3 lg:px-6 col-span-4 py-4 bg-gradient-to-r from-accent/5 to-accent/10 font-medium border-t border-border">
              Content {isAnnual 
                ? "(Instant Access to ALL Lessons)"
                : "(One Lesson Per Week)"}
            </div>
            
            {featureCategories.content.map((feature) => (
              <>
                <div 
                  key={feature} 
                  className="px-3 lg:px-6 col-span-1 py-4 cursor-pointer hover:text-accent border-t border-r border-border"
                  onClick={() => handleFeatureClick(feature)}
                >
                  {feature}
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-r border-border">
                  {renderFeatureAvailability('personal', feature)}
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-r border-border">
                  {renderFeatureAvailability('strategic', feature)}
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-border">
                  {renderFeatureAvailability('sales', feature)}
                </div>
              </>
            ))}

            {/* AI Engine Category */}
            <div className="px-3 lg:px-6 col-span-4 py-4 bg-gradient-to-r from-accent/5 to-accent/10 font-medium border-t border-border">
              AI Engine
            </div>

            {/* Base AI Credits Row */}
            <div className="px-3 lg:px-6 col-span-1 py-4 font-medium border-t border-r border-border">
              Base AI Credits
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-r border-border">
              <p className="text-sm text-muted-foreground">200</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-r border-border">
              <p className="text-sm text-muted-foreground">1,000</p>
            </div>
            <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-border">
              <p className="text-sm text-muted-foreground">5,000</p>
            </div>
            
            {featureCategories.aiEngine.map((feature) => (
              <>
                <div 
                  key={feature} 
                  className="px-3 lg:px-6 col-span-1 py-4 cursor-pointer hover:text-accent border-t border-r border-border"
                  onClick={() => handleFeatureClick(feature)}
                >
                  {feature}
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-r border-border">
                  {renderFeatureAvailability('personal', feature)}
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-r border-border">
                  {renderFeatureAvailability('strategic', feature)}
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center items-center border-t border-border">
                  {renderFeatureAvailability('sales', feature)}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Drawer */}
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