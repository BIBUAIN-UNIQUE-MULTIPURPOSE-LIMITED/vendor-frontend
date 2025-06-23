import RateSettings from "@/components/team-lead/dashboard/rate-settings";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  return (
    <div className=" bg-gray-100">
      <div className="container mx-auto py-4 ">
        <Tabs defaultValue="rate">
          <TabsList className="w-full">
            <TabsTrigger value="rate">Rate Settings</TabsTrigger>
            <TabsTrigger value="overpayment">
              Overpayment Monitoring
            </TabsTrigger>
          </TabsList>
          <TabsContent value="rate" className="data-[active]:bg-primary">
            <RateSettings />
          </TabsContent>
          <TabsContent value="overpayment">
            <p>Overpayment Monitoring Content</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
