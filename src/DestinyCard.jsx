import React from 'react'

const DestinyCard = ({ destiny }) => {

    const { image, name, spots, duration } = destiny;
    return (
        <div className="card md:w-9/12">
            <div className="w-full h-auto rounded-[15px] bg-gray-50 border" style={{
                boxShadow: "5px 5px 10px 0 rgba(0,0,0,0.08)"
            }} >
                <div className="flex items-center space-x-10 mx-auto">
                    <img className="w-2/12 h-2/12 rounded-tl-[15px] rounded-bl-[15px] object-cover"
                        src={image} />
                    <div className='flex justify-around items-center  w-full'>
                        <p className=" text-xl font-semibold  text-black">
                            {name}
                        </p>
                        <p className=" text-xl font-semibold  text-black ">
                            <span className="text-xl font-semibold  text-black">{spots}</span>
                            <br />
                            <span className="text-xl font-semibold  text-black">{duration}</span>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DestinyCard
