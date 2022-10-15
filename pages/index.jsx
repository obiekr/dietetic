import Head from "next/head";
import Image from "next/image";
import Carousel from "../components/CarouselCst";
import Navbar from "../components/Navbar";
import { Button } from "@mantine/core";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<div className={``}>
			<Navbar />
			<Carousel />
			<div className="flex justify-center mt-20  ">
				<button className="text-center font-bold bg-[#C3DBFF] py-8 px-16 rounded-xl hover:bg-blue-100">
					<Link href="/find">Find Meal</Link>
				</button>
			</div>
		</div>
	);
}
