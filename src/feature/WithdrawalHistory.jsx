import { useState } from "react";
import Button from "../component/ButtonHybrid";
import iconMagnifyingGlass from "../assets/iconMagnifyingGlass.svg";

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
                <Button type={`button`} variant={`hybrid`} className={`px-2 sm:px-9 py-[0.4rem] rounded text-xs font-extralight mt-1 flex`}>
                    <img src={iconMagnifyingGlass} alt="hybridMagnifyingGlass" width={13} height={13} className="mr-1"/>
                    OK
                </Button>
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
                                        ? "bg-hysuccess-100 text-hysuccess-500"
                                        : item.status === "Processed"
                                        ? "bg-hywarning-100 text-hywarning-500"
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