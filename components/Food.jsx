import {Image, Text} from '@mantine/core'
import React from 'react'
import food from "../public/food.png"

export default function Food({recipe}){
    const {label, image, calories} = recipe
    console.log(recipe);

    return (
        <div className="mx-10 my-10 w-40 text-center">
            <a href="#">
                <Image src={image} alt={label} width={'100%'} height={'auto'} />
                <Text lineClamp={2} size={'xl'}>{label}</Text>
                <h5 className='text-md text-gray-800'>{calories.toFixed(1)} Kcal</h5>
            </a>
        </div>
    )
}
