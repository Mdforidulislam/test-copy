import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const MobileNav = () => {
    return (
        <div >
            <nav className='list-none w-full'>
                <li><a href='#Home'> Home </a></li>
                <li><a href='#Home'> About </a></li>
                <li><a href='#Home'> Contact </a></li>
                <li><a href='#Home'> Skills </a></li>
                <li><a href='#Home'> Project </a></li>
            </nav>
            <div className='flex gap-2 mt-2 sm:hidden '>
                <span className='text-2xl border hover:duration-500  rounded-full p-2 cursor-pointer hover:bg-[#FAEF5D] hover:text-black hover:border border-[#FAEF5D]'><FaLinkedin /></span>
                <span className='text-2xl border rounded-full p-2 cursor-pointer hover:bg-[#FAEF5D] hover:text-black hover:duration-500 hover:border border-[#FAEF5D]'><FaGithub /></span>
                <span className='text-2xl hover:duration-500  border rounded-full p-2 cursor-pointer hover:bg-[#FAEF5D] hover:text-black hover:border border-[#FAEF5D]'><FaTwitter /></span>
                <span className='text-2xl hover:duration-500  border rounded-full p-2 cursor-pointer hover:bg-[#FAEF5D] hover:text-black hover:border border-[#FAEF5D]'><FaFacebook /></span>
            </div>
        </div>
    );
};

export default MobileNav;