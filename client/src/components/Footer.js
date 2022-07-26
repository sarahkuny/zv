import { Icon } from '@iconify/react';

function Footer() {
    return ( 
        <div className="flex py-4 bg-[#2644FD] font-Reactor7 w-full text-white text-xl justify-evenly shadow-[0_-5px_10px_5px_rgba(28,68,253,0.3)] border-dotted border-4">
            <div className="flex flex-col items-center">
                <h5>Contact Zeitgeist</h5>
                <Icon className="mx-1" icon="clarity:email-solid" onClick={() => window.location = 'mailto:zeitgeistsvintage@gmail.com'}></Icon> 
            </div>
            <div>
                <h5>Find Us On Other Platforms</h5>
                <div className="flex justify-evenly">
                    <Icon icon="akar-icons:reddit-fill" />
                    <Icon icon="bi:instagram" />
                    <Icon icon="fa6-solid:dice-d20" />
                    <Icon icon="ps:ebay" />
                </div>
                {/* reddit, instagram, tcgplayer, ebay */}
            </div>
        </div>
     );
}

export default Footer;