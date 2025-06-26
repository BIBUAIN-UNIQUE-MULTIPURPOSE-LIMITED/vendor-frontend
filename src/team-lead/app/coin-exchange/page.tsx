"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import RefreshDropdown from "@/components/coin-exchange/RefreshDropdown";
import AddNewCoinCard from "@/components/coin-exchange/AddNewCoinCard";
import ExchangeCoinModal from "@/components/coin-exchange/ExchangeCoinModal";
import platforms from "@/examples/platforms";
import coinData from "@/examples/coinData";
import transactionData from "@/examples/transactionData";
import filters from "@/examples/filters";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Range, RangeKeyDict } from "react-date-range";

import { CoinBalance, RefreshInterval } from "@/types/coin-exchange";
import { cn } from "@/lib/utils";

const CoinExchange = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("All Platform");
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const [selectedFilters, setSelectedFilters] = useState({
    platforms: [] as string[],
    coins: [] as string[],
    statuses: [] as string[],
  });

  const [, setRefreshInterval] = useState<RefreshInterval>("Manual");
  const refreshTimer = useRef<NodeJS.Timeout | null>(null);

  const [, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  type ModalData = {
    symbol: string;
    total: number;
    rate: number;
  };

  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [modalData, setModalData] = useState<ModalData | null>(null);

  // Handle outside click to close filter dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setShowFilterPanel(false);
      }
    };

    if (showFilterPanel) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFilterPanel]);

  // Handle filter selection
  const handleFilterToggle = (
    category: "platforms" | "coins" | "statuses",
    value: string,
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  // Handle refresh data
  const refreshData = useCallback(async () => {
    console.log("Refreshing data...");
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 200));
      setIsLoading(false);
    }

    return Promise.resolve();
  }, []);

  // Handle interval selection
  const handleSelectInterval = useCallback(
    (interval: RefreshInterval) => {
      setRefreshInterval(interval);

      if (refreshTimer.current) {
        clearInterval(refreshTimer.current);
        refreshTimer.current = null;
      }

      if (interval === "Refresh Now") {
        refreshData();
        return;
      }

      if (interval === "Manual") {
        return;
      }

      const match = interval.match(/Every (\d+) minute/);
      const minutes = match ? parseInt(match[1], 10) : 0;
      if (!minutes) return;

      const ms = minutes * 60 * 1000;

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

  const [] = useState<CoinBalance | undefined>(undefined);

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
          style={{ backgroundColor: "white" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#F6B10A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-bitcoin-icon lucide-bitcoin"
          >
            <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
          </svg>
        </div>
      ),
      USDT: (
        <div
          className={cn(
            "rounded-full flex items-center justify-center text-white font-bold text-xs",
            className,
          )}
          style={{ backgroundColor: "white" }}
        >
          <svg
            fill="green"
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm1.922-18.207v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117zm0 3.59v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.006 0 1.74-.043 1.988-.061v-2.644c3.888.174 6.79.851 6.79 1.66 0 .81-2.902 1.487-6.79 1.658z"
            />
          </svg>
        </div>
      ),
      ETH: (
        <div
          className={cn(
            "rounded-full flex items-center justify-center text-white font-bold text-xs",
            className,
          )}
          style={{ backgroundColor: "white" }}
        >
          <svg
            width="800px"
            height="800px"
            viewBox="-80.5 0 417 417"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <polygon
                fill="#343434"
                points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"
              />
              <polygon
                fill="#8C8C8C"
                points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"
              />
              <polygon
                fill="#3C3C3B"
                points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"
              />
              <polygon
                fill="#8C8C8C"
                points="127.962 416.9052 127.962 312.1852 0 236.5852"
              />
              <polygon
                fill="#141414"
                points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"
              />
              <polygon
                fill="#393939"
                points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"
              />
            </g>
          </svg>
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
                      ? "text-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700",
                  )}
                  style={{
                    letterSpacing: "-0.6px",
                    backgroundColor:
                      selectedPlatform === platform ? "#F6B10A" : "transparent",
                  }}
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
                <RefreshDropdown
                  onRefresh={refreshData}
                  onSelectInterval={handleSelectInterval}
                />
                <AddNewCoinCard
                  onSelectPlatform={(platform) =>
                    console.log("Selected:", platform)
                  }
                />
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
                          className="bg-[#F6B10A] hover:bg-[#e5a800] text-white text-xs px-2 py-1 h-6"
                          style={{
                            fontFamily:
                              "'Geist', -apple-system, Roboto, Helvetica, sans-serif",
                          }}
                          onClick={() => {
                            setModalData({
                              symbol: coin,
                              total: parseFloat(data.balance),
                              rate: parseFloat(
                                data.rate.replace(/[^\d.]/g, ""),
                              ),
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

              <div className="relative" ref={filterRef}>
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

                {showFilterPanel && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-200 z-50">
                    <div className="p-4">
                      <h3 className="text-base font-semibold text-gray-900 mb-4">
                        Filters
                      </h3>

                      <div className="space-y-4">
                        {/* Platforms */}
                        <div>
                          <div className="space-y-2">
                            {filters.platforms.map((platform) => (
                              <label
                                key={platform}
                                className="flex items-center text-sm text-gray-700 cursor-pointer hover:text-black"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedFilters.platforms.includes(
                                    platform,
                                  )}
                                  onChange={() =>
                                    handleFilterToggle("platforms", platform)
                                  }
                                  className="mr-3 h-4 w-4 text-[#F6B10A] border-gray-300 rounded focus:ring-[#F6B10A]"
                                />
                                {platform}
                              </label>
                            ))}
                          </div>
                        </div>

                        <hr className="my-3 border-gray-200" />

                        {/* Coins */}
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-2">
                            Coin
                          </p>
                          <div className="space-y-2">
                            {filters.coins.map((coin) => (
                              <label
                                key={coin}
                                className="flex items-center text-sm text-gray-700 cursor-pointer hover:text-black"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedFilters.coins.includes(coin)}
                                  onChange={() =>
                                    handleFilterToggle("coins", coin)
                                  }
                                  className="mr-3 h-4 w-4 text-[#F6B10A] border-gray-300 rounded focus:ring-[#F6B10A]"
                                />
                                {coin}
                              </label>
                            ))}
                          </div>
                        </div>

                        <hr className="my-3 border-gray-200" />

                        {/* Status */}
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-2">
                            Status
                          </p>
                          <div className="space-y-2">
                            {filters.statuses.map((status) => (
                              <label
                                key={status}
                                className="flex items-center text-sm text-gray-700 cursor-pointer hover:text-black"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedFilters.statuses.includes(
                                    status,
                                  )}
                                  onChange={() =>
                                    handleFilterToggle("statuses", status)
                                  }
                                  className="mr-3 h-4 w-4 text-[#F6B10A] border-gray-300 rounded focus:ring-[#F6B10A]"
                                />
                                {status}
                              </label>
                            ))}
                          </div>
                        </div>

                        <hr className="my-3 border-gray-200" />

                        {/* Date Range Picker */}
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-2">
                            Date Range
                          </p>
                          <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <DateRange
                              editableDateInputs={true}
                              onChange={(item: RangeKeyDict) =>
                                setDateRange([item.selection])
                              }
                              moveRangeOnFirstSelection={false}
                              ranges={dateRange}
                              rangeColors={["#F6B10A"]}
                              className="text-sm w-full"
                            />
                          </div>
                        </div>

                        {/* Filter Actions */}
                        <div className="flex gap-2 pt-3 border-t border-gray-200">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 text-sm"
                            onClick={() => {
                              setSelectedFilters({
                                platforms: [],
                                coins: [],
                                statuses: [],
                              });
                              setDateRange([
                                {
                                  startDate: new Date(),
                                  endDate: new Date(),
                                  key: "selection",
                                },
                              ]);
                            }}
                          >
                            Clear All
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 bg-[#F6B10A] hover:bg-[#e5a800] text-white text-sm"
                            onClick={() => {
                              // Apply filters logic here
                              console.log(
                                "Applying filters:",
                                selectedFilters,
                                dateRange,
                              );
                              setShowFilterPanel(false);
                            }}
                          >
                            Apply
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Table Wrapper */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Table Header - Hidden on mobile */}
              <div
                className="hidden md:flex p-4 bg-gray-50 border-b text-sm font-medium text-gray-500"
                style={{
                  fontFamily:
                    "'Poppins', -apple-system, Roboto, Helvetica, sans-serif",
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
          }}
        />
      </div>
    </div>
  );
};

export default CoinExchange;
