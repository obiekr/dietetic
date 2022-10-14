import Head from 'next/head'
import Image from 'next/image'
import Carousel from '../components/CarouselCst'
import Navbar from '../components/Navbar'
import {Button} from '@mantine/core'
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={``}>
      <Navbar />
      <Carousel />

      <button>
        123
      </button>
    </div>
  )
}
