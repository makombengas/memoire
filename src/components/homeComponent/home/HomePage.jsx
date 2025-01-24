import Image from 'next/image';
import {useTranslations} from 'next-intl';
const HomePage = () => {
  const t = useTranslations("Home")
  return (
    <div className='h-screen'>
       <div className="relative">
       <Image
            src={'/images/Tissu-pagne.png'}
            className='absolute  w-screen h-screen object-cover'
            width={1000}
            height={1000}
            alt='tentchou'
         
          />
      <div id='home' className='absolute top-0  w-full bg-blue-950/90 z-30'>
        <div className=' flex items-center justify-around h-screen'>
          <div className='z-30 absolute md:static bg-white md:bg-inherit w-screen bottom-0 h-[20rem]  md:w-full md:h-full '>
            <div className='py-4  flex flex-col items-center justify-center h-full md:py-6 gap-2  md:gap-[1.5rem] lg:gap-[2.5rem]'>
              <span className='font-light  md:text-md lg:text-xl 2xl:text-3xl text-[#6a4f40]  md:text-[#eac19a]'>
                {t("title")}
              </span>
              <h1 className='text-3xl md:text-[3rem] lg:text-[4rem] 2xl:text-[6rem] font-bold text-[#06194e] md:text-white'>
              {t("name")}
              </h1>
              <div className='flex-col md:flex-row  flex items-center gap-2'>
                <span className='md:text-2xl font-bold text-[#6a4f40] md:text-[#eac19a]'>
                {t("bornName")}
                </span>
                <h1 className='text-2xl md:text-3xl font-bold text-[#06194e] md:text-white'>
                {t("secondName")}
                </h1>
              </div>
              <h1 className='text-3xl md:text-[4rem] 2xl:text-[6rem] font-bold text-[#6a4f40] md:text-[#eac19a]'>
              {t("year")}
              </h1>
              <p className='font-light mx-0 max-w-[50rem]  text-[#06194e] md:text-gray-200 text-center px-4 text-[.65rem] md:text-sm lg:text-lg   '>
              {t("subtitle")}
              </p>
              <span className='text-gray-400 text-left md:text-2xl '>
              {t("psaume")}
              </span>
            </div>
          </div>
          <Image
            src='/images/maman.png'
            className=' z-20  saturate-150  w-[25rem] 2xl:w-[35rem] h-full object-cover'
            alt='maman'
            width={500}
            height={500}
            priority
          placeholder='blur'
          blurDataURL={'/images/maman.png'}
       
       
        
          />
        </div>
      </div>
       </div>
    </div>
  );
};

export default HomePage;
