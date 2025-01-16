import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Tabs({disabled}) {
  const tabs = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard" , icon : <i class="fa-solid fa-users text-xs px-[0.05rem] sm:px-0 sm:mt-[0.15rem] mt-0"></i>},
    { id: "booking", label: "Booking", path: "/booking" , icon : <i class="fa-solid fa-calendar-days text-xs px-[0.2rem] sm:px-0 sm:mt-[0.15rem] mt-0"></i>},
    { id: "withdrawal", label: "Withdrawal", path: "/withdrawal" , icon : <i class="fa-solid fa-money-bill text-xs px-[0.1rem] sm:px-0 sm:mt-[0.15rem] mt-0"></i>},
    { id: "affiliator", label: "Profile", path: "/affiliator-profile" , icon : <i class="fa-regular fa-user text-xs px-[0.2rem] sm:px-0 sm:mt-[0.15rem] mt-0"></i>},
  ];

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleModal = () => {
      if (isModalOpen) {
          setIsClosing(true);
          setTimeout(() => {
              setIsModalOpen(false);
              setIsClosing(false);
          }, 700); // Waktu untuk animasi slide-down
      } else {
          setIsModalOpen(true);
      }
  };

  return (
    <div className="sticky top-[92%] bg-gradient-to-t from-[#ffffff] my-[-2.5rem] flex items-center justify-center  sm:my-0 sm:from-transparent sm:bg-transparent sm:static pb-3 sm:p-0 sm:block">
      <div className="sticky top-[92%] z-10 flex bg-white max-w-content rounded-full p-3 mx-5 shadow-[0px_12px_40px_0px_rgba(0,0,0,0.25)] sm:static sm:my-0 sm:shadow-none sm:rounded-none sm:bg-transparent sm:space-x-1 sm:border-gray-300 sm:py-0 sm:px-12 md:px-32 xl:px-72">
        {tabs.map((tab) => (
          <NavLink
            key={tab.id}
            to={tab.path}
            onClick={handleClick}
            className={({ isActive }) =>
              `flex p-2 rounded-full mx-1 sm:mx-0 sm:py-2 sm:px-4 text-sm font-normal sm:rounded-none sm:rounded-t-lg ${disabled ? `cursor-not-allowed opacity-50` : ``} ${
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
      <div onClick={toggleModal} className="sticky top-[92%] z-10 left-60 bg-white w-14 h-14 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.1)] flex items-center justify-center sm:hidden cursor-pointer">
        <i className="fas fa-qrcode"></i>
      </div>
      
      {/* Modal */}
      {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-10 z-50">
            {/* Modal Container */}
            <div
                className={`bg-transparent rounded-lg grid grid-cols-[1fr_auto] ${
                    isClosing ? "animate-slide-down" : "animate-slide-up"
                }`}
            >   
                <div className="bg-white px-5 pb-5 pt-2 rounded-md">
                    <div className="flex justify-center">
                        <div className="text-md text-center self-center font-semibold mb-4 rounded-md w-28 border-[1px]">
                                Affiliate Page
                        </div>
                    </div>
                    <img
                        src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&size=500x500"
                        alt="QR Code"
                        className="mx-auto mb-4 w-72 h-72"
                    />
                    <div className="flex justify-between">
                        <button
                            className="bg-[#F9F9F9] text-[#504F4F] text-xs font-medium px-2 py-1 rounded-sm"
                        >
                            Download
                        </button>
                        <button
                            className="bg-[#0B8BEE] text-white text-xs font-medium px-2 py-1 rounded-sm"
                        >
                            Print
                        </button>
                    </div>
                </div>
                <button
                    className="bg-white text-black text-xl self-start ml-2 font-medium px-2 py-1 rounded-md"
                    onClick={toggleModal}
                >
                    &#x2715;
                </button>
            </div>

          </div>
      )}
    </div>
  );
}
