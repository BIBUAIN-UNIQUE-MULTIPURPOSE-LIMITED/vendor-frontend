import { columns } from "@/components/team-lead/rate-analysis/columns";
import { DataTable } from "@/components/team-lead/rate-analysis/data-table";
import { Button } from "@/components/ui/button";
import { tradeData } from "@/examples/temporary/dummy-data/rate-analysis";
import { Download, File } from "lucide-react";

const Page = () => {
  return (
    <div className="bg-gray-100">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="font-bold  md:text-lg">Rate Ananlysis</h2>
          <div className="flex items-center gap-2">
            <Button>
              <File />
              <span className="hidden md:flex">Export PDF</span>
            </Button>
            <Button>
              <Download />
              <span className="hidden md:flex">Export CSV</span>
            </Button>
          </div>
        </div>
        <DataTable columns={columns} data={tradeData} />
      </div>
    </div>
  );
};

export default Page;
