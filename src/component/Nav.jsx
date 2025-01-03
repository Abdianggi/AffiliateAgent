import { useState } from "react";
import hybridIcon from "../assets/hybrid.svg";

export default function Nav(){
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
        <div className="flex justify-between pt-10 pb-6 px-52 bg-white shadow-gray-300 shadow-md mb-10">
            <div className="flex">
                <div className="block mr-12">
                    <img src={hybridIcon} alt="" />
                    <div className="text-[#0B8BEE] ml-2">Affiliator System</div>
                </div>
                <div className="flex bg-[#F8F8F8] p-3 rounded-sm">
                    <div className="bg-slate-900 pt-2 pb-1 pl-5 pr-5 text-slate-50 text-center align-middle mr-3">QR <br/> Code</div>
                    <div className="block">
                        <div className="font-normal text-sm mb-3">
                            QR Affiliate Page
                        </div>
                        <button className="bg-[#004174] text-white text-sm pt-1 pb-1 pr-2 pl-2 rounded-sm" onClick={toggleModal}>View</button>
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

                </div>
            </div>
            <div className="flex items-start cursor-pointer" onClick={toggleProfileCard}>
                <div className="block content-center pt-3">
                    <div className="text-[#004174] text-right">Putu Abdi</div>
                    <div className="flex">
                        <div className="text-xs text-[#808080] font-light mr-1">Affiliator ID :</div>
                        <div className="pl-2 pr-2 pt-[1px] pb-[2px] bg-[#004174] text-xs text-center text-white rounded-sm">AFF001</div>
                    </div>
                </div>
                <img 
                    src="https://media.licdn.com/dms/image/v2/D5603AQGaAOkGotaE3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1669815154431?e=1740009600&v=beta&t=NBiadf-Ba0OXBtE-sV8-AoDl8TFmri0w4ZsCM1GyBOE" 
                    className="w-10 h-10 rounded-full ml-3 mt-4" 
                    // alt="Profile" 
                />
            </div>
            {showProfileCard && (
                <div className="absolute top-[7rem] right-[13rem] bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] w-64 rounded-md">
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