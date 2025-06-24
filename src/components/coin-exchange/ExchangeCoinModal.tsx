import React, { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

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
  const [capitalCoin, setCapitalCoin] = useState<number>(0);
  const [rateOption, setRateOption] = useState<"market" | "limit">("market");
  const [limitRate, setLimitRate] = useState<number>(currentRate);
  const [isAutoActive, setIsAutoActive] = useState<boolean>(true);
  const [autoMode, setAutoMode] = useState<"trade" | "timer" | "volume">(
    "timer",
  );
  const [interval, setInterval] = useState<string>("5");
  const [volumeThreshold, setVolumeThreshold] = useState<string>("");
  const [presetVolume, setPresetVolume] = useState<string>("");

  const excessCoin = totalCoin - capitalCoin;

  useEffect(() => {
    if (isOpen) {
      setTab("auto");
      setCapitalCoin(0);
      setRateOption("market");
      setLimitRate(currentRate);
      setIsAutoActive(true);
      setAutoMode("timer");
      setInterval("5");
      setVolumeThreshold("");
      setPresetVolume("");
    }
  }, [isOpen, currentRate]);

  const handleExecute = () => {
    onExecute({
      capitalCoin,
      rateOption,
      rate: rateOption === "limit" ? limitRate : currentRate,
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
      <DialogContent className="max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            Excess Coin Details – {coinSymbol}
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex border rounded-md overflow-hidden text-sm font-medium">
          <button
            onClick={() => setTab("manual")}
            className={`flex-1 py-2 ${tab === "manual" ? "bg-white text-black" : "bg-gray-100 text-gray-700"}`}
          >
            Manual Exchange
          </button>
          <button
            onClick={() => setTab("auto")}
            className={`flex-1 py-2 ${tab === "auto" ? "bg-yellow-400 text-white" : "bg-gray-100 text-gray-700"}`}
          >
            Auto Exchange
          </button>
        </div>

        {/* Manual Exchange Tab */}
        {tab === "manual" && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-700">Total Coin</label>
                <Input
                  disabled
                  value={totalCoin.toString()}
                  className="mt-1 bg-gray-100"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">Current Rate</label>
                <div className="mt-1 h-10 flex items-center px-3 bg-gray-100 rounded">
                  US ${currentRate.toLocaleString()}
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700">Capital Coin</label>
              <Input
                type="number"
                value={capitalCoin}
                onChange={(e) =>
                  setCapitalCoin(parseFloat(e.target.value) || 0)
                }
                className="mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Excess Coin</label>
              <Input
                disabled
                value={excessCoin.toFixed(8)}
                className="mt-1 bg-gray-100"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700 mb-2 block">
                Rate Option
              </label>
              <div className="flex items-center justify-between bg-gray-100 rounded px-4 py-2">
                <span
                  className={
                    rateOption === "market"
                      ? "font-medium text-black"
                      : "text-gray-500"
                  }
                >
                  Market Rate
                </span>
                <Switch
                  checked={rateOption === "limit"}
                  onCheckedChange={(checked) =>
                    setRateOption(checked ? "limit" : "market")
                  }
                />
                <span
                  className={
                    rateOption === "limit"
                      ? "font-medium text-black"
                      : "text-gray-500"
                  }
                >
                  Limit
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
                  className="mt-2"
                />
              )}
            </div>
          </>
        )}

        {/* Auto Exchange Tab */}
        {tab === "auto" && (
          <>
            <div className="rounded bg-gray-50 p-4 border">
              <div className="text-sm text-gray-600">
                Total Available Excess Coin
              </div>
              <div className="text-xl font-semibold text-green-600">
                {totalCoin.toFixed(8)} {coinSymbol}
              </div>
              <div className="text-xs text-gray-500">
                ≈ US ${currentRate * totalCoin}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-green-600 font-medium text-sm">
                ● Auto Exchange Active
              </span>
              <div className="space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setIsAutoActive(false)}
                  disabled={!isAutoActive}
                >
                  ⏸ Pause
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onClose()}
                >
                  ⛔ Stop
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="font-medium text-sm">Command Selector</div>

              <label className="flex gap-2 items-start border p-3 rounded-md cursor-pointer">
                <input
                  type="radio"
                  checked={autoMode === "trade"}
                  onChange={() => setAutoMode("trade")}
                  disabled={isDisabled}
                />
                <div>
                  <div className="font-medium">Exchange by Trade Amount</div>
                  <p className="text-sm text-gray-500">
                    Trigger coin exchange whenever a new trade amount
                    equals/exceeds excess coin
                  </p>
                </div>
              </label>

              <label className="flex gap-2 items-start border p-3 rounded-md cursor-pointer">
                <input
                  type="radio"
                  checked={autoMode === "timer"}
                  onChange={() => setAutoMode("timer")}
                  disabled={isDisabled}
                />
                <div className="flex flex-col gap-2 w-full">
                  <span className="font-medium">Timer Set</span>
                  <select
                    disabled={isDisabled}
                    value={interval}
                    onChange={(e) => setInterval(e.target.value)}
                    className="p-2 border rounded text-sm"
                  >
                    <option value="5">Every 5 minutes</option>
                    <option value="10">Every 10 minutes</option>
                    <option value="30">Every 30 minutes</option>
                  </select>
                </div>
              </label>

              <label className="flex gap-2 items-start border p-3 rounded-md cursor-pointer">
                <input
                  type="radio"
                  checked={autoMode === "volume"}
                  onChange={() => setAutoMode("volume")}
                  disabled={isDisabled}
                />
                <div className="w-full">
                  <div className="font-medium mb-2">By Volume</div>
                  <div className="flex gap-2 mb-2">
                    {["0.001", "0.005", "0.01", "0.05"].map((val) => (
                      <Button
                        key={val}
                        size="sm"
                        variant={presetVolume === val ? "default" : "outline"}
                        onClick={() => handlePresetClick(val)}
                        disabled={isDisabled}
                      >
                        {val}
                      </Button>
                    ))}
                  </div>
                  <Input
                    placeholder="Enter custom volume"
                    value={volumeThreshold}
                    onChange={(e) => setVolumeThreshold(e.target.value)}
                    disabled={isDisabled}
                  />
                </div>
              </label>
            </div>

            <div>
              <label className="text-sm text-gray-700 mb-1 block">
                Rate Option
              </label>
              <div className="flex items-center justify-between bg-gray-100 rounded px-4 py-2">
                <span
                  className={
                    rateOption === "market"
                      ? "font-medium text-black"
                      : "text-gray-500"
                  }
                >
                  Market Rate
                </span>
                <Switch
                  checked={rateOption === "limit"}
                  onCheckedChange={(checked) =>
                    setRateOption(checked ? "limit" : "market")
                  }
                  disabled={isDisabled}
                />
                <span
                  className={
                    rateOption === "limit"
                      ? "font-medium text-black"
                      : "text-gray-500"
                  }
                >
                  Limit
                </span>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                ${currentRate.toLocaleString()}
              </div>
            </div>
          </>
        )}

        <div className="flex justify-end gap-2 pt-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          {tab === "manual" ? (
            <Button
              onClick={handleExecute}
              className="bg-yellow-400 hover:bg-yellow-500 text-white"
            >
              Execute Sell Trade
            </Button>
          ) : (
            <Button
              disabled={!isAutoActive}
              className="bg-yellow-400 hover:bg-yellow-500 text-white"
            >
              Start Auto Exchange
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
