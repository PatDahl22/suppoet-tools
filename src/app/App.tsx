
import StudentPage from "@/app/components/student-page";
import TeacherDashboard from "@/app/components/teacher-dashboard";
import { useEffect, useState } from "react";
import { AppHeader } from "@/app/components/ui/app-header";
import { AppFooter } from "@/app/components/ui/app-footer";

type ViewMode = "role-select" | "student-home" | "student-step6" | "student-step7" | "student-step8" | "student-step9" | "teacher-dashboard";
type HelpType = "stuck" | "explanation" | "personal";
type Role = "student" | "teacher";

interface HelpRequest {
  id: string;
  studentName: string;
  type: HelpType;
  timestamp: string;
  status: "pending" | "acknowledged" | "planned";
}

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <p className="text-muted-foreground">Laddar…</p>
    </div>
  );
}

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("role-select");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [studentRequests, setStudentRequests] = useState<Array<{ subject: string; status: string }>>([]);
  const [teacherRequests, setTeacherRequests] = useState<Array<{ name: string; type: string; status: string }>>([
    { name: "Anna S.", type: "Stuck", status: "Pending" },
    { name: "Erik L.", type: "Break", status: "Pending" },
    { name: "Maria K.", type: "Visit", status: "Acknowledged" },
  ]);
  // Visa instruktioner endast om explicit valt

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    if (role === "student") setViewMode("student-home");
    else setViewMode("teacher-dashboard");
  };

  const handleRequestHelp = () => {
    setViewMode("student-step6");
  };

  const handleSelectHelpOption = (option: string) => {
    if (option === "cancel") {
      setViewMode("student-home");
      return;
    }
    setStudentRequests([{ subject: option, status: "Waiting for teacher" }]);
    setTeacherRequests((prev: Array<{ name: string; type: string; status: string }>) => [
      { name: "Du", type: option.charAt(0).toUpperCase() + option.slice(1), status: "Pending" },
      ...prev,
    ]);
    setViewMode("student-step7");
    setTimeout(() => setViewMode("student-step8"), 1200);
  };

  const handleStudentApprove = (idx: number) => {
    setStudentRequests((reqs: Array<{ subject: string; status: string }>) => reqs.map((r, i) => i === idx ? { ...r, status: "Approved by teacher" } : r));
  };
  const handleStudentCancel = (idx: number) => {
    setStudentRequests((reqs: Array<{ subject: string; status: string }>) => reqs.filter((_, i) => i !== idx));
    setViewMode("student-home");
  };

  // Lärarens åtgärder
  const handleAcknowledge = (idx: number) => {
    setTeacherRequests((reqs: Array<{ name: string; type: string; status: string }>) => reqs.map((r, i) => i === idx ? { ...r, status: "Acknowledged" } : r));
  };
  const handleMarkDone = (idx: number) => {
    setTeacherRequests((reqs: Array<{ name: string; type: string; status: string }>) => reqs.filter((_, i) => i !== idx));
  };



  const handleBackToRoleSelect = () => {
    setViewMode("role-select");
    setSelectedRole(null);
  };

  if (viewMode === "role-select") {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <AppHeader />
        <main className="flex-1 flex justify-center p-6">
          <section aria-labelledby="page-title" className="w-full max-w-md space-y-8">
            <div className="app-frame screen">
              <header className="text-center space-y-2">
                <h1 id="page-title" className="text-3xl font-semibold text-foreground">Digitalt Stödverktyg</h1>
                <p className="text-muted-foreground">Välj din roll för att fortsätta</p>
              </header>
              <section id="role-actions" aria-labelledby="role-heading" className="mt-10">
                <h2 id="role-heading" className="sr-only">Välj roll</h2>
                <div className="role-stack" role="group" aria-describedby="role-instructions">
                  <button type="button" className="role-card" onClick={() => handleRoleSelect("student")}
                    aria-describedby="role-instructions">
                    <span className="role-title">Jag är elev</span>
                    <span className="role-hint">För att be om hjälp diskret</span>
                  </button>
                  <button type="button" className="role-card" onClick={() => handleRoleSelect("teacher")}
                    aria-describedby="role-instructions">
                    <span className="role-title">Jag är lärare</span>
                    <span className="role-hint">För att se och hantera förfrågningar</span>
                  </button>
                </div>
                <p className="text-sm text-muted-foreground bg-card border border-border rounded-xl p-4 text-center">
                  Detta verktyg hjälper elever att diskret be om hjälp och ger lärare en snabb överblick över behoven i klassrummet.
                </p>
              </section>
            </div>
          </section>
        </main>
        <AppFooter />
      </div>
    );
  }

  // Student flow
  if (["student-home", "student-step6", "student-step7", "student-step8", "student-step9"].includes(viewMode)) {
    return (
      <StudentPage
        viewMode={viewMode as any}
        studentRequests={studentRequests}
        onRequestHelp={handleRequestHelp}
        onSelectHelpOption={handleSelectHelpOption}
        onStudentApprove={handleStudentApprove}
        onStudentCancel={handleStudentCancel}
      />
    );
  }
  // Teacher flow
  if (viewMode === "teacher-dashboard") {
    return <TeacherDashboard requests={teacherRequests} onAcknowledge={handleAcknowledge} onMarkDone={handleMarkDone} />;
  }
  return null;
}
