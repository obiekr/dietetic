import React from 'react'
import Link from 'next/link'
import { ActionIcon } from '@mantine/core'
import { IconUserCircle, IconBell } from '@tabler/icons'

export default function Navbar() {
  return (
    <div className='bg-[#C3DBFF] px-10'>
      <div className="py-10 mb012 flex justify-between">
        <div className="flex items-center">
          <a href="#">
            <ActionIcon variant='default'><IconUserCircle size={30}/></ActionIcon>
          </a>
          <h1 className="ml-6 text-xl">Hello, Budiman</h1>
        </div>
        <ul className='flex items-center'>
          <li>
            <a href="#">
              <ActionIcon variant='default'><IconBell size={30}/></ActionIcon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
