import React from "react";
import { CoinType } from "@/types/coin-exchange";

// SVG paths for cryptocurrency icons
const iconPaths = {
  BTC: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-bitcoin-icon lucide-bitcoin"
    >
      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
    </svg>
  ),
  USDT: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
        fill="#26A17B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.96139 8.69155V8.69055C8.90639 8.69455 8.62289 8.71155 7.99039 8.71155C7.48539 8.71155 7.12989 8.69655 7.00489 8.69055V8.69205C5.06089 8.60655 3.60989 8.26805 3.60989 7.86305C3.60989 7.45805 5.06089 7.12005 7.00489 7.03305V8.35505C7.13189 8.36405 7.49589 8.38555 7.99889 8.38555C8.60239 8.38555 8.90489 8.36055 8.96139 8.35555V7.03405C10.9014 7.12055 12.3489 7.45905 12.3489 7.86305C12.3489 8.26805 10.9014 8.60555 8.96139 8.69155ZM8.96139 6.89655V5.71355H11.6684V3.90955H4.29789V5.71355H7.00489V6.89605C4.80489 6.99705 3.15039 7.43305 3.15039 7.95505C3.15039 8.47705 4.80489 8.91255 7.00489 9.01405V12.805H8.96139V9.01305C11.1579 8.91205 12.8084 8.47655 12.8084 7.95505C12.8084 7.43355 11.1579 6.99805 8.96139 6.89655Z"
        fill="white"
      />
    </svg>
  ),
  ETH: (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99927 0L3.08594 8.14667L7.99927 11.0493L12.9126 8.14667L7.99927 0ZM7.99927 16L3.08594 9.078L7.99927 12L12.9126 9.078L7.99927 16Z"
        fill="black"
      />
    </svg>
  ),
};

interface CoinIconProps {
  coin: CoinType;
  className?: string;
  size?: number;
}

const CoinIcon: React.FC<CoinIconProps> = ({
  coin,
  className = "",
  size = 16,
}) => {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {iconPaths[coin]}
    </div>
  );
};

export default CoinIcon;
