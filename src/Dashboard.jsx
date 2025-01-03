import Nav from "./Component/Nav";
import Tabs from "./component/Tabs";
import Content from "./Content";
import FeaturedDashboard from "./feature/dashboard";

export default function Dashboard(){

    return (
        <div className="bg-[#F6F6F6] min-h-screen">
           <Nav />
           <Tabs />
           <FeaturedDashboard />
        </div>
    );
}