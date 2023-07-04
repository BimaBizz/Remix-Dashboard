import { RiHome2Fill, RiDraftFill, RiTableAltFill, RiSettings3Fill, RiNotification2Fill, RiLogoutCircleLine, RiGpsFill } from "react-icons/ri";
import ButtonIcon from "./ButtonIcon";

const SideNav = () => {
    return (
        <>
            <div className="relative bg-slate-900 p-2 rounded-md w-72 h-full">
                <div className="flex space-x-2 items-center justify-center text-xl text-white py-4">
                    <RiGpsFill />
                    <p>Dashboard Remix</p>
                </div>
                <hr className="mb-2"/>
                <ButtonIcon icon={<RiHome2Fill/>} text="Dashboard" link="/"/>
                <ButtonIcon icon={<RiDraftFill/>} text="Posts" link="/posts"/>
                <ButtonIcon icon={<RiTableAltFill/>} text="List Posts" link="/list-posts"/>
                <ButtonIcon icon={<RiSettings3Fill/>} text="Settings"/>
                <ButtonIcon icon={<RiNotification2Fill/>} text="Notifications"/>
                <div className="absolute -bottom-2 left-0 w-full p-2">
                    <ButtonIcon icon={<RiLogoutCircleLine/>} text="Logout"/>
                </div>
            </div>
        </>
    )
}
export default SideNav;