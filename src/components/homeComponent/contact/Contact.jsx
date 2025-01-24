"use client"

import React from 'react'
import OpenStreetMapComponent from './openStreetMapComponent/OpenStreetMapComponent'
import { useTranslations } from 'use-intl'



const Contact = () => {
  const contact = useTranslations("Contact")
  return (
    <div id='contact' className='scroll-mt-[3.1rem] py-0  bg-[#06194e] ' >
        <div className="  justify-center items-center flex  flex-col md:flex-row gap-4   w-full">
            <div className="  w-full py-6 flex px-4 mx-auto max-w-[45rem] flex-col justify-center items-center md:items-start gap-0 md:gap-8">
            <span className='font-light  leading-[3.5rem] md:text-md lg:text-xl uppercase 3xl:text-3xl text-[#eac19a]  '>
                {contact("title")}
              </span>
              <h1 className='text-3xl md:text-[2.6rem] lg:text-[4rem] 2xl:text-[4rem] font-bold text-gray-100 '>
              {contact("subtitle")}
              </h1>
              <div className="flex mt-5 gap-1 md:gap-4">
              <span className='font-light text-xl md:text-[2rem] lg:text-[3rem] 2xl:text-[4rem] text-[#eac19a]  '>
                Tel:
              </span>
              <a href='tel:+237671409434' alt="call +237 671 40 94 34 " className="text-xl md:text-[2rem] lg:text-[4rem] 2xl:text-[3rem] font-light text-gray-100 ">
                +237 671 40 94 34
              </a>
              </div>
            </div>
            <div className="z-10 w-full  md:w-[50vw] h-full">
           <OpenStreetMapComponent />
            </div>
        </div>
    </div>
  )
}

export default Contact