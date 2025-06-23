import { Usages } from "./@usages";
import { Summary } from "./@summary";

export function Statistics() {
  return (
    <section className="space-y-5">
      <Summary />
      <Usages />
    </section>
  );
}
