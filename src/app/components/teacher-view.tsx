import { AlertCircle, BookOpen, Heart, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface HelpRequest {
  id: string;
  studentName: string;
  type: "stuck" | "explanation" | "personal";
  timestamp: string;
  status: "pending" | "acknowledged" | "planned";
}

interface TeacherViewProps {
  requests: HelpRequest[];
  onSelectRequest: (request: HelpRequest) => void;
}

const helpTypeIcons = {
  stuck: AlertCircle,
  explanation: BookOpen,
  personal: Heart,
};

const helpTypeLabels = {
  stuck: "Fastnat",
  explanation: "Förklaring",
  personal: "Personligt",
};

const statusLabels = {
  pending: "Väntar",
  acknowledged: "Bekräftad",
  planned: "Planerad",
};

const statusColors = {
  pending: "bg-destructive/10 text-destructive border-destructive/20",
  acknowledged: "bg-primary/10 text-primary border-primary/20",
  planned: "bg-accent/50 text-accent-foreground border-accent",
};

export function TeacherView({ requests, onSelectRequest }: TeacherViewProps) {
  return (
    <div className="min-h-screen p-6 bg-background">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-foreground">Hjälpförfrågningar</h1>
            <p className="text-muted-foreground">
              {requests.filter(r => r.status === "pending").length} nya förfrågningar
            </p>
          </div>
          <Badge variant="outline" className="text-lg px-4 py-2">
            {requests.length} totalt
          </Badge>
        </div>

        {requests.length === 0 ? (
          <div className="bg-card p-12 rounded-xl border border-border text-center space-y-3">
            <div className="text-muted-foreground text-lg">
              Inga aktuella hjälpförfrågningar
            </div>
            <p className="text-sm text-muted-foreground">
              När en elev begär hjälp visas det här
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {requests.map((request) => {
              const Icon = helpTypeIcons[request.type];
              return (
                <Button
                  key={request.id}
                  onClick={() => onSelectRequest(request)}
                  variant="outline"
                  className="w-full h-auto p-6 bg-card hover:bg-accent transition-all flex items-center gap-4 justify-start"
                >
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>

                  <div className="flex-1 text-left space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{request.studentName}</span>
                      <Badge className={statusColors[request.status]}>
                        {statusLabels[request.status]}
                      </Badge>
                    </div>
                    <div className="text-muted-foreground">
                      {helpTypeLabels[request.type]}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {request.timestamp}
                    </div>
                  </div>
                </Button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
