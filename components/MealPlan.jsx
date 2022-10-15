import React from 'react'
import food from "../public/food.png"
import { ActionIcon } from '@mantine/core'
import { IconFlame } from '@tabler/icons'
import { IconClockHour3 } from '@tabler/icons'
import Image from "next/image"
import Link from 'next/link'

export default function MealPlan({ category, foodname, cal, time }) {
  let color, hoverCol
  if (category === 'Breakfast') {
    color = 'D0E0FF'
    hoverCol = 'B1CCFF'
  }
  else if (category === 'Lunch') {
    color = 'FFF6AA'
    hoverCol = "F4EA91"
  } else if (category === "Dinner") {
    color = "B7BDF3"
    hoverCol = "AAB1EF"
  } else {
    color = "ABE3B1"
    hoverCol = "92DF9A"
  }


  return (
    <Link href={`/${foodname}`}>
      <div className={`px-48 py-20 bg-[#${color}] relative rounded-2xl hover:cursor-pointer hover:bg-[#${hoverCol}]`}>
        <div className="absolute -top-20 right-5">
          <Image src={food} alt="" width={170} height={170} className='' />
        </div>
        <h1 className='absolute left-5 -top-7 font-bold'>{category}</h1>

        <div className="bottom-5 left-5 absolute">
          <h5 className='text-2xl font-medium'>{foodname}</h5>
          <div className="flex">
            <i><ActionIcon variant='default' className="pointer-events-none"><IconFlame size={300} /></ActionIcon></i>
            <h6 className='ml-2 mt-auto '>{cal}</h6>
            <i className='ml-7'><ActionIcon variant='default' className="pointer-events-none"><IconClockHour3 size={300} /></ActionIcon></i>
            <h6 className='ml-2 mt-auto '>{time}</h6>
          </div>
        </div>
      </div>
    </Link>
  )
}
