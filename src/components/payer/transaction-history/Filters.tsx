import { Fragment } from "react";

import { SelectContent, SelectTrigger } from "@/components/ui/select";
import { Select, SelectItem, SelectValue } from "@/components/ui/select";

type Option = {
  name: string;
  value: string;
};

interface DurationOptionsProps {
  options: Option[];
}

interface UserOptionsProps {
  options: Option[];
}

interface PlatformOptionsProps {
  options: Option[];
}

export function PlatformOptions({ options }: PlatformOptionsProps) {
  return (
    <Select defaultValue={options.map((option) => option.value)[0]}>
      <SelectTrigger className="border shadow-none min-w-24 capitalize font-semibold !h-10 !bg-white">
        <SelectValue />
      </SelectTrigger>
      <SelectContent side="bottom" align="end" className="w-48">
        {options.map((option, index) => (
          <Fragment key={index}>
            <SelectItem
              value={option.value}
              className="p-2 text-sm font-semibold"
            >
              <span className="capitalize">{option.name}</span>
            </SelectItem>
          </Fragment>
        ))}
      </SelectContent>
    </Select>
  );
}

export function DurationOptions({ options }: DurationOptionsProps) {
  return (
    <Select defaultValue={options.map((option) => option.value)[0]}>
      <SelectTrigger className="border shadow-none min-w-24 capitalize font-semibold !h-10 !bg-white">
        <SelectValue />
      </SelectTrigger>
      <SelectContent side="bottom" align="end" className="w-48">
        {options.map((option, index) => (
          <Fragment key={index}>
            <SelectItem
              value={option.value}
              className="p-2 text-sm font-semibold"
            >
              <span className="capitalize">{option.name}</span>
            </SelectItem>
          </Fragment>
        ))}
      </SelectContent>
    </Select>
  );
}

export function UserOptions({ options }: UserOptionsProps) {
  return (
    <Select defaultValue={options.map((option) => option.value)[0]}>
      <SelectTrigger className="border shadow-none min-w-24 capitalize font-semibold !h-10 !bg-white">
        <SelectValue className="capitalize" />
      </SelectTrigger>
      <SelectContent side="bottom" align="end" className="w-48">
        {options.map((option, index) => (
          <Fragment key={index}>
            <SelectItem
              value={option.value}
              className="p-2 text-sm font-semibold"
            >
              <span className="capitalize">{option.name}</span>
            </SelectItem>
          </Fragment>
        ))}
      </SelectContent>
    </Select>
  );
}
