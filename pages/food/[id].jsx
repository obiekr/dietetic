import Image from 'next/image'
import React, {useState, useEffect} from "react"
import foodPic from "../../public/food.png"
import { useRouter } from 'next/router'
import { fetchAPI } from '../../libs/fetchApi'

export default function FoodContent() {
    const router = useRouter();

    const [recipe, setRecipe] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const {isReady, query} = router

        if(isReady){
            const { id } = query;
            const fetchRecipe = async () => {
                setIsLoading(true);
                const res = await fetchAPI(`/recipes/v2/${id}`, {'type': 'public'}, {'mode' : 'cors'});

                setRecipe(res.recipe);
                setIsLoading(false);
            }

            fetchRecipe()
        }
    }, [router]);
    
    console.log(recipe)
    // const {label, image, mealType, ingredientLines } = recipe

    return (
        <div className="">
            <div className="max-w-full mb-10 px-1 py-10 bg-[#D0E0FF] ">
                <h1 className="text-center font-bold">Breakfast</h1>
            </div>
            <div className="">
                <h1 className='mx-auto font-semibold text-center'>123</h1>

                <div className="flex justify-center max-w-full">
                    <div className="bg-[#D0E0FF] flex justify-between items-center relative py-5 px-56">
                        <div className="mx-6 w-auto text-center ml-[20%]">
                            <div className='font-semibold text-sm text-slate-500'>Cooking Time:</div>
                            <div className='text-sm text-slate-400'>35 Minutes</div>
                        </div>
                        <div className="mx-6 w-auto text-center">
                            <div className='font-semibold text-sm text-slate-500'>Total Calories:</div>
                            <div className='text-sm text-slate-400'>300 kcal</div>
                        </div>
                        <div className="mx-6 w-auto text-center">
                            <div className='font-semibold text-sm text-slate-500'>Fat:</div>
                            <div className='text-sm text-slate-400'>20g</div>
                        </div>
                        <div className="mx-6 w-auto text-center">
                            <div className='font-semibold text-sm text-slate-500'>Carbs:</div>
                            <div className='text-sm text-slate-400'>20g</div>
                        </div>
                        <div className="mx-6 w-auto text-center">
                            <div className='font-semibold text-sm text-slate-500'>Protein:</div>
                            <div className='text-sm text-slate-400'>20g</div>
                        </div>
                        <div className="overflow-hidden absolute right-0 z-50 translate-y-1">
                            <div className="py-20 px-14 bg-white -rotate-45 transform origin-top-right"></div>
                        </div>
                        <div className="w-96 absolute -left-20 -top-16">
                            <Image src={foodPic} alt="" layout='responsive' className='' />
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex justify-center">



                <div className="translate-x-24">
                    <h2 className='font-black text-xl mt-10 ml-10'>Ingredients:</h2>
                    <div className="text-md mt-2 ml-11 font-light text-stone-500">1. xxxxxxxxxxx</div>
                    <div className="text-md ml-11 font-light text-stone-500">2. xxxxxxxxxxx</div>
                    <div className="text-md ml-11 font-light text-stone-500">3. xxxxxxxxxxx</div>
                    <div className="text-md ml-11 font-light text-stone-500">4. xxxxxxxxxxx</div>
                    <div className="text-md ml-11 font-light text-stone-500">5. xxxxxxxxxxx</div>

                    <h2 className='font-black text-xl mt-10 ml-10'>Directions:</h2>
                    <div className="text-md mt-5 ml-10 font-semibold">Step 1</div>
                    <div className="text-md mt-1 ml-10 font-light text-stone-500">
                        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                    </div>
                </div>
            </div>
        </div>
    )
}