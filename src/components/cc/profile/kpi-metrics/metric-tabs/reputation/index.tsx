import { Breakdown } from "./Breakdown";
import { Feedback } from "./Feedback";

export function Reputation() {
  return (
    <section className="space-y-5">
      <Feedback />
      <Breakdown />
    </section>
  );
}
