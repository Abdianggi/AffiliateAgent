// BES-AF-03-0-PAGE
import CardAffiliate from "../component/CardAffiliate";
import CardBasic from "../component/CardBasic";
import { Link, useNavigate } from 'react-router-dom';
import Button from "../component/ButtonHybrid";
import Nav from "../Component/Nav";
import Tabs from "../component/Tabs";

export default function Dashboard() {
    const navigate = useNavigate();
    const toAddReseller = () => {
        navigate('/add-reseller');
    }

    const cardAffiliateData = [
        {
            status: "1",
            companyName: "Rocky Fast Cruise",
            resellerId: "AFLSV001001RCF",
            qrText: "QR Reseller Page",
            qrColor: "#0B8BEE",
            details: [
                { color: "#004174", title: "Booking", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "20" },
                { color: "#0B8BEE", title: "Sales", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "IDR 10.000.000" },
                { color: "#0B8BEE", title: "Commision Fee", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "IDR 3.000.000" },
            ],
        },
        {
            status: "1",
            companyName: "Gangga Express",
            resellerId: "AFLSV001001GES",
            qrText: "QR Reseller Page",
            qrColor: "#0B8BEE",
            details: [
                { color: "#004174", title: "Booking", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "20" },
                { color: "#0B8BEE", title: "Sales", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "IDR 10.000.000" },
                { color: "#0B8BEE", title: "Commision Fee", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "IDR 3.000.000" },
            ],
        },
        {
            status: "0",
            companyName: "Semaya One",
            resellerId: "AFLSV001001SMO",
            qrText: "QR Reseller Page",
            qrColor: "#0B8BEE",
            details: [
                { color: "#004174", title: "Booking", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "20" },
                { color: "#0B8BEE", title: "Sales", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "IDR 10.000.000" },
                { color: "#0B8BEE", title: "Commision Fee", subtitle: "1 Sep 2024 - 27 Sep 2024", value: "IDR 3.000.000" },
            ],
        },
    ];
    
    return (
        <div className="bg-[#F6F6F6] min-h-screen">
            <Nav />
            <Tabs />
           <div className="px-2 lg:px-20 xl:px-52 bg-transparent pb-20">
                <div className="bg-[#E8F3FC] px-4 sm:px-10 md:px-20 border-t-[0.4rem] border-[#1B8BE3] pt-10 pb-20 rounded-t-[1.5rem] shadow-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="text-lg font-semibold mb-4 flex items-center">Affiliate Overview</div>
                    <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row sm:space-x-2 gap-2">
                        <CardBasic color="#004174" title="All Booking" subtitle="1 Sep 2024 - 27 Sep 2024" value="55"/>
                        <CardBasic color="#0B8BEE" title="All Transaction" subtitle="1 Sep 2024 - 27 Sep 2024" value="IDR 7.750.000"/>
                    </div>
                </div>
                <div className="bg-[#FFFFFF] px-2 lg:px-20 py-10 rounded-[1.5rem] shadow-md mt-[-1.5rem]">
                    <div className="flex justify-between mb-8">
                        <div className="text-lg font-semibold">Affiliate : </div>
                        {/* <Link to="/add-reseller" className="bg-hysuccess text-white text-sm font-light py-1 px-2 rounded-md">+ Add Reseller</Link> */}
                        <Button type={`button`} variant={`hysuccess`} className={`py-1 px-2 rounded-md text-sm font-light`} text={`+ Add Reseller`} onClick={toAddReseller}/>
                    </div>
                    {cardAffiliateData.map((data, index) => (
                        <CardAffiliate
                            key={index}
                            status={data.status}
                            companyName={data.companyName}
                            resellerId={data.resellerId}
                            qrText={data.qrText}
                            qrColor={data.qrColor}
                            details={data.details}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
  }
  