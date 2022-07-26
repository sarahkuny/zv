
function CategoryCard({ category }) {
    return ( 
        <div className="flex flex-col-reverse items-center justify-evenly rounded cursor-pointer bg-neutral-800 border-4 border-dotted rounded hover:bg-[#2644FD] drop-shadow-[0px_0px_10px_rgba(255,255,255,0.25)]">
            <div className="flex flex-col w-1/2 items-center justify-center pl-4">
                <h2 className=" text-6xl md:text-8xl font-Arcade">{category.title}</h2>
                <h5 className="text-3xl text-center">{category.description}</h5>
            </div>
            <img src={category.image} alt={category.title} className="object-scale-down w-1/2 h-48 rounded-lg"/>
        </div>
     );
}

export default CategoryCard;