import { History } from "./History";
import { Summary } from "./Summary";
import { Management } from "./Management";

export function Complaint() {
  return (
    <section className="space-y-5">
      <Management />
      <Summary />
      <History />
    </section>
  );
}
