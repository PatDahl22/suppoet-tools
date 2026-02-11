import React from "react";
import { CheckCircle2, Music } from "lucide-react";

export default function StudentStep2({ onNext }: { onNext: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
            <div className="flex flex-col items-center gap-6 w-full max-w-xs mx-auto">
                <CheckCircle2 className="w-24 h-24 text-[#7ED957]" /> 
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold">Received</h2>
                    <p className="text-muted-foreground">Your teacher has been notified</p>
                </div>
                
                <div className="w-full bg-card border border-border rounded-xl p-4 text-center">
                    <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-sm font-medium">Waiting for teacher</span>
                        <span className="text-xs text-muted-foreground">...</span>
                    </div>
                     {/* Progress bar simulation */}
                    <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-2/3 rounded-full" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 text-left">
                        Usually responds within a few minutes
                    </p>
                </div>

                <div className="w-full pt-4">
                     <button 
                        onClick={onNext}
                        className="w-full flex items-center gap-4 p-4 bg-white/50 border border-transparent hover:border-border rounded-2xl transition-all text-left"
                    >
                        <div className="w-10 h-10 rounded-full bg-[#E0E7FF] flex items-center justify-center text-[#4F46E5]">
                             <Music className="w-5 h-5" />
                        </div>
                        <div>
                             <p className="text-sm font-medium text-[#4F46E5]">While you wait...</p>
                             <p className="text-xs text-muted-foreground">Listen to focus sounds</p>
                        </div>
                     </button>
                </div>
            </div>
        </div>
    );
}
