import { CCInbox } from "@/components/customer-care/inbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  return (
    <div className="bg-white h-full ">
      <Tabs className="h-[calc(100vh-146px)]" defaultValue="inbox">
        <TabsList className="w-full h-fit p-3 lg:p-6 rounded-none bg-gray-100">
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-white w-full"
            value="inbox"
          >
            Inbox
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-primary data-[state=active]:text-white w-full"
            value="ccOverview"
          >
            Customer Care Overview
          </TabsTrigger>
        </TabsList>
        <TabsContent className="size-full mt-0" value="inbox">
          <CCInbox />
        </TabsContent>
        <TabsContent value="ccOverview" className="h-full"></TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
