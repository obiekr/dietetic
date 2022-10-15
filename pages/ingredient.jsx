import React from "react"
import Navbar from "../components/Navbar"
import food  from '../public/food.png'
import Image from "next/image"
import styles from "../styles/Ingredient.module.css"

export default function Ingredients(){
    return(
        <div>
            <Navbar/>
            <div className="m-5 w-96 flex-col justify-center bg-zinc shadow-xl">
                <div className="relative flex mt-2 mx-2">
                    <div className={`m-2 pr-4 inset-0 overflow-hidden ${styles.outlineKanan}`}>
                        <Image src={food} alt="" width={'100px'} height={'100px'} />
                        <div className="mx-auto text-center">tesss</div>
                    </div>
                </div>
            </div>
        </div>
    )
}