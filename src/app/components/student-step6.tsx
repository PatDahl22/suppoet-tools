import React from "react";
import { AlertCircle, Coffee, BookOpen } from "lucide-react";

export default function StudentStep6({ onSelect }: { onSelect: (type: string) => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
            <div className="w-full max-w-xs mx-auto space-y-6">
                <h2 className="text-xl font-semibold text-center mb-4">Select Option</h2>
                <div className="flex flex-col gap-4">
                    <button
                        className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border shadow hover:bg-accent focus:outline-none focus:ring-4 focus:ring-accent"
                        onClick={() => onSelect("stuck")}
                        aria-label="Stuck: Need help understanding"
                    >
                        <AlertCircle className="w-8 h-8 text-primary" />
                        <span className="text-base font-medium">Stuck</span>
                    </button>
                    <button
                        className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border shadow hover:bg-accent focus:outline-none focus:ring-4 focus:ring-accent"
                        onClick={() => onSelect("break")}
                        aria-label="Break: Need a moment to rest"
                    >
                        <Coffee className="w-8 h-8 text-primary" />
                        <span className="text-base font-medium">Break</span>
                    </button>
                    <button
                        className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border shadow hover:bg-accent focus:outline-none focus:ring-4 focus:ring-accent"
                        onClick={() => onSelect("visit")}
                        aria-label="Visit: Want to talk privately"
                    >
                        <BookOpen className="w-8 h-8 text-primary" />
                        <span className="text-base font-medium">Visit</span>
                    </button>
                </div>
                <button
                    className="mt-4 text-muted-foreground underline text-sm"
                    onClick={() => onSelect("cancel")}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}
