import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function StudentStep7() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
            <div className="flex flex-col items-center gap-6 w-full max-w-xs mx-auto">
                <CheckCircle2 className="w-20 h-20 text-accent" />
                <h2 className="text-xl font-semibold text-center">Received</h2>
                <p className="text-muted-foreground text-center">Your teacher has been notified</p>
                <div className="w-full flex flex-col gap-2 mt-4">
                    <div className="bg-card border border-border rounded-xl p-3 text-center text-sm text-muted-foreground">
                        Waiting for teacher
                    </div>
                </div>
            </div>
        </div>
    );
}
