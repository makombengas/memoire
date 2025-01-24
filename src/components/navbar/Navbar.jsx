'use client';


import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslations } from 'use-intl';
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [bgScrolling, setBgScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navElem = useTranslations('Nav');
  const nav = navElem.raw('nav');
  const logo = useTranslations('Home');

  useEffect(() => {
    const handleScroll = () => {
      // Change background on scroll
      setBgScrolling(window.scrollY >= 80);

      // Detect active section
      const sections = nav.map(item => document.getElementById(item.url.slice(1)));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check home section first (always at top)
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      // Check other sections
      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop && 
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(nav[index].url.slice(1));
          }
        }
      });
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`
        ${bgScrolling ? 'bg-[#06194e]' : 'bg-inherit'} 
        fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-linear
      `}
    >
      <div className='relative w-full mx-auto max-w-[100rem] flex text-white justify-between py-4 px-4'>
        <Link
          href='/'
          className='flex justify-center items-center absolute top-1 z-50 cursor-pointer'
          onClick={closeMenu}
        >
          {bgScrolling ? (
            <div className='flex flex-col  justify-center items-center font-bold uppercase'>
              <h1 className='text-[1rem]  md:text-[1.5rem]'>{logo("logo")}</h1>
              <p className='text-gray-300 font-light text-[.32rem] md:text-[.5rem]'>
               {logo("logoName")}
              </p>
            </div>
          ) : (
            <Image
              src='/images/logo.png'
              className='w-16 md:w-32 2xl:w-full'
              width={250}
              height={250}
              alt='tentchou'
              priority
            />
          )}
        </Link>
        
        <div className='items-center flex  w-full justify-end'>
      
          <div
            className='relative z-50 flex gap-[.25rem] flex-col text-white md:hidden'
            onClick={toggleMenu}
          >
            <hr
              className={`
                w-6 py-[.025rem] bg-white 
                ${open ? 'rotate-45 ' : 'rotate-0'}
                transition-transform ease-in duration-300
              `}
            />
            <hr
              className={`
                w-6 py-[.025rem] bg-white 
                ${open ? ' -rotate-45 absolute' : 'rotate-0'}
                transition-transform ease-in duration-300
              `}
            />
            <hr
              className={`
                w-6 py-[.035rem] bg-white 
                ${open ? 'opacity-0' : 'opacity-100'}
                transition-opacity ease-in duration-300
              `}
            />
          </div>
        
          <div
            className={`
              ${open ? 'flex flex-col gap-4 md:gap-0 justify-center items-center absolute top-0 left-0 w-full h-screen md:h-auto md:flex-row md:static md:bg-inherit md:justify-end bg-[#06194e]' : 'hidden'}
              md:flex md:items-center
            `}
          >
            {nav.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className={`
                  ${activeSection === item.url.slice(1) 
                    ? 'bg-[#eac19a] font-bold text-[#06194e]' 
                    : 'hover:text-gray-400'}
                  px-2 xl:px-4 text-xl md:text-[.85rem] xl:text-[.95rem] 2xl:text-lg 
                  uppercase
                `}
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            ))}
              <div className="md:ml-4">
            <LanguageSwitcher />
          </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;