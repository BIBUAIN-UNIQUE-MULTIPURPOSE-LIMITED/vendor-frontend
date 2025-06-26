import DiscrepancyMonitoring from "@/components/team-lead/dashboard/discrepancy-monitoring/discrepancy-monitoring";
import RateSettings from "@/components/team-lead/dashboard/rate-settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  return (
    <div className="">
      <div className="">
        <Tabs defaultValue="rate">
          <TabsList className="w-full">
            <TabsTrigger value="rate">Rate Settings</TabsTrigger>
            <TabsTrigger value="overpayment">
              Discrepancy Monitoring
            </TabsTrigger>
          </TabsList>
          <TabsContent value="rate" className="">
            <RateSettings />
          </TabsContent>
          <TabsContent value="overpayment">
            <DiscrepancyMonitoring />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
