import { useState } from "react";
import StudentPage from "./student-page";

type StudentViewMode = "student-home" | "student-step1" | "student-step2" | "student-step3" | "student-step4" | "student-step5" | "student-detail";
type HelpType = "stuck" | "explanation" | "personal";

export default function Student() {
    const [viewMode, setViewMode] = useState<StudentViewMode>("student-home");
    const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
    const [studentRequests, setStudentRequests] = useState<Array<{ id: string; subject: string; status: string; type: HelpType; timestamp: string }>>([]);

    // Dummy teacher requests state effectively unused in Student view but logically connected in a real app
    // We'll keep local state for now as per original App.tsx logic

    const handleRequestHelp = () => {
        setViewMode("student-step1");
    };

    const handleSelectHelpOption = (option: string) => {
        if (option === "cancel") {
            setViewMode("student-home");
            return;
        }
        const newRequest = {
            id: Date.now().toString(),
            subject: option,
            status: "Waiting for teacher",
            type: "stuck" as HelpType, // Default for now
            timestamp: "Now"
        };
        setStudentRequests([newRequest]);
        setViewMode("student-step2");
    };

    const handleGoToFocusSounds = () => {
        setViewMode("student-step3");
    };

    const handleStudentApprove = (idx: number) => {
        setStudentRequests((reqs) => reqs.map((r, i) => i === idx ? { ...r, status: "Approved by teacher" } : r));
    };

    const handleStudentCancel = (idx: number) => {
        setStudentRequests((reqs) => reqs.filter((_, i) => i !== idx));
        setViewMode("student-home");
    };

    const handleNavigate = (mode: StudentViewMode) => {
        setViewMode(mode);
    };

    const handleViewDetail = (id: string) => {
        setSelectedRequestId(id);
        setViewMode("student-detail");
    };

    const handleBackFromDetail = () => {
        setViewMode("student-step4");
        setSelectedRequestId(null);
    };

    return (
        <StudentPage
            viewMode={viewMode}
            studentName="Alex M."
            className="Class 5B"
            studentRequests={studentRequests}
            selectedRequestId={selectedRequestId}
            onRequestHelp={handleRequestHelp}
            onSelectHelpOption={handleSelectHelpOption}
            onGoToFocusSounds={handleGoToFocusSounds}
            onStudentApprove={handleStudentApprove}
            onStudentCancel={handleStudentCancel}
            onNavigate={handleNavigate}
            onViewDetail={handleViewDetail}
            onBackFromDetail={handleBackFromDetail}
        />
    );
}
