export type Metric = {
  date: string;
  timeIn: string;
  timeOut: string;
  tag: {
    name: string;
    text: string;
    color: string;
  };
};

export const hphMetrics: Metric[] = [
  {
    timeIn: "08:02",
    timeOut: "16:05",
    date: "2024-01-15",
    tag: {
      name: "on-time",
      color: "bg-black",
      text: "!text-white",
    },
  },
  {
    timeIn: "08:15",
    timeOut: "16:10",
    date: "2024-01-14",
    tag: {
      name: "late",
      color: "bg-destructive",
      text: "!text-white",
    },
  },
  {
    timeIn: "07:58",
    timeOut: "16:02",
    date: "2024-01-13",
    tag: {
      name: "early",
      color: "bg-muted",
      text: "!text-muted-foreground",
    },
  },
  {
    timeIn: "08:00",
    timeOut: "16:00",
    date: "2024-01-12",
    tag: {
      name: "on-time",
      color: "bg-black",
      text: "!text-white",
    },
  },
  {
    timeIn: "08:08",
    timeOut: "16:15",
    date: "2024-01-11",
    tag: {
      name: "late",
      color: "bg-destructive",
      text: "!text-white",
    },
  },
];
