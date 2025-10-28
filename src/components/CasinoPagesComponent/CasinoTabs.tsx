/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { FaHome } from 'react-icons/fa';
const TABS = ["Lobby", "Hot Game", "New Release"] as const;
type TabType = (typeof TABS)[number];

function CasinoTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("Lobby");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Lobby":
        return (
          <div>
            <h2> TABS CONTANT </h2>
          </div>
        );
      case "Hot Game":
        return (
          <div>
            <h2> TABS CONTANT 222 </h2>
          </div>
        );
      case "New Release":
        return (
          <div>
            <h2> TABS CONTANT 333333 </h2>
          </div>
        );
      default:
        return null;
    }
  };

  return (
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 ">
        <div className="md:col-span-12  rounded-lg shadow-3">
          <div className=" ">
            <div className="flex items-center justify-center gap-2 w-full ">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 cursor-pointer px-3 py-1.5 rounded text-sm whitespace-nowrap transition-colors border flex items-center justify-center gap-2 
                                    ${
                                      activeTab === tab
                                        ? "bg-brand-active text-white border-blue-600"
                                        : " bg-brand-secondary text-white border-transparent hover:bg-[#284556]"
                                    }`}
                  onClick={() => setActiveTab(tab)}
                >
                 <FaHome /> {tab}
                </button>
              ))}
            </div>

            <div className=" w-full mt-3">{renderTabContent()}</div>
          </div>
        </div>
      </div>
  );
}

export default CasinoTabs;
