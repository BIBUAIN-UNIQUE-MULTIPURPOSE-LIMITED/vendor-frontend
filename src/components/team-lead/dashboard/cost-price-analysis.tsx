import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { costPriceAnanlysis } from "@/examples/temporary/dummy-data/rate-dashboard";
import { formatCurrency } from "@/lib/utilities/formatCurrency";
import { ChevronDown } from "lucide-react";

export const CostPriceAnalysis = () => {
  return (
    <div>
      <div className="pb-6 flex items-center justify-between">
        <h4 className="font-bold tracking-tight">Cost Price Analysis</h4>
        <div className="flex items-center gap-4">
          <Button className="flex gap-2 items-center" variant="outline">
            Add <ChevronDown />{" "}
          </Button>
          <Button className="flex gap-2 items-center" variant="outline">
            NGN <ChevronDown />{" "}
          </Button>
        </div>
      </div>
      <Table className="border rounded">
        <TableHeader className="bg-gray-200">
          <TableRow className="">
            <TableHead>Account</TableHead>
            <TableHead>Cost Price (₦)</TableHead>
            <TableHead>Market Price</TableHead>
            <TableHead>Coins Purchased</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {costPriceAnanlysis.map(
            ({ account, coinsPurchased, costPrice, marketPrice }, i) => (
              <TableRow key={i} className="hover:bg-gray-50">
                <TableCell className="capitalize">{account} Account</TableCell>
                <TableCell className="">
                  {formatCurrency(costPrice, "NGN")}
                </TableCell>
                <TableCell className="">
                  {formatCurrency(marketPrice, "NGN")}
                </TableCell>
                <TableCell className="">{coinsPurchased}</TableCell>
              </TableRow>
            ),
          )}
        </TableBody>
      </Table>
    </div>
  );
};
