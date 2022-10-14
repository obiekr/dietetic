import Image from 'next/image'
import React from "react"
import foodPic from "../public/food.png"


export default function food(a) {
    return (
        <div className>
            <div className="max-w-full mb-10 px-1 py-10 bg-[#D0E0FF] ">
                <h1 className="text-center font-bold">Breakfast</h1>
            </div>
            <div className="w-full">
                <div className="flex flex-col justify-center mx-40 relatve">
                    <h1 className='flex-auto font-semibold mx-80'>Nama Makanan</h1>
                    <div className="bg-[#D0E0FF] flex justify-between items-center max-w-5xl">
                        <div className="mx-5 w-auto text-center ml-96">
                            <div className='font-semibold text-sm text-slate-500'>Cooking Time:</div>
                            <div className='text-sm text-slate-400'>35 Minutes</div>
                        </div>
                        <div className="mx-5 w-auto text-center">
                            <div className='font-semibold text-sm text-slate-500'>Total Calories:</div>
                            <div className='text-sm text-slate-400'>300 kcal</div>
                        </div>
                        <div className="mx-5 w-auto text-center">
                            <div className='font-semibold text-sm text-slate-500'>Fat:</div>
                            <div className='text-sm text-slate-400'>20g</div>
                        </div>
                        <div className="mx-5 w-auto text-center">
                            <div className='font-semibold text-sm text-slate-500'>Carbs:</div>
                            <div className='text-sm text-slate-400'>20g</div>
                        </div>
                        <div className="mx-5 w-auto text-center">
                            <div className='font-semibold text-sm text-slate-500'>Protein:</div>
                            <div className='text-sm text-slate-400'>20g</div>
                        </div>
                        <div className="w-11 overflow-hidden inline-block">
                            <div className="h-16 bg-white -rotate-45 transform origin-top-right"></div>
                        </div>
                    </div>
                </div>
                <div className="w-96 absolute left-40">
                    <Image src={foodPic} alt="" layout='responsive' className='' />
                </div>
            </div>

            <div className="flex mx-auto justify-center">


                <div className="flex-wrap">


                    <h2 className='font-black text-xl mt-10 ml-10'>Ingredients:</h2>
                    <div className="text-md mt-2 ml-11 font-light text-stone-500">1. xxxxxxxxxxx</div>
                    <div className="text-md ml-11 font-light text-stone-500">2. xxxxxxxxxxx</div>
                    <div className="text-md ml-11 font-light text-stone-500">3. xxxxxxxxxxx</div>
                    <div className="text-md ml-11 font-light text-stone-500">4. xxxxxxxxxxx</div>
                    <div className="text-md ml-11 font-light text-stone-500">5. xxxxxxxxxxx</div>

                    <h2 className='font-black text-xl mt-10 ml-10'>Directions:</h2>
                    <div className="text-md mt-5 ml-10 font-semibold">Step 1</div>
                    <div className="text-md mt-1 ml-10 font-light text-stone-500">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
                </div>
            </div>
        </div>
    )
}