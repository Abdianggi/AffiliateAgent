import CardBasic from "../component/CardBasic";
import Nav from "../Component/Nav";
import Tabs from "../component/Tabs";
import { useState } from "react";
import BankInformation from "./BankInformation";
import VerificationDone from "./VerificationDone";
import { useNavigate } from "react-router-dom";
import Stepper from "../component/Stepper";

export default function VerifyInformation() {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const toDashboard = () => {
        navigate('/dashboard');
    }

    const renderStepContent = () => {
        switch(step) {
            case 1: 

                const steps = [
                    { title: 'ID Verification', active: true },
                    { title: 'Bank Information', active: false },
                    { title: 'Done', active: false },
                ];
                
                return (
                    <div>
                        <div className="block sm:flex sm:justify-between mb-14">
                            <div className="text-sm sm:text-2xl font-medium flex text-[#004174]">
                                Verify your Information
                            </div>
                            <div className="text-xs w-60 text-center mt-2 sm:mt-0 sm:w-auto sm:text-sm font-light text-[#3EA31A] bg-[#3EA31A0A] border-[1px] border-[#3EA31A] py-1 px-2 sm:py-2 sm:px-5 rounded-lg">All data is safety stored and encrypted</div>
                        </div>

                        <Stepper steps={steps} />

                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Kolom Kiri */}
                                <div>
                                    <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-light mb-2"
                                            htmlFor="documentType"
                                        >
                                            Document Type
                                        </label>
                                        <select
                                            id="documentType"
                                            className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md text-gray-700 text-sm font-light focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        >
                                            <option value="">Select a document type</option>
                                            <option value="passport">Nationality ID</option>
                                            <option value="id-card">Passport</option>
                                        </select>
                                        </div>

                                        <div className="mb-4">
                                        <label
                                            className="block text-gray-700 text-sm font-light mb-2"
                                            htmlFor="idNumber"
                                        >
                                            ID Number
                                        </label>
                                        <input
                                            type="text"
                                            id="idNumber"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 text-sm font-light focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                            placeholder="Input ID Number"
                                        />
                                    </div>
                                </div>
                                {/* Kolom Kanan */}
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="block text-gray-700 text-xs sm:text-sm font-normal mb-2">
                                            Take a Photo of your ID Card
                                        </label>
                                        <div className="">
                                            {/* Input file disembunyikan */}
                                            <input id="fileInput" type="file" className="hidden" />
                                            
                                            {/* Label digunakan sebagai tombol */}
                                            <label 
                                                htmlFor="fileInput" 
                                                className="bg-[#0B8BEE] text-[#FFFFFF] px-2 py-1 text-xs font-light rounded cursor-pointer hover:bg-[#096fc9]"
                                            >
                                                Choose File
                                            </label>
                                        </div>
                                    </div>
                                    <div className="border-dashed border-2 border-[#0B8BEE] bg-[#0B8BEE0A] rounded-md px-5 py-12 flex flex-col items-center justify-center">
                                        <p className="text-sm font-normal">Upload your Document</p>
                                        <p className="text-gray-500 text-xs font-light mb-2">Drop file here or Upload</p>
                                        <button
                                            type="button"
                                            className="text-blue-500 text-sm font-semibold"
                                        >
                                            <div className="bg-[#0B8BEE1A] text-[#0B8BEE] text-2xl px-3 py-2 rounded-md">
                                                <i class="fa-regular fa-credit-card"></i>
                                            </div>
                                        </button>
                                        <p className="text-[#0B8BEE] text-xs font-light mt-2">JPG | PNG | PDF</p>
                                        </div>
                                </div>
                            </div>
                            

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="py-1 px-3 font-medium text-sm sm:text-md sm:py-3 sm:px-9 mt-6 sm:font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    
                                >
                                    Verification
                                </button>
                            </div>
                        </form>
                    </div>
                );
            case 2:
                return <BankInformation onBack={() => setStep(1)} onContinue={() => setStep(3)}/>;
            case 3:
                return <VerificationDone onBack={() => setStep(2)} onContinue={toDashboard}/>;
            default:
                return null;
        }
    }

    return (
        <div className="bg-[#F6F6F6] min-h-screen">
            <Nav />
            <Tabs disabled/>
            <div className="px-2 lg:px-20 xl:px-52 bg-transparent pb-20">
                <div className="bg-[#E8F3FC] px-4 sm:px-10 md:px-20 border-t-[0.4rem] border-[#1B8BE3] pt-10 pb-20 rounded-t-[1.5rem] shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="text-lg font-semibold mb-4 flex items-center text-[#00000065]">Affiliate Overview</div>
                    <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row sm:space-x-2 gap-2">
                        <CardBasic color="#004174" title="All Booking" subtitle="-" value="0" disabled/>
                        <CardBasic color="#0B8BEE" title="All Transaction" subtitle="-" value="IDR 0" disabled/>
                    </div>
                </div>
                <div className="bg-[#FFFFFF] px-5 lg:px-20 py-10 rounded-[1.5rem] shadow-md mt-[-1.5rem]">
                    {renderStepContent()}
                </div>
            </div>
        </div>
    );
  }
  