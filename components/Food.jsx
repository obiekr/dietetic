import Image from 'next/image'
import React from 'react'
import food from "../public/food.png"

export const Food = () => {
    return (
        <div className="mx-10 my-10 w-40 text-center">
            <a href="#">
                <Image src={food} alt="" width={200} height={200} layout='responsive' className='' />
                <h2 className='text-lg text-gray-800'>Breakfast</h2>
                <h5 className='text-md text-gray-800'>xxxxxxxxx</h5>
            </a>
        </div>
    )
}
