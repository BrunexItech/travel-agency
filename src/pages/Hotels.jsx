import React from 'react'
import Addition from '../components/Addition'
import { HiArrowNarrowRight } from 'react-icons/hi';
import New from '../components/New';


const Hotels = () => {
  return (
    <div>
        <div className="relative w-full h-[50vh]">
        <img
                        src="/images/about.jpg"
                        alt="About"
                        className="w-full h-full object-cover"
                      />
                
                      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
                        <h1 className="text-3xl md:text-5xl text-white font-semibold mb-1">
                          Hotels
                        </h1>
                        <div className="flex items-center text-white text-sm md:text-base font-light tracking-wider">
                          <span>Home</span>
                          <HiArrowNarrowRight className="mx-1 text-xl md:text-2xl" />
                          <span>Hotels</span>
                        </div>
                      </div>
        </div>
        <New/>
        <Addition/>
    </div>
  )
}

export default Hotels