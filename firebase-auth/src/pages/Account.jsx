import React from 'react'
import { UserAuth } from '../context/AuthContext'

function Account() {
    const { user, logOut } = UserAuth()

    const handleLogOut = async () => {
        try {
          await logOut()
        } catch (error) {
          console.log(error)
        }
      }
        
    return (
        <div className='w-[300px] m-auto'>
            <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
            <div>
                <p>Welcome {user ? user.displayName : 'User'}</p>
            </div>
            <button onClick={handleLogOut} className='border py-2 px-5 mt-10 rounded-sm'>Logout</button>
        </div>
    )
}

export default Account