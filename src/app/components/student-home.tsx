import React from "react";
import { Hand } from "lucide-react";

export default function StudentHome({ onRequestHelp }: { onRequestHelp: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
            <div className="flex flex-col items-center gap-8 w-full max-w-xs mx-auto">
                <button
                    className="flex flex-col items-center justify-center w-40 h-40 rounded-full bg-accent shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-4 focus:ring-accent"
                    style={{ minWidth: 160, minHeight: 160 }}
                    aria-label="Tap if you need support"
                    onClick={onRequestHelp}
                >
                    <Hand className="w-16 h-16 text-primary" aria-hidden="true" />
                    <span className="mt-4 text-lg font-semibold text-primary">Tap if you need support</span>
                </button>
            </div>
        </div>
    );
}
