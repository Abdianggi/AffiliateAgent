import { NavLink } from "react-router-dom";

export default function Tabs({disabled}) {
  const tabs = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard" , icon : <i class="fa-solid fa-users text-xs"></i>},
    { id: "booking", label: "Booking", path: "/booking" , icon : <i class="fa-solid fa-calendar-days text-xs"></i>},
    { id: "withdrawal", label: "Withdrawal", path: "/withdrawal" , icon : <i class="fa-solid fa-money-bill text-xs"></i>},
    { id: "affiliator", label: "Profile", path: "/affiliator-profile" , icon : <i class="fa-regular fa-user text-xs"></i>},
  ];

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex space-x-1 border-gray-300 px-12 md:px-52 lg:px-72">
      {tabs.map((tab) => (
        <NavLink
          key={tab.id}
          to={tab.path}
          onClick={handleClick}
          className={({ isActive }) =>
            `py-1 sm:py-2 px-2 sm:px-4 text-sm font-normal rounded-t-lg${disabled ? `cursor-not-allowed opacity-50` : ``} ${
              isActive
                ? "border-blue-500 text-white bg-[#1B8BE3]"
                : "border-transparent text-black bg-white hover:text-[#1B8BE3] hover:border-gray-300"
            }`
          }
        >
          {tab.icon}
          <div className="hidden text-xs sm:inline-block sm:text-sm sm:ml-2">
            {tab.label}
          </div>
        </NavLink>
      ))}
    </div>
  );
}
