const currencies = [
  { name: "US Dollar (USD)", symbol: "USD" },
  { name: "Euro (EUR)", symbol: "EUR" },
  { name: "British Pound (GBP)", symbol: "GBP" },
  { name: "British Pound (GBP)", symbol: "NGN" },
];

const coins = [
  { name: "Bitcoin (BTC)", symbol: "BTC" },
  { name: "Tether (USDT)", symbol: "USDT" },
  { name: "Ethereum (ETH)", symbol: "ETH" },
];

const platforms = [
  {
    name: "Binance",
    marketPrice: 64198.32,
    costPrice: 6400000.0,
    currency: "USD",
    status: "active",
    order: "sell",
  },
  {
    name: "Paxful",
    marketPrice: 64198.32,
    costPrice: 6400000.0,
    currency: "USD",
    status: "inactive",
    order: "buy",
  },
  {
    name: "Noones",
    marketPrice: 64198.32,
    costPrice: 64000999.0,
    currency: "USD",
    status: "active",
    order: "sell",
  },
];

const offers = [
  {
    platform: "Binance",
    coin: "BTC",
    offerRate: 64010098.32,
    currency: "NGN",
    type: "buy",
    paymentMethod: "Bank Transfer",
  },
  {
    platform: "Paxful",
    coin: "BTC",
    offerRate: 64010098.32,
    currency: "NGN",
    type: "sell",
    paymentMethod: "Mobile Money",
  },
  {
    platform: "Noones",
    coin: "BTC",
    offerRate: 64010098.32,
    currency: "NGN",
    type: "buy",
    paymentMethod: "Bank Transfer",
  },
];

const costPriceAnanlysis = [
  {
    account: "main",
    costPrice: 1242359,
    marketPrice: 1249372,
    coinsPurchased: 2.12,
  },
  {
    account: "reserved",
    costPrice: 1242359,
    marketPrice: 1249372,
    coinsPurchased: 2.12,
  },
  {
    account: "trading",
    costPrice: 1242359,
    marketPrice: 1249372,
    coinsPurchased: 2.12,
  },
];

export { currencies, coins, platforms, offers, costPriceAnanlysis };
