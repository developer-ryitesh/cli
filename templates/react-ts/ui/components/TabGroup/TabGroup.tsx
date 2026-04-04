"use client";
import React, { useState } from "react";

type Tab = {
   label: string;
   content: React.ReactNode;
};

type TabGroupProps = {
   tabs: Tab[];
   defaultActive?: number;
};

export function TabGroup({ tabs, defaultActive = 0 }: TabGroupProps) {
   const [activeIndex, setActiveIndex] = useState(defaultActive);

   return (
      <div className="w-full">
         {/* Tab Headers */}
         <div className="flex border-b border-gray-200">
            {tabs.map((tab, index) => (
               <button
                  type="button"
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${activeIndex === index ? "border-b-2 border-indigo-500 text-indigo-600" : "text-gray-500 hover:text-indigo-500"}`}>
                  {tab.label}
               </button>
            ))}
         </div>
         {/* Tab Content */}
         <div className="mt-3">{tabs[activeIndex] && <div className="text-gray-700">{tabs[activeIndex].content}</div>}</div>
      </div>
   );
}
