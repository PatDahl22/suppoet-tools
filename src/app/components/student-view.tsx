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
            Behöver du hjälp?
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Tryck på knappen för att diskret signalera till din lärare
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
              <span className="text-2xl font-semibold">Jag behöver hjälp</span>
            </div>
          </Button>
        </div>

        <div className="text-center text-sm text-muted-foreground bg-card p-6 rounded-xl border border-border">
          <p>Din förfrågan skickas direkt till läraren utan att någon annan ser den.</p>
        </div>

      </div>
    </div>
  );
}
