import React from "react";

export default function TeacherDashboard({ requests, onAcknowledge, onMarkDone }: {
    requests: Array<{ name: string; type: string; status: string }>,
    onAcknowledge: (idx: number) => void,
    onMarkDone: (idx: number) => void
}) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
            <div className="w-full max-w-md mx-auto space-y-6">
                <h2 className="text-xl font-semibold text-center">Active Signals</h2>
                <div className="flex flex-col gap-3">
                    {requests.map((req, idx) => (
                        <div key={idx} className="bg-card border border-border rounded-xl p-4 flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <span className="font-medium">{req.name}</span>
                                <span className="text-xs text-muted-foreground">{req.type}</span>
                                <span className="text-xs text-muted-foreground">{req.status}</span>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <button className="px-3 py-1 rounded-lg bg-accent text-primary text-xs font-medium" onClick={() => onAcknowledge(idx)}>Acknowledge</button>
                                <button className="px-3 py-1 rounded-lg bg-muted text-muted-foreground text-xs font-medium" onClick={() => onMarkDone(idx)}>Mark Done</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="bg-card border border-border rounded-xl p-4 text-center text-xs text-muted-foreground mt-4">
                    Today's Summary: <span className="font-semibold">2</span> Acknowledged, <span className="font-semibold">1</span> Pending
                </div>
            </div>
        </div>
    );
}
