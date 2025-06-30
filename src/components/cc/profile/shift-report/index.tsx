import { Report } from "./Report";
import { Submit } from "./Submit";
import { Dispute } from "./Dispute";
import { Summary } from "./Summary";
import { Comments } from "./Comments";
import { Complaint } from "./Complaint";
import { Reputation } from "./Reputation";
import { Punctuality } from "./Punctuality";

export function ShiftReport() {
  return (
    <section className="space-y-5">
      <Report />
      <Punctuality />
      <Complaint />
      <Dispute />
      <Reputation />
      <Comments />
      <Summary />
      <Submit />
    </section>
  );
}
