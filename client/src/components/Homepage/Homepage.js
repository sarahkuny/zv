import Banner from "./Banner";
import CategoriesDisplay from "./CategoriesDisplay";
import Footer from "../Footer";
import { Route, Link } from "react-router-dom";

function Homepage() {
    return (  
        <div className="bg-neutral-900 flex flex-col items-center">
            <Banner />
            <CategoriesDisplay />
            <Link to="/shop">
                <button className="font-Arcade text-white text-6xl border-white border-dotted md:border-4 rounded-md w-96 pt-2 pb-4 px-5 mt-8 mb-32 hover:bg-[#2644FD] drop-shadow-[0px_0px_5px_rgba(255,255,255,0.25)]">SHOP ALL...</button>
            </Link>
            <Footer />
        </div>
    );
}

export default Homepage;