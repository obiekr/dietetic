import { useRouter } from 'next/router';
import React from 'react'
import MealPlan from '../../components/mealPlan';

export default function Date() {
    const router = useRouter()
    const pid = router.query
    return (
        <>
            <div className='w-full py-10 bg-[#EFC5C5] '>
                <h1 className='text-center font-bold text-5xl'>My Monday Meal</h1>
            </div>
            <div className="flex justify-center">
                <div className="mx-10 my-10"><MealPlan /></div>
            </div>
            <div className="flex justify-center">
                <div className="mx-10 my-10"><MealPlan /></div>
            </div>
        </>

    )
}