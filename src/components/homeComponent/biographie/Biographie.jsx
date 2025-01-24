
"use client"

import Image from 'next/image';
import { useTranslations } from 'use-intl';
const Biographie = () => {
  const biographieElement = useTranslations("Biographie")
  const biographie = biographieElement.raw("biographie")
  return (
    <div id='biographie' className='bg-blue-100 scroll-mt-8 flex flex-col '>
   
      <div className='mx-auto  md:pt-8  px-4 max-w-[100rem] justify-center items-center flex flex-col gap-4   w-full'>
        <h1 className='py-8 text-2xl md:text-5xl uppercase font-bold text-center underline  text-[#6a4f40]'>
          {biographie.title}
        </h1>
        <p className=' md:mt-8 text-center md:text-left text-md md:text-2xl font-light text-[#06194e]'>
        {biographie.subtitle}
        </p>
        <div className='p w-full  flex flex-col md:flex-row-reverse  gap-4'>
          <div className='relative  w-full pt-2 flex gap-4 justify-center flex-col'>
            <h1 className='mb-5 text-2xl md:text-3xl font-bold text-center md:text-left   text-[#6a4f40]'>
              {biographie.secondTitle}
            </h1>
            {biographie.infosArray.map((item, index) => (
              <ul key={index} className='list-disc list-inside '>
                <li className='text-md md:text-2xl font-light text-[#06194e]'>
                  {item}
                </li>
              </ul>
            ))}

          </div>
          <div className="w-full flex justify-center items-center ">
          <Image src={biographie.image} className='w-[12rem]  md:w-[25rem] h-full object-cover' alt='tentchou' width={1000} height={1000} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Biographie;
