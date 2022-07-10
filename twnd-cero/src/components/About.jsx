import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>

                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold'>
                        Hola, soy desarrollador, mira las cosas que he hecho.
                    </p>
                </div>
                <div className='pb-8 px-4'>
                    <p className='text-xl'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Voluptates atque iusto illo maxime blanditiis omnis doloremque magnam, 
                        dignissimos possimus laborum praesentium, exercitationem ad quo odit eum 
                        quod harum sapiente beatae tempora consectetur saepe magni impedit. 
                        Cumque distinctio sapiente voluptatum itaque.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About