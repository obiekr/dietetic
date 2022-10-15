import React from "react"
import Navbar from "../components/Navbar"
import Ingredient from "../components/Ingredients"
import egg from '../public/egg.png'
import nut from '../public/nut.png'
import apple from '../public/red apple.png'
import bun from '../public/Sesame bun.png'
import Image from "next/image"
import styles from "../styles/Ingredient.module.css"

export default function Ingredients() {
    return (
        <div>
            <Navbar />
            <div className="justify-between mt-8">
                <div className="justify-center flex flex-wrap h-auto w-screen">
                    <div className={'IngredientParent'}>
                        <div className="m-5 w-[600px] flex-col justify-center bg-zinc shadow-xl">
                            <div className="relative flex mt-2 mx-2">
                                <div className={`my-auto mt-3 px-5 w-80 h-full inset-0 overflow-hidden ${styles.outlineKanan}`}>
                                    <Image src={bun} alt="" width={'100px'} height={'100px'} layout="responsive" />
                                    <div className="mx-auto text-center font-bold">CARBS</div>
                                </div>
                                <div className="flex flex-wrap">
                                    <Ingredient ingred="oats"/>
                                    <Ingredient ingred="quinoa"/>
                                    <Ingredient ingred="potato"/>
                                    <Ingredient ingred="lentils"/>
                                    <Ingredient ingred="pasta"/>
                                    <Ingredient ingred="tortilla"/>
                                    <Ingredient ingred="bread"/>
                                    <Ingredient ingred="pita"/>
                                    <Ingredient ingred="corn"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'IngredientParent'}>
                        <div className="m-5 w-[600px] flex-col justify-center bg-zinc shadow-xl">
                            <div className="relative flex mt-2 mx-2">
                                <div className={`my-auto px-5 w-80 h-full inset-0 overflow-hidden ${styles.outlineKanan}`}>
                                    <Image src={egg} alt="" width={'100px'} height={'100px'} layout="responsive" />
                                    <div className="mx-auto text-center font-bold">PROTEIN</div>
                                </div>
                                <div className="flex flex-wrap">
                                    <Ingredient ingred="beef"/>
                                    <Ingredient ingred="cheese"/>
                                    <Ingredient ingred="chicken"/>
                                    <Ingredient ingred="turkey"/>
                                    <Ingredient ingred="pork"/>
                                    <Ingredient ingred="fish"/>
                                    <Ingredient ingred="lamb"/>
                                    <Ingredient ingred="eggs"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'IngredientParent'}>
                        <div className="m-5 w-[600px] flex-col justify-center bg-zinc shadow-xl">
                            <div className="relative flex mt-2 mx-2">
                                <div className={`my-auto px-5 w-80 h-full inset-0 overflow-hidden ${styles.outlineKanan}`}>
                                    <Image src={nut} alt="" width={'100px'} height={'100px'} layout="responsive" />
                                    <div className="mx-auto text-center font-bold">FAT</div>
                                </div>
                                <div className="flex flex-wrap">
                                    <Ingredient ingred="strawberry"/>
                                    <Ingredient ingred="blueberry"/>
                                    <Ingredient ingred="blackberry"/>
                                    <Ingredient ingred="grape"/>
                                    <Ingredient ingred="pear"/>
                                    <Ingredient ingred="kiwi"/>
                                    <Ingredient ingred="orange"/>
                                    <Ingredient ingred="apple"/>
                                    <Ingredient ingred="cherry"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={'IngredientParent'}>
                        <div className="m-5 w-[600px] flex-col justify-center bg-zinc shadow-xl">
                            <div className="relative flex mt-2 mx-2">
                                <div className={`my-auto px-5 w-80 h-full inset-0 overflow-hidden ${styles.outlineKanan}`}>
                                    <Image src={apple} alt="" width={'100px'} height={'100px'} layout="responsive" />
                                    <div className="mx-auto text-center font-bold">FRUITS</div>
                                </div>
                                <div className="flex flex-wrap">
                                    <Ingredient ingred="walnuts"/>
                                    <Ingredient ingred="flex seeds"/>
                                    <Ingredient ingred="hemp seeds"/>
                                    <Ingredient ingred="chia seeds"/>
                                    <Ingredient ingred="avocado"/>
                                    <Ingredient ingred="chasews"/>
                                    <Ingredient ingred="almond"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="m-6 px-10 p-5 bg-[#C3DBFF] hover:bg-blue-100 font-bold rounded-xl items-center">SAVE</button>
                </div>
            </div>
       </div>
    )
}