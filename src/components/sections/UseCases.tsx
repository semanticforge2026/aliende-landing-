import { Calculator, MapPin, Moon, CalendarCheck, ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-brand-offwhite relative overflow-hidden">
      {/* Background Logistics Grid */}
      <Image src="/assets/light-route-pattern.png" alt="" fill className="object-cover opacity-[0.06] mix-blend-multiply pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-slate font-bold uppercase tracking-widest text-xs mb-4 block">Engineered for Freight</span>
          <h2 className="text-4xl font-bold text-brand-navy mb-6 tracking-tight">
            Purpose-Built for Dispatch Workflows
          </h2>
          <p className="text-lg text-brand-navy/70">
            Unlike generic AI receptionists, Aliende understands the difference between LTL and FTL, parses PRO numbers flawlessly, and speaks the language of logistics.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Use Case 1 */}
          <div className="bg-white rounded-3xl p-8 border border-brand-lightgray shadow-sm hover:shadow-xl transition-shadow flex flex-col group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-[80px] -mr-20 -mt-20 transition-all group-hover:bg-brand-accent/10"></div>
            
            <div className="flex gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                <Calculator size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Automated Rate Quoting</h3>
                <p className="text-brand-navy/70 leading-relaxed text-sm">
                  Extracts origin, destination, weight, and class directly from the natural conversation. Instantly calculates and provides accurate quotes by querying your TMS pricing matrix or APIs.
                </p>
              </div>
            </div>

            {/* UI Snippet */}
            <div className="mt-auto bg-brand-offwhite rounded-2xl p-5 border border-brand-lightgray relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brand-slate uppercase font-bold">LTL Quote Engine</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 bg-white p-3 rounded-lg border border-brand-lightgray shadow-sm">
                  <MapPin size={16} className="text-brand-gold" />
                  <div className="flex-1 text-sm font-medium text-brand-navy">ORD (Chicago) <ArrowRight size={14} className="inline mx-1 text-brand-lightgray" /> DFW (Dallas)</div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-1 bg-white p-3 rounded-lg border border-brand-lightgray shadow-sm text-center">
                    <div className="text-[10px] uppercase text-brand-slate font-bold mb-1">Class</div>
                    <div className="text-sm font-medium text-brand-navy">50</div>
                  </div>
                  <div className="flex-1 bg-white p-3 rounded-lg border border-brand-lightgray shadow-sm text-center">
                    <div className="text-[10px] uppercase text-brand-slate font-bold mb-1">Weight</div>
                    <div className="text-sm font-medium text-brand-navy">4,200 lbs</div>
                  </div>
                </div>
                <div className="bg-brand-navy text-white p-3 rounded-lg flex justify-between items-center mt-1">
                  <span className="text-xs font-medium text-white/70">Calculated Rate</span>
                  <span className="font-bold text-brand-accent">$485.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Use Case 2 */}
          <div className="bg-white rounded-3xl p-8 border border-brand-lightgray shadow-sm hover:shadow-xl transition-shadow flex flex-col group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] -mr-20 -mt-20 transition-all group-hover:bg-emerald-500/10"></div>
            
            <div className="flex gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Track & Trace</h3>
                <p className="text-brand-navy/70 leading-relaxed text-sm">
                  Eliminates the "where's my freight" bottleneck. Aliende verifies PRO or BOL numbers phonetically and pulls real-time status and ETA directly from your telematics or ELD integrations.
                </p>
              </div>
            </div>

            {/* UI Snippet */}
            <div className="mt-auto bg-brand-offwhite rounded-2xl p-5 border border-brand-lightgray relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brand-slate uppercase font-bold">Shipment Tracker</span>
                <span className="text-[10px] bg-emerald-500/10 text-emerald-600 px-2 py-0.5 rounded-full font-bold">In Transit</span>
              </div>
              <div className="relative pl-6 py-2">
                <div className="absolute left-2.5 top-4 bottom-4 w-0.5 bg-brand-lightgray"></div>
                
                <div className="relative mb-6">
                  <div className="absolute -left-[27px] w-3 h-3 rounded-full bg-brand-lightgray border-2 border-white"></div>
                  <div className="text-[10px] text-brand-slate font-bold uppercase">Picked Up</div>
                  <div className="text-sm font-medium text-brand-navy">Los Angeles, CA</div>
                </div>
                
                <div className="relative mb-6">
                  <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-emerald-500 border-[3px] border-emerald-100 shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
                  <div className="text-[10px] text-emerald-600 font-bold uppercase">Current Location</div>
                  <div className="text-sm font-bold text-brand-navy">Denver, CO <span className="text-xs font-normal text-brand-navy/50 ml-2">(15 mins ago)</span></div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[27px] w-3 h-3 rounded-full bg-brand-lightgray border-2 border-white"></div>
                  <div className="text-[10px] text-brand-slate font-bold uppercase">Estimated Delivery</div>
                  <div className="text-sm font-medium text-brand-navy text-opacity-50">Chicago, IL</div>
                </div>
              </div>
            </div>
          </div>

          {/* Use Case 3 */}
          <div className="bg-white rounded-3xl p-8 border border-brand-lightgray shadow-sm hover:shadow-xl transition-shadow flex flex-col group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] -mr-20 -mt-20 transition-all group-hover:bg-orange-500/10"></div>
            
            <div className="flex gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                <Moon size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">After-Hours Dispatch</h3>
                <p className="text-brand-navy/70 leading-relaxed text-sm">
                  Stop waking up for routine questions. Aliende handles general inquiries at 3 AM and intelligently escalates only high-priority issues (like breakdowns or accidents) to the on-call dispatcher.
                </p>
              </div>
            </div>

            {/* UI Snippet */}
            <div className="mt-auto bg-brand-offwhite rounded-2xl p-5 border border-brand-lightgray relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brand-slate uppercase font-bold">Escalation Logic</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-brand-lightgray shadow-sm">
                <div className="flex items-center justify-between border-b border-brand-lightgray/50 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-brand-slate" />
                    <span className="text-xs font-medium text-brand-navy">Call received at 03:14 AM</span>
                  </div>
                  <span className="text-[10px] bg-red-100 text-red-600 px-2 py-0.5 rounded font-bold uppercase">Priority 1</span>
                </div>
                <div className="text-sm text-brand-navy mb-3">
                  <span className="font-bold">Driver Report:</span> "Unit 402, blown tire on I-80 marker 142. Need road service."
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-brand-accent bg-brand-accent/5 p-2 rounded-lg border border-brand-accent/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping"></span>
                  Ringing On-Call Dispatcher...
                </div>
              </div>
            </div>
          </div>

          {/* Use Case 4 */}
          <div className="bg-white rounded-3xl p-8 border border-brand-lightgray shadow-sm hover:shadow-xl transition-shadow flex flex-col group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px] -mr-20 -mt-20 transition-all group-hover:bg-brand-gold/10"></div>
            
            <div className="flex gap-4 mb-8 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                <CalendarCheck size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Dock Appointment Scheduling</h3>
                <p className="text-brand-navy/70 leading-relaxed text-sm">
                  Automate the tedious back-and-forth of scheduling warehouse doors. Aliende collects PO numbers and preferred times, seamlessly updating your WMS or dock scheduling software.
                </p>
              </div>
            </div>

            {/* UI Snippet */}
            <div className="mt-auto bg-brand-offwhite rounded-2xl p-5 border border-brand-lightgray relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-brand-slate uppercase font-bold">WMS Schedule Auth</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className={cn(
                    "p-2 rounded-lg border text-center transition-colors cursor-default",
                    i === 2 
                      ? "bg-brand-navy border-brand-navy text-white shadow-md transform -translate-y-0.5" 
                      : i === 1 || i === 4 
                        ? "bg-brand-lightgray/50 border-brand-lightgray text-brand-slate/50 line-through opacity-50"
                        : "bg-white border-brand-lightgray text-brand-navy hover:border-brand-slate"
                  )}>
                    <div className="text-xs font-bold">{i + 8}:00 AM</div>
                    <div className="text-[9px] uppercase mt-0.5 opacity-70">Door {i % 2 === 0 ? 'A' : 'B'}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-center">
                <span className="inline-block text-[10px] font-bold text-brand-slate uppercase bg-white px-3 py-1 rounded-full border border-brand-lightgray shadow-sm">
                  Booking Confirmed for PO #77281
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
