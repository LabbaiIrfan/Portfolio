import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300
        ${scrolled ? "bg-primary shadow-md backdrop-blur-lg" : "bg-transparent"}
      `}
      aria-label="Main Navigation"
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2 hover:opacity-80 transition duration-300 transform hover:scale-105'
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Irfan &nbsp;
            <span className='sm:block hidden'> | Carbon Coder</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`
                ${active === nav.title ? "text-white" : "text-secondary"}
                hover:text-white text-[18px] font-medium cursor-pointer transition duration-300 transform hover:scale-110
              `}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} aria-label={nav.title} className='smooth-scroll'>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer transition-transform duration-300 transform hover:rotate-90'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`
              ${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
              transition-opacity duration-300 ease-in-out opacity-100
            `}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`
                    font-poppins font-medium cursor-pointer text-[16px]
                    ${active === nav.title ? "text-white" : "text-secondary"}
                    hover:text-white transition duration-300
                  `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} aria-label={nav.title} className='smooth-scroll'>
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
