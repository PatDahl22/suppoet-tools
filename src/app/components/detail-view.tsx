import { AlertCircle, BookOpen, Heart, ArrowLeft, Clock, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface HelpRequest {
  id: string;
  studentName: string;
  type: "stuck" | "explanation" | "personal";
  timestamp: string;
  status: "pending" | "acknowledged" | "planned";
}

interface DetailViewProps {
  request: HelpRequest;
  onBack: () => void;
  onAction: (action: "acknowledge" | "plan" | "complete") => void;
}

const helpTypeIcons = {
  stuck: AlertCircle,
  explanation: BookOpen,
  personal: Heart,
};

const helpTypeLabels = {
  stuck: "I'm stuck",
  explanation: "Need explanation",
  personal: "Personal support",
};

const helpTypeDescriptions = {
  stuck: "The student needs help to move forward with the task",
  explanation: "The student does not understand the instructions or the task",
  personal: "The student wants to talk privately about something",
};

const statusLabels = {
  pending: "Waiting for response",
  acknowledged: "Acknowledged - coming soon",
  planned: "Planned for later",
};

// Mock historical data
const mockHistory = [
  { date: "Today 10:15", type: "explanation", status: "completed" },
  { date: "Yesterday 14:30", type: "stuck", status: "completed" },
  { date: "2 days ago", type: "explanation", status: "completed" },
];

export default function DetailView({ request, onBack, onAction }: DetailViewProps) {
  const Icon = helpTypeIcons[request.type];

  return (
    <div className="h-full p-6 bg-background overflow-y-auto w-full">
      <div className="max-w-2xl mx-auto space-y-6">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-4"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back
        </Button>

        <div className="bg-card p-8 rounded-xl border border-border space-y-8">
          <div className="flex items-start gap-6">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Icon className="h-12 w-12 text-primary" />
            </div>

            <div className="flex-1 space-y-3">
              <h1 className="text-foreground">{request.studentName}</h1>
              <p className="text-lg font-medium">{helpTypeLabels[request.type]}</p>
              <p className="text-muted-foreground leading-relaxed">
                {helpTypeDescriptions[request.type]}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {request.timestamp}
              </div>
            </div>
          </div>

          <div className="bg-accent/30 p-6 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium">Status</span>
            </div>
            <p className="text-lg">{statusLabels[request.status]}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-foreground">Actions</h2>
            
            {request.status === "pending" && (
              <>
                <Button
                  onClick={() => onAction("acknowledge")}
                  className="w-full h-[var(--touch-target,56px)] bg-primary hover:bg-primary/90 text-[16px]"
                >
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Coming soon
                </Button>
                <Button
                  onClick={() => onAction("plan")}
                  variant="outline"
                  className="w-full h-[var(--touch-target,56px)] text-[16px]"
                >
                  <Clock className="h-5 w-5 mr-2" />
                  Plan for later
                </Button>
              </>
            )}

            {request.status === "acknowledged" && (
              <Button
                onClick={() => onAction("complete")}
                className="w-full h-[var(--touch-target,56px)] bg-primary hover:bg-primary/90 text-[16px]"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Mark as done
              </Button>
            )}

            {request.status === "planned" && (
              <Button
                onClick={() => onAction("acknowledge")}
                className="w-full h-[var(--touch-target,56px)] bg-primary hover:bg-primary/90 text-[16px]"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                Coming soon
              </Button>
            )}
          </div>
        </div>

        <div className="bg-card p-6 rounded-xl border border-border space-y-4">
          <h2 className="text-foreground">Past Requests</h2>
          <div className="space-y-3">
            {mockHistory.map((item, index) => {
              const HistIcon = helpTypeIcons[item.type as keyof typeof helpTypeIcons];
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg"
                >
                  <HistIcon className="h-6 w-6 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium">{helpTypeLabels[item.type as keyof typeof helpTypeLabels]}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
