import { Summary } from "@/components/team-lead/ProfileSummary";
import { Performance } from "@/components/team-lead/ProfilePerformance";

export function Profile() {
  return (
    <section className="space-y-5">
      <Summary />
      <Performance />
    </section>
  );
}
