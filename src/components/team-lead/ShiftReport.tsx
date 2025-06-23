import { Rate } from "@/components/team-lead/ShiftReportRate";
import { Shift } from "@/components/team-lead/ShiftReportShift";
import { Charges } from "@/components/team-lead/ShiftReportCharges";
import { Confirm } from "@/components/team-lead/ShiftReportConfirm";
import { Summary } from "@/components/team-lead/ShiftReportSummary";
import { Comments } from "@/components/team-lead/ShiftReportComments";
import { Punctality } from "@/components/team-lead/ShiftReportPunctuality";

export function Report() {
  return (
    <section className="space-y-5">
      <Shift />
      <Punctality />
      <Rate />
      <Charges />
      <Comments />
      <Summary />
      <Confirm />
    </section>
  );
}
