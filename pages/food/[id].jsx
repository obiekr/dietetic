import {Image} from '@mantine/core'
import React, { useState, useEffect } from "react"
import foodPic from "../../public/food.png"
import { useRouter } from 'next/router'
import { fetchAPI } from '../../libs/fetchApi'
import imageLoader from '../../imageLoader'

export default function FoodContent() {
    const router = useRouter();
    const [recipe, setRecipe] = useState(null);
    // const [id, setId] = useState(router.query["id"])
    const [isLoading, setIsLoading] = useState(true);
    // console.log(router.query, router.isReady)
    useEffect(() => {
        // const {isReady, query} = router
        if (router.isReady) {
            const fetchRecipe = async () => {
                setIsLoading(true);
                const res = await fetchAPI(`/recipes/v2/${router.query["id"]}`, {type: 'public'}, {"Access-Control-Allow-Origin" : "*"});
                console.log(res)
                setRecipe(res.recipe);
                setIsLoading(false);
            }
            fetchRecipe()
        }
    }, [router]);

    // const {label, image, mealType, ingredientLines } = recipe

    return (
        <div className="">
            <div className="max-w-full mb-10 px-1 py-10 bg-[#D0E0FF] ">
                <h1 className="text-center font-bold">Breakfast</h1>
            </div>
            {isLoading ?
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <h1 className='text-center text-6xl'>Loading...</h1>
                </div>
                :
                <>
                    <div className="">
                        <h1 className='mx-auto font-semibold text-center'>{recipe.label}</h1>

                        <div className="flex justify-center max-w-full">
                            <div className="bg-[#D0E0FF] flex justify-between items-center relative py-5 px-56">
                                <div className="mx-6 w-auto text-center ml-[20%]">
                                    <div className='font-semibold text-sm text-slate-500'>Cooking Time:</div>
                                    <div className='text-sm text-slate-400'>{recipe.totalTime} Minutes</div>
                                </div>
                                <div className="mx-6 w-auto text-center">
                                    <div className='font-semibold text-sm text-slate-500'>Total Calories:</div>
                                    <div className='text-sm text-slate-400'>{Math.round(recipe.calories)} kcal</div>
                                </div>
                                <div className="mx-6 w-auto text-center">
                                    <div className='font-semibold text-sm text-slate-500'>Fat:</div>
                                    <div className='text-sm text-slate-400'>{Math.round(recipe.digest[0]["total"])}g</div>
                                </div>
                                <div className="mx-6 w-auto text-center">
                                    <div className='font-semibold text-sm text-slate-500'>Carbs:</div>
                                    <div className='text-sm text-slate-400'>{Math.round(recipe.digest[1]["total"])}g</div>
                                </div>
                                <div className="mx-6 w-auto text-center">
                                    <div className='font-semibold text-sm text-slate-500'>Protein:</div>
                                    <div className='text-sm text-slate-400'>{Math.round(recipe.digest[2]["total"])}g</div>
                                </div>
                                <div className="overflow-hidden absolute right-0 z-50 translate-y-1">
                                    <div className="py-20 px-14 bg-white -rotate-45 transform origin-top-right"></div>
                                </div>
                                <div className="w-96 absolute -left-16 -top-9">
                                    <Image src={recipe.image}  alt="123" width={400} height={400} radius={'100%'} loader={imageLoader}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="flex justify-center">
                        <div className="translate-x-32">
                            <h2 className='font-black text-xl mt-10 ml-10 mb-2'>Ingredients:</h2>
                            <ul>
                                {recipe.ingredientLines.map((e, i) => {
                                    return (
                                        <li className="text-md mt-1 ml-10 font-light text-stone-500" key={i}>- {e}</li>
                                    )
                                })}
                            </ul>


                            <h2 className='font-black text-xl mt-10 ml-10 mb-2'>Directions:</h2>
                            <ol>
                                <div className="text-lg ml-10 font-semibold">Step 1</div>
                                <li className="text-md mt-1 ml-10 font-light text-stone-500">Boil water </li>
                                {/* <div className="text-lg ml-10 font-semibold">Step 2</div>
                                <li className="text-md mt-1 ml-10 font-light text-stone-500">Cut some onion </li>
                                <div className="text-lg ml-10 font-semibold">Step 3</div>
                                <li className="text-md mt-1 ml-10 font-light text-stone-500">Salt </li> */}
                            </ol>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}