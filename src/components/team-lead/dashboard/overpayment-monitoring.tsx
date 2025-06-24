import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDown, Download, Flag, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

const OverpaymentMonitoring = () => {
  return (
    <div>
      <h2>Overpayment Monitoring</h2>
      <div>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <h2 className="flex text-lg items-center gap-2 font-bold tracking-normal leading-tight">
              <Flag className="text-primary" />
              Overpayment Error Monitoring
            </h2>
            <div className="flex items-center gap-2 ">
              <Button className="bg-green-500 hover:bg-green-500/90 text-xs py-2">
                <Plus />
                Add discrepancy
              </Button>
              <Button className="text-xs py-2">
                <Download />
                Export CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 rounded-xl grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 p-4 gap-4">
              {/* /form */}
              <div className="flex flex-col items-start gap-2 w-full">
                <Label className="sm:text-xs text-sm font-light">
                  Status Filter
                </Label>
                {/* TODO: */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex w-full items-center justify-between h-12 bg-white p-3 rounded-md border font-light text-sm sm:text-xs">
                    All Status <ChevronDown className="size" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>All Stuff</DropdownMenuLabel>
                    <DropdownMenuItem>All again</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <Label className="sm:text-xs text-sm font-light">
                  Seller Useraname
                </Label>
                <Input
                  type="text"
                  placeholder=""
                  className="bg-white p-3 h-fit text-sm sm:text-xs"
                />
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <Label className="sm:text-xs text-sm font-light">
                  Date From
                </Label>
                <Input
                  type="date"
                  placeholder=""
                  className="bg-white p-3 h-fit text-sm sm:text-xs"
                />
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <Label className="sm:text-xs text-sm font-light">Date To</Label>
                <Input
                  type="date"
                  placeholder=""
                  className="bg-white p-3 h-fit text-sm sm:text-xs"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverpaymentMonitoring;
