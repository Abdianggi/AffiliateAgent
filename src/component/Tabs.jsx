import { NavLink } from "react-router-dom";

export default function Tabs({disabled}) {
  const tabs = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard" , icon : <i class="fa-solid fa-users text-xs mr-2"></i>},
    { id: "booking", label: "Booking", path: "/booking" , icon : <i class="fa-solid fa-calendar-days text-xs mr-2"></i>},
    { id: "withdrawal", label: "Withdrawal", path: "/withdrawal" , icon : <i class="fa-solid fa-money-bill text-xs mr-2"></i>},
    { id: "affiliator", label: "Affiliator Profile", path: "/affiliator-profile" , icon : <i class="fa-regular fa-user text-xs mr-2"></i>},
  ];

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex space-x-1 border-gray-300 px-9 md:px-72">
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.path}
          onClick={handleClick}
          className={({ isActive }) =>
            `py-2 px-4 text-sm font-normal rounded-t-lg ${disabled ? `cursor-not-allowed opacity-50` : ``} ${
              isActive
                ? "border-blue-500 text-white bg-[#1B8BE3]"
                : "border-transparent text-black bg-white hover:text-[#1B8BE3] hover:border-gray-300"
            }`
          }
        >
          {tab.icon}{tab.label}
        </NavLink>
      ))}
    </div>
  );
}
