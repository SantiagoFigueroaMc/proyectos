import React from 'react'
import { useState } from 'react'
import {
    FaBars, 
    FaTimes,
    FaLinkedin
} from 'react-icons/fa'

function Navbar() {
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }

    return (
        <div className='w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <h1>AdP</h1>
            </div>

            {/* Menu */}
            <div className='hidden md:flex'>
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/* Hamburger */}
            <div className='md:hidden' onClick={handleClick}>
                {!menu ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Mobile menu */}
            <ul className={`${!menu ? 'hidden' : 'md:hidden'} absolute top-[80px] left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center`}>
                    <li className='py-6 text-4xl'>Home</li>
                    <li className='py-6 text-4xl'>About</li>
                    <li className='py-6 text-4xl'>Contact</li>
                </ul>

            
        </div>
    )
}

export default Navbar