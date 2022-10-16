import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import food from "../public/food.png"

export default function CarouselItem({ date, planItem, index }) {
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const color = {
        "Sunday": ["bg-redfig", "text-redfont"],
        "Monday": ["bg-orangefig", "text-orangefont"],
        "Tuesday": ["bg-yellowfig", "text-yellowfont"],
        "Wednesday": ["bg-greenfig", "text-greenfont"],
        "Thursday": ["bg-bluefig", "text-bluefont"],
        "Friday": ["bg-purplefig", "text-purplefont"],
        "Saturday": ["bg-purplefigsec", "text-purplefontsec"],

    }

    const [foodSelected, setFoodSelected] = useState(planItem)
    console.log(date.toISOString().substr(5, 5))
    console.log(date.toISOString().substr(5, 5))
    console.log("planitem",planItem);
    return (
        <Link href={`schedule/${date.getDate()}${(date.getMonth() + 1).toString().padStart(2, "0")}${date.getFullYear()}${index}`}>
            <div href="#" className={`mt-20 flex flex-col rounded-lg border border-gray-200 shadow-md overflow-hidden w-auto h-72 ${color [day[date.getDay()]][0]} my-auto hover:cursor-pointer`}>
                <div className="my-auto">
                    <h5 className={`first-letter:first-line:mb-4 text-xl text-start font-bold mx-5 ${color[day[date.getDay()]][1]} absolute`}>{date.getDate()}</h5>
                    <h5 className={`mb-4 text-xl text-center font-bold ${color[day[date.getDay()]][1]}`}>{day[date.getDay()]}</h5>
                    <div className="mb-3 pt-4 px-2 md:w-auto w-96 rounded-full flex justify-center">
                        <div className="mx-2 w-32 text-center">
                            <Image src={planItem["breakfast"]["recipe"]["image"]} alt="" width={50} height={50} layout='responsive' className='rounded-full' />
                            <h5 className='text-md text-gray-800 font-semibold'>Breakfast</h5>
                            <h5 className='text-md text-gray-800'>{planItem["breakfast"]["recipe"]["label"]}</h5>
                        </div>
                        <div className="mx-2 w-32 text-center">
                            <Image src={planItem["lunch"]["recipe"]["image"]} alt="" width={50} height={50} layout='responsive' className='rounded-full' />
                            <h5 className='text-md text-gray-800 font-semibold'>Lunch</h5>
                            <h5 className='text-md text-gray-800'>{planItem["lunch"]["recipe"]["label"]}</h5>
                        </div>
                        <div className="mx-2 w-32 text-center">
                            <Image src={planItem["dinner"]["recipe"]["image"]} alt="" width={50} height={50} layout='responsive' className='rounded-full' />
                            <h5 className='text-md text-gray-800 font-semibold'>Dinner</h5>
                            <h5 className='text-md text-gray-800'>{planItem["dinner"]["recipe"]["label"]}</h5>
                        </div>
                        <div className="mx-2 w-32 text-center">
                            <Image src={planItem["snack"]["recipe"]["image"]} alt="" width={50} height={50} layout='responsive' className='rounded-full' />
                            <h5 className='text-md text-gray-800 font-semibold'>Snack</h5>
                            <h5 className='text-md text-gray-800'>{planItem["snack"]["recipe"]["label"]}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    )
}
