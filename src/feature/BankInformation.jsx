import { useState } from 'react';
import bankData from '../data/indonesianBanks.json'
import Select from 'react-select';
export default function BankInformation({onBack, onContinue}) {
    const options = bankData.map((bank) => ({
        value: bank.code,
        label: bank.name,
    }));

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: state.isDisabled ? '#F4F4F4' : 'white',
            borderColor: state.isFocused ? '#2563eb' : '#d1d5db', // Tailwind border-gray-300
            borderWidth: '1px',
            borderRadius: '0.375rem', // Tailwind rounded-md
            padding: '0.1rem', // Tailwind px-4 py-2 equivalent
            boxShadow: state.isFocused ? '0 0 0 1px #2563eb' : 'none', // Tailwind focus:ring-2 focus:ring-blue-500
            fontSize: '0.875rem', // Tailwind text-sm
            color: '#374151', // Tailwind text-gray-700
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#9CA3AF', // Tailwind text-gray-400
            fontWeight: '300', // Tailwind font-light
        }),
        menu: (provided) => ({
            ...provided,
            zIndex: 50, // Ensure dropdown appears on top
        }),
    };

    const [selectedBank, setSelectedBank] = useState(null);

    return (
        <div >
            <div className="flex justify-between mb-14">
                <div className="text-2xl font-medium flex text-[#004174]">
                    Verify your Information
                </div>
                <div className="text-sm font-light text-[#3EA31A] bg-[#3EA31A0A] border-[1px] border-[#3EA31A] py-2 px-5 rounded-lg">All data is safety stored and encrypted</div>
            </div>

            <div className="flex items-center justify-between mb-6 px-9 border-dashed border-b-2 pb-7">
                {/* Step 1 */}
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-[#3EA31A] text-white rounded-full flex items-center justify-center mb-2">1</div>
                    <span className="text-sm font-light">ID Verification</span>
                </div>
                <div className="flex-1 h-0.5 bg-[#3EA31A] mb-7"></div>
                
                {/* Step 2 */}
                <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-[#3EA31A] text-white rounded-full flex items-center justify-center mb-2">2</div>
                    <span className="text-sm font-light">Bank Information</span>
                </div>
                <div className="flex-1 h-0.5 bg-gray-300 mb-7"></div>
                
                {/* Step 3 */}
                <div className="flex flex-col items-center ml-8">
                    <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center mb-2">3</div>
                    <span className="text-sm font-light">Done</span>
                </div>
            </div>

            <form>
                <div className="px-48">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-light mb-2"
                            htmlFor="idNumber"
                        >
                            Base Currency
                        </label>
                        <div
                            className="w-full px-4 py-2 border border-[#43434333] rounded-md text-[#999999] text-sm font-light bg-[#F4F4F4] focus:outline-none cursor-not-allowed"
                        >
                            IDR
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-light mb-2" htmlFor="bankName">
                            Bank Name
                        </label>
                        <Select
                            id="bankName"
                            options={options}
                            value={selectedBank}
                            onChange={(selectedOption) => setSelectedBank(selectedOption)}
                            placeholder="Select Bank"
                            styles={customStyles}
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-light mb-2"
                            htmlFor="idNumber"
                        >
                            Back Account Number
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 text-sm font-light focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="Input your account number"
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    {/* <button
                        type="button"
                        onClick={onBack}
                        className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Back
                    </button> */}
                    <button
                        type="button"
                        onClick={onContinue}
                        className="py-3 px-9 mt-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
  }
  