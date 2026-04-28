"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can Aliende integrate with my existing TMS?",
      answer: "Yes. Aliende has pre-built integrations with major systems like McLeod, TMW, Samsara, and KeepTruckin. For custom or proprietary systems, we provide a secure, RESTful API to easily push and pull data."
    },
    {
      question: "How does it handle thick regional accents or bad cell reception?",
      answer: "Our voice models are specifically trained on logistics industry audio data, making them highly resilient to background noise (like highway wind or engine rumble) and various regional accents common in the freight industry."
    },
    {
      question: "What happens if a caller asks a complex question?",
      answer: "Aliende never guesses. You define strict escalation paths. If a question falls outside the AI's known parameters, or if the caller becomes frustrated, the call is instantly routed to a designated human dispatcher along with a full transcript of the conversation."
    },
    {
      question: "Do I need to replace my current phone system?",
      answer: "No. Aliende works seamlessly with your existing VoIP or traditional PBX setup. You simply set up forwarding rules (e.g., forward after hours, or forward specific lines directly to Aliende) via SIP trunking or standard forwarding."
    },
    {
      question: "How long does it take to implement?",
      answer: "Most of our logistics clients are fully deployed within 7 to 14 days. The process involves securely connecting your data sources, uploading your routing/pricing rules, and running a series of test calls before going live."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-navy mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-brand-navy/70">
            Everything you need to know about implementing AI voice for your logistics operations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={cn(
                "border rounded-2xl bg-white overflow-hidden transition-all duration-300",
                openIndex === index ? "border-brand-slate shadow-md" : "border-brand-lightgray hover:border-brand-slate/50"
              )}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg text-brand-navy pr-8">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "text-brand-slate transition-transform duration-300 flex-shrink-0",
                    openIndex === index ? "rotate-180" : ""
                  )} 
                  size={20} 
                />
              </button>
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6 text-brand-navy/70 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
