import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/CarouselCst'
import Navbar from '../components/Navbar'
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={``}>
      <Navbar />
      <Carousel />
    </div>
  )
}
