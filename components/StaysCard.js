import Image from 'next/image' 
import {HeartIcon} from '@heroicons/react/outline'
import {StarIcon} from '@heroicons/react/solid'

function StaysCard({img, location, title, description, star, price, total}) {
    
    return (
            <div className="flex py-7 mt-3 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-xl
            transition duration-200 first:border-t">
                <div className="relative h-24 w-40 md:h-52 md:w-80
                    flex-shrink-0">
                    <Image src={img} layout="fill" objectFit='cover' className='rounded-2xl cursor-pointer '/>
                </div>
                <div className="flex flex-col flex-grow pl-5">
                    <div className="flex justify-between">
                        <p>{location}</p>
                        <HeartIcon className="h-7 cursor-pointer "/>
                    </div>
                    <h4 className="text-xl">{title}</h4>
                    <div className="border-b pt-2">
                        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                        <div className="flex justify-between items-end pt-5">
                            <p className="flex items-center">
                                <StarIcon className="h-5 text-red-400"/>
                                {star}
                            </p>
                            <div>
                                <p className='text-lg lg:text-2xl font-semibold pb-2'>{price}</p>
                                <p className='text-right font-extralight'>{total}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
    )
}

export default StaysCard

// {/* img */}
// <div className='relative h-24 w-40 md:h-52 md:w-80 sm:h-40 sm:w-60 flex-shrink-0 my-5 mr-20 hover:drop-shadow-xl transition transform duration-300 '>
// <Image src={img} layout="fill" objectFit='cover' className='rounded-lg cursor-pointer '/>
// </div>

// {/* text */}
// <div>
// {/* up */}
// <div className='space-y-4 pt-4'>
//     <p className='text-gray-400'>Private room in center of {location}</p>
//    <div className='flex items-center space-x-20'>
//         <h2 className='font-semibold text-2xl sm:text-lg'>{title}</h2>
//         <HeartIcon  className='h-6 w-6 sm:h-7 sm:w-10 cursor-pointer active:scale-90 transform transition duration-200'/>
//    </div>
//     <p className='text-gray-400 sm:text-sm flex-grow '>{description}</p>
    
// </div>
// {/* down */}
// <div className='flex justify-between items-center pt-5'>
//    <div className='flex'>
//         <StarIcon className='h-6 w-6 cursor-pointer text-red-500'/>
//         <p className='pl-2'>{star}</p>
//    </div>
//     <div className='space-y-4'>
//         <h2>{price}</h2>
//         <p className='text-sm text-gray-400'>{total}</p>
//     </div>
// </div>
// </div>