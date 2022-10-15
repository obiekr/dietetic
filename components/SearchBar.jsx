import React from 'react'
import { ActionIcon } from '@mantine/core'
import { IconSearch } from '@tabler/icons'

export const SearchBar = ({ handleClick, setSearch }) => {
    function searchHandler(e) {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <form onSubmit={(e) => { handleClick(e) }}>
            <div className="py-10 bg-[#C3DBFF] w-full">
                <div className="mx-5 shadow flex bg-white rounded-3xl focus:outline-2 focus:outline-dashed focus:outline-black">
                    <input type="text" placeholder="Search" className="w-full rounded-3xl pl-5 focus:outline-none " onChange={(e) => { searchHandler(e) }} />

                    <button className="w-auto flex justify-end items-center p-2" type="submit">
                        <IconSearch size={20} />
                    </button>
                </div>
            </div>
        </form>

    )
}
