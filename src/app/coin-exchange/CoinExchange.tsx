
import {
  Search,
  Clock,
  ChevronDown,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  User,
  LayoutDashboard,
  ArrowRightLeft,
  Building2,
  Mail,
  Settings,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import ClockInOut from "@/components/coin-exchange/ClockInOut";
import RefreshDropdown from "@/components/coin-exchange/RefreshDropdown";
import CoinBalanceCard from "@/components/coin-exchange/CoinBalanceCard";
import { Badge } from "@/components/ui/badge";
import LoadingOverlay from "@/components/coin-exchange/LoadingOverlay";
import React, { useState, useEffect, useRef, useCallback } from "react";
import AddNewCoinCard from "@/components/coin-exchange/AddNewCoinCard";
import ExchangeCoinModal from "@/components/coin-exchange/ExchangeCoinModal";
import platforms from "@/examples/platforms";
import coinData from "@/examples/coinData";
import transactionData from "@/examples/transactionData";
import filters from "@/examples/filters";






import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Platform,
  CoinBalance,
  Transaction,
  RefreshInterval,
  ExchangeFormData,
} from "@/types/coin-exchange";
import { cn } from "@/lib/utils";

const CoinExchange = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("All Platform");

const [showFilterPanel, setShowFilterPanel] = useState(false);


  
  
   const [refreshInterval, setRefreshInterval] = useState<RefreshInterval>("Manual");
const refreshTimer = useRef<NodeJS.Timeout | null>(null);

    const [isClockActive, setIsClockActive] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
const [isModalOpen, setIsModalOpen] = useState(false);

type ModalData = {
  symbol: string;
  total: number;
  rate: number;
};



const [modalData, setModalData] = useState<ModalData | null>(null);

const [selectedTotalCoin, setSelectedTotalCoin] = useState<number>(0);
const [selectedCurrentRate, setSelectedCurrentRate] = useState<number>(0);

  
    // Handle refresh data
  const refreshData = useCallback(async () => {
    // This would typically be an API call
    console.log("Refreshing data...");
    setIsLoading(true);

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo: slightly modify the data to simulate fresh data
     
    } finally {
      // Add a small delay before hiding the loader for better UX
      await new Promise((resolve) => setTimeout(resolve, 200));
      setIsLoading(false);
    }

    return Promise.resolve();
  }, []);

  // Handle interval selection
const handleSelectInterval = useCallback(
  (interval: RefreshInterval) => {
    // Always store the label
    setRefreshInterval(interval);

    // Clear any previous interval timer
    if (refreshTimer.current) {
      clearInterval(refreshTimer.current);
      refreshTimer.current = null;
    }

    // If "Refresh Now", refresh once immediately
    if (interval === "Refresh Now") {
      refreshData();
      return;
    }

    // Skip if user selected "Manual"
    if (interval === "Manual") {
      return;
    }

    // Parse minutes from label (e.g. "Every 1 minute")
    const match = interval.match(/Every (\d+) minute/);
    const minutes = match ? parseInt(match[1], 10) : 0;
    if (!minutes) return;

    const ms = minutes * 60 * 1000;

    // Start new interval
    refreshTimer.current = setInterval(() => {
      refreshData();
    }, ms);
  },
  [refreshData],
);


  // Clean up interval on unmount
