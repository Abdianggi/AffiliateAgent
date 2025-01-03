// BES-AF-03-0-PAGE
import CardAffiliate from "../component/CardAffiliate";
import CardBasic from "../component/CardBasic";
import { Link } from 'react-router-dom';
import Nav from "../Component/Nav";
import Tabs from "../component/Tabs";

export default function Dashboard() {
    return (
        <div className="bg-[#F6F6F6] min-h-screen">
            <Nav />
            <Tabs />
            <div className="px-52 bg-transparent pb-20">
                <div className="bg-[#E8F3FC] px-20 border-t-[0.4rem] border-[#1B8BE3] pt-10 pb-20 rounded-t-[1.5rem] shadow-md grid grid-cols-3 gap-2">
                    <div className="text-lg font-semibold mb-4 flex items-center">Affiliate Overview</div>
                    <div className="col-span-2 flex space-x-2">
                        <CardBasic color="#004174" title="All Booking" subtitle="1 Sep 2024 - 27 Sep 2024" value="55"/>
                        <CardBasic color="#0B8BEE" title="All Transaction" subtitle="1 Sep 2024 - 27 Sep 2024" value="IDR 7.750.000"/>
                    </div>
                </div>
                <div className="bg-[#FFFFFF] px-20 py-10 rounded-[1.5rem] shadow-md mt-[-1.5rem]">
                    <div className="flex justify-between mb-8">
                        <div className="text-lg font-semibold">Affiliate : </div>
                        <Link
                            to="/add-reseller"
                            className="bg-[#449D44] text-white text-sm font-light py-1 px-2 rounded-md"
                        >
                            + Add Reseller
                        </Link>
                    </div>
                    <CardAffiliate
                        status="Active"
                        statusColor="#3EA31A"
                        companyName="Rocky Fast Cruise"
                        resellerId="AFLSV001001RCF"
                        qrText="QR Reseller Page"
                        qrColor="#0B8BEE"
                        details={[
                            { color: "#004174", title: "Booking", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "20" },
                            { color: "#0B8BEE", title: "Sales", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "IDR 10.000.000" },
                            { color: "#0B8BEE", title: "Commision Fee", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "IDR 3.000.000" },
                        ]}
                    />
                    <CardAffiliate
                        status="Active"
                        statusColor="#3EA31A"
                        companyName="Wahana Fastboat"
                        resellerId="AFLSV001001WHF"
                        qrText="QR Reseller Page"
                        qrColor="#0B8BEE"
                        details={[
                            { color: "#004174", title: "Booking", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "20" },
                            { color: "#0B8BEE", title: "Sales", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "IDR 10.000.000" },
                            { color: "#0B8BEE", title: "Commision Fee", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "IDR 3.000.000" },
                        ]}
                    />
                    <CardAffiliate
                        status="Active"
                        statusColor="#3EA31A"
                        companyName="Wahana Fastboat"
                        resellerId="AFLSV001001WHF"
                        qrText="QR Reseller Page"
                        qrColor="#0B8BEE"
                        details={[
                            { color: "#004174", title: "Booking", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "20" },
                            { color: "#0B8BEE", title: "Sales", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "IDR 10.000.000" },
                            { color: "#0B8BEE", title: "Commision Fee", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "IDR 3.000.000" },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
  }
  