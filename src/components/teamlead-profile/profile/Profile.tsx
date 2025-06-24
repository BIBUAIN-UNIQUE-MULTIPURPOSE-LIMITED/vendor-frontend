import { Summary } from "@/components/teamlead-profile/profile/ProfileSummary";
import { Performance } from "@/components/teamlead-profile/profile/ProfilePerformance";

export function Profile() {
  return (
    <section className="space-y-5">
      <Summary />
      <Performance />
    </section>
  );
}
