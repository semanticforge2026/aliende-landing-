import { Navigation } from "@/components/layout/Navigation";
import { DarkHero } from "@/components/sections/DarkHero";
import { VoiceDemo } from "@/components/sections/VoiceDemo";
import { PainPoints } from "@/components/sections/PainPoints";
import { UseCases } from "@/components/sections/UseCases";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Outcomes } from "@/components/sections/Outcomes";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/layout/MobileCTA";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden relative pb-20 lg:pb-0">
      <Navigation />
      <DarkHero />
      <VoiceDemo />
      <PainPoints />
      <UseCases />
      <HowItWorks />
      <Outcomes />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}
