import React from 'react'

const Hero = () => {
  return (
    <div className="w-full   h-screen bg-cover bg-center flex flex-col text-white text-center items-center justify-center px-4 font-poppins"
    style={{backgroundImage: "url('/Hero.jpg')",}}>

        <p className=" text-lg tracking-widest uppercase mb-4">Escape the Ordinary</p>
        <h1 className='text-5xl md:text-6xl font-bold leading-tight '>Explore Kenyan Wonder</h1>
        <p className='max-w-xl text-lg mb-8'>Discover new places, meet new cultures, and create lifelong memories. Our team is passionate about helping you travel with confidence, comfort, and excitement — every step of the way.</p>
        <button className='bg-yellow-500 hover:bg-gray-800 font-semibold py-3 px-6 uppercase shadow-lg transition duration-300'>Get Started</button>



    </div>
  )
}

export default Hero