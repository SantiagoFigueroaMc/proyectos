import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function Navbar() {
  const {user, logOut } = UserAuth()

  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-between bg-gray-200 w-full max-w-[2048px] p-4'>
        <h1 className='text-center text-2xl font-bold'>
            <Link to='/'>Firebase auth project</Link>
        </h1>
        <div>
          {user && <Link to='/account' className='px-4 hover:font-bold'>Account</Link>}
          {user?.displayName ? <button onClick={handleLogOut} className='hover:font-bold'>Log out</button> : <Link to='/signin' className='hover:font-bold'>Sign in</Link>}
        </div>
        
    </div>
  )
}

export default Navbar