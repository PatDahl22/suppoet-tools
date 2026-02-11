import React from "react";
import { Play, Pause, Music, Wind, CloudRain } from "lucide-react";

export default function StudentStep3() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background w-full">
            <div className="w-full max-w-xs mx-auto space-y-6">
                <div className="flex items-center gap-2 mb-2">
                    <Music className="w-5 h-5 text-primary" />
                    <h2 className="text-xl font-semibold">Focus Sounds</h2>
                </div>

                <div className="space-y-4">
                    {/* Sound Card 1 */}
                    <div className="bg-white border border-border rounded-2xl p-4 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <Wind className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-medium">White Noise</h3>
                                <p className="text-xs text-muted-foreground">15 min</p>
                            </div>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                            <Play className="w-5 h-5 ml-0.5" />
                        </button>
                    </div>

                    {/* Sound Card 2 */}
                    <div className="bg-white border border-border rounded-2xl p-4 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <CloudRain className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-medium">Rain Sounds</h3>
                                <p className="text-xs text-muted-foreground">30 min</p>
                            </div>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-muted/80 transition-colors">
                            <Play className="w-5 h-5 ml-0.5" />
                        </button>
                    </div>
                </div>

                <div className="pt-4 text-center">
                   <p className="text-sm text-muted-foreground">
                        While you wait, you can listen to your notes or try the breathing exercise.
                   </p>
                </div>
            </div>
        </div>
    );
}
