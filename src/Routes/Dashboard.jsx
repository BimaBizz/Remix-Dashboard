import ButtonIcon from "../Component/ButtonIcon";
import Card from "../Component/Card";
import SideNav from "../Component/SideNav";
import TopNav from "../Component/TopNav";
import { RiGpsFill, RiHome2Fill, RiDraftFill,RiTableAltFill, RiSettings3Fill, RiNotification2Fill, RiLogoutCircleLine } from "react-icons/ri";

const Dashboard = () => {
    return (
        <>
        <div className="flex p-2 space-x-2 h-screen max-h-fit w-full">
            <SideNav/>
            <div className="w-full h-full space-y-4">
                <TopNav/>
                <div className="p-2 grid grid-cols-3 gap-2">
                    <Card title="Posts" count="43"/>
                    <Card title="Coments" count="23"/>
                    <Card title="Users" count="23"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;