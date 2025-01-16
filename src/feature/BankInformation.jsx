// BES-AF-02-0-PAGE - BANK VERIFICATION
import { useState } from 'react';
import bankData from '../data/indonesianBanks.json'
import Select from 'react-select';
import Stepper from '../component/Stepper';
export default function BankInformation({onBack, onContinue}) {
    const steps = [
        { title: 'ID Verification', active: true },
        { title: 'Bank Information', active: true },
        { title: 'Done', active: false },
    ];
    
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
            <div className="block sm:flex sm:justify-between mb-14">
                <div className="text-sm sm:text-2xl font-medium flex text-hybrid">
                    Verify your Information
                </div>
                <div className="text-xs w-60 text-center mt-2 sm:mt-0 sm:w-auto sm:text-sm font-light text-hysuccess-500 bg-[#3EA31A0A] border-[1px] border-hysuccess-500 py-1 px-2 sm:py-2 sm:px-5 rounded-lg">All data is safety stored and encrypted</div>
            </div>

            <Stepper steps={steps}/>
            <form>
                <div className="px-9 sm:px-32 md:px-48">
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
                        className="py-1 px-3 font-medium text-sm sm:text-md sm:py-3 sm:px-9 mt-6 sm:font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        
                    >
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
  }
  