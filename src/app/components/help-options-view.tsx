import { AlertCircle, BookOpen, Heart } from "lucide-react";
import { Button } from "./ui/button";

interface HelpOptionsViewProps {
  onSelectOption: (option: "stuck" | "explanation" | "personal") => void;
  onCancel: () => void;
}

export function HelpOptionsView({ onSelectOption, onCancel }: HelpOptionsViewProps) {
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
            className="w-full h-auto min-h-24 flex flex-col items-center gap-3 p-6 bg-card hover:bg-accent transition-all"
          >
            <AlertCircle className="h-12 w-12 text-primary" />
            <div className="space-y-1">
              <div className="text-lg">Jag har fastnat</div>
              <div className="text-sm text-muted-foreground">
                Behöver hjälp att komma vidare
              </div>
            </div>
          </Button>

          <Button
            onClick={() => onSelectOption("explanation")}
            variant="outline"
            className="w-full h-auto min-h-24 flex flex-col items-center gap-3 p-6 bg-card hover:bg-accent transition-all"
          >
            <BookOpen className="h-12 w-12 text-primary" />
            <div className="space-y-1">
              <div className="text-lg">Behöver förklaring</div>
              <div className="text-sm text-muted-foreground">
                Förstår inte uppgiften
              </div>
            </div>
          </Button>

          <Button
            onClick={() => onSelectOption("personal")}
            variant="outline"
            className="w-full h-auto min-h-24 flex flex-col items-center gap-3 p-6 bg-card hover:bg-accent transition-all"
          >
            <Heart className="h-12 w-12 text-primary" />
            <div className="space-y-1">
              <div className="text-lg">Personligt stöd</div>
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
