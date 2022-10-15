import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/CarouselCst";
import Navbar from "../components/Navbar";
import { Button } from "@mantine/core";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import {useEffect, useState} from "react"
import {getRandomRecipe} from "../libs/fetchApi";

export default function Home() {
	const [ingredient, setIngredient] = useState(["chicken"])
	const [plan, setPlan] = useState([])

	const handleClick = (e) => {
		e.preventDefault();
		setPlan(getRandomRecipe(ingredient));
	}

	return (
		<div className={``}>
			<Navbar />
			<Carousel />
			<div className="flex justify-center mt-20  ">
				<Link href="/find">
					<button className="text-center font-bold bg-[#C3DBFF] py-8 px-16 rounded-xl hover:bg-blue-100"
						onClick={handleClick}
					>
						Find Food
					</button>
				</Link>
			</div>
		</div>
	);
}
