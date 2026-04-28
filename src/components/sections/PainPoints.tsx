import { PhoneMissed, Clock, Frown, AlertTriangle } from "lucide-react";

export function PainPoints() {
  const painPoints = [
    {
      icon: <PhoneMissed className="text-red-500" size={32} />,
      title: "Missed After-Hours Loads",
      description: "Freight doesn't sleep, but your team needs to. Every missed call at 2 AM is a potentially lost high-margin load or a frustrated driver stuck at a receiver.",
    },
    {
      icon: <Clock className="text-orange-500" size={32} />,
      title: "Wasted Dispatcher Time",
      description: "Your highly-paid dispatchers spend 40% of their shift answering routine 'where is the driver' or 'what is the rate' questions instead of booking freight.",
    },
    {
      icon: <AlertTriangle className="text-yellow-500" size={32} />,
      title: "Lost Quote Requests",
      description: "When shippers call the brokerage for spot quotes and get voicemail, they hang up and call your competitor immediately.",
    },
    {
      icon: <Frown className="text-brand-slate" size={32} />,
      title: "Poor Shipper Experience",
      description: "Long hold times and frustrating phone trees lead to low shipper routing guide compliance in a relationship-driven industry.",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-brand-lightgray relative overflow-hidden">
      {/* Subtle Topographic/Route Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,200 C 200,300 400,-100 800,300 C 1200,700 1600,100 2000,500" fill="none" stroke="#0B132B" strokeWidth="4" />
          <path d="M-100,300 C 250,400 450,0 850,400 C 1250,800 1650,200 2050,600" fill="none" stroke="#0B132B" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">
              The logistics industry loses <span className="text-brand-accent">millions</span> to missed calls and manual data entry.
            </h2>
            <p className="text-lg text-brand-navy/70 mb-8">
              In a low-margin, high-volume brokerage or asset-based fleet, communication is your operational edge. If you aren't answering the phone on the first ring, you're leaving money on the dock.
            </p>
          </div>

          <div className="flex-1 w-full grid sm:grid-cols-2 gap-6">
            {painPoints.map((point, i) => (
              <div key={i} className="p-6 rounded-2xl bg-brand-offwhite border border-brand-lightgray shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="mb-4 bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm border border-brand-lightgray/50 relative z-10">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-2 relative z-10">{point.title}</h3>
                <p className="text-brand-navy/70 text-sm leading-relaxed relative z-10">{point.description}</p>
                {/* Decorative node */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-lightgray rounded-full opacity-50 blur-xl"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
