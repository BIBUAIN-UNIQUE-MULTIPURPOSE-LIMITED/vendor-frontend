import { Summary } from "./@summary";
import { Performance } from "./@performance";

export function Profile() {
  return (
    <section className="space-y-5">
      <Summary />
      <Performance />
    </section>
  );
}
