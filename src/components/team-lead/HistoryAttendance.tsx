import { Notes } from "@/components/team-lead/HistoryAttendanceNotes";
import { Summary } from "@/components/team-lead/HistoryAttendanceSummary";

export function Attendance() {
  return (
    <section className="space-y-5">
      <Summary />
      <Notes />
    </section>
  );
}
