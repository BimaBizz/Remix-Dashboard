import ButtonIcon from "../Component/ButtonIcon";
import { RiSettings3Fill, RiNotification2Fill } from "react-icons/ri";

const TopNav = (props) => {
    return (
        <>
        <div className="w-full p-2 justify-between flex items-center">
            <div>
                <h1 className="text-md">Page :</h1>
                <h2 className="text-xl font-bold">{props.titlePage}</h2>
            </div>
                <div className="flex space-x-1 justify-center items-center">
                    <ButtonIcon icon={<RiSettings3Fill/>} text="" space="mr-0"/>
                    <ButtonIcon icon={<RiNotification2Fill/>} text="" space="mr-0"/>
                    <h1>{props.userName}</h1>
                    <div className="h-9 w-9 rounded-full bg-center bg-cover" style={{backgroundImage: `url(${props.img})`}}>
                </div>
            </div>
        </div>
        </>
    )
}
TopNav.defaultProps = {
    titlePage: "Home",
    userName: "Melisa Astoge",
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
}

export default TopNav;