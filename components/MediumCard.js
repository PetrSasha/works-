import Image from 'next/image'
function MediumCard({img, title}) {
    
    return (
        <div className=" hover:scale-105 hover:text-transparent transition transform duration-300 ease-out my-5">
            <div className="relative h-80 w-80">
                <Image className="rounded-lg cursor-pointer" src={img} layout="fill"/> 
            </div>
            <h2 className="text-center font-semibold ">{title}</h2>
        </div>
    )
}

export default MediumCard
