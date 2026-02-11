import React from "react";
import { Home, User } from "lucide-react";

export function AppFooter({ onNavigate }: { onNavigate?: (target: string) => void }) {
    return (
        <footer className="w-full py-2 px-6 bg-white border-t border-border mt-auto pb-6">
            <div className="flex justify-around items-center max-w-xs mx-auto">
                <button
                    className="flex flex-col items-center gap-1 text-[#4F46E5] bg-transparent border-none outline-none group"
                    onClick={() => onNavigate && onNavigate("student-home")}
                >
                    <Home className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-medium">Home</span>
                </button>
                <button
                    className="flex flex-col items-center gap-1 text-muted-foreground bg-transparent border-none outline-none group hover:text-foreground transition-colors"
                    onClick={() => onNavigate && onNavigate("student-profile")}
                >
                    <User className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] font-medium">Profile</span>
                </button>
            </div>
        </footer>
    );
}
