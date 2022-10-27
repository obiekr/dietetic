import CarouselCst from "../components/CarouselCst";
import Navbar from "../components/Navbar";
import Link from "next/link";
import {useEffect, useState} from "react"
import { useRouter } from "next/router";

export default function Home() {
	// const [ingredient, setIngredient] = useState(["chicken"])
	const [plan, setPlan] = useState([])
	const router = useRouter()

	// const handleClick = (e) => {
	// 	e.preventDefault();
		// getRandomRecipe(ingredient);
	// }
	useEffect(()=>{
        if(localStorage.getItem("selected") === null || localStorage.getItem("plan") === null){
			router.push("/ingredient")
			return
		}

	}, [router])
	console.log("env", process.env.APPID)
	return (
		<div className={``}>
			<Navbar />
			<CarouselCst />
			<div className="flex justify-center mt-20  ">
				<Link href="/find">
					<button className="text-center font-bold bg-[#C3DBFF] py-8 px-16 rounded-xl hover:bg-blue-100"
						// onClick={handleClick}
					>
						Find Food
					</button>
				</Link>
			</div>
		</div>
	);
}
