"use client";

import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    
    // Basic client validation (also enforced by HTML5 required attribute)
    if (!formData.get("name") || !formData.get("company") || !formData.get("email") || !formData.get("phone") || !formData.get("automation")) {
      setError("Please fill out all required fields.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await submitContactForm(formData);
      if (response.success) {
        setIsSuccess(true);
      } else {
        setError(response.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="bg-brand-navy rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Left Side: Info */}
          <div className="lg:w-5/12 p-8 lg:p-16 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] relative">
            <div className="absolute inset-0 bg-brand-navy/90 backdrop-blur-sm"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Let's build your AI dispatcher.
                </h2>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Book a 15-minute operational review. We'll map out your current call volume, show you a custom demo using your exact freight scenarios, and calculate your projected ROI.
                </p>
                
                <ul className="space-y-4 text-white/80">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-brand-gold" />
                    <span>Custom live demo with your scenarios</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-brand-gold" />
                    <span>ROI and capacity analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-brand-gold" />
                    <span>TMS integration roadmap</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12 p-8 lg:p-16 bg-white relative">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500 py-12">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-2">Request Received</h3>
                <p className="text-brand-navy/70 text-lg">
                  Thanks — we’ll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 text-red-600 text-sm">
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <p>{error}</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-brand-navy">Full Name</label>
                    <input required type="text" id="name" name="name" className="px-4 py-3.5 rounded-lg bg-brand-offwhite border border-brand-lightgray focus:border-brand-slate focus:ring-1 focus:ring-brand-slate outline-none transition-all text-brand-navy" placeholder="John Smith" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-semibold text-brand-navy">Company</label>
                    <input required type="text" id="company" name="company" className="px-4 py-3.5 rounded-lg bg-brand-offwhite border border-brand-lightgray focus:border-brand-slate focus:ring-1 focus:ring-brand-slate outline-none transition-all text-brand-navy" placeholder="Acme Freight" />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-brand-navy">Work Email</label>
                    <input required type="email" id="email" name="email" className="px-4 py-3.5 rounded-lg bg-brand-offwhite border border-brand-lightgray focus:border-brand-slate focus:ring-1 focus:ring-brand-slate outline-none transition-all text-brand-navy" placeholder="john@example.com" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-brand-navy">Phone Number</label>
                    <input required type="tel" id="phone" name="phone" className="px-4 py-3.5 rounded-lg bg-brand-offwhite border border-brand-lightgray focus:border-brand-slate focus:ring-1 focus:ring-brand-slate outline-none transition-all text-brand-navy" placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="automation" className="text-sm font-semibold text-brand-navy">What calls do you want to automate?</label>
                  <select required id="automation" name="automation" className="px-4 py-3.5 rounded-lg bg-brand-offwhite border border-brand-lightgray focus:border-brand-slate focus:ring-1 focus:ring-brand-slate outline-none transition-all text-brand-navy">
                    <option value="">Select an option...</option>
                    <option value="Rate Queries / Spot Quotes">Rate Queries & Spot Quotes</option>
                    <option value="Track and Trace / Location Updates">Track and Trace / Location Updates</option>
                    <option value="After-Hours Dispatch / Driver Support">After-Hours Dispatch / Driver Support</option>
                    <option value="Appointment Scheduling">Appointment Scheduling</option>
                    <option value="All of the above">All of the above</option>
                    <option value="Other">Other (Please specify on call)</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="mt-4 px-8 py-4 bg-brand-navy text-white rounded-lg font-semibold text-lg hover:bg-brand-charcoal transition-all flex items-center justify-center gap-2 shadow-lg w-full disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <><Loader2 size={20} className="animate-spin" /> Sending...</>
                  ) : (
                    <>Book My Demo <ArrowRight size={20} /></>
                  )}
                </button>
                <p className="text-sm text-center text-brand-navy/70 mt-3 font-medium">
                  Demo available with your own call scenario.
                </p>
                <p className="text-xs text-center text-brand-navy/40 mt-1">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
