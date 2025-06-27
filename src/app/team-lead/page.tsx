import DiscrepancyMonitoring from "@/components/team-lead/dashboard/discrepancy-monitoring/discrepancy-monitoring";
import RateSettings from "@/components/team-lead/dashboard/rate-settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  return (
    <div className="">
      <div className="">
        <Tabs className="w-full" defaultValue="rate">
          <TabsList className="w-full">
            <TabsTrigger className="w-full" value="rate">
              Rate Settings
            </TabsTrigger>
            <TabsTrigger className="w-full" value="overpayment">
              Discrepancy Monitoring
            </TabsTrigger>
          </TabsList>
          <TabsContent value="rate" className="">
            <RateSettings />
          </TabsContent>
          <TabsContent value="overpayment" className="">
            <DiscrepancyMonitoring />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
