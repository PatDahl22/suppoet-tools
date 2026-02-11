import React from "react";
import { Puzzle, PauseCircle, User, MessageCircle } from "lucide-react";

export default function StudentStep1({ onSelect }: { onSelect: (type: string) => void }) {
    const options = [
        {
            id: "stuck",
            label: "Stuck",
            sub: "Need help understanding",
            icon: Puzzle,
            color: "text-[#D97706]", // Darker Orange (Amber-600)
            bg: "bg-[#FFF8E1]",
        },
        {
            id: "break",
            label: "Break",
            sub: "Need a moment to rest",
            icon: PauseCircle,
            color: "text-[#2563EB]", // Darker Blue (Blue-600)
            bg: "bg-[#E3F2FD]",
        },
        {
            id: "visit",
            label: "Visit",
            sub: "Come to my desk",
            icon: User,
            color: "text-[#16A34A]", // Darker Green (Green-600)
            bg: "bg-[#E8F5E9]",
        },
        {
            id: "chat",
            label: "Chat",
            sub: "Send text message",
            icon: MessageCircle,
            color: "text-[#9333EA]", // Darker Purple (Purple-600)
            bg: "bg-[#F3E5F5]",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
            <div className="w-full max-w-sm space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">Select Option</h1>
                    <p className="text-muted-foreground">Choose what you need</p>
                </div>

                <div className="space-y-4">
                    {options.map((opt) => (
                        <button
                            key={opt.id}
                            onClick={() => onSelect(opt.id)}
                            className="w-full flex items-center gap-4 p-5 bg-card border border-border rounded-[24px] hover:bg-accent/50 hover:scale-[1.02] transition-all group text-left focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring shadow-sm"
                            aria-label={`${opt.label}: ${opt.sub}`}
                        >
                            <div className={`p-3 rounded-full ${opt.bg} transition-colors`}>
                                <opt.icon className={`w-6 h-6 ${opt.color}`} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-lg leading-tight">{opt.label}</h3>
                                <p className="text-sm text-muted-foreground">{opt.sub}</p>
                            </div>
                            <div className="text-muted-foreground/30">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </button>
                    ))}
                </div>

                <button
                    className="w-full py-4 text-muted-foreground hover:text-foreground transition-colors font-medium flex items-center justify-center gap-2"
                    onClick={() => onSelect("cancel")}
                >
                    <span>×</span> Cancel
                </button>
            </div>
        </div>
    );
}
