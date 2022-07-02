import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon
} from '@heroicons/react/solid'

import bgImg from '../assets/reloj.jpg'

export default function Hero() {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[1240px] my-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
          <p className='text-2xl'>Cosas y cosas</p>
          <h1 className='py-3 text-5xl md:text-7xl font-bold'>Cloud App</h1>
          <p className='text-2xl'>Tech brand</p>
          <button className='py-3 px-6 sm:w-[60%] my-4'>Get started</button>
        </div>
        <div>
          <img className='w-full' src={bgImg} alt="reloj"/>
        </div>
        <div className='
          absolute flex flex-col py-8 md:min-w-[768px] 
          bottom-[5%] mx-1 md:left-1/2 transform 
          md:-translate-x-1/2 bg-zinc-200 border border-slate-300
          rounded-xl text-center shadow-xl
        '>
          <p>Data services</p>
          <div className='flex justify-between flex-wrap px-4'>
            <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600'/> App Security</p>
            <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600'/> Dashboard</p>
            <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600'/> Cloud data</p>
            <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600'/> API</p>
          </div>
        </div>
      </div>
    </div>
  )
}
