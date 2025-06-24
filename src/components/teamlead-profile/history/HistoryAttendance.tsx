import { Notes } from "@/components/teamlead-profile/history/HistoryAttendanceNotes";
import { Summary } from "@/components/teamlead-profile/history/HistoryAttendanceSummary";

export function Attendance() {
  return (
    <section className="space-y-5">
      <Summary />
      <Notes />
    </section>
  );
}
