import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Ingredient from "../components/Ingredients"
import egg from '../public/egg.png'
import nut from '../public/nut.png'
import apple from '../public/red apple.png'
import bun from '../public/Sesame bun.png'
import Image from "next/image"
import styles from "../styles/Ingredient.module.css"
import { useRouter } from "next/router"
import { getRandomRecipe } from "../libs/fetchApi";

export default function Ingredients() {

    const [activeIngred, setActiveIngred] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    async function saveHandler(e) { 
        if(activeIngred === undefined || activeIngred.length == 0) {
            alert("Please select at least one!");
            return;
        }

        e.preventDefault()
        localStorage.removeItem("selected")
        localStorage.setItem("selected", activeIngred)
        // await getRandomRecipe(activeIngred[0]).then((res) => {
		//     localStorage.setItem("plan", JSON.stringify(res))
        //     console.log(res)
        //     // router.push("/")
        // });

        const recipe = await getRandomRecipe(activeIngred)
        console.log("Recipe : ", recipe)

        if(recipe){
            setIsLoading(true)
            localStorage.setItem("plan", JSON.stringify(recipe))
            router.push("/")
            setIsLoading(false)
        }
    }
    return (
        <div>
            <Navbar />
            <div className="justify-between mt-8">
                <h1 className="font-bold mb-2 text-center">Choose Ingredients!</h1>
                <div className="justify-center flex flex-wrap h-auto w-screen">
                    <div className={'IngredientParent'}>
                        <div className="m-5 w-[600px] flex-col justify-center bg-zinc shadow-xl">
                            <div className="relative flex mt-2 mx-2">
                                <div className={`my-auto mt-3 px-5 w-80 h-full inset-0 overflow-hidden ${styles.outlineKanan}`}>
                                    <Image src={bun} alt="" width={'100px'} height={'100px'} layout="responsive" />
                                    <div className="mx-auto text-center font-bold">CARBS</div>
                                </div>
                                <div className="flex flex-wrap">
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="oats" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="quinoa" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="potato" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="lentils" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="pasta" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="tortilla" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="bread" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="pita" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="corn" />
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
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="beef" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="cheese" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="chicken" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="turkey" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="pork" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="fish" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="lamb" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="eggs" />
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
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="walnuts" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="flex seeds" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="hemp seeds" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="chia seeds" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="avocado" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="chasews" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="almond" />
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
                                   <Ingredient setActiveIngred={setActiveIngred} ingred="strawberry" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="blueberry" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="blackberry" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="grape" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="pear" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="kiwi" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="orange" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="apple" />
                                    <Ingredient setActiveIngred={setActiveIngred} ingred="cherry" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center" >
                    <button className="m-6 px-10 p-5 bg-[#C3DBFF] hover:bg-blue-100 font-bold rounded-xl items-center" 
                        onClick={saveHandler}>
                            SAVE
                    </button>
                </div>
            </div>
        </div>
    )
}