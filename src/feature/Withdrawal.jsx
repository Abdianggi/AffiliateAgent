// BES-AF-03-6-PAGE
import { useState } from "react";
import Nav from "../Component/Nav";
import Tabs from "../component/Tabs";
import Table from "../component/Table";
import WithdrawalHistory from "./WithdrawalHistory";
import iconMagnifyingGlass from "../assets/iconMagnifyingGlass.svg"
import Button from "../component/ButtonHybrid";

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
                        <p className="text-xs sm:text-sm mb-3 sm:mb-0">The withdrawal amount will be effective in your bank account maximum 2 business days after submitted.</p>
                        
                        <div className="sm:flex sm:items-center sm:space-x-4 mb-6 sm:mb-0 bg-[#F6F6F6] px-6 py-4">
                            <div className="flex flex-col space-y-1 mt-4 sm:inline-block sm:mt-0">
                                <label htmlFor="fromDate" className="text-xs text-black mr-3 font-medium">
                                    Booking date from :
                                </label>
                                <input
                                    type="date"
                                    id="fromDate"
                                    className="border border-gray-300 rounded px-2 py-1 text-sm font-extralight"
                                />
                            </div>
                            <div className="flex flex-col space-y-1 sm:inline-block mt-4 sm:mt-0">
                                <label htmlFor="toDate" className="text-xs text-black mr-3 font-medium">
                                    To :
                                </label>
                                <input
                                    type="date"
                                    id="toDate"
                                    className="border border-gray-300 rounded px-2 py-1 text-sm font-extralight"
                                />
                            </div>
                            <div className="flex items-end justify-end">
                                <Button type={`button`} variant={`hybrid`} className={`px-2 sm:px-9 py-[0.4rem] rounded text-xs font-extralight mt-1 flex`}>
                                    <img src={iconMagnifyingGlass} alt="hybridMagnifyingGlass" width={13} height={13} className="mr-1"/>
                                    OK
                                </Button>
                            </div>
                        </div>

                        <div className="overflow-x-auto mb-9">
                            <table className="table table-bordered w-full text-xs sm:text-sm border border-gray-300">
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

                        </div>

                        <div className="text-xs sm:text-base">
                            <div className="p-3 bg-[#F6F6F6] text-[#a2a2a2]">
                                BANK ACCOUNT
                            </div>
                            <div className="p-3 font-semibold border-b border-[#F6F6F6]">Bank Negara Indonesia (BNI)</div>
                        </div>
                        <table className="w-full border-collapse text-xs sm:text-base">
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
           <div className="px-2 lg:px-20 xl:px-52 bg-transparent pb-20">
                <div className="bg-white px-5  lg:px-20 border-t-[0.4rem] border-[#1B8BE3] py-10 rounded-[1.5rem] shadow-md">
                    <div className="sm:flex sm:justify-between mb-5 sm:mb-0">
                        <div>
                            <div className="text-xl sm:text-2xl font-medium flex mb-2">
                                <div className="w-1 h-6 sm:h-8 mr-2 bg-[#1B8BE3] rounded-r-full"></div>
                                Rocky Fast Cruise
                            </div>
                            <div className="text-sm font-light px-2 py-1 inline-block rounded-sm text-[#0B8BEE] bg-[#0B8BEE1A] mb-8">Withdrawal</div>
                        </div>
                        <div className="flex justify-end sm:block">
                            <select name="" id="" className="bg-[#E6E6E6] px-2 py-1 text-xs sm:text-sm sm:px-5 sm:py-2 rounded-lg cursor-pointer mr-3">
                                <option value="">Other Affiliates</option>
                            </select>
                            <select name="" id="" className="bg-hybrid text-white px-2 py-1 text-xs sm:text-sm sm:px-5 sm:py-2 rounded-lg cursor-pointer" value={select} onChange={handleSelectChange}>
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