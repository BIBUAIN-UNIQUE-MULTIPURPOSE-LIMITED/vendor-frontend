import { Rate } from "./@rate";
import { Shift } from "./@shift";
import { Charges } from "./@charges";
import { Confirm } from "./@confirm";
import { Summary } from "./@summary";
import { Comments } from "./@comments";
import { Punctality } from "./@punctuality";

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
