import React from "react";

export default function StudentStep9() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
            <div className="w-full max-w-xs mx-auto space-y-6">
                <h2 className="text-xl font-semibold text-center">How it works</h2>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                    <li>Press the button if you need support</li>
                    <li>Choose your support option</li>
                    <li>Teacher receives your request and helps you</li>
                </ol>
                <div className="bg-card border border-border rounded-xl p-4 text-center text-sm text-muted-foreground">
                    Your privacy matters. Only your teacher sees your request.
                </div>
            </div>
        </div>
    );
}
