import { HandHelping } from "lucide-react";
import { Button } from "./ui/button";

interface StudentViewProps {
  onRequestHelp: () => void;
}

export default function StudentView({ onRequestHelp }: StudentViewProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-foreground">Behöver du hjälp?</h1>
          <p className="text-muted-foreground">
            Tryck på knappen för att diskret signalera till din lärare
          </p>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={onRequestHelp}
            size="lg"
            className="h-64 w-64 rounded-full bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
          >
            <div className="flex flex-col items-center gap-4">
              <HandHelping className="h-24 w-24" />
              <span className="text-2xl">Jag behöver hjälp</span>
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
