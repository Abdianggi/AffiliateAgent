import { useState } from "react";
import Dashboard from "./feature/dashboard";

export default function Content() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div >
      {/* Tabs */}
      <div className="flex space-x-1 border-gray-300 px-72">
        {[
          { id: "dashboard", label: "Dashboard" },
          { id: "booking", label: "Booking" },
          { id: "withdrawal", label: "Withdrawal" },
          { id: "affiliator", label: "Affiliator Profile" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 text-sm font-normal rounded-t-lg ${
              activeTab === tab.id
                ? "border-blue-500 text-white bg-[#1B8BE3]"
                : "border-transparent text-black bg-white hover:text-[#1B8BE3] hover:border-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

        {/* Tab Content */}
        {activeTab === "dashboard" && <Dashboard />}
        {activeTab === "booking" && (
            <div className="px-52 bg-transparent">
                <div className="bg-white px-20 border-t-[0.4rem] border-[#1B8BE3] py-10 rounded-t-[1.5rem] relative z-20 shadow-md">
                    <div>Booking</div>
                </div>
            </div>
        )}
        {activeTab === "withdrawal" && <div>Withdrawal Content</div>}
        {activeTab === "affiliator" && (
            <div className="px-52 bg-transparent">
                <div className="bg-white px-20 border-t-[0.4rem] border-[#1B8BE3] py-10 rounded-t-[1.5rem] relative z-20 shadow-md">
                    <h1 className="text-xl font-bold">Affiliator Profile</h1>
                    <div className="mt-4">
                    <p>Nama: Sinta Valela</p>
                    <p>Email: sintavalela736@gmail.com</p>
                    {/* Tambahkan elemen lain sesuai kebutuhan */}
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}
