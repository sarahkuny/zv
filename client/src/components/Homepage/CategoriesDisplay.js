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
        <div className="flex flex-col bg-neutral-900 text-white font-Reactor7 items-center pt-5 snap-y w-full ">
            {categories.map((category) => <CategoryCard category={category} />)}
         </div>
     );
}

export default CategoriesDisplay ;