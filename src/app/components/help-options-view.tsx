import { AlertCircle, BookOpen, Heart } from "lucide-react";
import { Button } from "./ui/button";

interface HelpOptionsViewProps {
  onSelectOption: (option: "stuck" | "explanation" | "personal") => void;
  onCancel: () => void;
}

export default function HelpOptionsView({ onSelectOption, onCancel }: HelpOptionsViewProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-foreground">Vad behöver du hjälp med?</h2>
          <p className="text-muted-foreground">Välj det alternativ som passar bäst</p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => onSelectOption("stuck")}
            variant="outline"
            className="w-full h-auto min-h-[var(--touch-target,44px)] flex flex-col items-center gap-3 p-6 bg-card border border-border hover:bg-accent focus-visible:ring-3 focus-visible:ring-icon-blue rounded-[var(--radius)] transition-all group"
            aria-label="Request Help: I don't understand the task"
          >
            <AlertCircle className="h-10 w-10 text-icon-blue group-hover:scale-110 transition-transform" />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">Jag har fastnat</h2>
              <div className="text-sm text-muted-foreground">
                Behöver hjälp att komma vidare
              </div>
            </div>
          </Button>

          <Button
            onClick={() => onSelectOption("explanation")}
            variant="outline"
            className="w-full h-auto min-h-[var(--touch-target,44px)] flex flex-col items-center gap-3 p-6 bg-card border border-border hover:bg-accent focus-visible:ring-3 focus-visible:ring-icon-blue rounded-[var(--radius)] transition-all group"
            aria-label="Request Explanation: I don't understand the task"
          >
            <BookOpen className="h-10 w-10 text-icon-blue group-hover:scale-110 transition-transform" />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">Behöver förklaring</h2>
              <div className="text-sm text-muted-foreground">
                Förstår inte uppgiften
              </div>
            </div>
          </Button>

          <Button
            onClick={() => onSelectOption("personal")}
            variant="outline"
            className="w-full h-auto min-h-[var(--touch-target,44px)] flex flex-col items-center gap-3 p-6 bg-card border border-border hover:bg-accent focus-visible:ring-3 focus-visible:ring-icon-blue rounded-[var(--radius)] transition-all group"
            aria-label="Request Personal Help: I want to talk privately"
          >
            <Heart className="h-10 w-10 text-icon-purple group-hover:scale-110 transition-transform" />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold">Personligt stöd</h2>
              <div className="text-sm text-muted-foreground">
                Vill prata privat
              </div>
            </div>
          </Button>
        </div>

        <Button
          onClick={onCancel}
          variant="ghost"
          className="w-full mt-4"
        >
          Avbryt
        </Button>
      </div>
    </div>
  );
}
