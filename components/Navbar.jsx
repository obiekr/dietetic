import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'
import { ActionIcon } from '@mantine/core'
import { IconUserCircle, IconBell } from '@tabler/icons'

export default function Navbar() {
  return (
    <div className='bg-[#C3DBFF] px-10'>
      <div className="py-1 mb012 flex justify-between">
        <div className="flex items-center">
          <a href="#">
            <Image src={logo} alt="" width="80px" height="80px" className='' />
          </a>
        </div>
        <ul className='flex items-center'>
          <li>
            <h1 className="mr-5 text-xl">Hello, Budiman</h1>
          </li>
          <li>
            <a href="#">
              <ActionIcon variant='transparent'><IconUserCircle size={30}/></ActionIcon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