useEffect(() => {
  return () => {
    if (refreshTimer.current) {
      clearInterval(refreshTimer.current);
    }
  };
}, []);


  const handleExchangeCoin = (coin: CoinBalance) => {
    setSelectedCoin(coin);
    setIsModalOpen(true);
  };
    const [selectedCoin, setSelectedCoin] = useState<CoinBalance | undefined>(
    undefined,
  );
    

  

    const [isClockedOut, setIsClockedOut] = useState(false);

  const handleClockOut = () => {
    setIsClockActive(false);
    setIsClockedOut(true);

    // In a real app, this would make an API call to log the work time
    const logoutData = {
      timestamp: new Date().toISOString(),
      sessionComplete: true,
      // You would include the actual session duration from the timer
    };

    console.log("Clocking out...", logoutData);
  };

  const handleClockIn = () => {
    setIsClockActive(true);
    setIsClockedOut(false);

    // In a real app, this would make an API call to start a new session
    const loginData = {
      timestamp: new Date().toISOString(),
      sessionStart: true,
    };

    console.log("Clocking in...", loginData);
  };

  const CoinIcon = ({
    coin,
    className = "w-4 h-4",
  }: {
    coin: string;
    className?: string;
  }) => {
const iconMap: { [key: string]: React.ReactNode } = {
      BTC: (
        <div
          className={cn(
            "rounded-full flex items-center justify-center text-white font-bold text-xs",
            className,
          )}
          style={{ backgroundColor: "#F7931A" }}
        >
          ₿
        </div>
      ),
      USDT: (
        <div
          className={cn(
            "rounded-full flex items-center justify-center text-white font-bold text-xs",
            className,
          )}
          style={{ backgroundColor: "#26A17B" }}
        >
          ₮
        </div>
      ),
      ETH: (
        <div
          className={cn(
            "rounded-full flex items-center justify-center text-white font-bold text-xs",
            className,
          )}
          style={{ backgroundColor: "#627EEA" }}
        >
          Ξ
        </div>
      ),
    };
    return (
      iconMap[coin] || (
        <div className={cn("rounded-full bg-gray-400", className)} />
      )
    );
  };

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{
        fontFamily: "'Inter', -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >
      

<div className="px-4 md:px-6 lg:px-8">






        {/* Content */}
        <main className="p-6">
          {/* Page Title */}
          <h1
            className="text-2xl font-semibold text-gray-900 mb-8"
            style={{
              fontFamily:
                "'Geist', -apple-system, Roboto, Helvetica, sans-serif",
              letterSpacing: "-0.6px",
            }}
          >
            Coin Exchange
          </h1>

          {/* Platform Tabs */}
          <div className="mb-11">
            <div className="flex bg-gray-100 p-1 rounded-lg w-fit overflow-x-auto">
              {platforms.map((platform) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-normal transition-colors whitespace-nowrap",
                    selectedPlatform === platform
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-700",
                  )}
                  style={{ letterSpacing: "-0.6px" }}
                >
                  {platform}
                </button>
              ))}
            </div>
          </div>

          {/* Coin Balances Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2
                className="text-xl font-semibold text-black"
                style={{ letterSpacing: "-0.6px" }}
              >
                Coin Balances
              </h2>
<div className="flex items-center gap-4">
  <RefreshDropdown onRefresh={refreshData} onSelectInterval={handleSelectInterval} />
  <AddNewCoinCard onSelectPlatform={(platform) => console.log("Selected:", platform)} />
</div>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {Object.entries(coinData).map(([coin, data]) => (
                <Card key={coin} className="border border-gray-200 bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <CoinIcon coin={coin} className="w-4 h-4" />
                        <span className="font-bold text-gray-900">{coin}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {data.change.trend === "up" ? (
                          <TrendingUp className="w-2 h-2 text-green-500" />
                        ) : (
                          <TrendingDown className="w-2 h-2 text-red-500" />
                        )}
                        <span
                          className={cn(
                            "text-sm",
                            data.change.trend === "up"
                              ? "text-green-500"
                              : "text-red-500",
                          )}
                        >
                          {data.change.value}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Balance
                        </div>
                        <div className="text-lg font-bold text-black">
                          {data.balance} {coin}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm text-gray-500 mb-1">
                          Current Rate
                        </div>
                        <div className="font-medium text-black">
                          {data.rate}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xs text-yellow-600 font-medium">
                          Excess Coin: {data.excess} {coin}
                        </div>
                       <Button
  size="sm"
  className="bg-yellow-400 hover:bg-yellow-500 text-white text-xs px-2 py-1 h-6"
  style={{
    fontFamily:
      "'Geist', -apple-system, Roboto, Helvetica, sans-serif",
  }}
  onClick={() => {
    setModalData({
      symbol: coin,
      total: parseFloat(data.balance),
      rate: parseFloat(data.rate.replace(/[^\d.]/g, "")),
    });
    setIsModalOpen(true);
  }}
>
  Exchange Coin
</Button>


                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

{/* Recent Exchange */}
<div>
  {/* Title & Filter aligned side-by-side */}
  <div className="flex items-center justify-between mb-4">
    <h2
      className="text-xl font-semibold text-black"
      style={{ letterSpacing: "-0.6px" }}
    >
      Recent Exchange
    </h2>

    <button
      className="flex items-center gap-2 text-sm text-gray-600 hover:text-black transition"
      onClick={() => setShowFilterPanel(!showFilterPanel)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-1.447.894l-4-2A1 1 0 019 17v-3.586L3.293 6.707A1 1 0 013 6V4z"
        />
      </svg>
      Filters
    </button>
    
  </div>
  

  {/* Table Wrapper */}
  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
    {/* Table Header - Hidden on mobile */}
    <div
      className="hidden md:flex p-4 bg-gray-50 border-b text-sm font-medium text-gray-500"
      style={{
        fontFamily: "'Poppins', -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >
      <div className="flex-1">Date</div>
      <div className="flex-1">Platform</div>
      <div className="flex-1">Coin</div>
      <div className="flex-1">Type</div>
      <div className="flex-1">Amount</div>
      <div className="flex-1">Value (NGN)</div>
      <div className="flex-1">Status</div>
    </div>


              

              {/* Table Rows */}
              <div className="divide-y divide-gray-100">
                {transactionData.map((transaction, index) => (
                  <div key={index} className="p-4">
                    {/* Desktop Layout */}
                    <div
                      className="hidden md:flex items-center text-sm"
                      style={{
                        fontFamily:
                          "'Poppins', -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      <div className="flex-1 text-black">
                        {transaction.date}
                      </div>
                      <div className="flex-1 text-black">
                        {transaction.platform}
                      </div>
                      <div className="flex-1 text-black">
                        {transaction.coin}
                      </div>
                      <div className="flex-1 text-black">
                        {transaction.type}
                      </div>
                      <div className="flex-1 text-black">
                        {transaction.amount}
                      </div>
                      <div className="flex-1 text-black">
                        {transaction.value}
                      </div>
                      <div className="flex-1">
                        <span
                          className={cn(
                            "px-3 py-1 rounded-full text-xs font-normal",
                            transaction.status === "Completed" &&
                              "bg-green-100 text-green-800",
                            transaction.status === "Pending" &&
                              "bg-yellow-100 text-yellow-800",
                            transaction.status === "Failed" &&
                              "bg-red-100 text-red-800",
                          )}
                        >
                          {transaction.status}
                        </span>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-black">
                            {transaction.coin} - {transaction.type}
                          </div>
                          <div className="text-sm text-gray-500">
                            {transaction.date}
                          </div>
                        </div>
                        <span
                          className={cn(
                            "px-2 py-1 rounded-full text-xs",
                            transaction.status === "Completed" &&
                              "bg-green-100 text-green-800",
                            transaction.status === "Pending" &&
                              "bg-yellow-100 text-yellow-800",
                            transaction.status === "Failed" &&
                              "bg-red-100 text-red-800",
                          )}
                        >
                          {transaction.status}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-900">
                          {transaction.platform}
                        </span>
                        <span className="font-medium text-black">
                          {transaction.amount}
                        </span>
                      </div>
                      <div className="text-sm font-medium text-black">
                        {transaction.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
<ExchangeCoinModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  coinSymbol={modalData?.symbol || ""}
  totalCoin={modalData?.total || 0}
  currentRate={modalData?.rate || 0}
  onExecute={({ capitalCoin, rateOption, rate }) => {
    console.log("Sell request sent:", {
      symbol: modalData?.symbol,
      capitalCoin,
      rateOption,
      rate,
    });
    // TODO: Add API call here
  }}
/>

      </div>
    </div>
  );
};

export default CoinExchange;
