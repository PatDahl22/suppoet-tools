import { useState } from "react";
import Student from "@/app/components/Student";
import Teacher from "@/app/components/Teacher";

type Role = "student" | "teacher";

export default function App() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
  };

  if (selectedRole === "student") {
    return <Student />;
  }

  if (selectedRole === "teacher") {
    return <Teacher />;
  }

  return (
    <div className="h-full flex flex-col bg-background overflow-hidden">
      <main className="flex-1 flex justify-center p-6 overflow-y-auto">
        <section aria-labelledby="page-title" className="w-full mt-14 max-w-md space-y-8">
          <div className="app-frame screen">
            <header className="text-center space-y-2">
              <h1 id="page-title" className="text-3xl font-semibold text-foreground">Digital Support Tool</h1>
              <p className="text-muted-foreground">Select your role to continue</p>
            </header>
            <section id="role-actions" aria-labelledby="role-heading" className="mt-10">
              <h2 id="role-heading" className="sr-only">Select Role</h2>
              <div className="role-stack" role="group" aria-describedby="role-instructions">
                <button type="button" className="role-card" onClick={() => handleRoleSelect("student")}
                  aria-describedby="role-instructions">
                  <span className="role-title">I am a student</span>
                  <span className="role-hint">To ask for help discreetly</span>
                </button>
                <button type="button" className="role-card" onClick={() => handleRoleSelect("teacher")}
                  aria-describedby="role-instructions">
                  <span className="role-title">I am a teacher</span>
                  <span className="role-hint">To view and manage requests</span>
                </button>
              </div>
              <p id="role-instructions" className="mt-8 text-sm text-muted-foreground bg-card border border-border rounded-xl p-4 text-center">
                This tool helps students ask for help discreetly and gives teachers a quick overview of classroom needs.
              </p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
