
function CategoryCard({ category }) {
    return ( 
        <div className="flex flex-col-reverse lg:flex-row items-center justify-evenly md:border-dotted md:border-4 rounded-lg md:border-white w-full md:w-2/3 lg:h-72 my-10 py-10 cursor-pointer snap-center hover:bg-[#2644FD] drop-shadow-[0px_0px_20px_rgba(255,255,255,0.25)]">
            <div className="flex flex-col w-1/2 items-center justify-center pl-4">
                <h2 className="text-8xl font-Arcade">{category.title}</h2>
                <h5 className="text-3xl text-center">{category.description}</h5>
            </div>
            <img src={category.image} className="object-scale-down  h-48 rounded-lg"/>
        </div>
     );
}

export default CategoryCard;