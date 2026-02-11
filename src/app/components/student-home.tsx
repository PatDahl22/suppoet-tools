import React from "react";
import { Hand } from "lucide-react";

export default function StudentHome({ onRequestHelp }: { onRequestHelp: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background relative overflow-hidden">
            <div className="flex flex-col items-center gap-8 w-full max-w-xs mx-auto z-10">
                <button
                    className="group relative flex flex-col items-center justify-center w-48 h-48 rounded-full bg-gradient-to-b from-[#6D93F9] to-[#4A90E2] shadow-[0_10px_40px_rgba(74,144,226,0.5)] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-8 focus:ring-[#4A90E2]/20"
                    onClick={onRequestHelp}
                    aria-label="Tap if you need support"
                >
                     {/* Pulse effect rings */}
                    <div className="absolute inset-0 rounded-full border border-white/20 scale-110 animate-pulse" />
                    <div className="absolute inset-0 rounded-full border border-white/10 scale-125 animate-pulse delay-75" />
                    
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                         <Hand className="w-10 h-10 text-white" fill="currentColor" aria-hidden="true" />
                    </div>
                </button>
                <p className="text-lg font-medium text-muted-foreground animate-fade-in">Tap if you need support</p>
            </div>
        </div>
    );
}
