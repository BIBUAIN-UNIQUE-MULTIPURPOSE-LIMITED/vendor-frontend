import { CCInbox } from "@/components/customer-care/inbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  return (
    <div className="bg-white">
      <Tabs defaultValue="inbox">
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
        <TabsContent value="inbox">
          <CCInbox />
        </TabsContent>
        <TabsContent value="ccOverview">fujgskn</TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
