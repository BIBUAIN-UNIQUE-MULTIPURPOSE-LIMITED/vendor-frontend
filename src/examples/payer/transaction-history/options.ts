export type Option = {
  name: string;
  value: string;
};

export const platforms: Option[] = [
  {
    name: "all platforms",
    value: "all-platforms",
  },
  {
    name: "paxful",
    value: "paxful",
  },
  {
    name: "noones",
    value: "noones",
  },
  {
    name: "byBit",
    value: "byBit",
  },
];

export const duration: Option[] = [
  {
    name: "today",
    value: "today",
  },
  {
    name: "yesterday",
    value: "yesterday",
  },
  {
    name: "last 7 days",
    value: "last-7-days",
  },
  {
    name: "last 30 days",
    value: "last-30-days",
  },
  {
    name: "all time",
    value: "all-time",
  },
];

export const users: Option[] = [
  {
    name: "alex johnson (current)",
    value: "1",
  },
  {
    name: "sarah smith",
    value: "2",
  },
  {
    name: "mike brown",
    value: "3",
  },
  {
    name: "all payers",
    value: "4",
  },
];
