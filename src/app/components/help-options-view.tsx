
import { AlertCircle, BookOpen, Heart } from "lucide-react";
import { Button } from "./ui/button";
import React, { useState } from "react";

interface HelpOptionsViewProps {
  onSelectOption: (option: "stuck" | "explanation" | "personal") => void;
  onCancel: () => void;
}

export default function HelpOptionsView({ onSelectOption, onCancel }: HelpOptionsViewProps) {
  const [selected, setSelected] = useState<null | string>(null);
  const handleSelect = (option: "stuck" | "explanation" | "personal") => {
    setSelected(option);
    setTimeout(() => onSelectOption(option), 150); // Visuell feedback innan navigation
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-background">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-foreground font-bold text-2xl" style={{ fontSize: 24, lineHeight: 1.2 }}>Vad behöver du hjälp med?</h1>
          <p className="text-muted-foreground text-base" style={{ fontSize: 14, lineHeight: 1.5 }}>Välj det alternativ som passar bäst</p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => handleSelect("stuck")}
            variant="outline"
            className={`w-full h-auto min-h-24 flex flex-col items-center gap-3 p-6 bg-card hover:bg-accent transition-all min-w-[44px] min-h-[48px] rounded-[24px] border border-[#E0E0E0] focus:outline-none focus:ring-4 focus:ring-[#4A90E2] ${selected === "stuck" ? "bg-[#E6F1FB]" : ""}`}
            aria-pressed={selected === "stuck"}
          >
            <AlertCircle className="h-10 w-10 text-primary" width={40} height={40} aria-label="Begär hjälp: Jag har fastnat" role="img" />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold" style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3 }}>Jag har fastnat</h2>
              <div className="text-muted-foreground text-base" style={{ fontSize: 14, lineHeight: 1.5 }}>
                Behöver hjälp att komma vidare
              </div>
            </div>
          </Button>

          <Button
            onClick={() => handleSelect("explanation")}
            variant="outline"
            className={`w-full h-auto min-h-24 flex flex-col items-center gap-3 p-6 bg-card hover:bg-accent transition-all min-w-[44px] min-h-[48px] rounded-[24px] border border-[#E0E0E0] focus:outline-none focus:ring-4 focus:ring-[#4A90E2] ${selected === "explanation" ? "bg-[#F3E8FB]" : ""}`}
            aria-pressed={selected === "explanation"}
          >
            <BookOpen className="h-10 w-10 text-primary" width={40} height={40} aria-label="Begär hjälp: Behöver förklaring" role="img" />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold" style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3 }}>Behöver förklaring</h2>
              <div className="text-muted-foreground text-base" style={{ fontSize: 14, lineHeight: 1.5 }}>
                Förstår inte uppgiften
              </div>
            </div>
          </Button>

          <Button
            onClick={() => handleSelect("personal")}
            variant="outline"
            className={`w-full h-auto min-h-24 flex flex-col items-center gap-3 p-6 bg-card hover:bg-accent transition-all min-w-[44px] min-h-[48px] rounded-[24px] border border-[#E0E0E0] focus:outline-none focus:ring-4 focus:ring-[#4A90E2] ${selected === "personal" ? "bg-[#FDEEEB]" : ""}`}
            aria-pressed={selected === "personal"}
          >
            <Heart className="h-10 w-10 text-primary" width={40} height={40} aria-label="Begär hjälp: Personligt stöd" role="img" />
            <div className="space-y-1">
              <h2 className="text-lg font-semibold" style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.3 }}>Personligt stöd</h2>
              <div className="text-muted-foreground text-base" style={{ fontSize: 14, lineHeight: 1.5 }}>
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
