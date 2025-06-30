import { RWP } from "./RWP";
import { Report } from "./Report";
import { Overview } from "./Overview";

export function Dispute() {
  return (
    <section className="space-y-5">
      <Overview />
      <RWP />
      <Report />
    </section>
  );
}
