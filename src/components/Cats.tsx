import Marquee from "react-fast-marquee";

const Cats = () => {
    return (
        <div className="page">
            <div className="py-20">
                <Marquee>
                <h2>Cat 1</h2>
                <h2 className="text-red-500">Cat 2</h2>
                <h2 className="text-green-500">Cat 3</h2>
            </Marquee>
            <h1>Cats</h1>
            </div>
        </div>
    )
}

export default Cats;