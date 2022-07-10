import React from 'react'
import HtmlIcon from '../assets/html.jpg'
import ReactIcon from '../assets/react.jpg'
import PyIcon from '../assets/python.jpg'
import GithubIcon from '../assets/github.jpg'
import VsCodeIcon from '../assets/vscode.jpg'
import SlackIcon from '../assets/slack.jpg'

function Experience() {
  return (
    <div name='experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                <p className='py-4'>These are the technologies i have worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8 gap-y-4'>
                <div className='bg-[#0a192f] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={HtmlIcon} alt='html' className='h-20 mx-auto'/>
                    <p>HTML</p>
                </div>
                <div className='bg-[#0a192f] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={ReactIcon} alt='html' className='h-20 mx-auto'/>
                    <p>React</p>
                </div>
                <div className='bg-[#0a192f] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={PyIcon} alt='html' className='h-20 mx-auto'/>
                    <p>Python</p>
                </div>
                <div className='bg-[#0a192f] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={GithubIcon} alt='html' className='h-20 mx-auto'/>
                    <p>Github</p>
                </div>
                <div className='bg-[#0a192f] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={SlackIcon} alt='html' className='h-20 mx-auto'/>
                    <p>Slack</p>
                </div>
                <div className='bg-[#0a192f] shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img src={VsCodeIcon} alt='html' className='h-20 mx-auto'/>
                    <p>VsCode</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience