import { Download, FileText } from "lucide-react";

import { Button } from "@/components/ui/button";

import { PlatformOptions } from "@/components/payer/transaction-history/Filters";
import { AuditActivity } from "@/components/payer/transaction-history/AuditActivityTable";
import {
  UserOptions,
  DurationOptions,
} from "@/components/payer/transaction-history/Filters";

import {
  users,
  duration,
  platforms,
} from "@/examples/payer/transaction-history/options";

export default function Page() {
  return (
    <section className="space-y-3">
      <div className="flex gap-3 flex-wrap items-center justify-between">
        <div className="flex-none">
          <h4 className="text-xl font-semibold">
            <span className="capitalize">transaction history</span>
          </h4>
        </div>
        <div className="flex-none">
          <div className="flex gap-3 items-center">
            <div className="flex-none">
              <Button size="lg">
                <FileText />
                <p className="text-sm font-semibold">
                  <span className="capitalize">export PDF</span>
                </p>
              </Button>
            </div>
            <div className="flex-none">
              <Button size="lg">
                <Download />
                <p className="text-sm font-semibold">
                  <span className="capitalize">export CSV</span>
                </p>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 items-center md:justify-end">
        <div className="flex-none">
          <DurationOptions options={duration} />
        </div>
        <div className="flex-none">
          <UserOptions options={users} />
        </div>
        <div className="flex-none">
          <PlatformOptions options={platforms} />
        </div>
      </div>
      <div className="p-3 border bg-white text-center rounded-lg">
        <h4 className="text-lg font-semibold">
          <span className="capitalize">
            internal audit &amp; payer activity
          </span>
        </h4>
      </div>
      <AuditActivity />
    </section>
  );
}
