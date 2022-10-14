import React from 'react'
import food from "../public/food.png"
import { ActionIcon } from '@mantine/core'
import { IconFlame } from '@tabler/icons'
import { IconClockHour3 } from '@tabler/icons'
import Image from "next/image"

export default function MealPlan({category, foodname, cal, time}) {
  return (
    <div className={`px-48 py-20 bg-[${category}] relative rounded-2xl`}>
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
  )
}
