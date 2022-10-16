import React, {useEffect, useState} from 'react'

export default function Ingredient({ingred, setActiveIngred}) {

    const [isActive, setIsActive] =  useState(false)

    useEffect(() => {
        
        if(isActive){
            setActiveIngred(old => [...old, ingred])
        }else{
            setActiveIngred(prev => prev.filter(ingredien => ingredien !== ingred ))
        }

    }, [isActive])

    const handleClick = () => {
        setIsActive(current => !current)
    }

    return (
        <div className="w-auto h-min flex items-baseline">
            <a style={{
                backgroundColor: isActive ? '#CDEEAC' : '',
            }} 
            onClick={handleClick} 
            href="#" className="m-3 p-2 bg-[#E6E6E6] rounded-xl shadow-lg">
                <div className="text-sm font-semibold text-center mx-auto">{ingred}</div>
            </a>
        </div>
    )
}