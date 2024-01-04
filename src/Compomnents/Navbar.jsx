import React, { useState } from 'react';
import images from '../assets/logo.jpg'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import NavItem from './NavItem';
import MobileNav from './MobileNav';



const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <div className=' flex sm:block justify-between bg-[#2D3250] p-4 w-full h-screen justify-items-stretch '>
            {/* logo section */}
            <div className='flex justify-center'>
                <img className='w-[100px] h-[100px] rounded-full mb-5' src={images} alt="" />
            </div>
            {/* mobile section nave items */}
            <div className='flex sm:hidden text-3xl text-white'>
  <FiMenu onClick={() => setOpen(!open)} />
  <div className={open ? 'visible absolute -ml-40' : 'hidden'}>
    <MobileNav />
  </div>
</div>

            {/* Nav items section */}
            <div className='hidden sm:flex w-full'><NavItem/></div>
            {/* icons section */}
            <div className='flex gap-2 mt-2 hidden sm:flex'>
                <span className='text-2xl border hover:duration-500  rounded-full p-2 cursor-pointer hover:bg-[#FAEF5D] hover:text-black hover:border border-[#FAEF5D]'><FaLinkedin /></span>
                <span className='text-2xl border rounded-full p-2 cursor-pointer hover:bg-[#FAEF5D] hover:text-black hover:duration-500 hover:border border-[#FAEF5D]'><FaGithub /></span>
                <span className='text-2xl hover:duration-500  border rounded-full p-2 cursor-pointer hover:bg-[#FAEF5D] hover:text-black hover:border border-[#FAEF5D]'><FaTwitter /></span>
                <span className='text-2xl hover:duration-500  border rounded-full p-2 cursor-pointer hover:bg-[#FAEF5D] hover:text-black hover:border border-[#FAEF5D]'><FaFacebook /></span>
            </div>
        </div>
    );
};

export default Navbar;