import React from "react";
import { HelpCircle } from "lucide-react";

interface AppHeaderProps {
    studentName?: string;
    className?: string;
    teacherName?: string;
    status?: string;
    onHelpClick?: () => void;
}

export function AppHeader({ studentName, className, teacherName, status, onHelpClick }: AppHeaderProps) {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
        <header className="w-full py-4 px-6 bg-white border-b border-border flex items-center justify-between shadow-sm sticky top-0 z-50">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                     <div className="flex flex-col">
                        {teacherName ? (
                             <span className="font-medium text-sm text-foreground">{teacherName}</span>
                        ) : (
                            <>
                                <span className="font-medium text-sm text-foreground">{studentName || "Student"}</span>
                                {className && <span className="text-xs text-muted-foreground">{className}</span>}
                            </>
                        )}
                        {!studentName && !teacherName && <span className="font-medium text-sm text-muted-foreground tracking-tight">Classroom Connected</span>}
                     </div>
                </div>
            </div>
            <div className="flex items-center gap-4">
                {onHelpClick && (
                    <button 
                        onClick={onHelpClick}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <HelpCircle className="w-5 h-5" />
                    </button>
                )}
                <span className="text-sm font-medium text-muted-foreground">{time}</span>
            </div>
        </header>
    );
}
