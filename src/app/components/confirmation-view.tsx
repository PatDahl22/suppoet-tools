import { CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";

interface ConfirmationViewProps {
  helpType: "stuck" | "explanation" | "personal";
  onDone: () => void;
}

const helpTypeLabels = {
  stuck: "Jag har fastnat",
  explanation: "Behöver förklaring",
  personal: "Personligt stöd",
};


export default function ConfirmationView({ helpType, onDone }: ConfirmationViewProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="flex flex-col items-center gap-6">
          <div className="h-32 w-32 rounded-full bg-primary/10 flex items-center justify-center">
            <CheckCircle className="h-20 w-20 text-primary" />
          </div>

          <div className="text-center space-y-3">
            <h2 className="text-foreground">Din förfrågan är skickad!</h2>
            <p className="text-lg text-muted-foreground">
              {helpTypeLabels[helpType]}
            </p>
          </div>

          <div className="bg-secondary/50 p-6 rounded-xl text-center space-y-2">
            <p className="text-muted-foreground">
              Läraren har fått din förfrågan och kommer att hjälpa dig så snart som möjligt.
            </p>
            <p className="text-sm text-muted-foreground">
              Du kan fortsätta arbeta medan du väntar.
            </p>
          </div>
        </div>

        <Button
          onClick={onDone}
          variant="outline"
          className="w-full"
        >
          Stäng
        </Button>
      </div>
    </div>
  );
}
