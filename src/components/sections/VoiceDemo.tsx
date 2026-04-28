"use client";

import { Play, Pause, Volume2, Mic, MicOff, Activity, Truck, AlertCircle, Info, PhoneCall, FileText, CheckCircle2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

// We try to import Vapi. If it fails (e.g. server-side or not installed), we handle it gracefully.
import Vapi from "@vapi-ai/web";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY || "";
const ASSISTANT_ID = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID || "";

export function VoiceDemo() {
  const [mode, setMode] = useState<"live" | "sample">(PUBLIC_KEY && ASSISTANT_ID ? "live" : "sample");
  
  // Vapi State
  const [callStatus, setCallStatus] = useState<"inactive" | "connecting" | "active">("inactive");
  const [transcript, setTranscript] = useState<{role: string, text: string}[]>([]);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [vapiClient, setVapiClient] = useState<any>(null);
  const [extractionData, setExtractionData] = useState<any>(null);

  // Sample Fallback State
  const [isPlayingSample, setIsPlayingSample] = useState(false);
  const [sampleTranscriptIndex, setSampleTranscriptIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Simulated Sample Call Data
  const sampleCallData = {
    title: "Rate Quote Request",
    duration: "0:45",
    transcript: [
      { role: "AI", text: "Aliende Dispatch. How can I help you?" },
      { role: "Caller", text: "Hey, I need a quote for a dry van from Chicago to Dallas, shipping tomorrow." },
      { role: "AI", text: "I can help with that. What's the total weight?" },
      { role: "Caller", text: "It's about 32,000 lbs, standard pallets." },
      { role: "AI", text: "Got it. A 53' Dry Van from Chicago to Dallas for 32,000 lbs is quoting at $1,850. Would you like me to book this load?" }
    ],
    summary: {
      title: "Quote Generated",
      data: [
        { label: "Origin", value: "Chicago, IL" },
        { label: "Destination", value: "Dallas, TX" },
        { label: "Equipment", value: "53' Dry Van" },
        { label: "Weight", value: "32,000 lbs" },
        { label: "Rate", value: "$1,850", highlight: true }
      ]
    }
  };

  // Initialize Vapi
  useEffect(() => {
    if (mode === "live" && PUBLIC_KEY && typeof window !== "undefined") {
      try {
        const vapi = new Vapi(PUBLIC_KEY);
        setVapiClient(vapi);

        vapi.on('call-start', () => {
          setCallStatus('active');
          setTranscript([]);
          setExtractionData(null);
        });
        
        vapi.on('call-end', () => {
          setCallStatus('inactive');
          setVolumeLevel(0);
        });
        
        vapi.on('volume-level', (vol) => {
          setVolumeLevel(vol);
        });
        
        vapi.on('message', (message) => {
          if (message.type === 'transcript' && message.transcriptType === 'final') {
            setTranscript(prev => [...prev, { role: message.role === 'user' ? 'Caller' : 'AI', text: message.transcript }]);
          }
          if (message.type === 'function-call') {
            // Map function calls to the extraction UI
            if (message.functionCall.name === 'extract_logistics_data' || message.functionCall.name === 'quote_request') {
              setExtractionData(message.functionCall.parameters);
            }
          }
        });

        vapi.on('error', (e) => {
          console.error("Vapi Error:", e);
          setCallStatus('inactive');
        });

        return () => {
          vapi.stop();
        };
      } catch (e) {
        console.error("Failed to initialize Vapi", e);
      }
    }
  }, [mode]);

  // Handle Live Toggle
  const toggleLiveCall = () => {
    if (!vapiClient || !ASSISTANT_ID) return;
    
    if (callStatus === "active" || callStatus === "connecting") {
      vapiClient.stop();
      setCallStatus("inactive");
    } else {
      setCallStatus("connecting");
      setTranscript([]);
      setExtractionData(null);
      vapiClient.start(ASSISTANT_ID);
    }
  };

  // Handle Sample Toggle
  const toggleSampleCall = () => {
    if (isPlayingSample) {
      setIsPlayingSample(false);
      audioRef.current?.pause();
    } else {
      setIsPlayingSample(true);
      if (sampleTranscriptIndex >= sampleCallData.transcript.length) {
        setSampleTranscriptIndex(0);
      }
      audioRef.current?.play().catch(e => console.log("Audio playback failed", e));
    }
  };

  // Simulate transcript playback for sample
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (mode === "sample" && isPlayingSample) {
      interval = setInterval(() => {
        setSampleTranscriptIndex(prev => {
          if (prev < sampleCallData.transcript.length) {
            return prev + 1;
          }
          setIsPlayingSample(false);
          audioRef.current?.pause();
          return prev;
        });
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [mode, isPlayingSample]);

  // Effect to clean up when switching modes
  useEffect(() => {
    if (mode === "live") {
      setIsPlayingSample(false);
      audioRef.current?.pause();
    } else {
      if (callStatus === "active" || callStatus === "connecting") {
        vapiClient?.stop();
        setCallStatus("inactive");
      }
    }
  }, [mode, callStatus, vapiClient]);

  const isLiveActive = callStatus === "active";
  const isConnecting = callStatus === "connecting";
  const displayTranscript = mode === "live" ? transcript : sampleCallData.transcript.slice(0, sampleTranscriptIndex);

  return (
    <section id="demo" className="py-24 bg-[#0B1221] relative overflow-hidden">
      {/* Fallback Audio Player */}
      <audio ref={audioRef} src="/demo-call.mp3" onEnded={() => setIsPlayingSample(false)} className="hidden" />

      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-slate/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 mb-6 shadow-xl">
            <Volume2 className="text-brand-accent" size={24} />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Talk to the Engine
          </h2>
          <p className="text-lg text-white/60">
            Experience the AI dispatcher firsthand. Test our live model or listen to a recorded scenario.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          
          {/* Left: Mode Selection */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-2 px-2">Demo Mode</div>
            
            {/* Live Mode Option */}
            <button
              disabled={!PUBLIC_KEY || !ASSISTANT_ID}
              onClick={() => setMode("live")}
              className={cn(
                "text-left p-6 rounded-2xl transition-all duration-300 border backdrop-blur-sm group relative",
                mode === "live"
                  ? "bg-white/10 border-brand-accent/50 shadow-[0_0_30px_rgba(37,99,235,0.15)]"
                  : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/20",
                (!PUBLIC_KEY || !ASSISTANT_ID) && "opacity-50 cursor-not-allowed"
              )}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-colors flex-shrink-0",
                  mode === "live" ? "bg-brand-accent text-white shadow-lg shadow-brand-accent/30" : "bg-white/5 text-white/50"
                )}>
                  <PhoneCall size={20} />
                </div>
                <div>
                  <div className="font-bold text-white text-lg flex items-center gap-2">
                    Live Voice Demo
                    {(!PUBLIC_KEY || !ASSISTANT_ID) && (
                      <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full border border-red-500/30 uppercase tracking-wider">Setup Required</span>
                    )}
                  </div>
                  <p className="text-sm text-white/50 mt-1 leading-relaxed">
                    Connect via your microphone and converse in real-time with our logistics-trained Vapi assistant.
                  </p>
                </div>
              </div>
            </button>

            {/* Sample Mode Option */}
            <button
              onClick={() => setMode("sample")}
              className={cn(
                "text-left p-6 rounded-2xl transition-all duration-300 border backdrop-blur-sm group mt-2",
                mode === "sample"
                  ? "bg-white/10 border-brand-gold/50 shadow-[0_0_30px_rgba(250,204,21,0.1)]"
                  : "bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/20"
              )}
            >
              <div className="flex items-start gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center transition-colors flex-shrink-0",
                  mode === "sample" ? "bg-brand-gold text-brand-navy shadow-lg shadow-brand-gold/20" : "bg-white/5 text-white/50"
                )}>
                  <FileText size={20} />
                </div>
                <div>
                  <div className="font-bold text-white text-lg">Listen to Sample Call</div>
                  <p className="text-sm text-white/50 mt-1 leading-relaxed">
                    Playback a recorded interaction demonstrating rate quoting and extraction.
                  </p>
                </div>
              </div>
            </button>

            <div className="mt-4 px-5 py-4 bg-white/[0.02] border border-white/5 rounded-2xl flex items-start gap-3">
              <Info size={18} className="text-brand-accent mt-0.5 flex-shrink-0" />
              <div className="text-sm text-white/60 leading-relaxed">
                <span className="text-white font-semibold block mb-1">Try this on the live demo:</span>
                "I need a spot quote for a dry van from Chicago to Dallas picking up tomorrow."
              </div>
            </div>
          </div>

          {/* Right: Simulation Interface */}
          <div className="w-full lg:w-2/3 bg-[#030712]/80 rounded-3xl border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col relative">
            <Image src="/assets/voice-demo-bg.png" alt="" fill className="object-cover opacity-30 mix-blend-screen pointer-events-none z-0" />
            
            {/* Top Waveform / Player Bar */}
            <div className="border-b border-white/10 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white/[0.02] relative z-10">
              <div className="flex items-center gap-6">
                
                {/* Control Button based on Mode */}
                {mode === "live" ? (
                  <button
                    onClick={toggleLiveCall}
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center transition-all flex-shrink-0 z-10 shadow-xl",
                      isLiveActive 
                        ? "bg-red-500 text-white hover:bg-red-600 shadow-red-500/20" 
                        : isConnecting
                          ? "bg-brand-slate text-white cursor-wait"
                          : "bg-brand-accent text-white hover:scale-105 shadow-brand-accent/20"
                    )}
                  >
                    {isLiveActive ? <MicOff size={24} /> : isConnecting ? <Activity size={24} className="animate-spin" /> : <Mic size={24} />}
                  </button>
                ) : (
                  <button
                    onClick={toggleSampleCall}
                    className="w-16 h-16 bg-white text-brand-navy rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform flex-shrink-0 z-10"
                  >
                    {isPlayingSample ? <Pause size={24} className="fill-brand-navy" /> : <Play size={24} className="ml-1 fill-brand-navy" />}
                  </button>
                )}

                <div>
                  <div className="text-white font-semibold text-lg">
                    {mode === "live" ? "Live Voice Assistant" : "Sample: Rate Quote"}
                  </div>
                  <div className="text-white/40 text-sm flex items-center gap-2 mt-1">
                    {mode === "live" ? (
                      isLiveActive ? (
                        <><span className="w-2 h-2 rounded-full bg-brand-accent animate-ping"></span> Connection Active</>
                      ) : isConnecting ? (
                        <><span className="w-2 h-2 rounded-full bg-yellow-400"></span> Connecting to Vapi...</>
                      ) : (
                        <><span className="w-2 h-2 rounded-full bg-brand-slate"></span> Ready to Connect</>
                      )
                    ) : (
                      <><span className={cn("w-2 h-2 rounded-full", isPlayingSample ? "bg-red-500 animate-pulse" : "bg-brand-slate")}></span> Pre-recorded Audio</>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Visualizer */}
              <div className="flex items-center gap-1 h-12 w-full sm:w-48 overflow-hidden flex-shrink-0">
                {[...Array(24)].map((_, i) => {
                  // If live, map volume. If sample, mock random wave if playing.
                  let h = 4;
                  if (mode === "live" && isLiveActive) {
                    h = Math.max(10, volumeLevel * 100 * Math.random());
                  } else if (mode === "sample" && isPlayingSample) {
                    h = Math.max(10, Math.random() * 80);
                  }

                  return (
                    <div
                      key={i}
                      className={cn(
                        "flex-1 rounded-full transition-all duration-100",
                        (mode === "live" && isLiveActive) ? "bg-brand-accent" : (mode === "sample" && isPlayingSample) ? "bg-brand-gold" : "bg-white/20 h-1"
                      )}
                      style={{
                        height: (mode === "live" && isLiveActive) || (mode === "sample" && isPlayingSample) ? `${h}%` : '4px'
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-4 sm:p-6 flex-1 flex flex-col md:flex-row gap-6 relative z-10">
              
              {/* Transcript */}
              <div className="flex-1 flex flex-col gap-4 overflow-y-auto max-h-[400px] pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                <div className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-2 sticky top-0 bg-[#030712]/90 py-2 backdrop-blur-sm z-10 border-b border-white/5">
                  Live Transcript
                </div>
                
                {displayTranscript.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-full text-white/20 mt-10">
                    <Activity size={32} className="mb-4 opacity-50" />
                    <p>{mode === "live" ? "Start the call to begin transcription" : "Play the sample to begin transcription"}</p>
                  </div>
                )}

                {displayTranscript.map((line, idx) => (
                  <div key={idx} className="flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold",
                      line.role === "AI" ? "bg-brand-accent/20 text-brand-accent border border-brand-accent/30" : "bg-white/10 text-white/70 border border-white/20"
                    )}>
                      {line.role === "AI" ? <Activity size={14} /> : "C"}
                    </div>
                    <div className={cn(
                      "p-3 rounded-2xl text-sm leading-relaxed border",
                      line.role === "AI" 
                        ? "bg-brand-accent/10 border-brand-accent/20 text-white rounded-tl-none" 
                        : "bg-white/5 border-white/10 text-white/80 rounded-tr-none"
                    )}>
                      {line.text}
                    </div>
                  </div>
                ))}
                
                {((mode === "live" && isLiveActive) || (mode === "sample" && isPlayingSample && sampleTranscriptIndex < sampleCallData.transcript.length)) && (
                  <div className="flex gap-3 items-center opacity-50 mt-2">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/30">
                      <Volume2 size={14} className="animate-pulse" />
                    </div>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Data Extraction Card */}
              <div className="md:w-[280px] flex-shrink-0 flex flex-col">
                <div className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Structured Data</div>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden flex-1">
                  <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>
                  
                  <div className="flex items-center gap-2 mb-6 relative z-10">
                    <Truck size={18} className={mode === "live" ? "text-brand-accent" : "text-brand-gold"} />
                    <span className="font-bold text-white tracking-tight">Extracted Payload</span>
                  </div>
                  
                  <div className="space-y-4 relative z-10">
                    {/* Live Mode Extraction Data */}
                    {mode === "live" && extractionData && Object.keys(extractionData).map((key, idx) => (
                      <div key={idx} className="flex justify-between items-end border-b border-white/5 pb-2 animate-in fade-in">
                        <span className="text-white/40 text-xs uppercase tracking-wider">{key.replace(/_/g, ' ')}</span>
                        <span className="text-sm font-medium text-right text-white max-w-[120px] truncate" title={extractionData[key]}>{extractionData[key]}</span>
                      </div>
                    ))}

                    {/* Sample Mode Extraction Data */}
                    {mode === "sample" && sampleCallData.summary.data.map((item, idx) => (
                      <div 
                        key={idx} 
                        className={cn(
                          "flex justify-between items-end border-b border-white/5 pb-2 transition-all duration-500",
                          idx < sampleTranscriptIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 hidden"
                        )}
                      >
                        <span className="text-white/40 text-xs uppercase tracking-wider">{item.label}</span>
                        <span className={cn(
                          "text-sm font-medium text-right",
                          item.highlight ? "text-brand-gold" : "text-white"
                        )}>{item.value}</span>
                      </div>
                    ))}
                    
                    {/* Empty State */}
                    {mode === "live" && !extractionData && (
                      <div className="text-white/30 text-xs text-center py-4 border border-dashed border-white/10 rounded-lg">
                        Waiting for function calls...
                      </div>
                    )}
                    
                    {/* Status Badge */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2">
                      {mode === "live" ? (
                        isLiveActive ? (
                          <div className="flex items-center gap-2 text-xs text-brand-accent bg-brand-accent/10 px-3 py-1.5 rounded-full border border-brand-accent/20">
                            <Activity size={12} className="animate-spin" /> Listening...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-xs text-white/30 bg-white/5 px-3 py-1.5 rounded-full">
                            Call Inactive
                          </div>
                        )
                      ) : (
                        sampleTranscriptIndex > 0 && sampleTranscriptIndex < sampleCallData.transcript.length ? (
                          <div className="flex items-center gap-2 text-xs text-brand-gold bg-brand-gold/10 px-3 py-1.5 rounded-full">
                            <Activity size={12} className="animate-spin" /> Extracting details...
                          </div>
                        ) : sampleTranscriptIndex >= sampleCallData.transcript.length ? (
                          <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
                            <CheckCircle2 size={12} /> Payload Ready
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 text-xs text-white/30 bg-white/5 px-3 py-1.5 rounded-full">
                            Awaiting Call
                          </div>
                        )
                      )}
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
