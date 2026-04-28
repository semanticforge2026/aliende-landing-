import { TrendingUp, Clock, ShieldCheck, PhoneCall } from "lucide-react";
import Image from "next/image";

export function Outcomes() {
  const metrics = [
    {
      value: "100%",
      label: "After-Hours Loads Captured",
      icon: <PhoneCall size={24} className="text-brand-accent mb-4" />
    },
    {
      value: "15+",
      label: "Hours Saved Per Dispatcher",
      icon: <Clock size={24} className="text-brand-accent mb-4" />
    },
    {
      value: "3x",
      label: "Faster Spot Quote Response",
      icon: <TrendingUp size={24} className="text-brand-accent mb-4" />
    },
    {
      value: "24/7",
      label: "Uptime on the Board",
      icon: <ShieldCheck size={24} className="text-brand-accent mb-4" />
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-brand-lightgray relative overflow-hidden">
      {/* Subtle Logistics Grid Background */}
      <Image src="/assets/light-route-pattern.png" alt="" fill className="object-cover opacity-[0.04] mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">
              Transform your dispatch board with measurable impact.
            </h2>
            <p className="text-lg text-brand-navy/70 mb-8 leading-relaxed">
              When you eliminate the bottleneck of human availability for routine check calls and rate quotes, your brokerage scales effortlessly. Aliende provides enterprise-grade reliability for fleets and 3PLs of all sizes.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-accent/20">
                  <div className="w-2 h-2 rounded-full bg-brand-accent" />
                </div>
                <span className="text-brand-navy/80 font-medium">Never lose a high-margin spot load because you couldn't answer the phone.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-accent/20">
                  <div className="w-2 h-2 rounded-full bg-brand-accent" />
                </div>
                <span className="text-brand-navy/80 font-medium">Free up your senior dispatchers to focus on relationship building and capacity sourcing.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-brand-accent/20">
                  <div className="w-2 h-2 rounded-full bg-brand-accent" />
                </div>
                <span className="text-brand-navy/80 font-medium">Provide instant ELD tracking updates to impatient receivers without manual lookup.</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 w-full grid grid-cols-2 gap-6 relative">
            {/* Glow under the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            {metrics.map((metric, i) => (
              <div key={i} className="bg-brand-offwhite p-8 rounded-2xl border border-brand-lightgray/50 text-center flex flex-col items-center justify-center shadow-sm relative z-10 hover:-translate-y-1 transition-transform">
                {metric.icon}
                <div className="text-4xl md:text-5xl font-bold text-brand-navy mb-2 tracking-tight">{metric.value}</div>
                <div className="text-xs font-bold text-brand-slate uppercase tracking-widest">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
