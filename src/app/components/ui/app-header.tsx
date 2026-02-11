import React from "react";

interface AppHeaderProps {
    studentName?: string;
    status?: string;
}

export function AppHeader({ studentName, status }: AppHeaderProps) {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return (
        <header className="w-full py-4 px-6 bg-white border-b border-border flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
                <span className="font-bold text-lg text-primary tracking-tight">Stödverktyg</span>
                {studentName && (
                    <span className="text-sm text-muted-foreground">{studentName}</span>
                )}
                {status && (
                    <span className="ml-2 text-xs text-green-600">● {status}</span>
                )}
            </div>
            <span className="text-xs text-muted-foreground">{time}</span>
        </header>
    );
}
