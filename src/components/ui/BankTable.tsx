// components/ui-bankmanagement/BankTable.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit } from "lucide-react";
import { banks } from "@/examples/bankmanagement/dummyData"; // Corrected import path based on the structure
import EditBalanceModal from "./EditBalanceModal";
import MoveToErrorModal from "./MoveToErrorModal";
import ActionDropdown from "./ActionDropdown";

type Bank = {
  name: string;
  accountNumber: string;
  accountHolder: string;
  balance: number;
  status: string;
  updatedBy: string;
  fundedBy?: string;
  payerName?: string;
  assignedBy?: string;
  reason?: string;
};

type TabType = "all" | "free" | "funded" | "inuse" | "limited";

export default function BankTable() {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);

  const getFilteredBanks = (): Bank[] => {
    switch (activeTab) {
      case "free":
        return banks.filter((bank) => bank.status === "Free");
      case "funded":
        return banks.filter((bank) => bank.status === "Funded");
      case "inuse":
        return banks.filter((bank) => bank.status === "In Use");
      case "limited":
        return banks.filter((bank) => bank.status === "Limited");
      default:
        return banks;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Free":
        return (
          <Badge className="bg-blue-100 text-blue-800 text-xs">{status}</Badge>
        );
      case "Funded":
        return (
          <Badge className="bg-green-100 text-green-800 text-xs">
            {status}
          </Badge>
        );
      case "In Use":
        return (
          <Badge className="bg-orange-100 text-orange-800 text-xs">
            {status}
          </Badge>
        ); // Adjusted to orange for "In Use"
      case "Limited":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 text-xs">
            {status}
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-100 text-gray-800 text-xs">{status}</Badge>
        );
    }
  };

  const getTableHeaders = (): string[] => {
    switch (activeTab) {
      case "funded":
        return [
          "Bank Name",
          "Account Number",
          "Account holder",
          "Balance (NGN)",
          "Status",
          "Funded By",
          "Actions",
        ];
      case "inuse":
        return [
          "Bank Name",
          "Account Number",
          "Account holder",
          "Payer Name",
          "Balance (NGN)",
          "Status",
          "Assigned By",
        ];
      case "limited":
        return [
          "Bank Name",
          "Account Number",
          "Account holder",
          "Payer Name",
          "Balance (NGN)",
          "Reason",
          "Status",
          "Assigned By",
        ];
      default:
        return [
          "Bank Name",
          "Account Number",
          "Account holder",
          "Balance (NGN)",
          "Status",
          "Updated By",
          "Actions",
        ];
    }
  };

  const handleEditBalance = (bank: Bank) => {
    setSelectedBank(bank);
    setIsEditModalOpen(true);
  };

  const handleMoveToError = (bank: Bank) => {
    setSelectedBank(bank);
    setIsMoveModalOpen(true);
  };

  const handleAssignToPayer = (bank: Bank) => {
    // Handle assign to payer logic
    console.log("Assign to payer:", bank);
  };

  const handleDeleteBank = (bank: Bank) => {
    // Handle delete bank logic
    console.log("Delete bank:", bank);
  };

  const handleUpdateBalance = (newBalance: number) => {
    console.log("Update balance for", selectedBank?.name, ":", newBalance);
    // In a real application, you would update the state or call an API here
    setIsEditModalOpen(false); // Close modal after update
  };

  const handleConfirmMove = (
    actionType: string,
    issueType: string,
    flaggedBy: string,
    amountAffected: number,
  ) => {
    console.log("Move to error:", selectedBank, {
      actionType,
      issueType,
      flaggedBy,
      amountAffected,
    });
    // In a real application, you would update the state or call an API here
    setIsMoveModalOpen(false); // Close modal after confirmation
  };

  const renderTableRow = (bank: Bank, index: number) => {
    switch (activeTab) {
      case "funded":
        return (
          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-4 px-4 font-medium text-gray-900">{bank.name}</td>
            <td className="py-4 px-4 text-gray-700">{bank.accountNumber}</td>
            <td className="py-4 px-4 text-gray-700">{bank.accountHolder}</td>
            <td className="py-4 px-4 text-gray-700">
              ₦{bank.balance.toLocaleString()}
            </td>
            <td className="py-4 px-4">{getStatusBadge(bank.status)}</td>
            <td className="py-4 px-4 text-gray-700">
              {bank.fundedBy || bank.updatedBy}
            </td>
            <td className="py-4 px-4">
              <Button
                size="sm"
                className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1"
              >
                Assign Bank
              </Button>
            </td>
          </tr>
        );
      case "inuse":
        return (
          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-4 px-4 font-medium text-gray-900">{bank.name}</td>
            <td className="py-4 px-4 text-gray-700">{bank.accountNumber}</td>
            <td className="py-4 px-4 text-gray-700">{bank.accountHolder}</td>
            <td className="py-4 px-4 text-gray-700">
              {bank.payerName || bank.accountHolder}
            </td>
            <td className="py-4 px-4 text-gray-700">
              ₦{bank.balance.toLocaleString()}
            </td>
            <td className="py-4 px-4">{getStatusBadge(bank.status)}</td>
            <td className="py-4 px-4 text-gray-700">
              {bank.assignedBy || bank.updatedBy}
            </td>
          </tr>
        );
      case "limited":
        return (
          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-4 px-4 font-medium text-gray-900">{bank.name}</td>
            <td className="py-4 px-4 text-gray-700">{bank.accountNumber}</td>
            <td className="py-4 px-4 text-gray-700">{bank.accountHolder}</td>
            <td className="py-4 px-4 text-gray-700">
              {bank.payerName || bank.accountHolder}
            </td>
            <td className="py-4 px-4 text-gray-700">
              ₦{bank.balance.toLocaleString()}
            </td>
            <td className="py-4 px-4 text-gray-700">{bank.reason}</td>
            <td className="py-4 px-4">{getStatusBadge(bank.status)}</td>
            <td className="py-4 px-4 text-gray-700">
              {bank.assignedBy || bank.updatedBy}
            </td>
          </tr>
        );
      default:
        return (
          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-4 px-4 font-medium text-gray-900">{bank.name}</td>
            <td className="py-4 px-4 text-gray-700">{bank.accountNumber}</td>
            <td className="py-4 px-4 text-gray-700">{bank.accountHolder}</td>
            <td className="py-4 px-4 text-gray-700">
              ₦{bank.balance.toLocaleString()}
            </td>
            <td className="py-4 px-4">{getStatusBadge(bank.status)}</td>
            <td className="py-4 px-4 text-gray-700">{bank.updatedBy}</td>
            <td className="py-4 px-4">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1"
                  onClick={() => handleEditBalance(bank)}
                >
                  <Edit className="h-3 w-3" />
                  <span>Edit</span>
                </Button>
                <ActionDropdown
                  onEditBalance={() => handleEditBalance(bank)}
                  onMoveToError={() => handleMoveToError(bank)}
                  onAssignToPayer={() => handleAssignToPayer(bank)}
                  onDeleteBank={() => handleDeleteBank(bank)}
                />
              </div>
            </td>
          </tr>
        );
    }
  };

  const filteredBanks = getFilteredBanks();

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-50 shadow-sm">
        {/* Tab Navigation */}
        <div className="bg-gray-100 px-3 py-2 rounded-md border border-gray-200 mb-6">
          <div className="flex items-center gap-[7rem] overflow-x-auto whitespace-nowrap">
            {[
              { key: "all", label: "All Banks" },
              { key: "free", label: "Free Banks" },
              { key: "funded", label: "Funded Banks" },
              { key: "inuse", label: "Bank in Use" },
              { key: "limited", label: "Limited Banks" },
            ].map((tab) => (
              <div
                key={tab.key}
                onClick={() => setActiveTab(tab.key as TabType)}
                className={`cursor-pointer px-6 py-2 text-sm font-medium rounded-lg transition ${
                  activeTab === tab.key
                    ? "bg-yellow-500 text-white"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {getTableHeaders().map((header, index) => (
                  <th
                    key={index}
                    className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBanks.map((bank, index) => renderTableRow(bank, index))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}
      {selectedBank && (
        <>
          <EditBalanceModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            bank={selectedBank}
            onUpdate={handleUpdateBalance}
          />
          <MoveToErrorModal
            isOpen={isMoveModalOpen}
            onClose={() => setIsMoveModalOpen(false)}
            bank={selectedBank}
            onConfirm={handleConfirmMove}
          />
        </>
      )}
    </>
  );
}
