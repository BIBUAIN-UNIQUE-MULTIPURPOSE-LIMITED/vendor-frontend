import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
        {/* deactivate */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="text-red-500">
              Deactivate All Offers
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Apply to Platform</DialogTitle>
              <DialogDescription>
                Select which platform you want to apply the current settings
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* activate all offers */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-green-500">Activate All Offers</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Apply to Platform</DialogTitle>
              <DialogDescription>
                Select which platform you want to apply the current settings
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
