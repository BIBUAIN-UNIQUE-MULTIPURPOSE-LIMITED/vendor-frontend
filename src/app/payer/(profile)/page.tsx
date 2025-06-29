import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs } from "@/examples/payer/profile/profile";

const Page = () => {
  return (
    <Card className="bg-gray-100 border-0 shadow-none md:bg-white ">
      <CardContent className="p-0 md:p-6">
        <Tabs defaultValue="profile">
          <TabsList className="w-full flex bg-white">
            {tabs.map(({ name }, id) => (
              <TabsTrigger
                value={name}
                key={id}
                className="data-[state=active]:bg-primary capitalize data-[state=active]:text-white flex-1"
              >
                {name}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map(({ name, Component }, id) => (
            <TabsContent key={id} value={name} className="pt-6">
              <Component />
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Page;
