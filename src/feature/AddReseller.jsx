import Nav from "../Component/Nav";
import Tabs from "../component/Tabs";

// Table Component
function ResellerTable({ data }) {
    return (
        <table className="w-full border-collapse border border-[#cccccc]">
            <thead className="text-xs font-light bg-[#D9EDF7]">
                <tr>
                    <th className="border border-[#cccccc] px-4 py-2">The Offer Name</th>
                    <th className="border border-[#cccccc] px-4 py-2">Website</th>
                    <th className="border border-[#cccccc] px-4 py-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td className="px-4 py-2 text-sm font-semibold flex gap-2 items-center">
                            <img src={item.image} alt="" className="p-3 border-2 h-14" />
                            <div className="flex flex-col">
                                <span>{item.name}</span>
                                <span className="self-start px-2 py-1 bg-[#0B8BEE1A] text-[#0B8BEE] rounded-md text-xs font-light">
                                    {item.trips} Trip total
                                </span>
                            </div>
                        </td>
                        <td className="border border-[#cccccc] p-0 text-xs">
                            {item.websites.map((website, idx) => (
                                <div
                                    key={idx}
                                    className={`px-4 py-2 flex justify-between items-center ${
                                        idx < item.websites.length - 1 ? "border-b border-[#cccccc]" : ""
                                    }`}
                                >
                                    {website}
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7.58331 6.41615L12.3666 1.63281"
                                            stroke="#292D32"
                                            strokeWidth="1.10526"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12.8333 3.96797V1.16797H10.0333"
                                            stroke="#292D32"
                                            strokeWidth="1.10526"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M6.41669 1.16797H5.25002C2.33335 1.16797 1.16669 2.33464 1.16669 5.2513V8.7513C1.16669 11.668 2.33335 12.8346 5.25002 12.8346H8.75002C11.6667 12.8346 12.8334 11.668 12.8334 8.7513V7.58464"
                                            stroke="#292D32"
                                            strokeWidth="1.10526"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                            ))}
                        </td>
                        <td className="border border-[#cccccc] text-center">
                            <button
                                className="bg-[#449D44] text-white text-sm font-light p-2 rounded-md"
                                href="/add-reseller"
                                data-discover="true"
                            >
                                Request
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default function AddReseller() {
    // Example data
    const resellerData = [
        {
            name: "Rocky Fast Cruise",
            image: "/vite.svg",
            trips: 4,
            websites: ["https://rockyfastboat.com", "https://bes.hybridbooking.com/rockyfastcruise"],
        },
        // Tambahkan data reseller lainnya jika diperlukan
    ];

    return (
        <div className="bg-[#F6F6F6] min-h-screen">
            <Nav />
            <Tabs />
            <div className="px-2 lg:px-20 xl:px-52 bg-transparent pb-20">
                <div className="bg-white px-5  lg:px-20 border-t-[0.4rem] border-[#1B8BE3] py-10 rounded-[1.5rem] shadow-md">
                    <div className="text-2xl font-medium flex mb-5">
                        <div className="w-1 h-8 mr-2 bg-[#1B8BE3] rounded-r-full"></div>
                        Reseller Browser
                    </div>
                    <div className="bg-[#F6F6F6] p-3 flex items-center rounded-sm mb-5">
                        Search :
                        <input
                            type="text"
                            className="h-12 rounded-md border-[1px] border-[#CCCCCC] ml-3 mr-4 p-3 font-extralight focus:border-[#1B8BE3] focus:border-2 focus:outline-none"
                            placeholder="RCF00918"
                        />
                        <button className="bg-[#004174] h-12 text-white text-sm font-light px-5 rounded-md">
                            <i className="fa-solid fa-magnifying-glass mr-1"></i>Search
                        </button>
                    </div>
                    <ResellerTable data={resellerData} />
                </div>
            </div>
        </div>
    );
}
