import venusaur from "../../assets/venusaur.png";
import charizard from "../../assets/charizard.png";
import ProductCard from "./ProductCard.js";
import Footer from "../Footer.js";
import pokemon from "../../assets/pokemon.json"

function Shop() {
    
    return (
        <div className="bg-[#2644FD] cursor-pointer h-full">
            <div className="flex flex-col items-center ">
                <h1 className="text-white font-Arcade text-8xl text-center mt-2 pb-4 px-8 border-4 border-dotted rounded-md">Shop Items</h1>
                <div className="  flex flex-col my-10 p-2 md:w-5/6 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6">
                    {pokemon.map((item) => <ProductCard product={item} />)}
                </div>
                <Footer />
            </div>
        </div>
      );
}

export default Shop;