import React from "react";

import { Home, User, HelpCircle } from "lucide-react";

export function AppFooter({ onNavigate }: { onNavigate?: (target: string) => void }) {
    return (
        <footer className="w-full py-3 px-6 bg-background border-t border-border mt-auto">
            <div className="flex justify-around items-center">
                <button
                    className="flex flex-col items-center text-xs text-primary bg-transparent border-none outline-none"
                    onClick={() => onNavigate && onNavigate("student-home")}
                >
                    <Home className="h-6 w-6 mb-1" />
                    Home
                </button>
                <button
                    className="flex flex-col items-center text-xs text-muted-foreground bg-transparent border-none outline-none"
                    onClick={() => onNavigate && onNavigate("student-profile")}
                >
                    <User className="h-6 w-6 mb-1" />
                    Profile
                </button>
                <button
                    className="flex flex-col items-center text-xs text-muted-foreground bg-transparent border-none outline-none"
                    onClick={() => onNavigate && onNavigate("student-view")}
                >
                    <HelpCircle className="h-6 w-6 mb-1" />
                </button>
            </div>
        </footer>
    );
}
