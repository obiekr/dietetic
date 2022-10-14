import React from 'react'

export const SearchBar = () => {
    return (
        <div className='py-10 bg-[#C3DBFF] w-full'>
            <div className="w-full flex justify-center">
                <input type="text" className='w-full mx-5 py-5 px-5 rounded-3xl' placeholder='Search' />
            </div>
        </div>
    )
}
