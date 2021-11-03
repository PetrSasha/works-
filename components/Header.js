import Image from 'next/image'
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserIcon,
    UserCircleIcon,
} from "@heroicons/react/solid"
import {useState,} from 'react'
import {useRouter} from 'next/dist/client/router'

// data-RANGE-PIKER
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';


function Header({placeholder}) {

    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numOfGuest,setNumOfGuest] = useState(1)
    const router = useRouter()
    const  handelSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const resetInput = () => {
        setSearchInput("")
    }

    const selectionRange ={
        startDate:startDate,
        endDate:endDate,
        key:'selection',
    }
    const search = () =>  router.push({
        pathname: '/search',
        query: {
            location: searchInput,
            startDate: startDate.toISOString(),
            endDate: endDate.toISOString(),
            numOfGuest,
        }
    })
       
    
    return (
       <div>
            <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-5 px-10 shadow-lg ">
            {/* left */}
            <div className="relative h-10 flex items-center cursor-pointer my-auto">
                <Image onClick={() => router.push('/')} src='https://links.papareact.com/qd3'
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
             {/* mid */}
            <div className="flex items-center md:border-2 rounded-full md:shadow-md px-2">
                <input
                    value={searchInput}
                    onChange={ (e) => setSearchInput(e.target.value)}
                    type="text"
                    placeholder={placeholder || "Start your search"}
                    outline ="non"
                    className="outline-none rounded-full pl-5 p-2 bg-transparent flex-grow text-gray-500 placeholder-gray-400"
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
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto mt-10">
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handelSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl pl-2 pb-1 font-semibold flex-grow">
                        Number of Guests
                        </h2>
                        <UserIcon className='h-5'/>
                        <input 
                        value={numOfGuest}
                        onChange={(e) => setNumOfGuest(e.target.value)}
                        min={1}
                        type="number" 
                        className="w-12 pl-2 text-lg outline-none text-red-400 "/>
                    </div>
                    <div className="  flex items-center">
                        <button onClick={resetInput} className="flex-grow  text-gray-500">Cancel</button>
                        <button onClick={search} className="flex-grow text-red-400 ">Search</button>
                    </div>

                </div>
            )}
            </header>
       </div>
    )
}

export default Header
