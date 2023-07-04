import { Link } from "react-router-dom";
import { RiDashboard2Line } from "react-icons/ri";
const Button = (props) => {

    return (
        <>
        <div>
        <Link to={props.link}>
            <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-5 rounded flex justify-start items-center w-full my-2"><span className={props.space}>{props.icon}</span>{props.text}</button>
        </Link>
        </div>
        </>
    )
}
Button.defaultProps = {
    text: "Button",
    link: "/",
    icon: <RiDashboard2Line/>,
    space: "mr-2"
}
export default Button;