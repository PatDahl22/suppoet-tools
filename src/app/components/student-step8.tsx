import React from "react";

export default function StudentStep8({ requests, onCancel, onApprove }: { requests: Array<{ subject: string; status: string }>, onCancel: (idx: number) => void, onApprove: (idx: number) => void }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
            <div className="w-full max-w-xs mx-auto space-y-6">
                <h2 className="text-xl font-semibold text-center">Your request</h2>
                <div className="flex flex-col gap-3">
                    {requests.map((req, idx) => (
                        <div key={idx} className="bg-card border border-border rounded-xl p-4 flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <span className="font-medium">{req.subject}</span>
                                <span className="text-xs text-muted-foreground">{req.status}</span>
                            </div>
                            <div className="flex gap-2 mt-2">
                                <button className="px-3 py-1 rounded-lg bg-accent text-primary text-xs font-medium" onClick={() => onApprove(idx)}>Approve Request</button>
                                <button className="px-3 py-1 rounded-lg bg-muted text-muted-foreground text-xs font-medium" onClick={() => onCancel(idx)}>Cancel Request</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
