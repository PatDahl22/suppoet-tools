import { useState } from "react";
import { StudentView } from "@/app/components/student-view";
import { HelpOptionsView } from "@/app/components/help-options-view";
import { ConfirmationView } from "@/app/components/confirmation-view";
import { TeacherView } from "@/app/components/teacher-view";
import { DetailView } from "@/app/components/detail-view";
import { Button } from "@/app/components/ui/button";
import { Users, GraduationCap } from "lucide-react";

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
      <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-foreground">Digitalt Stödverktyg</h1>
            <p className="text-muted-foreground">
              Välj din roll för att fortsätta
            </p>
          </div>

          <div className="space-y-4">
            <Button
              onClick={() => handleRoleSelect("student")}
              variant="outline"
              className="w-full h-32 flex flex-col items-center gap-4 p-6 bg-card hover:bg-accent transition-all"
            >
              <GraduationCap className="h-16 w-16 text-primary" />
              <span className="text-xl">Jag är elev</span>
            </Button>

            <Button
              onClick={() => handleRoleSelect("teacher")}
              variant="outline"
              className="w-full h-32 flex flex-col items-center gap-4 p-6 bg-card hover:bg-accent transition-all"
            >
              <Users className="h-16 w-16 text-primary" />
              <span className="text-xl">Jag är lärare</span>
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground bg-card p-6 rounded-xl border border-border">
            <p>
              Detta verktyg hjälper elever att diskret be om hjälp och ger lärare en snabb överblick över behoven i klassrummet.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {selectedRole && (
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={handleBackToRoleSelect}
            variant="outline"
            size="sm"
            className="bg-card"
          >
            Byt roll
          </Button>
        </div>
      )}

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
    </div>
  );
}
