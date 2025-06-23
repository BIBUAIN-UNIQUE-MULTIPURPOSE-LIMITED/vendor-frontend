import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { offers } from "@/examples/temporary/dummy-data/rate-dashboard";
import { formatCurrency } from "@/lib/utilities/formatCurrency";
import { ChevronDown } from "lucide-react";

export const MyOffers = () => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <h3 className="font-bold tracking-tight ">My Offers</h3>
        <div className="flex items-center gap-4">
          <Button className="flex gap-2 items-center" variant="outline">
            Add <ChevronDown />{" "}
          </Button>
          <Button className="flex gap-2 items-center" variant="outline">
            Coin <ChevronDown />{" "}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <Table>
            <TableHeader className="bg-gray-100">
              <TableRow>
                <TableHead>Platform</TableHead>
                <TableHead>Coin</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Offer Rate</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {offers.map((offer, i) => (
                <TableRow key={i}>
                  <TableCell>{offer.platform}</TableCell>
                  <TableCell>{offer.coin}</TableCell>
                  <TableCell>{offer.paymentMethod}</TableCell>
                  <TableCell>
                    {formatCurrency(offer.offerRate, offer.currency)}
                  </TableCell>
                  <TableCell>
                    {/* Actions can be buttons or links for editing/deleting the offer */}
                    <Button variant="outline">Edit</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-4 justify-end">
        <Button variant="outline" className="text-red-500">
          Deactivate All Offers
        </Button>
        <Button className="bg-green-500">Activate All Offers</Button>
      </CardFooter>
    </Card>
  );
};
