import { Profile } from "./Profile";
import { Summary } from "./Summary";
import { Breakdown } from "./Breakdown";
import { Performance } from "./Performance";

export function Dashboard() {
  return (
    <section className="space-y-5">
      <Profile />
      <Summary />
      <Breakdown />
      <Performance />
    </section>
  );
}
