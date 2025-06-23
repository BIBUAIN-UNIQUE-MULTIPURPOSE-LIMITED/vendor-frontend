import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { AlertCircle, ArrowRightCircle, Loader2 } from "lucide-react";
import { CoinBalance } from "@/types/coin-exchange";
import { formatCurrency, formatCoinAmount } from "@/lib/formatters";

interface ExcessCoinDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCoin?: CoinBalance;
  currentRate: number;
  onExecuteSell: (data: {
    capitalCoin: number;
    useMarketRate: boolean;
    manualRate?: number;
  }) => Promise<void>;
}

export const ExcessCoinDetailsModal: React.FC<ExcessCoinDetailsModalProps> = ({
  isOpen,
  onClose,
  selectedCoin,
  currentRate,
  onExecuteSell,
}) => {
  const [capitalCoin, setCapitalCoin] = useState<number>(0);
  const [useMarketRate, setUseMarketRate] = useState<boolean>(true);
  const [manualRate, setManualRate] = useState<number>(currentRate);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Calculate excess coin
  const excessCoin = selectedCoin
    ? selectedCoin.balance - capitalCoin
    : 0;

  // Reset form when modal opens/closes or selected coin changes
  useEffect(() => {
    if (isOpen && selectedCoin) {
      setCapitalCoin(0);
      setUseMarketRate(true);
      setManualRate(currentRate);
      setError(null);
    }
  }, [isOpen, selectedCoin, currentRate]);

  const handleSubmit = async () => {
    if (!selectedCoin) return;

    // Validation
    if (capitalCoin <= 0) {
      setError("Capital coin must be greater than 0");
      return;
    }

    if (capitalCoin > selectedCoin.balance) {
      setError("Capital coin cannot exceed total balance");
      return;
    }

    if (!useMarketRate && (!manualRate || manualRate <= 0)) {
      setError("Please enter a valid manual rate");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      await onExecuteSell({
        capitalCoin,
        useMarketRate,
        manualRate: !useMarketRate ? manualRate : undefined,
      });
      onClose();
    } catch (err) {
      setError("Failed to execute trade. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Exchange Excess Coin</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {/* Total Coin (readonly) */}
          <div className="grid gap-2">
            <Label htmlFor="totalCoin">Total Coin</Label>
            <Input
              id="totalCoin"
              value={
                selectedCoin
                  ? formatCoinAmount(selectedCoin.balance, selectedCoin.type)
                  : "0"
              }
              readOnly
              className="bg-gray-100"
            />
          </div>

          {/* Capital Coin (input) */}
          <div className="grid gap-2">
            <Label htmlFor="capitalCoin">Capital Coin</Label>
            <Input
              id="capitalCoin"
              type="number"
              value={capitalCoin || ""}
              onChange={(e) => setCapitalCoin(parseFloat(e.target.value) || 0)}
              min="0"
              step="0.00000001"
            />
          </div>

          {/* Excess Coin (calculated, readonly) */}
          <div className="grid gap-2">
            <Label htmlFor="excessCoin">Excess Coin</Label>
            <Input
              id="excessCoin"
              value={formatCoinAmount(excessCoin, selectedCoin?.type || "BTC")}
              readOnly
              className="bg-gray-100"
            />
          </div>

          {/* Current Rate */}
          <div className="grid gap-2">
            <Label>Current Market Rate</Label>
            <Input
              value={formatCurrency(currentRate)}
              readOnly
              className="bg-gray-100"
            />
          </div>

          {/* Rate Option Toggle */}
          <div className="grid gap-2">
            <Label>Rate Option</Label>
            <div className="flex items-center justify-between p-2 border rounded-md bg-gray-50">
              <span className={useMarketRate ? "font-medium text-amber-600" : ""}>
                Market Rate
              </span>
              <Switch
                checked={useMarketRate}
                onCheckedChange={setUseMarketRate}
                className="data-[state=checked]:bg-amber-500"
              />
              <span className={!useMarketRate ? "font-medium text-amber-600" : ""}>
                Limit
              </span>
            </div>
          </div>

          {/* Manual Rate Input (only shown when not using market rate) */}
          {!useMarketRate && (
            <div className="grid gap-2">
              <Label htmlFor="manualRate">Manual Rate</Label>
              <Input
                id="manualRate"
                type="number"
                value={manualRate || ""}
                onChange={(e) => setManualRate(parseFloat(e.target.value) || 0)}
                min="0"
                step="0.01"
              />
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="flex items-center gap-2 p-2 text-sm text-red-500 bg-red-50 rounded-md">
              <AlertCircle className="w-4 h-4" />
              <span>{error}</span>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || excessCoin <= 0}
            className="bg-amber-500 hover:bg-amber-600"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                Execute Sell Trade
                <ArrowRightCircle className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};