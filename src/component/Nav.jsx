import { useState } from "react";
import hybridIcon from "../assets/hybrid.svg";
import { useMediaQuery } from "react-responsive";

export default function Nav() {
    const isMinMd = useMediaQuery({ query: "(min-width: 768px)" });
    const [showProfileCard, setShowProfileCard] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const toggleProfileCard = () => {
        setShowProfileCard(!showProfileCard);
    };

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
        <div className="flex flex-wrap justify-between items-center py-6 px-4 lg:px-20 xl:px-52 md:pb-6 md:pt-10 bg-white shadow-gray-300 shadow-md mb-10">
            {!isMinMd ? (
                <>
                    <div className="items-center text-xs sm:text-md mb-4 sm:mb-0">
                        <img src={hybridIcon} alt="Hybrid Icon" className="mr-[-1.5rem] sm:mr-3 w-2/3 sm:w-full" />
                        <p className="text-[#0B8BEE] ml-1 sm:ml-2">Affiliator System</p>
                    </div>

                    <div className="sm:flex items-center bg-[#F8F8F8] p-3 rounded-sm mb-4 sm:mb-0 hidden">
                        <div className="bg-slate-900 pt-2 pb-1 pl-5 pr-5 text-slate-50 text-center align-middle mr-3 hidden md:block">QR <br/> Code</div>
                        <div>
                            <div className="text-xs sm:text-sm mb-2">QR Affiliate Page</div>
                            <button
                                className="bg-[#004174] text-white text-xs px-1 sm:px-3 py-1 rounded-sm"
                                onClick={toggleModal}
                            >
                                View
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex">
                    <div className="items-center mb-4 sm:mb-0 lg:mr-12">
                        <img src={hybridIcon} alt="Hybrid Icon" className="mr-3" />
                        <div className="text-[#0B8BEE] ml-2">Affiliator System</div>
                    </div>

                    <div className="flex items-center bg-[#F8F8F8] p-3 rounded-sm mb-4 sm:mb-0">
                        <div className="bg-slate-900 pt-2 pb-1 pl-5 pr-5 text-slate-50 text-center align-middle mr-3 hidden md:block">QR <br/> Code</div>
                        <div>
                            <div className="text-sm mb-2">QR Affiliate Page</div>
                            <button
                                className="bg-[#004174] text-white text-xs px-3 py-1 rounded-sm"
                                onClick={toggleModal}
                            >
                                View
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Profile Section */}
            <div className="flex items-start cursor-pointer mb-8" onClick={toggleProfileCard}>
                <div className="block content-center pt-3">
                    <div className="text-[#004174] text-right text-xs sm:text-sm">Putu Abdi</div>
                    <div className="flex">
                        <div className="text-xs text-[#808080] font-light mr-1">Affiliator ID :</div>
                        <div className="px-1 pt-[1px] pb-[2px] bg-[#004174] text-[0.5rem] sm:text-xs text-center text-white rounded-sm">AFF001</div>
                    </div>
                </div>
                <img 
                    src="https://media.licdn.com/dms/image/v2/D5603AQGaAOkGotaE3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1669815154431?e=1740009600&v=beta&t=NBiadf-Ba0OXBtE-sV8-AoDl8TFmri0w4ZsCM1GyBOE" 
                    className="w-10 h-10 rounded-full ml-1 mt-2 sm:ml-3 sm:mt-4" 
                    // alt="Profile" 
                />
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

            {/* Profile Card */}
            {showProfileCard && (
                <div className="absolute top-[6rem] md:top-28 right-3 sm:right-[13rem] bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] w-64 rounded-md z-10">
                    {/* Bagian Header */}
                    <div className="border-b py-2 px-3 rounded-t-md flex justify-between">
                        <div className="text-sm font-normal">Account</div>
                        <div className="font-medium cursor-pointer" onClick={toggleProfileCard}>&#x2715;</div>
                    </div>
                    
                    {/* Bagian Konten */}
                    <div className="py-4 px-3">
                        <div className="flex">
                            <img 
                                src="https://media.licdn.com/dms/image/v2/D5603AQGaAOkGotaE3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1669815154431?e=1740009600&v=beta&t=NBiadf-Ba0OXBtE-sV8-AoDl8TFmri0w4ZsCM1GyBOE" 
                                className="w-14 h-14    rounded-full mr-3" 
                                // alt="Profile" 
                            />
                            <div className="mt-3">
                                <div className="text-sm font-bold">Putu Abdi</div>
                                <div className="text-xs text-[#999999] mb-4 font-light">abdi@hybridbooking.com</div>
                            </div>
                        </div>
                        <div className="flex justify-center mt-2">
                            <button
                                className="bg-[#F123231A] text-[#F12323] text-xs font-medium px-2 py-1 rounded-sm"
                                onClick={() => alert("Logging out...")}
                            >
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
