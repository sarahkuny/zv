import CategoryCard from "./CategoryCard";
import advanceWars from "../../assets/advance-wars.jpeg";
import mewtwo from "../..//assets/mewtwo.jpeg";
import n64 from "../../assets/n64.png";
import venusaur from "../../assets/venusaur.png";


function CategoriesDisplay () {
    const categories = [
        {title: "Games", description: "Gameboy, Nintendo, GameCube, and more", image: advanceWars},
        {title: "Consoles", description: "Nintendo", image: n64},
        {title: "Cards", description: "Pokemon, Yu-Gi-Oh!, (Magic Coming Soon)", image: venusaur},
        {title: "Memorabilia", description: "Collector's Coins, Strategy Guides, Plush Toys, and more", image: mewtwo}
    ];

    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-10 place-items-center text-white font-Reactor7 w-full md:w-[800px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1500px]">
            {categories.map((category) => <CategoryCard category={category} />)}
                
        </div>
        
     );
}

export default CategoriesDisplay ;