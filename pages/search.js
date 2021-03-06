import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Map from "../components/Map"
import StaysCard from "../components/StaysCard"
import {format} from 'date-fns'



function Search({searchResults}) {
    const router = useRouter()
    //destryctyreiroval sebe path ! 
    const {location, startDate, endDate,numOfGuest} = router.query

    const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy")
    const range = `${formattedStartDate} - ${formattedEndDate}`
    

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${numOfGuest} gests`}/>
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-sm"> 300+ Stays - <span className="text-red-600">{range}</span> - for {numOfGuest}  guests</p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location} </h1>
                    {/* кнопки */}
                    <div className="hidden lg:inline-flex space-x-4
                    text-gray-800 whitespace-nowrap">
                        <p className="button"> Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Bends</p>
                        <p className="button">More filters </p>
                    </div>
                    <div className='flex flex-col'>
                    {/* Search-result */}
                    {searchResults.map(({img, location, title, description, star, price, total}
                    ) => (
                    <StaysCard 
                        img={img}
                        location={location}
                        description={description}
                        title={title}
                        price={price}
                        star={star}
                        total={total}
                        />)
                    )}
                    </div>
                </section>
                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map searchResults={searchResults}/>
                </section>
            </main>
            <Footer/>
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz").
    then(res => res.json())

    return {
        props : {
            searchResults,
        }
    }
}
