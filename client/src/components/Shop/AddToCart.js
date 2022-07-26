import { Icon } from '@iconify/react';

function AddToCart() {
    return ( 
        <button className="bg-neutral-900 w-36 text-white px-2 py-1 rounded flex justify-center items-center text-md hover:bg-[#2644FD]">
            <Icon icon="dashicons:cart"  className="mr-2" /> Add to Cart
        </button>
     );
}

export default AddToCart;