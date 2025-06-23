import { Summary } from "./@summary";
import { Tabination } from "./@tabination";

export function KPI() {
  return (
    <section className="space-y-5">
      <Summary />
      <Tabination />
    </section>
  );
}
