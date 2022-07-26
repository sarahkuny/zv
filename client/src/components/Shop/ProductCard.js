import AddToCart from "./AddToCart";

function ProductCard({product}) {
    return ( 
        <div className="flex flex-col items-center font-sans rounded text-black border-4 border-black shadow-lg bg-neutral-50 px-2 hover:bg-neutral-100 hover:text-black">
            {/* <img src={product.image} className="object-scale-down w-4/6 h-4/6 py-4" /> */}
            <div className="flex flex-col px-2 pb-4">
                <h2 className="text-lg font-bold">{product.Name}</h2>
                <div className="flex justify-between">
                     <h4 className="font-Reactor7" >{product["Adjusted Price"]}</h4>
                     <h4 className="font-Reactor7 italic text-neutral-600">{product.seller}</h4>
                </div>
                <AddToCart />
            </div>
           
        </div>
     );
}

export default ProductCard;