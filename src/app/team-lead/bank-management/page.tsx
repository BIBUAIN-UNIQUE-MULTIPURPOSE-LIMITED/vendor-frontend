import { Button } from "@/components/ui/button";
import { RefreshCw, Filter, Plus } from "lucide-react";
import BankTable from "@/components/ui/BankTable";
import TabNavigation from "@/components/ui/TabNavigation";

export default function BankManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TabNavigation />
      <div className="p-4 md:p-6">
        <div className="max-w-7xl mx-auto space-y-0">
          {/* Header */}
          <div className="bg-white rounded-lg border border-gray-50 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-1">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Bank Management
                </h1>
                <p className="text-gray-400 mt-1">
                  Manage bank accounts, balances, and statuses
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  <span>Refresh</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <Filter className="h-4 w-4" />
                  <span>Filter</span>
                </Button>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white flex items-center space-x-2">
                  <Plus className="h-4 w-4" />
                  <span>Add Bank</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Bank Table */}
          <BankTable />
        </div>
      </div>
    </div>
  );
}
