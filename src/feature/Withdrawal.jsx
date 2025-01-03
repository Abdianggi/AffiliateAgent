// BES-AF-03-6-PAGE

import { useState } from "react";
import Nav from "../Component/Nav";
import Tabs from "../component/Tabs";
import Table from "../component/Table";
import WithdrawalHistory from "./WithdrawalHistory";

export default function Withdrawal(){
    const bankHeaders = [
        { label: "Booking Date", key: "booking_date", align: "text-center" },
        { label: "Order #", key: "order", align: "text-start" },
        { label: "Amount", key: "amount", align: "text-start" },
        { label: "Commision Fee", key: "comission_fee", align: "text-center" },
    ];

    const bankData = [
        [
            { content: "Name"},
            { content: "Sinta Valela"},
            { content: "Sinta Valela"},
            { content: "Sinta Valela"},
        ],
    ];

    const [select, setSelect] = useState(1);

    const handleSelectChange = (event) => {
        setSelect(Number(event.target.value));
    };

    const [checkAll, setCheckAll] = useState(false);
    const [checkboxState, setCheckboxState] = useState({});

    const renderSelectContent = () => {
        switch (select) {
            case 1:
                const data = [
                    { id: 1, bookingDate: "27-Sep-2024", amount: 400000, fee: 120000, order: "IDR 472.000", name: "Alexandra alex" },
                    { id: 2, bookingDate: "28-Sep-2024", amount: 300000, fee: 100000, order: "IDR 372.000", name: "John Doe" },
                ];
            
                const handleCheckAll = (e) => {
                    const isChecked = e.target.checked;
                    setCheckAll(isChecked);
            
                    // Update all checkboxes
                    const newState = {};
                    data.forEach((item) => {
                        newState[item.id] = isChecked;
                    });
                    setCheckboxState(newState);
                };
            
                const handleCheckboxChange = (id) => {
                    const newState = { ...checkboxState, [id]: !checkboxState[id] };
                    setCheckboxState(newState);
            
                    // If any checkbox is unchecked, uncheck the "check all"
                    const allChecked = Object.values(newState).every((value) => value);
                    setCheckAll(allChecked);
                };
            
                // Menghitung total berdasarkan checkbox yang dicentang
                const calculateTotal = () => {
                    let totalAmount = 0;
                    let totalFee = 0;
            
                    data.forEach((item) => {
                        // if (checkboxState[item.id]) {
                            totalAmount += item.amount;
                            totalFee += item.fee;
                        // }
                    });
            
                    return { totalAmount, totalFee };
                };
            
                const { totalAmount, totalFee } = calculateTotal();
                return (
                    <div>
                        <p className="text-sm mb-3">The withdrawal amount will be effective in your bank account maximum 2 business days after submitted.</p>
                        <div className="flex items-center space-x-4 bg-[#F6F6F6] px-6 py-4">
                            <div>
                                <label htmlFor="fromDate" className="text-xs text-black mr-3 text-center align-middle font-medium">
                                    Booking date from :
                                </label>
                                <input
                                    type="date"
                                    id="fromDate"
                                    className="border border-gray-300 rounded px-2 py-1 text-sm font-extralight"
                                />
                            </div>
                            <div>
                                <label htmlFor="toDate" className="text-xs text-black mr-3 font-medium">
                                    To :
                                </label>
                                <input
                                    type="date"
                                    id="toDate"
                                    className="border border-gray-300 rounded px-2 py-1 text-sm font-extralight"
                                />
                            </div>
                            <div className="flex items-end">
                                <button className="bg-[#004174] text-white px-5 py-[0.4rem] rounded text-xs font-extralight flex">
                                    <svg
                                        width="13"
                                        height="13"
                                        className="mt-[0.1rem] mr-1"
                                        viewBox="0 0 13 13"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.4996 11.5L10.4996 10.5M6.2496 11C6.87338 11 7.49105 10.8771 8.06735 10.6384C8.64365 10.3997 9.16728 10.0498 9.60836 9.60876C10.0494 9.16768 10.3993 8.64404 10.638 8.06775C10.8767 7.49145 10.9996 6.87378 10.9996 6.25C10.9996 5.62622 10.8767 5.00855 10.638 4.43225C10.3993 3.85596 10.0494 3.33232 9.60836 2.89124C9.16728 2.45016 8.64365 2.10028 8.06735 1.86157C7.49105 1.62286 6.87338 1.5 6.2496 1.5C4.98983 1.5 3.78164 2.00044 2.89085 2.89124C2.00005 3.78204 1.4996 4.99022 1.4996 6.25C1.4996 7.50978 2.00005 8.71796 2.89085 9.60876C3.78164 10.4996 4.98983 11 6.2496 11Z"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    OK
                                </button>
                            </div>
                        </div>
                        <table className="table table-bordered w-full text-sm mb-9 border border-gray-300">
                            <thead>
                                <tr className="bg-[#EEEEEE] font-semibold">
                                    <th className="p-3 border-[1.5px] border-r-0">
                                        <input type="checkbox" checked={checkAll} onChange={handleCheckAll} />
                                    </th>
                                    <th className="p-3 border-[1.5px] border-r-0">Booking Date</th>
                                    <th className="p-3 border-[1.5px] border-r-0 text-start">Order #</th>
                                    <th className="p-3 border-[1.5px] border-r-0 text-center" colSpan={2}>
                                        Amount
                                    </th>
                                    <th className="p-3 border-[1.5px] border-r-0">Commission Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item) => (
                                    <tr key={item.id}>
                                        <td className="p-3 border-[1.5px] font-light text-center">
                                            <input
                                                type="checkbox"
                                                checked={checkboxState[item.id] || false}
                                                onChange={() => handleCheckboxChange(item.id)}
                                            />
                                        </td>
                                        <td className="p-3 border-[1.5px] font-light">{item.bookingDate}</td>
                                        <td className="p-3 border-[1.5px] font-light text-center">
                                            <p className="text-[#1C77BF] font-medium">{item.order}</p>
                                            {item.name}
                                        </td>
                                        <td className="p-3 border-[1.5px] font-light text-center">IDR</td>
                                        <td className="p-3 border-[1.5px] font-light text-center">{item.amount.toLocaleString()}</td>
                                        <td className="p-3 border-[1.5px] font-light text-center">{item.fee.toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr><td className="p-4" colSpan={6}></td></tr>
                                <tr>
                                    <td className="p-3 border-[1.5px] font-medium text-right" colSpan={4}>
                                        TOTAL (IDR)
                                    </td>
                                    <td className="p-3 border-[1.5px] font-semibold text-center">{totalAmount.toLocaleString()}</td>
                                    <td className="p-3 border-[1.5px] font-semibold text-center">{totalFee.toLocaleString()}</td>
                                </tr>
                            </tfoot>
                        </table>

                        <div>
                            <div className="p-3 bg-[#F6F6F6] text-[#a2a2a2]">
                                BANK ACCOUNT
                            </div>
                            <div className="p-3 font-semibold border-b border-[#F6F6F6]">Bank Negara Indonesia (BNI)</div>
                        </div>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-3 bg-[#F6F6F6] text-left text-[#a2a2a2] font-medium" colSpan={2}>
                                        BANK ACCOUNT
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3 font-semibold border-b border-[#F6F6F6]" colSpan={2}>
                                        Bank Negara Indonesia (BNI)
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-light border-b border-[#F6F6F6] w-44">
                                        Name On Account
                                    </td>
                                    <td className="p-3 font-light border-b border-[#F6F6F6] text-left">
                                        Putu Abdi Anggi
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-light border-b border-[#F6F6F6] w-44">
                                        Account Number
                                    </td>
                                    <td className="p-3 font-light border-b border-[#F6F6F6] text-left">
                                        177444419999
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-light border-b border-[#F6F6F6] w-44">
                                        Branch
                                    </td>
                                    <td className="p-3 font-light border-b border-[#F6F6F6] text-left">
                                        Denpasar
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        {/* <Table
                            title={false}
                            isStatic={false}
                            headers={bankHeaders}
                            data={bankData}
                            onRemoveClick={(row) => console.log("Remove bank account clicked for:", row)}
                        />  */}
                    </div>
                );
            case 2:
                return (
                    <WithdrawalHistory />
                );
            default:
                false;
        }
    }
    return (
        <div className="bg-[#F6F6F6] min-h-screen">
           <Nav />
           <Tabs />
           <div className="px-52 bg-transparent pb-20">
                <div className="bg-white px-20 border-t-[0.4rem] border-[#1B8BE3] py-10 rounded-[1.5rem] shadow-md">
                    <div className="flex justify-between">
                        <div>
                            <div className="text-2xl font-medium flex mb-2">
                                <div className="w-1 h-8 mr-2 bg-[#1B8BE3] rounded-r-full"></div>
                                Rocky Fast Cruise
                            </div>
                            <div className="text-sm font-light px-2 py-1 inline-block rounded-sm text-[#0B8BEE] bg-[#0B8BEE1A] mb-8">Withdrawal</div>
                        </div>
                        <div>
                            <select name="" id="" className="bg-[#E6E6E6] px-5 py-2 rounded-lg cursor-pointer mr-3 font-sm">
                                <option value="">Other Affiliates</option>
                            </select>
                            <select name="" id="" className="bg-[#004174] text-white px-5 py-2 rounded-lg cursor-pointer font-sm" value={select} onChange={handleSelectChange}>
                                <option value={1}>Withdrawal</option>
                                <option value={2}>History</option>
                            </select>
                        </div>
                    </div>
                    {renderSelectContent()}
                </div>
            </div>
        </div>
    );
}