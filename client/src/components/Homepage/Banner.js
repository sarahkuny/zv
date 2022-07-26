import pointer from '../../assets/cursor.png'
import { Link } from 'react-router-dom'
function Banner() {
    return (  
        <div >
            <div className="h-screen bg-neutral-900 flex flex-col justify-between items-center">
                <p></p>
                <div>
                    <h1 className="text-5xl text-center  md:text-8xl lg:text-9xl text-[#FD3126] font-Ferrum drop-shadow-[2px_2px_1px_rgba(248,188,71,1)]">Zeitgeist's Vintage</h1>
                    <h3 className="text-lg md:text-3xl lg:text-4xl text-white font-Reactor7 text-center">Vintage Games, Consoles, Cards, and Memorabilia</h3>
                </div>
                <div onClick={() => window.location.replace("/#categories")}><img src={pointer} className="w-[29px] h-[37px] origin-center animate-bounce rotate-180 mb-2" /></div>
            </div>
            
        </div>
    );
}

export default Banner;