import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

// --- Helper Icon Components (as seen in the images) ---

const ExchangeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-gray-600"
  >
    <path d="M7 20v-6h10v6" />
    <path d="M12 4v10" />
    <path d="m15 11-3-3-3 3" />
    <path d="m9 13 3 3 3-3" />
  </svg>
);

const TimerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-gray-600"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const VolumeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-gray-600"
  >
    <path d="M12 20V10" />
    <path d="M18 20V4" />
    <path d="M6 20V16" />
  </svg>
);

const RefreshIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-gray-600"
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

// --- Main Component ---

export interface ExchangeCoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  coinSymbol: string;
  totalCoin: number;
  currentRate: number;
  onExecute: (args: {
    capitalCoin: number;
    rateOption: "market" | "limit";
    rate: number;
  }) => void;
}

export default function ExchangeCoinModal({
  isOpen,
  onClose,
  coinSymbol,
  totalCoin,
  currentRate,
  onExecute,
}: ExchangeCoinModalProps) {
  const [tab, setTab] = useState<"manual" | "auto">("manual");

  // Manual State
  const [capitalCoin, setCapitalCoin] = useState<number>(0.3);

  // Auto State
  const [isAutoActive, setIsAutoActive] = useState<boolean>(true);
  const [autoMode, setAutoMode] = useState<"trade" | "timer" | "volume">(
    "timer",
  );
  const [interval, setInterval] = useState<string>("5");
  const [volumeThreshold, setVolumeThreshold] = useState<string>("");
  const [presetVolume, setPresetVolume] = useState<string>("");

  // Shared State
  const [rateOption, setRateOption] = useState<"market" | "limit">("market");
  const [limitRate, setLimitRate] = useState<number>(103456.3);

  const excessCoin = totalCoin - capitalCoin;

  useEffect(() => {
    if (isOpen) {
      // Reset state on open for a clean modal instance
      setTab("manual");
      setCapitalCoin(0.3);
      setRateOption("market");
      setLimitRate(103456.3);
      setIsAutoActive(true);
      setAutoMode("timer");
      setInterval("5");
      setVolumeThreshold("");
      setPresetVolume("");
    }
  }, [isOpen]);

  const handleExecute = () => {
    onExecute({
      capitalCoin,
      rateOption,
      rate: rateOption === "limit" ? limitRate : currentRate,
    });
    onClose();
  };

  const handleStartAutoExchange = () => {
    // Placeholder for auto-exchange logic
    console.log("Starting auto-exchange with settings:", {
      autoMode,
      interval,
      volumeThreshold,
      rateOption,
      limitRate,
    });
    onClose();
  };

  const handlePresetClick = (value: string) => {
    setPresetVolume(value);
    setVolumeThreshold(value);
  };

  const isDisabled = !isAutoActive;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full max-h-[90vh] overflow-y-auto p-4 md:p-6 space-y-4 bg-white">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900">
            Excess Coin Details – {coinSymbol}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex bg-gray-200 rounded-lg p-1 text-sm font-medium">
          <button
            onClick={() => setTab("manual")}
            className={`flex-1 py-2 rounded-md transition-colors duration-200 ${
              tab === "manual"
                ? "bg-[#F6B10A] text-white shadow"
                : "text-gray-600 hover:bg-gray-300"
            }`}
          >
            Manual Exchange
          </button>
          <button
            onClick={() => setTab("auto")}
            className={`flex-1 py-2 rounded-md transition-colors duration-200 ${
              tab === "auto"
                ? "bg-[#F6B10A] text-white shadow"
                : "text-gray-600 hover:bg-gray-300"
            }`}
          >
            Auto Exchange
          </button>
        </div>

        {/* --- MANUAL EXCHANGE TAB --- */}
        {tab === "manual" && (
          <div className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Total Coin (Wallet + Vendor)
                </label>
                <Input
                  disabled
                  value={totalCoin.toString()}
                  className="mt-1 bg-gray-100 text-gray-800 font-medium"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Current Rate
                </label>
                <div className="mt-1 h-10 flex items-center px-3 bg-gray-100 rounded-md text-gray-800 font-medium">
                  US $
                  {currentRate.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Capital Coin
              </label>
              <Input
                type="number"
                value={capitalCoin}
                onChange={(e) =>
                  setCapitalCoin(parseFloat(e.target.value) || 0)
                }
                className="mt-1"
                placeholder="0.0"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Excess Coin
              </label>
              <Input
                disabled
                value={excessCoin.toFixed(8)}
                className="mt-1 bg-gray-100 text-gray-800 font-medium"
              />
            </div>

            {/* Rate Option */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-600">
                  Rate Option
                </label>
                <button className="p-1">
                  <RefreshIcon />
                </button>
              </div>
              <div className="flex items-center justify-between bg-gray-100 rounded-lg p-1">
                <span
                  className={`flex-1 text-center font-medium ${rateOption === "market" ? "text-gray-800" : "text-gray-500"}`}
                >
                  Market Rate
                </span>
                <Switch
                  checked={rateOption === "limit"}
                  onCheckedChange={(checked) =>
                    setRateOption(checked ? "limit" : "market")
                  }
                  className="data-[state=checked]:bg-[#F6B10A]"
                />
                <span
                  className={`flex-1 text-center font-medium ${rateOption === "limit" ? "text-gray-800" : "text-gray-500"}`}
                >
                  Limit
                </span>
              </div>
              <div className="flex items-center justify-between text-center px-1">
                <span className="flex-1 text-sm text-gray-500">
                  ${currentRate.toLocaleString("en-US")}
                </span>
                <span className="flex-1 text-sm text-gray-500">
                  ${limitRate.toLocaleString("en-US")}
                </span>
              </div>
              {rateOption === "limit" && (
                <Input
                  type="number"
                  placeholder="Enter custom rate"
                  value={limitRate}
                  onChange={(e) =>
                    setLimitRate(parseFloat(e.target.value) || 0)
                  }
                  className="mt-2 animate-fade-in"
                />
              )}
            </div>
          </div>
        )}

        {/* --- AUTO EXCHANGE TAB --- */}
        {tab === "auto" && (
          <div className="space-y-5 animate-fade-in">
            <div className="rounded-lg bg-gray-50 p-4 border border-gray-200">
              <div className="text-sm text-gray-600">
                Total Available Excess coin
              </div>
              <div className="text-2xl font-bold text-green-600 mt-1">
                {excessCoin.toFixed(8)} {coinSymbol}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                ≈ US $
                {(excessCoin * currentRate).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2 text-green-600 font-medium text-sm">
                <span className="h-2.5 w-2.5 bg-green-500 rounded-full"></span>
                Auto Exchange Active
              </span>
              <div className="space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsAutoActive(!isAutoActive)}
                >
                  {isAutoActive ? "⏸ Pause" : "▶️ Resume"}
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onClose()}
                >
                  <span className="mr-1.5">⏹️</span> Stop
                </Button>
              </div>
            </div>

            {/* Command Selector */}
            <div className="space-y-3">
              <div className="font-semibold text-gray-800 text-base">
                Command Selector
              </div>

              <div
                onClick={() => !isDisabled && setAutoMode("trade")}
                className={`flex gap-3 items-start border p-3 rounded-lg cursor-pointer transition-all ${autoMode === "trade" ? "border-[#F6B10A] bg-orange-50" : "border-gray-200"} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <input
                  type="radio"
                  name="autoMode"
                  checked={autoMode === "trade"}
                  disabled={isDisabled}
                  className="mt-1 form-radio text-[#F6B10A] focus:ring-[#F6B10A]"
                />
                <div className="flex-1 flex items-start gap-3">
                  <ExchangeIcon />
                  <div>
                    <div className="font-medium text-gray-800">
                      Exchange by Trade Amount
                    </div>
                    <p className="text-sm text-gray-500">
                      Trigger coin exchange whenever a new trade amount
                      equals/exceeds excess coin
                    </p>
                  </div>
                </div>
              </div>

              <div
                onClick={() => !isDisabled && setAutoMode("timer")}
                className={`flex gap-3 items-start border p-3 rounded-lg cursor-pointer transition-all ${autoMode === "timer" ? "border-[#F6B10A] bg-orange-50" : "border-gray-200"} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <input
                  type="radio"
                  name="autoMode"
                  checked={autoMode === "timer"}
                  disabled={isDisabled}
                  className="mt-1 form-radio text-[#F6B10A] focus:ring-[#F6B10A]"
                />
                <div className="flex-1 flex items-start gap-3">
                  <TimerIcon />
                  <div className="flex flex-col gap-2 w-full">
                    <span className="font-medium text-gray-800">Timer Set</span>
                    <select
                      disabled={isDisabled}
                      value={interval}
                      onChange={(e) => setInterval(e.target.value)}
                      className="p-2 border rounded-md text-sm bg-white border-gray-300 w-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <option value="5">Every 5 minutes</option>
                      <option value="10">Every 10 minutes</option>
                      <option value="30">Every 30 minutes</option>
                    </select>
                  </div>
                </div>
              </div>

              <div
                onClick={() => !isDisabled && setAutoMode("volume")}
                className={`flex gap-3 items-start border p-3 rounded-lg cursor-pointer transition-all ${autoMode === "volume" ? "border-[#F6B10A] bg-orange-50" : "border-gray-200"} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <input
                  type="radio"
                  name="autoMode"
                  checked={autoMode === "volume"}
                  disabled={isDisabled}
                  className="mt-1 form-radio text-[#F6B10A] focus:ring-[#F6B10A]"
                />
                <div className="flex-1 flex items-start gap-3">
                  <VolumeIcon />
                  <div className="w-full">
                    <div className="font-medium text-gray-800 mb-2">
                      By Volume
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {["0.001", "0.005", "0.01", "0.05"].map((val) => (
                        <Button
                          key={val}
                          size="sm"
                          variant={presetVolume === val ? "default" : "outline"}
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePresetClick(val);
                          }}
                          disabled={isDisabled}
                          className={
                            presetVolume === val
                              ? "bg-[#F6B10A] text-white"
                              : "bg-white"
                          }
                        >
                          {val}
                        </Button>
                      ))}
                    </div>
                    <Input
                      placeholder="Enter custom volume"
                      value={volumeThreshold}
                      onChange={(e) => {
                        e.stopPropagation();
                        setVolumeThreshold(e.target.value);
                      }}
                      disabled={isDisabled}
                      className="bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Rate Option */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-600">
                  Rate Option
                </label>
                <button className="p-1" disabled={isDisabled}>
                  <RefreshIcon />
                </button>
              </div>
              <div
                className={`flex items-center justify-between bg-gray-100 rounded-lg p-1 ${isDisabled ? "opacity-50" : ""}`}
              >
                <span
                  className={`flex-1 text-center font-medium ${rateOption === "market" ? "text-gray-800" : "text-gray-500"}`}
                >
                  Market Rate
                </span>
                <Switch
                  checked={rateOption === "limit"}
                  onCheckedChange={(checked) =>
                    setRateOption(checked ? "limit" : "market")
                  }
                  disabled={isDisabled}
                  className="data-[state=checked]:bg-[#F6B10A]"
                />
                <span
                  className={`flex-1 text-center font-medium ${rateOption === "limit" ? "text-gray-800" : "text-gray-500"}`}
                >
                  Limit
                </span>
              </div>
              <div
                className={`flex items-center justify-between text-center px-1 ${isDisabled ? "opacity-50" : ""}`}
              >
                <span className="flex-1 text-sm text-gray-500">
                  ${currentRate.toLocaleString("en-US")}
                </span>
                <span className="flex-1 text-sm text-gray-500">
                  ${limitRate.toLocaleString("en-US")}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* --- FOOTER BUTTONS --- */}
        <div className="flex justify-end gap-3 pt-4">
          <Button variant="outline" onClick={onClose} className="bg-gray-100">
            Cancel
          </Button>
          {tab === "manual" ? (
            <Button
              onClick={handleExecute}
              className="bg-[#F6B10A] hover:bg-orange-500 text-white"
            >
              Execute Sell trade
            </Button>
          ) : (
            <Button
              onClick={handleStartAutoExchange}
              disabled={!isAutoActive}
              className="bg-[#F6B10A] hover:bg-orange-500 text-white disabled:bg-orange-300 disabled:cursor-not-allowed"
            >
              Start Auto Exchange
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
