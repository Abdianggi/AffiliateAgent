import { useLocation, useNavigate } from "react-router-dom";
import Nav from "../Component/Nav";
import Tabs from "../component/Tabs";
import Badge from "../component/Badge";
import Button from "../component/ButtonHybrid";

export default function VendorProfile() {
    const location = useLocation();
    const { status, companyName, resellerId, qrText, qrColor, details } = location.state || {};

    const navigate = useNavigate();
    const toBooking = () => navigate('/booking')

    return (
        <div className="bg-[#F6F6F6] min-h-screen">
            <Nav />
            <Tabs />
            <div className="px-2 lg:px-20 xl:px-52 bg-transparent pb-20">
                <div className="bg-white px-5  lg:px-20 border-t-[0.4rem] border-[#1B8BE3] py-10 rounded-[1.5rem] shadow-md">
                    <Badge 
                        value={status == 1 ? 'Active' : 'Inactive'} 
                        padding='py-[0.1rem] px-1'
                        className="text-xs font-extralight inline"
                        bgColor={status == 1 ? 'bg-hysuccess-100' : 'bg-rose-100'}
                        textColor={status == 1 ? 'text-hysuccess-500' : 'text-rose-500'}
                    />

                    <div className="flex justify-between mt-2 mb-5">
                        <div>
                            <p className="text-xs text-hybrid">Affiliation company : </p>
                            <p className="text-sm sm:text-lg text-hybrid font-semibold">{companyName}</p>
                            <p className="text-[#00000080] text-[0.6rem] sm:text-xs">Reseller ID : {resellerId}</p>
                        </div>
                        <Button type={`button`} variant={`outline-hyprimary`} className={`px-2 sm:px-4 py-1 rounded text-sm font-extralight mt-5 flex !text-black hover:!text-white`}>
                            <i className="fas fa-qrcode mr-1"></i>
                            {qrText}
                        </Button>
                    </div>
                    
                    <div className="overflow-x-auto border-b-[1.5px] border-dashed pb-7 mb-7">
                        <table className="table table-bordered w-full text-xs sm:text-sm border border-gray-300">
                            <thead>
                                <tr className="bg-[#EEEEEE] font-semibold">
                                    <th className="p-3 border-[1.5px] border-r-0">Join Date</th>
                                    <th className="p-3 border-[1.5px] border-r-0 text-center">Min. Commision rate</th>
                                    <th className="p-3 border-[1.5px] border-r-0 text-center">Min. Selling rate</th>
                                    <th className="p-3 border-[1.5px] border-r-0 text-center">Max. Selling rate</th>
                                    <th className="p-3 border-[1.5px] border-r-0 text-center">Status </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-3 border-[1.5px] font-light text-center">12 August 2024</td>
                                    <td className="p-3 border-[1.5px] font-light text-center">
                                        20%
                                    </td>
                                    <td className="p-3 border-[1.5px] font-light text-center">20%</td>
                                    <td className="p-3 border-[1.5px] font-light text-center">30%</td>
                                    <td className="p-3 border-[1.5px] font-light text-center">
                                        <Badge 
                                            value={status == 1 ? 'Active' : 'Inactive'} 
                                            padding='py-[0.1rem] px-1'
                                            className="text-xs font-extralight inline"
                                            bgColor={status == 1 ? 'bg-hysuccess-100' : 'bg-rose-100'}
                                            textColor={status == 1 ? 'text-hysuccess-500' : 'text-rose-500'}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="border-dashed border-b-[1.5px] pb-7 mb-7">
                        <p className="text-xs sm:text-sm font-semibold mb-2">Set your Selling Price :</p>
                        <div className="sm:flex sm:items-center sm:space-x-4 bg-[#F6F6F6] px-6 py-4">
                            <div className="flex flex-col space-y-1 mt-4 sm:mt-0 w-50">
                                <label htmlFor="fromDate" className="text-xs text-black">
                                    Commision Fee
                                </label>
                                <div class="flex items-center border rounded-md overflow-hidden mb-3">
                                    <input 
                                        type="text" 
                                        class="text-sm font-extralight flex-1 px-2 py-1 border-0 focus:ring-0 focus:outline-none" 
                                        placeholder="20" 
                                    />
                                    <span class="text-xs font-extralight text-gray-400 px-2 py-1 border-l">%</span>
                                </div>

                            </div>
                            <div className="flex flex-col space-y-1 mt-4 sm:mt-0 w-50">
                                <label htmlFor="fromDate" className="text-xs text-black">
                                Minimum Selling Rate :
                                </label>
                                <div class="flex items-center border rounded-md overflow-hidden mb-3">
                                    <input 
                                        type="text" 
                                        class="text-sm font-extralight flex-1 px-2 py-1 border-0 focus:ring-0 focus:outline-none" 
                                        placeholder="20" 
                                    />
                                    <span class="text-xs font-extralight text-gray-400 px-2 py-1 border-l">%</span>
                                </div>

                            </div>
                            <div className="flex flex-col space-y-1 mt-4 sm:mt-0 w-50">
                                <label htmlFor="fromDate" className="text-xs text-black">
                                Minimum Selling Rate :
                                </label>
                                <div class="flex items-center border rounded-md overflow-hidden mb-3">
                                    <input 
                                        type="text" 
                                        class="text-sm font-extralight flex-1 px-2 py-1 border-0 focus:ring-0 focus:outline-none" 
                                        placeholder="30" 
                                    />
                                    <span class="text-xs font-extralight text-gray-400 px-2 py-1 border-l">%</span>
                                </div>

                            </div>
                            
                            <div className="flex items-end justify-end">
                                <Button text={`Save`} type={`button`} variant={`hyprimary`} className={`px-2 sm:px-4 py-[0.4rem] rounded text-xs font-extralight mt-5 flex`}/>
                            </div>
                        </div>
                        <p className="text-xs font-light">Last update : 15 August 2024</p>
                    </div>

                    <div className="mb-7">
                        <p className="text-xs sm-tex-sm text-hybrid font-semibold">About Company</p>
                        <p className="text-xl font-medium text-hybrid mb-2">{companyName}</p>
                        <table className="text-xs  w-full">
                            <tr className="font-semibold">
                                <td className="p-3 border border-r-0 bg-[#EEEEEE]">Address</td>
                                <td className="p-3 border">New Sanur Harbor, Jl. Matahari Terbit Street, Sanur Kaja, Denpasar Selatan, Bali 80227</td>
                            </tr>
                            <tr className="font-semibold">
                                <td className="p-3 border border-r-0 bg-[#EEEEEE]">No. Telp</td>
                                <td className="p-3 border">(0361) 280185</td>
                            </tr>
                            <tr className="font-semibold">
                                <td className="p-3 border border-r-0 bg-[#EEEEEE]">Contact Person</td>
                                <td className="p-3 border">I Gede Suwiarja</td>
                            </tr>
                            <tr className="font-semibold">
                                <td className="p-3 border border-r-0 bg-[#EEEEEE]">Website</td>
                                <td className="p-3 border">https://rockyfastcruise.com/</td>
                            </tr>
                            <tr className="font-semibold">
                                <td className="p-3 border border-r-0 bg-[#EEEEEE]">Booking Engine Page</td>
                                <td className="p-3 border">https://bes.hybridbooking.com/rockyfastcruise/booking/transport/?</td>
                            </tr>
                        </table>
                        <div className="flex justify-end">
                            <Button variant="hyprimary" className={`mt-3 sm:px-5 px-2 py-2 rounded-md text-xs sm:text-sm font-light sm:font-medium`} onClick={toBooking}>
                                Go to Booking Summary
                                <i class="fa-solid fa-chevron-right ml-2"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
