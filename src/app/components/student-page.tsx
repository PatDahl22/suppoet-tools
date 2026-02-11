import StudentHome from "./student-home";
import StudentStep6 from "./student-step6";
import StudentStep7 from "./student-step7";
import StudentStep8 from "./student-step8";
import StudentStep9 from "./student-step9";
import { AppHeader } from "./ui/app-header";
import { AppFooter } from "./ui/app-footer";

interface StudentPageProps {
    viewMode: "student-home" | "student-step6" | "student-step7" | "student-step8" | "student-step9";
    studentRequests: Array<{ subject: string; status: string }>;
    onRequestHelp: () => void;
    onSelectHelpOption: (option: string) => void;
    onStudentApprove: (idx: number) => void;
    onStudentCancel: (idx: number) => void;
}

export default function StudentPage({
    viewMode,
    studentRequests,
    onRequestHelp,
    onSelectHelpOption,
    onStudentApprove,
    onStudentCancel,
}: StudentPageProps) {
    // Demo: studentnamn och status
    const studentName = "Elev";
    const status = "Classroom Connected";

    const handleFooterNav = (target: string) => {
        // Demo: navigera till home, profile, eller view
        if (target === "student-home") onRequestHelp();
        // Lägg till navigation till profile och view vid behov
    };

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <AppHeader studentName={studentName} status={status} />
            <main className="flex-1 flex flex-col items-center justify-center p-6">
                {viewMode === "student-home" && <StudentHome onRequestHelp={onRequestHelp} />}
                {viewMode === "student-step6" && <StudentStep6 onSelect={onSelectHelpOption} />}
                {viewMode === "student-step7" && <StudentStep7 />}
                {viewMode === "student-step8" && (
                    <StudentStep8
                        requests={studentRequests}
                        onApprove={onStudentApprove}
                        onCancel={onStudentCancel}
                    />
                )}
                {viewMode === "student-step9" && <StudentStep9 />}
            </main>
            <AppFooter onNavigate={handleFooterNav} />
        </div>
    );
}
