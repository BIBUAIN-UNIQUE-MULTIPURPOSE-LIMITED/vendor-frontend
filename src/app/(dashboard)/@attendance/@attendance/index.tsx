import { Notes } from "./@notes";
import { Summary } from "./@summary";

export function Attendance() {
  return (
    <section className="space-y-5">
      <Summary />
      <Notes />
    </section>
  );
}
