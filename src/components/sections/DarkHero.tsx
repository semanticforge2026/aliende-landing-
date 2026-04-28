"use client";

import { ArrowRight, Play, Activity, MapPin, CheckCircle2, Box } from "lucide-react";
import Image from "next/image";

export function DarkHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#030712] overflow-hidden pt-24 pb-12">
      {/* Custom Generated Background Image */}
      <Image 
        src="/aliende-hero-map-bg.webp.png" 
        alt="Logistics Network AI Background" 
        fill 
        className="object-cover object-[75%_center] opacity-50 pointer-events-none"
        priority
      />

      {/* Background Cinematic Elements & Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlays to ensure text readability - darker on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/50 via-[#030712]/80 to-[#030712]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/70 to-transparent"></div>

        {/* Subtle logistics grid context */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        {/* Glowing orbs for cinematic contrast - reduced blur on mobile for performance/readability */}
        <div className="absolute -top-40 left-[10%] w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[60px] md:blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#1E3A8A]/30 rounded-full blur-[80px] md:blur-[150px] mix-blend-screen" />
        
        {/* Abstract Route Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 200 Q 400 300 800 100 T 1800 600" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="4 8" />
          <path d="M-50 700 Q 500 100 1000 800 T 1900 200" fill="none" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="4 8" />
          <circle cx="800" cy="100" r="4" fill="#2563EB" />
          <circle cx="1000" cy="800" r="4" fill="#ffffff" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Content */}
        <div className="flex-1 max-w-3xl text-center lg:text-left pt-12 lg:pt-0">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-white/80 text-xs sm:text-sm font-medium mb-8 lg:mb-10 backdrop-blur-md shadow-2xl">
            <span className="flex relative h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent"></span>
            </span>
            Enterprise AI Voice for Freight & Logistics
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold tracking-tighter text-white leading-[1.1] mb-6 lg:mb-8">
            The AI Voice Dispatcher for <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-white to-white">Freight & Logistics.</span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-2xl text-white/60 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Automate spot quotes, track and trace, and after-hours escalation so your team can focus on relationship building.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
            <a href="#contact" className="group relative w-full sm:w-auto inline-flex items-center justify-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold to-brand-accent rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <button className="relative w-full sm:w-auto px-10 py-5 bg-white text-[#030712] rounded-full font-bold text-lg hover:bg-brand-offwhite transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                Book a 15-Min Demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            
            <a href="#demo" className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
              <Play size={18} className="fill-white" /> Listen to Sample Call
            </a>
          </div>
          
          <p className="mt-6 text-sm text-white/50 font-medium text-center lg:text-left">Built for dispatch, freight, courier, and transport teams.</p>
          
          <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-white/40 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-gold/70" /> Integrates with your TMS
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-gold/70" /> Zero hardware needed
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-brand-gold/70" /> SOC2 Compliant
            </div>
          </div>
        </div>

        {/* Right Content - Premium Glassmorphic Visual */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
          <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl bg-[#0B132B]/40 border border-white/10 backdrop-blur-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col [transform:perspective(1000px)_rotateY(-8deg)_rotateX(4deg)] hover:[transform:perspective(1000px)_rotateY(0deg)_rotateX(0deg)] transition-transform duration-700">
            
            {/* Header */}
            <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center gap-2 text-xs text-white/40 font-mono tracking-wider">
                <Activity size={14} className="text-brand-accent animate-pulse" /> ALIENDE ENGINE V2
              </div>
            </div>
            
            {/* Interface Content */}
            <div className="p-8 flex-1 flex flex-col gap-6 relative bg-gradient-to-b from-transparent to-[#030712]/80">
              
              {/* Active Call UI */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden group">
                <div className="absolute top-0 left-[-100%] w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent group-hover:animate-[shimmer_2s_infinite]"></div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-white/50 text-xs font-semibold uppercase tracking-widest block mb-1">Incoming Call</span>
                    <span className="text-white text-xl font-medium tracking-tight">Acme Freight Brokerage</span>
                  </div>
                  <span className="text-brand-accent text-xs font-bold uppercase tracking-widest bg-brand-accent/10 border border-brand-accent/20 px-3 py-1.5 rounded-full flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping"></span> Live
                  </span>
                </div>
                
                {/* Voice Visualizer */}
                <div className="flex items-center justify-between h-10 w-full gap-1">
                  {[...Array(32)].map((_, i) => (
                    <div 
                      key={i} 
                      className="w-1.5 bg-brand-accent/50 rounded-full animate-pulse" 
                      style={{ 
                        height: `${Math.max(20, Math.random() * 100)}%`, 
                        animationDelay: `${i * 0.05}s`,
                        animationDuration: `${0.5 + Math.random() * 1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Real-time Extraction Card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md ml-8 relative mt-2">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-px bg-white/20 border-l border-white/40"></div>
                
                <div className="flex items-center justify-between mb-5">
                  <div className="text-xs text-white/50 font-mono uppercase tracking-wider">Entity Extraction</div>
                  <div className="text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded flex items-center gap-1">
                    <CheckCircle2 size={12} /> 99.9% Match
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-center gap-5 border-b border-white/5 pb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                      <MapPin size={20} className="text-brand-gold" />
                    </div>
                    <div>
                      <div className="text-white font-medium text-lg">Chicago, IL <span className="text-white/30 mx-2">→</span> Dallas, TX</div>
                      <div className="text-white/40 text-sm mt-0.5">Route Extracted</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                        <Box size={18} className="text-brand-accent" />
                      </div>
                      <div>
                        <div className="text-white font-medium">53' Dry Van</div>
                        <div className="text-white/40 text-xs mt-0.5">Equipment</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">$1,850</div>
                      <div className="text-brand-accent text-xs mt-0.5 font-medium uppercase tracking-wider">Quote Ready</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
