import { Link } from "react-router-dom";
const Button = (props) => {
    return (
        <>
        <Link to={props.link}>
            <button className="bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded flex justify-center items-center w-full">{props.text}</button>
        </Link>
        </>
    )
}
Button.defaultProps = {
    text: "Button",
    link: "/",
}
export default Button;