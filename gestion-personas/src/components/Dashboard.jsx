import React from 'react'
import {
    AiFillCheckCircle
} from 'react-icons/ai'

function Dashboard() {
  return (
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-600'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h3 className='text-5xl font-bold py-8'>The right price for you.</h3>
                <p className='text-3xl'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Fugiat fugit voluptas est dolores qui. Odit quia natus 
                    labore aspernatur velit.
                </p>
            </div>

            <div className='grid md:grid-cols-2'>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/month</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className='text-2xl'>
                        <p className='flex py-4'><AiFillCheckCircle className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><AiFillCheckCircle className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><AiFillCheckCircle className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><AiFillCheckCircle className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><AiFillCheckCircle className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
                <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Pro</span>
                    <div>
                        <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/month</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className='text-2xl'>
                        <p className='flex py-4'><AiFillCheckCircle className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><AiFillCheckCircle className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><AiFillCheckCircle className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><AiFillCheckCircle className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className='flex py-4'><AiFillCheckCircle className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard