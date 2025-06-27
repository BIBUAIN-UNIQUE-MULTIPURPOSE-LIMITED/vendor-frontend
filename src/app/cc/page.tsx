import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  return (
    <div>
      <Tabs defaultValue="inbox">
        <TabsList>
          <TabsTrigger value="inbox">Inbox</TabsTrigger>
          <TabsTrigger value="ccOverview">Customer Care Overview</TabsTrigger>
        </TabsList>
        <TabsContent value="inbox"></TabsContent>
        <TabsContent value="ccOverview"></TabsContent>
      </Tabs>
    </div>
  );
};

export default Page;
