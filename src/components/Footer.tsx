export default function Footer(){
    return (
        <div className="mt-auto bg-gradient-to-b from-[#FFF068] to-[#FEE715] flex justify-between text-[#101820] items-center px-3 py-3">
            <ul className="flex text-xl">
                <li><button><i className="ri-twitter-line mr-2"></i></button></li>
                <li><button><i className="ri-discord-line mr-2"></i></button></li>
                <li><button><i className="ri-reddit-line "></i></button></li>
            </ul>
            <h1 className="text-center font-bold text-xl">Duck Souls</h1>
            <p className="italic text-xs">&copy; 2023 Duck Souls</p>    
        </div>
    )
}
