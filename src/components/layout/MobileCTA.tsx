"use client";

import { ArrowRight } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-4 bg-white/80 backdrop-blur-xl border-t border-brand-lightgray/50 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <a 
        href="#contact" 
        className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-brand-navy text-white rounded-xl font-bold shadow-lg shadow-brand-navy/20 active:scale-[0.98] transition-transform"
      >
        Book Demo <ArrowRight size={18} />
      </a>
    </div>
  );
}
