import React from "react";
import { Check, X, Clock } from "lucide-react";

export default function StudentStep4({ requests, onCancel, onApprove, onViewDetail }: { requests: Array<{ id?: string, subject: string; status: string }>, onCancel: (idx: number) => void, onApprove: (idx: number) => void, onViewDetail?: (id: string) => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
            <div className="w-full max-w-sm mx-auto space-y-6">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold">Your request</h2>
                    <p className="text-muted-foreground">Your signal has been sent to the teacher</p>
                </div>
                
                <div className="flex flex-col gap-4">
                    {requests.length === 0 ? (
                         <div className="text-center text-muted-foreground py-8">No active requests</div>
                    ) : (
                        requests.map((req, idx) => (
                            <div key={idx} className="bg-card border border-border rounded-[20px] p-5 shadow-sm flex flex-col gap-4 cursor-pointer hover:border-primary/50 transition-colors" onClick={() => onViewDetail && onViewDetail(req.id || idx.toString())}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-lg">{req.subject}</h3>
                                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                            Status
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end gap-1">
                                         <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-50 text-green-600 border border-green-100">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-xs font-medium">Active</span>
                                         </div>
                                         <span className="text-xs text-muted-foreground flex items-center gap-1">
                                            <Clock className="w-3 h-3" /> Now
                                         </span>
                                    </div>
                                </div>
                                
                                <div className="flex gap-3 pt-2" onClick={(e) => e.stopPropagation()}>
                                    <button 
                                        className="flex-1 px-4 py-2.5 rounded-xl bg-[#6D93F9] text-white text-sm font-medium hover:bg-[#5B82E8] transition-colors shadow-sm flex items-center justify-center gap-2" 
                                        onClick={() => onApprove(idx)}
                                    >
                                        <Check className="w-4 h-4" />
                                        Mark Resolved
                                    </button>
                                    <button 
                                        className="px-4 py-2.5 rounded-xl bg-muted/50 text-muted-foreground text-sm font-medium hover:bg-muted hover:text-foreground transition-colors border border-transparent hover:border-border" 
                                        onClick={() => onCancel(idx)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
