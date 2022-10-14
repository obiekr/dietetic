import Image from 'next/image'
import React from 'react'
import food from "../public/food.png"

export default function CarouselItem() {
    return (
        <a href="#" className={`mt-20 flex flex-col rounded-lg border border-gray-200 shadow-md overflow-hidden w-full h-52 bg-red-400 hover:bg-red-300 my-auto`}>
            <div className="my-auto">
                <h5 className={'mb-4 text-xl text-center font-bold text-gray-900'}>Monday</h5>
                <div className="mb-3  rounded-full flex justify-center">
                    <div className="mx-2 w-20 text-center">
                        <Image src={food} alt="" width={50} height={50} layout='responsive' className='' />
                        <h5 className='text-sm text-gray-800'>Breakfast</h5>
                    </div>
                    <div className="mx-2 w-20 text-center">
                        <Image src={food} alt="" width={50} height={50} layout='responsive' className='' />
                        <h5 className='text-sm text-gray-800'>Lunch</h5>
                    </div>
                    <div className="mx-2 w-20 text-center">
                        <Image src={food} alt="" width={50} height={50} layout='responsive' className='' />
                        <h5 className='text-sm text-gray-800'>Dinner</h5>
                    </div>
                    <div className="mx-2 w-20 text-center">
                        <Image src={food} alt="" width={50} height={50} layout='responsive' className='' />
                        <h5 className='text-sm text-gray-800'>Snack</h5>
                    </div>
                </div>
            </div>
        </a>
    )
}
