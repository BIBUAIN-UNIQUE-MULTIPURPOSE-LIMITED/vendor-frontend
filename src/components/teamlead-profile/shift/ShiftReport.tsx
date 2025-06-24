import { Rate } from "@/components/teamlead-profile/shift/ShiftReportRate";
import { Shift } from "@/components/teamlead-profile/shift/ShiftReportShift";
import { Profit } from "@/components/teamlead-profile/shift/ShiftReportProfit";
import { Charges } from "@/components/teamlead-profile/shift/ShiftReportCharges";
import { Confirm } from "@/components/teamlead-profile/shift/ShiftReportConfirm";
import { Summary } from "@/components/teamlead-profile/shift/ShiftReportSummary";
import { Comments } from "@/components/teamlead-profile/shift/ShiftReportComments";
import { Punctality } from "@/components/teamlead-profile/shift/ShiftReportPunctuality";

export function Report() {
  return (
    <section className="space-y-5">
      <Shift />
      <Punctality />
      <Rate />
      <Charges />
      <Profit />
      <Charges />
      <Comments />
      <Summary />
      <Confirm />
    </section>
  );
}
