import React from 'react'
import food from "../public/food.png"
import { ActionIcon } from '@mantine/core'
import { IconFlame } from '@tabler/icons'
import { IconClockHour3 } from '@tabler/icons'
import Image from "next/image"
import Link from 'next/link'

export default function MealPlan({ category, foodname, cal, time }) {
  let color = {
    'Breakfast': ['bg-[#D0E0FF]', "hover:bg-[#B1CCFF]"],
    "Lunch": ['bg-[#FFF6AA]', 'hover:bg-[#F4EA91]'],
    "Dinner": ["bg-[#B7BDF3]", "hover:bg-[#AAB1EF]"],
    "Snack": ["bg-[#ABE3B1]", "hover:bg-[#92DF9A]"],
  }

  return (
    <Link href={`/food/${foodname}`}>
      <div className={`px-48 py-20 ${color[category][0]} relative rounded-2xl hover:cursor-pointer ${color[category][1]}`}>
        <div className="absolute -top-20 right-5">
          <Image src={food} alt="" width={170} height={170} className='' />
        </div>
        <h1 className='absolute left-5 -top-7 font-bold'>{category}</h1>

        <div className="bottom-5 left-5 absolute">
          <h5 className='text-2xl font-medium'>{foodname}</h5>
          <div className="flex">
            <i><ActionIcon variant='transparent' className="pointer-events-none"><IconFlame size={300} /></ActionIcon></i>
            <h6 className='ml-2 mt-auto '>{cal}</h6>
            <i className='ml-7'><ActionIcon variant='transparent' className="pointer-events-none"><IconClockHour3 size={300} /></ActionIcon></i>
            <h6 className='ml-2 mt-auto '>{time}</h6>
          </div>
        </div>
      </div>
    </Link>
  )
}
