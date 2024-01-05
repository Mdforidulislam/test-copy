import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=' bg-[#2D3250] p-6 flex justify-center items-center w-full  '>
            <div>
                {/* icons section */}
            <div className='flex gap-2 mt-2  sm:flex'>
                <span className='text-2xl border hover:duration-500  rounded-full p-2 cursor-pointer hover:bg-[#FAEF5D] hover:text-black hover:border border-[#FAEF5D]'><FaLinkedin /></span>
                <span className='text-2xl border rounded-full p-2 cursor-pointer hover:bg-[#FAEF5D] hover:text-black hover:duration-500 hover:border border-[#FAEF5D]'><FaGithub /></span>
                <span className='text-2xl hover:duration-500  border rounded-full p-2 cursor-pointer hover:bg-[#FAEF5D] hover:text-black hover:border border-[#FAEF5D]'><FaTwitter /></span>
                <span className='text-2xl hover:duration-500  border rounded-full p-2 cursor-pointer hover:bg-[#FAEF5D] hover:text-black hover:border border-[#FAEF5D]'><FaFacebook /></span>
            </div>
           <h1 className=' text-center'>copy right by 2016</h1> 
            </div>
        </div>
    );
};

export default Footer;