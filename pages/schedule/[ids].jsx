import { useRouter } from 'next/router';
import React from 'react'
import MealPlan from '../../components/MealPlan';

export default function Date() {
    const router = useRouter()
    return (
        <>
            <div className='w-full py-10 bg-[#EFC5C5] '>
                <h1 className='text-center font-bold text-5xl'>My Monday Meal</h1>
            </div>
            <div className="mt-16"></div>
            <div className="flex justify-center">
                <div className="mx-10 my-16"><MealPlan category="Breakfast" foodname="Pecel Lele"/></div>
                <div className="mx-10 my-16"><MealPlan category="Lunch" foodname="Fried Chicken"/></div>
            </div>
            <div className="flex justify-center">
                <div className="mx-10 my-16"><MealPlan category="Dinner" foodname="B7BDF3"/></div>
                <div className="mx-10 my-16"><MealPlan category="Snack" foodname="ABE3B1"/></div>
            </div>
        </>

    )
}
