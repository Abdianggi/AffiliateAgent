import { useState } from "react";

export default function WithdrawalHistory(){
    const data = [
        { id: 1, date: "19-Nov-2024", amount: 1500000, fee: 450000, status: "Settled", code: "ST-AF34728" },
        { id: 2, date: "17-Nov-2024", amount: 4750700, fee: 1425000, status: "Settled", code: "ST-AF34347" },
        { id: 3, date: "11-Nov-2024", amount: 3200000, fee: 960000, status: "Settled", code: "ST-AF34721" },
        { id: 4, date: "09-Nov-2024", amount: 3200000, fee: 960000, status: "Processed", code: "ST-AF34948" },
        { id: 5, date: "04-Nov-2024", amount: 4750700, fee: 1425000, status: "Settled", code: "ST-AF34347" },
        { id: 6, date: "02-Nov-2024", amount: 3200000, fee: 960000, status: "Settled", code: "ST-AF34721" },
        { id: 7, date: "01-Nov-2024", amount: 3200000, fee: 960000, status: "Processed", code: "ST-AF34948" },
    ];
      

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
                <button className="bg-[#004174] text-white px-2 sm:px-9 py-[0.4rem] rounded text-xs font-extralight mt-1 flex">
                    <svg
                        width="13"
                        height="13"
                        className="sm:mt-[0.1rem] mr-1"
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

        <div className="overflow-x-auto">
            <table className="table table-bordered w-full text-xs sm:text-sm mb-9 border border-gray-300">
                <thead>
                    <tr className="bg-[#EEEEEE] font-semibold">
                        <th className="p-3 border-[1.5px] border-r-0">Date</th>
                        <th className="p-3 border-[1.5px] border-r-0 text-center">Code #</th>
                        <th className="p-3 border-[1.5px] border-r-0 text-center" colSpan={2}>
                            Amount
                        </th>
                        <th className="p-3 border-[1.5px] border-r-0">Commission Fee</th>
                        <th className="p-3 border-[1.5px] border-r-0">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="p-3 border-[1.5px] bg-[#0B8BEE1A] font-light text-center">{item.date}</td>
                            <td className="p-3 border-[1.5px] bg-[#0B8BEE1A] font-light text-center">
                                <p className="text-[#1C77BF] font-medium">{item.code}</p>
                            </td>
                            <td className="p-3 border-[1.5px] bg-[#0B8BEE1A] font-light text-center">IDR</td>
                            <td className="p-3 border-[1.5px] bg-[#0B8BEE1A] font-light text-center">{item.amount.toLocaleString()}</td>
                            <td className="p-3 border-[1.5px] bg-[#0B8BEE1A] font-light text-center">{item.fee.toLocaleString()}</td>
                            <td className="p-3 border-[1.5px] font-light text-center">
                                <span
                                    className={`py-1 px-5 rounded-full ${
                                        item.status === "Settled"
                                        ? "bg-[#3EA31A1A] text-[#3EA31A]"
                                        : item.status === "Processed"
                                        ? "bg-[#FF99001A] text-[#FF9900]"
                                        : "bg-[#A31A1A1A] text-[#A31A1A]"
                                    }`}
                                >
                                {item.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr><td className="p-4" colSpan={6}></td></tr>
                    <tr>
                        <td className="p-3 border-[1.5px] font-medium text-right" colSpan={4}>
                            TOTAL (IDR)
                        </td>
                        <td className="p-3 border-[1.5px] font-semibold text-center" colSpan={2}>{totalFee.toLocaleString()}</td>
                    </tr>
                </tfoot>
            </table>
        </div>           
    </div>
    );
}