import { Check, Minus, MoveRight, Brain, Bot, Video, Mail, BookOpen, Sparkles, MessagesSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CustomPricing = () => (
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
        <div className="grid text-left w-full grid-cols-3 divide-x pt-20">
          <div className="col-span-1"></div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl">Personal Mastery</p>
            <p className="text-sm text-muted-foreground">
              Master the fundamentals of persuasion and influence with our essential collection.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl">$29</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <Button variant="outline" className="gap-4 mt-8">
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
            <p className="text-2xl">Strategic Persuader</p>
            <p className="text-sm text-muted-foreground">
              Advanced persuasion techniques for professionals who need comprehensive influence strategies.
            </p>
            <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
              <span className="text-4xl">$99</span>
              <span className="text-sm text-muted-foreground"> / month</span>
            </p>
            <Button 
              className="gap-4 mt-8 bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-accent/40"
            >
              Get Started <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="px-3 lg:px-6 col-span-1 py-4">
            <b>Features</b>
          </div>
          <div></div>
          <div></div>
          
          {/* Feature 1 */}
          <div className="px-3 lg:px-6 col-span-1 py-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-accent" />
            <span>Neuro-Imprinting Complete Collection</span>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <div className="p-1 rounded-full bg-accent/10">
              <Check className="w-5 h-5 text-accent drop-shadow-[0_0_3px_rgba(var(--accent-rgb),0.5)]" />
            </div>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <div className="p-1 rounded-full bg-accent/10">
              <Check className="w-5 h-5 text-accent drop-shadow-[0_0_3px_rgba(var(--accent-rgb),0.5)]" />
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="px-3 lg:px-6 col-span-1 py-4 flex items-center gap-2">
            <Bot className="w-5 h-5 text-accent" />
            <span>Personal Mastery AI Complete Collection</span>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <div className="p-1 rounded-full bg-accent/10">
              <Check className="w-5 h-5 text-accent drop-shadow-[0_0_3px_rgba(var(--accent-rgb),0.5)]" />
            </div>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <div className="p-1 rounded-full bg-accent/10">
              <Check className="w-5 h-5 text-accent drop-shadow-[0_0_3px_rgba(var(--accent-rgb),0.5)]" />
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="px-3 lg:px-6 col-span-1 py-4 flex items-center gap-2">
            <Video className="w-5 h-5 text-accent" />
            <span>Reality Creation Pro</span>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <div className="p-1 rounded-full bg-accent/10">
              <Check className="w-5 h-5 text-accent drop-shadow-[0_0_3px_rgba(var(--accent-rgb),0.5)]" />
            </div>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <div className="p-1 rounded-full bg-accent/10">
              <Check className="w-5 h-5 text-accent drop-shadow-[0_0_3px_rgba(var(--accent-rgb),0.5)]" />
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="px-3 lg:px-6 col-span-1 py-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-accent" />
            <span>&lsquo;Inner Excellence&rsquo; Weekly Newsletter</span>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <div className="p-1 rounded-full bg-accent/10">
              <Check className="w-5 h-5 text-accent drop-shadow-[0_0_3px_rgba(var(--accent-rgb),0.5)]" />
            </div>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <div className="p-1 rounded-full bg-accent/10">
              <Check className="w-5 h-5 text-accent drop-shadow-[0_0_3px_rgba(var(--accent-rgb),0.5)]" />
            </div>
          </div>
          
          {/* Feature 5 */}
          <div className="px-3 lg:px-6 col-span-1 py-4 flex items-center gap-2">
            <Video className="w-5 h-5 text-accent" />
            <span>MaxPersuasion Classics Collection</span>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <div className="p-1 rounded-full bg-accent/10">
              <Check className="w-5 h-5 text-accent drop-shadow-[0_0_3px_rgba(var(--accent-rgb),0.5)]" />
            </div>
          </div>
          
          {/* Feature 6 */}
          <div className="px-3 lg:px-6 col-span-1 py-4 flex items-center gap-2">
            <Bot className="w-5 h-5 text-accent" />
            <span>Strategic Persuaders AI Mastery Collection</span>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <div className="p-1 rounded-full bg-accent/10">
              <Check className="w-5 h-5 text-accent drop-shadow-[0_0_3px_rgba(var(--accent-rgb),0.5)]" />
            </div>
          </div>
          
          {/* Feature 7 */}
          <div className="px-3 lg:px-6 col-span-1 py-4 flex items-center gap-2">
            <Mail className="w-5 h-5 text-accent" />
            <span>&lsquo;Influence Insiders&rsquo; Weekly Newsletter</span>
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <Minus className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
            <div className="p-1 rounded-full bg-accent/10">
              <Check className="w-5 h-5 text-accent drop-shadow-[0_0_3px_rgba(var(--accent-rgb),0.5)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
); 