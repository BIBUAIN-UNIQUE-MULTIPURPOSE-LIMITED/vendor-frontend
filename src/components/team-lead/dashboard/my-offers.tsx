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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

export const MyOffers = ({ coin }: { coin?: string }) => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <h3 className="font-bold tracking-tight ">My Offers</h3>
        <div className="flex items-center gap-4">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select defaultValue="coin">
            <SelectTrigger>
              <SelectValue placeholder="select" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="coin">Coin</SelectItem>
                <SelectItem value="btc">BTC</SelectItem>
                <SelectItem value="eth">eth</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
            <TableBody className="w-full">
              {coin ? (
                offers.map((offer, i) => (
                  <TableRow key={i}>
                    <TableCell>{offer.platform}</TableCell>
                    <TableCell>{coin}</TableCell>
                    <TableCell>{offer.paymentMethod}</TableCell>
                    <TableCell>
                      {formatCurrency(offer.offerRate, offer.currency)}
                    </TableCell>
                    <TableCell>
                      {/* Actions can be buttons or links for editing/deleting the offer */}
                      <Button variant="outline">Edit</Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    Add a coin
                  </TableCell>
                </TableRow>
              )}
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
