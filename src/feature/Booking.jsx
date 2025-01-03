import Nav from "../Component/Nav";
import Tabs from "../component/Tabs";
import { useState } from "react";

export default function Booking() {
    const bookings = [
        { id: "#81792873789", date: "Dec 25, 2024", time: "11:23", name: "Danang", amount: "IDR 472.000", fee: "IDR 42.700" },
        { id: "#81792873789", date: "Dec 25, 2024", time: "11:23", name: "Abdi Negara", amount: "IDR 472.000", fee: "IDR 42.700" },
        { id: "#81792873789", date: "Dec 25, 2024", time: "11:23", name: "Didy Juan", amount: "IDR 472.000", fee: "IDR 42.700" },
        { id: "#81792873789", date: "Dec 25, 2024", time: "11:23", name: "Neo Nikita Larasati", amount: "IDR 472.000", fee: "IDR 42.700" },
        { id: "#81792873789", date: "Dec 25, 2024", time: "11:23", name: "Imam Buzzlightyear", amount: "IDR 472.000", fee: "IDR 42.700" },
        { id: "#81792873789", date: "Dec 25, 2024", time: "11:23", name: "Aliya Min Ta Duit", amount: "IDR 472.000", fee: "IDR 42.700" },
        { id: "#81792873789", date: "Dec 25, 2024", time: "11:23", name: "Danang", amount: "IDR 472.000", fee: "IDR 42.700" },
        { id: "#81792873789", date: "Dec 25, 2024", time: "11:23", name: "Abdi Negara", amount: "IDR 472.000", fee: "IDR 42.700" },
        { id: "#81792873789", date: "Dec 25, 2024", time: "11:23", name: "Didy Juan", amount: "IDR 472.000", fee: "IDR 42.700" },
        { id: "#81792873789", date: "Dec 25, 2024", time: "11:23", name: "Neo Nikita Larasati", amount: "IDR 472.000", fee: "IDR 42.700" },
        { id: "#81792873789", date: "Dec 25, 2024", time: "11:23", name: "Imam Buzzlightyear", amount: "IDR 472.000", fee: "IDR 42.700" },
        { id: "#81792873789", date: "Dec 25, 2024", time: "11:23", name: "Aliya Min Ta Duit", amount: "IDR 472.000", fee: "IDR 42.700" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const totalPages = Math.ceil(bookings.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentBookings = bookings.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="bg-[#F6F6F6] min-h-screen">
            <Nav />
            <Tabs />
            <div className="px-52 bg-transparent pb-20">
                <div className="bg-white px-20 border-t-[0.4rem] border-[#1B8BE3] py-10 rounded-[1.5rem] shadow-md">
                    <div className="text-2xl font-medium flex mb-2">
                        <div className="w-1 h-8 mr-2 bg-[#1B8BE3] rounded-r-full"></div>
                        Booking Summary
                    </div>
                    <div className="text-sm font-light px-2 py-1 inline-block rounded-sm text-[#0B8BEE] bg-[#0B8BEE1A] mb-8">Rocky Fast Cruise</div>

                    <div className="flex items-center space-x-4 mb-6 bg-[#F6F6F6] px-6 py-4">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="fromDate" className="text-xs text-black">
                                From
                            </label>
                            <input
                                type="date"
                                id="fromDate"
                                className="border border-gray-300 rounded px-2 py-1 text-sm font-extralight"
                            />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="toDate" className="text-xs text-black">
                                To
                            </label>
                            <input
                                type="date"
                                id="toDate"
                                className="border border-gray-300 rounded px-2 py-1 text-sm font-extralight"
                            />
                        </div>
                        <div className="flex flex-col flex-grow space-y-1">
                            <label htmlFor="searchInput" className="text-xs text-black">
                                Search
                            </label>
                            <input
                                type="text"
                                id="searchInput"
                                placeholder="Search Order ID / Customer Name"
                                className="w-full border border-gray-300 rounded px-2 py-1 text-sm font-extralight"
                            />
                        </div>
                        <div className="flex items-end">
                            <button className="bg-[#004174] text-white px-9 py-[0.4rem] rounded text-xs font-extralight mt-5 flex">
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
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="flex space-x-3">
                        {/* Sidebar Section */}
                        <div className="">
                            {/* Status Section */}
                            <div className="mb-4">
                                <label htmlFor="status" className="block mb-2 text-sm text-[#004174]">
                                    Status:
                                </label>
                                <select
                                    id="status"
                                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                                >
                                    <option value="settled">Settled</option>
                                    <option value="refund">Refund/Chargeback</option>
                                </select>
                            </div>
                        </div>

                        {/* Table Section */}
                        <div className="w-full">
                            <div className="bg-white rounded-sm shadow overflow-hidden">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-[#0000001A] border-b text-xs text-black">
                                        <tr>
                                            <th className="px-4 py-3"></th>
                                            <th className="px-4 py-3">Order #</th>
                                            <th className="px-4 py-3">Booking Date</th>
                                            <th className="px-4 py-3">Customer Name</th>
                                            <th className="px-4 py-3">Amount</th>
                                            <th className="px-4 py-3">Fee</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-xs">
                                        {currentBookings.map((booking, index) => (
                                            <tr key={index} className="border-b">
                                                <td className="px-4 py-3">{index+1}</td>
                                                <td className="px-4 py-3 text-gray-600">{booking.id}</td>
                                                <td className="px-4 py-3 text-gray-600">
                                                    {booking.date} <br />
                                                    <span className="text-xs text-gray-400">{booking.time}</span>
                                                </td>
                                                <td className="px-4 py-3 text-gray-600">{booking.name}</td>
                                                <td className="px-4 py-3 text-gray-600">{booking.amount}</td>
                                                <td className="px-4 py-3 text-gray-600">{booking.fee}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot className="bg-[#0000001A] border-t">
                                        <tr>
                                            <td colSpan="4" className="px-4 py-3 text-sm font-semibold">
                                                Subtotal
                                            </td>
                                            <td className="px-4 py-3 text-sm font-semibold">IDR 10.472.000</td>
                                            <td className="px-4 py-3 text-sm font-semibold">IDR 4.420.700</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="flex justify-end mt-4 text-xs">
                                <button
                                    onClick={() => paginate(1)}
                                    disabled={currentPage === 1}
                                    className={`px-3 py-1 border ${currentPage === 1 ? "bg-[#1B8BE3] text-white" : "bg-white text-[#1B8BE3]"} rounded`}
                                >
                                    1
                                </button>
                                {[...Array(totalPages).keys()].slice(1, 3).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => paginate(page + 1)}
                                        className={`px-3 py-1 border ${currentPage === page + 1 ? "bg-[#1B8BE3] text-white" : "bg-white text-[#1B8BE3]"} rounded`}
                                    >
                                        {page + 1}
                                    </button>
                                ))}
                                <button
                                    onClick={() => paginate(totalPages)}
                                    disabled={currentPage === totalPages}
                                    className={`px-3 py-1 border ${currentPage === totalPages ? "bg-[#1B8BE3] text-white" : "bg-white text-[#1B8BE3]"} rounded`}
                                >
                                    Last
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
