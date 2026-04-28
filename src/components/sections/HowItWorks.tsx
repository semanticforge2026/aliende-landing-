import { Plug, Brain, Route, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: <Plug size={32} className="text-white" />,
      title: "Connect Your TMS & ELD",
      description: "Integrate Aliende with McLeod, TMW, Samsara, or your custom stack via secure REST APIs in minutes.",
    },
    {
      icon: <Brain size={32} className="text-white" />,
      title: "Upload Pricing & Rules",
      description: "Provide your LTL/FTL pricing matrix, lane preferences, and business logic so the AI quotes exactly like your best broker.",
    },
    {
      icon: <Route size={32} className="text-white" />,
      title: "Set Routing Paths",
      description: "Define exactly when the AI should transfer a call to a human dispatcher (e.g., VIP shippers or urgent breakdowns).",
    },
    {
      icon: <Zap size={32} className="text-white" />,
      title: "Go Live on the Board",
      description: "Deploy your dedicated voice agent and start capturing every missed call immediately, covering all shifts 24/7.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Network / Logistics Map Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Abstract topography lines */}
          <path d="M-100,100 C 200,200 400,-100 800,300 C 1200,700 1600,100 2000,500" fill="none" stroke="white" strokeWidth="2" opacity="0.5" />
          <path d="M-100,200 C 250,300 450,0 850,400 C 1250,800 1650,200 2050,600" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
            Seamless Implementation
          </h2>
          <p className="text-lg text-white/70">
            No complex coding or months-long onboarding. Get up and running in days, not quarters.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Route Line */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[80%] h-0.5 hidden md:block">
            <svg width="100%" height="2" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="8 8" />
              {/* Animated node traveling the line */}
              <circle r="4" fill="#2563EB" className="animate-[shimmer_3s_ease-in-out_infinite]">
                <animateMotion dur="4s" repeatCount="indefinite" path="M0,1 L1000,1" />
              </circle>
            </svg>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                {/* Node marker */}
                <div className="absolute top-[42px] -left-3 w-6 h-6 bg-brand-navy rounded-full border-4 border-[#1E3A8A] hidden md:block z-0"></div>
                
                <div className="w-24 h-24 rounded-full bg-brand-charcoal border-4 border-brand-navy z-10 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.2)] mb-6 relative group">
                  <div className="absolute inset-0 rounded-full bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity blur-md"></div>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
