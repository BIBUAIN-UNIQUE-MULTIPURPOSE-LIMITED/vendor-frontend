"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabNavigation() {
  const pathname = usePathname();

  const tabs = [
    { path: "/bank-management", label: "Bank Management" },
    { path: "/error-bank-log", label: "Error Bank Log" },
  ];

  return (
    <div className="bg-gray-100 py-6 px-4">
      <div className="max-w-[90%] mx-auto">
        <div className="grid grid-cols-2 rounded-lg overflow-hidden shadow-sm">
          {tabs.map((tab) => {
            const isActive = pathname === tab.path;

            return (
              <Link
                key={tab.path}
                href={tab.path}
                className={`text-center py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-yellow-500 text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
