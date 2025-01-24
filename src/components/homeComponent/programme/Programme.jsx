'use client'
import Image from 'next/image';
import { useTranslations } from 'use-intl';

const Programme = () => {
  const programmeElement = useTranslations("Programme")
  const programme = programmeElement.raw("programme")
  return (
    <div
      id='programme'
      className='scroll-mt-[2.5rem] justify-center items-center flex flex-col gap-4   w-full'>
      <div
        id='fairepart'
        className='flex-col -scroll-mt-5 md:py-[6rem]  w-full flex justify-center items-center relative'>
        <Image
          src={'/images/Tissu-pagne.png'}
          className='w-full h-5 md:hidden object-cover'
          alt='tissu-pagne'
          width={1000}
          height={1000}
        />
        <div className='py-8 w-full h-full    '>
          <div className='flex flex-col gap-6   bg-white  h-full md:h-auto  p-4 '>
          <h1 className='text-2xl  md:text-5xl uppercase font-bold text-center underline  text-[#6a4f40]'>
                    {programme[0].title}
                  </h1>
            <div className=' place-content-center  mx-auto max-w-[100rem] flex gap-4 flex-col md:flex-row  md:gap-32 w-full '>
              {programme.map((item) => (
                <div key={item.id} className=''>
                
                  <div className='pt-8 flex gap-4 flex-col'>
                    {item.infosArray.map((item) => (
                      <div key={item.id} className=''>
                        <ul className='list-disc list-inside'>
                          <li className='text-md md:text-2xl font-bold text-[#06194e]'>
                            {item.title}
                          </li>
                        </ul>
                        <p className="text-md md:text-2xl font-light text-[#06194e]">
                          {item.subtitle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='px-4  md:mt-16 flex flex-col gap-2 justify-center items-center  w-full mx-auto max-w-[100rem]'>
            <div className="w-[15rem] h-[15rem]  md:w-[20rem] rounded-full md:h-[20rem]  bg-[url(/images/tissu-pagne.png)]">
            <Image src="/images/programme.png" className='saturate-150  w-[15rem] h-[15rem]  md:w-[20rem]  md:h-[20rem]  object-left-top rounded-full  object-cover' alt='tentchou' width={1000} height={1000} />
            </div>
            <p className='text-center text-md md:text-2xl font-light text-gray-600'>
              {programme[0].subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programme;
