import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import MealPlan from '../../components/MealPlan'

export default function Date(context) {

    const [plan, setPlan] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    // const dayDict = {
    //     0: "Sunday",
    //     1: "Senin",
    //     2: "Selasa",
    //     3: "Rabu",
    //     4: "Kamis",
    //     5: "Jumat",
    //     6: "Sabtu",
    // }

    useEffect(() => {
        const generated = JSON.parse(localStorage.getItem("plan"))
        if (generated !== null && router.isReady) {
            setIsLoading(true)

            const { ids } = router.query
            const lastDigit = ids.substr(ids.length - 1)
            const dateId = ids.substr(0, 8)
            console.log(dateId);
            // const thisDate = new Date(ids.substr(4, 9), ids.substr(2, 4), ids.substr(0, 2))
            // thisDate.getDay
            console.log("digit : ", lastDigit)

            setPlan(generated[lastDigit])
            console.log("plan generated", generated[lastDigit])
            setIsLoading(false)
        }
    }, [router])

    // console.log(plan.breakfast)

    return (
        <>
            <div className='w-full py-10 bg-[#EFC5C5] '>
                <h1 className='text-center font-bold md:text-5xl text-3xl'>My Monday Meal</h1>
            </div>
            {!isLoading ?
                <div className="mt-16">

                    <div className="flex justify-center flex-wrap">
                        <div className="mx-10 my-16"><MealPlan category="Breakfast"
                            foodname={plan["breakfast"]["recipe"]["label"]}
                            cal={Math.round(plan["breakfast"]["recipe"]["calories"])}
                            img={plan["breakfast"]["recipe"]["image"]}
                            uri = {plan["breakfast"]["recipe"]["uri"]}
                        /></div>
                        <div className="mx-10 my-16"><MealPlan
                            category="Lunch"
                            foodname={plan["lunch"]["recipe"]["label"]}
                            cal={Math.round(plan["lunch"]["recipe"]["calories"])}
                            img={plan["lunch"]["recipe"]["image"]}
                            uri = {plan["breakfast"]["recipe"]["uri"]}
                            /></div>
                    </div>
                    <div className="flex justify-center flex-wrap">
                        <div className="mx-10 my-16"><MealPlan
                            category="Dinner"
                            foodname={plan["dinner"]["recipe"]["label"]}
                            cal={Math.round(plan["dinner"]["recipe"]["calories"])}
                            img={plan["dinner"]["recipe"]["image"]}
                            uri = {plan["breakfast"]["recipe"]["uri"]}
                            /></div>
                        <div className="mx-10 my-16"><MealPlan
                            category="Snack"
                            foodname={plan["snack"]["recipe"]["label"]}
                            cal={Math.round(plan["snack"]["recipe"]["calories"])}
                            img={plan["snack"]["recipe"]["image"]}
                            uri = {plan["breakfast"]["recipe"]["uri"]}
                            /></div>
                    </div>
                </div>
                : <h1>Is Loading?</h1>}
        </>

    )
}
