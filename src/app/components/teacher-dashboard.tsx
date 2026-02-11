import React from "react";
import { User, Check, MoreHorizontal } from "lucide-react";

export default function TeacherDashboard({ requests, onAcknowledge, onMarkDone, onViewDetail }: {
    requests: Array<{ id: string; name: string; type: string; status: string }>,
    onAcknowledge: (idx: number) => void,
    onMarkDone: (idx: number) => void,
    onViewDetail: (id: string) => void
}) {
    // Helper to get time text, e.g. "2min"
    const getTime = (idx: number) => {
        return `${idx * 2 + 1}min`; // Dummy data logic
    };

    return (
        <div className="flex flex-col items-center p-6 bg-background w-full h-full">
            <div className="w-full max-w-md mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Active Signals</h2>
                    <span className="text-sm text-muted-foreground">{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                </div>
                
                <p className="text-muted-foreground text-sm">Students waiting for assistance</p>

                <div className="flex flex-col gap-4 mt-2">
                    {requests.length === 0 ? (
                        <div className="text-center py-10 text-muted-foreground">No active signals</div>
                    ) : (
                        requests.map((req, idx) => (
                            <button 
                                key={req.id || idx} 
                                className="w-full text-left bg-white border border-border rounded-[20px] p-4 shadow-sm relative overflow-hidden cursor-pointer hover:border-primary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                onClick={() => onViewDetail(req.id)}
                            >
                                 {/* Status indicator line on left */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${req.status === 'Pending' ? 'bg-orange-600' : 'bg-green-600'}`} />
                                <span className="sr-only">Status: {req.status}</span>
                                
                                <div className="pl-3 flex flex-col gap-4">
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
                                                <User className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-base">{req.name}</h3>
                                                <p className="text-sm text-muted-foreground">{req.type}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                             <span className="text-xs font-mono text-red-600 font-medium">+ {getTime(idx)}</span>
                                             <button className="text-muted-foreground hover:text-foreground p-1 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" onClick={(e) => { e.stopPropagation(); /* Menu logic */ }} aria-label="More options">
                                                 <MoreHorizontal className="w-5 h-5" />
                                             </button>
                                        </div>
                                    </div>
    
                                    <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
                                        {req.status === 'Pending' ? (
                                             <button 
                                                className="flex-1 px-4 py-2.5 rounded-xl bg-[#4A72D6] text-white text-sm font-medium hover:bg-[#3b5eb8] transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                                                onClick={() => onAcknowledge(idx)}
                                            >
                                                Acknowledge
                                            </button>
                                        ) : (
                                            <span 
                                                className="flex-1 px-4 py-2.5 rounded-xl bg-green-600 text-white text-sm font-medium shadow-sm flex items-center justify-center cursor-default" 
                                            >
                                                <Check className="w-4 h-4 mr-2" />
                                                Acknowledged
                                            </span>
                                        )}
                                       
                                        <button 
                                            className="px-4 py-2.5 rounded-xl bg-muted/50 text-muted-foreground text-sm font-medium hover:bg-muted hover:text-foreground transition-colors border border-transparent hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
                                            onClick={() => onMarkDone(idx)}
                                        >
                                            Mark Done
                                        </button>
                                    </div>
                                </div>
                            </button>
                        ))
                    )}
                </div>

                <div className="bg-white border border-border rounded-xl p-4 flex justify-between items-center shadow-sm mt-8">
                     <div>
                         <p className="text-xs text-muted-foreground">Today's Summary</p>
                         <h4 className="font-bold text-lg">12 <span className="text-sm font-normal text-muted-foreground">Total Signals</span></h4>
                     </div>
                     <div className="h-8 w-px bg-border" />
                     <div>
                         <h4 className="font-bold text-lg text-green-600">9 <span className="text-sm font-normal text-muted-foreground">Resolved</span></h4>
                     </div>
                     <div className="h-8 w-px bg-border" />
                     <div>
                         <h4 className="font-bold text-lg text-orange-500">2.5min <span className="text-sm font-normal text-muted-foreground">Avg Response</span></h4>
                     </div>
                </div>
            </div>
        </div>
    );
}
