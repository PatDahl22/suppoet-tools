import { useState } from "react";
import TeacherDashboard from "./teacher-dashboard";
import DetailView from "./detail-view";
import { AppHeader } from "./ui/app-header";
import { AppFooter } from "./ui/app-footer";

type TeacherViewMode = "dashboard" | "detail";
type HelpType = "stuck" | "explanation" | "personal";

export default function Teacher() {
    const [viewMode, setViewMode] = useState<TeacherViewMode>("dashboard");
    const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
    
    // Using mock data similar to App.tsx but formatted for DetailView
    const [teacherRequests, setTeacherRequests] = useState<Array<{ id: string; name: string; type: HelpType; status: "pending" | "acknowledged" | "planned"; timestamp: string }>>([
        { id: "1", name: "Anna S.", type: "stuck", status: "pending", timestamp: "10:30" },
        { id: "2", name: "Erik L.", type: "explanation", status: "pending", timestamp: "10:32" },
        { id: "3", name: "Maria K.", type: "personal", status: "acknowledged", timestamp: "10:15" },
    ]);

    const handleAcknowledge = (id: string) => {
        setTeacherRequests((reqs) => reqs.map((r) => r.id === id ? { ...r, status: "acknowledged" } : r));
    };

    const handleMarkDone = (id: string) => {
        setTeacherRequests((reqs) => reqs.filter((r) => r.id !== id));
        if (selectedRequestId === id) {
            setViewMode("dashboard");
            setSelectedRequestId(null);
        }
    };
    
    const handlePlan = (id: string) => {
        setTeacherRequests((reqs) => reqs.map((r) => r.id === id ? { ...r, status: "planned" } : r));
    };

    const handleViewDetail = (id: string) => {
        setSelectedRequestId(id);
        setViewMode("detail");
    };

    const handleBackToDashboard = () => {
        setViewMode("dashboard");
        setSelectedRequestId(null);
    };
    
    // Mapping for Dashboard component which expects specific props format
    const dashboardRequests = teacherRequests.map(r => ({
        id: r.id, // We'll need to update TeacherDashboard to accept ID
        name: r.name,
        type: r.type.charAt(0).toUpperCase() + r.type.slice(1),
        status: r.status.charAt(0).toUpperCase() + r.status.slice(1)
    }));

    const selectedRequest = teacherRequests.find(r => r.id === selectedRequestId);

    return (
        <div className="h-full flex flex-col bg-background overflow-hidden">
            <AppHeader teacherName="Mrs. Davis" status="Teacher View" />
            <main className="flex-1 overflow-y-auto w-full">
                {viewMode === "dashboard" && (
                    <TeacherDashboard 
                        requests={dashboardRequests} 
                        onAcknowledge={(idx) => handleAcknowledge(dashboardRequests[idx].id)} 
                        onMarkDone={(idx) => handleMarkDone(dashboardRequests[idx].id)}
                        onViewDetail={handleViewDetail}
                    />
                )}
                {viewMode === "detail" && selectedRequest && (
                    <DetailView 
                        request={{...selectedRequest, studentName: selectedRequest.name}}
                        onBack={handleBackToDashboard}
                        onAction={(action) => {
                            if (action === "acknowledge") handleAcknowledge(selectedRequest.id);
                            if (action === "plan") handlePlan(selectedRequest.id);
                            if (action === "complete") handleMarkDone(selectedRequest.id);
                        }}
                    />
                )}
            </main>
            <AppFooter />
        </div>
    );
}
