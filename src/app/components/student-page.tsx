import StudentHome from "./student-home";
import StudentStep1 from "./student-step1";
import StudentStep2 from "./student-step2";
import StudentStep3 from "./student-step3";
import StudentStep4 from "./student-step4";
import StudentStep5 from "./student-step5";
import DetailView from "./detail-view";
import { AppHeader } from "./ui/app-header";
import { AppFooter } from "./ui/app-footer";

interface StudentPageProps {
    viewMode: "student-home" | "student-step1" | "student-step2" | "student-step3" | "student-step4" | "student-step5" | "student-detail";
    studentName?: string;
    className?: string;
    studentRequests: Array<{ id: string; subject: string; status: string; type: any; timestamp: string }>;
    selectedRequestId: string | null;
    onRequestHelp: () => void;
    onSelectHelpOption: (option: string) => void;
    onGoToFocusSounds: () => void;
    onStudentApprove: (idx: number) => void;
    onStudentCancel: (idx: number) => void;
    onNavigate: (mode: any) => void;
    onViewDetail: (id: string) => void;
    onBackFromDetail: () => void;
}

export default function StudentPage({
    viewMode,
    studentName = "Student",
    className,
    studentRequests,
    selectedRequestId,
    onRequestHelp,
    onSelectHelpOption,
    onGoToFocusSounds,
    onStudentApprove,
    onStudentCancel,
    onNavigate,
    onViewDetail,
    onBackFromDetail,
}: StudentPageProps) {
    const status = "Classroom Connected";

    const handleFooterNav = (target: string) => {
        if (target === "student-home") onNavigate("student-home");
        if (target === "student-profile") onNavigate("student-step4");
    };

    const selectedRequest = studentRequests.find(r => r.id === selectedRequestId) || {
        id: "mock",
        studentName: "Me",
        type: "stuck",
        timestamp: "Now",
        status: "pending"
    };

    return (
        <div className="h-full flex flex-col bg-background overflow-hidden">
            <AppHeader 
                studentName={studentName} 
                className={className}
                status={status} 
                onHelpClick={() => onNavigate("student-step5")}
            />
            <main className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto w-full">
                {viewMode === "student-home" && <StudentHome onRequestHelp={onRequestHelp} />}
                {viewMode === "student-step1" && <StudentStep1 onSelect={onSelectHelpOption} />}
                {viewMode === "student-step2" && <StudentStep2 onNext={onGoToFocusSounds} />}
                {viewMode === "student-step3" && <StudentStep3 />}
                {viewMode === "student-step4" && (
                    <StudentStep4
                        requests={studentRequests}
                        onApprove={onStudentApprove}
                        onCancel={onStudentCancel}
                        onViewDetail={onViewDetail}
                    />
                )}
                {viewMode === "student-step5" && <StudentStep5 onBack={() => onNavigate("student-home")} />}
                {viewMode === "student-detail" && (
                    <DetailView 
                        request={selectedRequest as any}
                        onBack={onBackFromDetail}
                        onAction={() => {}} 
                    />
                )}
            </main>
            <AppFooter onNavigate={handleFooterNav} />
        </div>
    );
}
