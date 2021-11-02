import Image from 'next/image'
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserIcon,
    UserCircleIcon,
} from "@heroicons/react/solid"
function Header() {
    return (
       <div>
            <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-5 px-10 shadow-lg ">
            {/* left */}
            <div className="relative h-10 flex items-center cursor-pointer my-auto">
                <Image src='https://links.papareact.com/qd3'
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
             {/* mid */}
            <div className="flex items-center md:border-2 rounded-full md:shadow-md px-2">
                <input
                    type="text"
                    placeholder="Start your search..."
                    outline ="non"
                    className="outline-none rounded-full pl-5 p-2 bg-transparent flex-grow text-gray-500 placeholder-gray-400 "
                />
                <SearchIcon className="h-7  hidden md:inline-flex text-white bg-red-400 rounded-full p-1 cursor-pointer md:mx-2"/>
                
            </div>
             {/* right */}
            <div className="flex justify-end items-center space-x-4 text-gray-500 ">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6  cursor-pointer"/>

                <div className="flex space-x-2 border-2 rounded-full p-2 cursor-pointer text-gray-500 ">
                    <MenuIcon className="h-6 "/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
            
            </header>
       </div>
    )
}

export default Header
