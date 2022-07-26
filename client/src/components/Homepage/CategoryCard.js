
function CategoryCard({ category }) {
    return ( 
        <div className="flex flex-col-reverse items-center justify-evenly rounded cursor-pointer bg-neutral-800 w-[350px] h-[350px] sm:w-[340px] sm:h-[340px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[725px]  2xl:h-[725px] rounded hover:bg-[#2644FD] drop-shadow-[0px_0px_10px_rgba(255,255,255,0.25)]">
            <div className="flex flex-col items-center justify-center pl-4">
                <h2 className="text-5xl md:text-6xl lg:text-8xl font-Arcade">{category.title}</h2>
                <h5 className="text-1xl md:text-2xl lg:text-3xl text-center px-1">{category.description}</h5>
            </div>
            <img src={category.image} alt={category.title} className="object-scale-down w-1/2 h-48 rounded-lg"/>
        </div>
     );
}

export default CategoryCard;