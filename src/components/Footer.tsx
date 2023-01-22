export default function Footer(){
    return (
        <div className="mt-auto bg-[#1b2430] flex justify-between text-[#fff] items-center px-3 py-3">
            <ul className="flex text-xl">
                <li><a href="#"><i className="ri-twitter-line mr-2"></i></a></li>
                <li><a href="#"><i className="ri-discord-line mr-2"></i></a></li>
                <li><a href="#"><i className="ri-reddit-line "></i></a></li>
            </ul>
            <h1 className="text-center font-bold text-xl">Duck Souls</h1>
            <p className="italic text-xs">&copy; 2023 Duck Souls</p>    
        </div>
    )
}
