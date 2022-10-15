import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import food from "../public/food.png"

export default function CarouselItem({ date }) {
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

    // console.log(color[day[date.getDay()]][0]);
    return (
        <Link href="schedule/1">
            <div href="#" className={`mt-20 flex flex-col rounded-lg border border-gray-200 shadow-md overflow-hidden w-full h-52 ${color[day[date.getDay()]][0]} my-auto hover:cursor-pointer`}>
                <div className="my-auto">
                    <h5 className={`first-letter:first-line:mb-4 text-xl text-start font-bold mx-5 ${color[day[date.getDay()]][1]} absolute`}>{date.getDate()}</h5>
                    <h5 className={`mb-4 text-xl text-center font-bold ${color[day[date.getDay()]][1]}`}>{day[date.getDay()]}</h5>
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
            </div>
        </Link>

    )
}
