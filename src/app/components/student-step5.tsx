import React from "react";
import { Hand, User, CheckCircle2 } from "lucide-react";

export default function StudentStep5({ onBack }: { onBack?: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
            <div className="w-full max-w-sm mx-auto space-y-8">
                <div className="text-center space-y-2">
                    {onBack && (
                         <button onClick={onBack} className="absolute top-24 left-6 text-muted-foreground hover:text-foreground">
                            ← Back
                        </button>
                    )}
                    <h2 className="text-2xl font-bold">How it works</h2>
                    <p className="text-muted-foreground">Get support when you need it, simply and privately</p>
                </div>

                <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-white border border-border rounded-2xl">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                            1
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground">Press the button</h3>
                            <p className="text-sm text-muted-foreground mt-1">Tap the button on your home screen when you need help.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-4 bg-white border border-border rounded-2xl">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                            2
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground">Choose your support</h3>
                            <p className="text-sm text-muted-foreground mt-1">Select what kind of help you need from simple options.</p>
                        </div>
                    </div>

                    <div className="flex gap-4 p-4 bg-white border border-border rounded-2xl">
                         <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold">
                            3
                        </div>
                        <div>
                            <h3 className="font-semibold text-foreground">Teacher comes to you</h3>
                            <p className="text-sm text-muted-foreground mt-1">Your teacher will know you need help and come when available.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#6D93F9]/10 border border-[#6D93F9]/20 rounded-2xl p-4 flex gap-3">
                    <div className="flex-shrink-0">
                         <div className="w-8 h-8 rounded-full bg-[#6D93F9] flex items-center justify-center text-white">
                             <CheckCircle2 className="w-5 h-5" />
                         </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-[#6D93F9]">Your privacy matters</h4>
                        <p className="text-xs text-muted-foreground mt-1">Only your teacher sees this. No one else in class will know.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
