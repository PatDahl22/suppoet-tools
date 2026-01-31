import { useState, lazy, Suspense } from "react";
import { Button } from "@/app/components/ui/button";
import { Users, GraduationCap } from "lucide-react";

const StudentView = lazy(() => import("@/app/components/student-view"));
const HelpOptionsView = lazy(() => import("@/app/components/help-options-view"));
const ConfirmationView = lazy(() => import("@/app/components/confirmation-view"));
const TeacherView = lazy(() => import("@/app/components/teacher-view"));
const DetailView = lazy(() => import("@/app/components/detail-view"));

type ViewMode = "role-select" | "student" | "help-options" | "confirmation" | "teacher" | "detail";
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
  const [selectedHelpType, setSelectedHelpType] = useState<HelpType | null>(null);
  const [selectedRequest, setSelectedRequest] = useState<HelpRequest | null>(null);
  
  // Mock data for teacher view
  const [helpRequests, setHelpRequests] = useState<HelpRequest[]>([
    {
      id: "1",
      studentName: "Anna S.",
      type: "stuck",
      timestamp: "För 2 minuter sedan",
      status: "pending",
    },
    {
      id: "2",
      studentName: "Erik L.",
      type: "explanation",
      timestamp: "För 5 minuter sedan",
      status: "pending",
    },
    {
      id: "3",
      studentName: "Maria K.",
      type: "personal",
      timestamp: "För 12 minuter sedan",
      status: "acknowledged",
    },
  ]);

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
    setViewMode(role);
  };

  const handleRequestHelp = () => {
    setViewMode("help-options");
  };

  const handleSelectHelpOption = (option: HelpType) => {
    setSelectedHelpType(option);
    setViewMode("confirmation");
    
    // Add new request to teacher's list
    const newRequest: HelpRequest = {
      id: Date.now().toString(),
      studentName: "Du",
      type: option,
      timestamp: "Just nu",
      status: "pending",
    };
    setHelpRequests(prev => [newRequest, ...prev]);
  };

  const handleConfirmationDone = () => {
    setViewMode("student");
    setSelectedHelpType(null);
  };

  const handleCancelHelpOptions = () => {
    setViewMode("student");
  };

  const handleSelectRequest = (request: HelpRequest) => {
    setSelectedRequest(request);
    setViewMode("detail");
  };

  const handleBackToTeacher = () => {
    setViewMode("teacher");
    setSelectedRequest(null);
  };

  const handleAction = (action: "acknowledge" | "plan" | "complete") => {
    if (!selectedRequest) return;

    setHelpRequests(prev =>
      prev.map(req => {
        if (req.id === selectedRequest.id) {
          if (action === "acknowledge") {
            return { ...req, status: "acknowledged" };
          } else if (action === "plan") {
            return { ...req, status: "planned" };
          } else {
            // Remove completed request
            return null;
          }
        }
        return req;
      }).filter((req): req is HelpRequest => req !== null)
    );

    if (action === "complete") {
      setViewMode("teacher");
      setSelectedRequest(null);
    } else if (selectedRequest) {
      setSelectedRequest({
        ...selectedRequest,
        status: action === "acknowledge" ? "acknowledged" : "planned",
      });
    }
  };

  const handleBackToRoleSelect = () => {
    setViewMode("role-select");
    setSelectedRole(null);
  };

  if (viewMode === "role-select") {
    return (
      <main className="min-h-screen bg-background flex justify-center p-6">
        <section
          aria-labelledby="page-title"
          className="w-full max-w-md space-y-8"
        >
        <div className="app-frame screen">
          <header className="text-center space-y-2">
            <h1 id="page-title" className="text-3xl font-semibold text-foreground">
              Digitalt Stödverktyg
            </h1>
            <p className="text-muted-foreground">
              Välj din roll för att fortsätta
            </p>
          </header>

          {/* 2.4.6 Headings and Labels */}
          <section
            id="role-actions"
            aria-labelledby="role-heading"
            className="mt-10"
          >
            <h2 id="role-heading" className="sr-only">
              Välj roll
            </h2>

            <div
              className="role-stack"
              role="group"
              aria-describedby="role-instructions"
            >
              <button
                type="button"
                className="role-card"
                onClick={() => handleRoleSelect("student")}
                aria-describedby="role-instructions"
              >
                <span className="role-icon" aria-hidden="true">
                  <GraduationCap className="role-icon-svg" />
                </span>

                <span className="role-title">Jag är elev</span>
                <span className="role-hint">För att be om hjälp diskret</span>
              </button>

              <button
                type="button"
                className="role-card"
                onClick={() => handleRoleSelect("teacher")}
                aria-describedby="role-instructions"
              >
                <span className="role-icon" aria-hidden="true">
                  <Users className="role-icon-svg" />
                </span>

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
    );
  }

  return (
    <main className="app-shell">
      <div className="app-frame screen">
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={handleBackToRoleSelect}
            variant="outline"
            size="sm"
            className="rounded-xl px-4 py-2 shadow-sm bg-background"
          >
            Byt roll
          </Button>
        </div>

        <Suspense fallback={<Loading />}>
          {viewMode === "student" && (
            <StudentView onRequestHelp={handleRequestHelp} />
          )}

          {viewMode === "help-options" && (
            <HelpOptionsView
              onSelectOption={handleSelectHelpOption}
              onCancel={handleCancelHelpOptions}
            />
          )}

          {viewMode === "confirmation" && selectedHelpType && (
            <ConfirmationView
              helpType={selectedHelpType}
              onDone={handleConfirmationDone}
            />
          )}

          {viewMode === "teacher" && (
            <TeacherView
              requests={helpRequests}
              onSelectRequest={handleSelectRequest}
            />
          )}

          {viewMode === "detail" && selectedRequest && (
            <DetailView
              request={selectedRequest}
              onBack={handleBackToTeacher}
              onAction={handleAction}
            />
          )}
        </Suspense>
      </div>
    </main>
  );
}
