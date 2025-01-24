"use client"
import Image from "next/image"
import { useTranslations } from "use-intl"


const FairePart = () => {
  const fairePartElem = useTranslations("FairePart")
  const fairePart = fairePartElem.raw("fairePart")
  return (
    <div className="">
      <div id="fairepart" className=" flex-col py-0 scroll-mt-[2.5rem] md:py-[6rem]  w-full flex justify-center items-center relative">
        <Image
            src={'/images/Tissu-pagne.png'}
            className='w-full h-5 md:hidden object-cover'
            alt="tissu-pagne"
            width={1000}
            height={1000}   />
            <div className=" w-full py-8 h-full    ">
                <div className="flex flex-col gap-6  bg-white  h-full md:h-auto  p-4 ">
                          <h1 className="text-2xl md:text-5xl uppercase font-bold text-center underline  text-[#6a4f40]">
                            {fairePart[0].title}
                          </h1>
                    <div className=" place-content-center  mx-auto max-w-[100rem] flex gap-4 flex-col md:flex-row  md:gap-32 w-full ">
                    {
                      fairePart.map((item) => (
                        <div key={item.id} className="">
                          <div className="pt-8 flex gap-2 flex-col">
                          {
                            item.infosArray.map((item) => (
                              <ul key={item} className="list-disc list-inside">
                              <li className="text-md md:text-2xl font-light text-[#06194e]">
                                {item}
                              </li>
                            </ul>
                            ))
                          }
                          </div>
                        </div>
                      ))
                    }
                
                    </div>
                </div>
                    <div className="px-4  md:mt-16  w-full mx-auto max-w-[100rem]">
                      <p className="text-center text-md md:text-2xl font-light text-gray-600">
                        {
                          fairePart[0].subtitle}
                      </p>
                    </div>
            </div>
    </div>
    </div>
  )
}

export default FairePart