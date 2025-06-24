import { columns } from "@/components/team-lead/transaction-history/columns";
import { DataTable } from "@/components/team-lead/transaction-history/data-table";
import { transactions } from "@/examples/temporary/dummy-data/transaction-history";

const Page = () => {
  return (
    <div className="bg-gray-100 container p-10 mx-auto ">
      <div>
        <DataTable columns={columns} data={transactions} />
      </div>
    </div>
  );
};

export default Page;
