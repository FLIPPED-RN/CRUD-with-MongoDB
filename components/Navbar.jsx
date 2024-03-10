import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-black px-8 py-3">
            <Link className="text-white font-bold" href={"/"}>FLIPPED</Link>
            <Link className="bg-thite p-2 text-white" href={"/addTopic"}>Добавить запись</Link>
        </nav>
    );
}