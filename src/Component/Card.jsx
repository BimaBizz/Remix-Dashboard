const Card = (props) => {
    return (
        <>
        <div className="relativew-full bg-gradient-to-t from-purple-500 to-fuchsia-300 p-2 h-36 rounded-md hover:bg-gradient-to-tl hover:from-fuchsia-300 hover:to-purple-500 transition-all text-white">
            <h1 className="text-xl text-black">{props.title}</h1>
            <h2 className="text-2xl font-bold w-full flex items-center justify-center h-24">{props.count}</h2>
        </div>
        </>
    )
}
Card.defaultProps = {
    count: 200,
    title: "Card"
}

export default Card;