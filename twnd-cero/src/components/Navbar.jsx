import React from 'react'
import { useState } from 'react'
import {
    FaBars, 
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook
} from 'react-icons/fa'
import {
    HiOutlineMail
} from 'react-icons/hi'
import {
    BsFillPersonLinesFill
} from 'react-icons/bs'
import Logo from '../assets/OIP.jpg'

function Navbar() {
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={Logo} alto='logo' style={{width: ' 50px'}}/>
            </div>

            {/* Menu */}
            <div className='hidden md:flex'>
                <ul className='flex'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Experience</li>
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
                    <li className='py-6 text-4xl'>Skills</li>
                    <li className='py-6 text-4xl'>Work</li>
                    <li className='py-6 text-4xl'>Experience</li>
                    <li className='py-6 text-4xl'>Contact</li>
                </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-blue-500'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                                LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                                Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                                Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-blue-500'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                                Facebook <FaFacebook size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60] flex justify-between items-center ml-[-100px] hover:ml-0 duration-300 bg-gray-500'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                                Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar