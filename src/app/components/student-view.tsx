import '../../styles/index.css';

import { HandHelping } from "lucide-react";
import { Button } from "./ui/button";
import("@/app/components/student-view")


interface StudentViewProps {
  onRequestHelp: () => void;
}

export default function StudentView({ onRequestHelp }: StudentViewProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Do you need help?
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Press the button to discreetly signal your teacher
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={onRequestHelp}
            size="lg"
            className="h-64 w-64 rounded-full bg-card border shadow-md hover:shadow-lg transition"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <HandHelping className="h-10 w-10" />
              <span className="text-2xl font-semibold">I need help</span>
            </div>
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground bg-card p-6 rounded-xl border border-border">
          <p>Your request is sent directly to the teacher without anyone else seeing it.</p>
        </div>

      </div>
    </div>
  );
}
