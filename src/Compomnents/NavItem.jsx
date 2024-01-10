import React from 'react';
import iconsHome from '../assets/flood.gif'
const NavItem = () => {
    return (
        <div className='w-full flex items-center h-full'>
             <nav className=''>
                    <ul className='space-y-2  w-full'>
                    <a href="#Home"><li className=' bg-[#FAEF5D] mt-2 cursor-pointer text-black px-6 py-2 rounded-md flex items-center h-full gap-2'> <img className='w-[50px]' src={iconsHome} alt="" /> Home</li></a>

                    <a href="#skils"><li className=' bg-[#FAEF5D] mt-2 cursor-pointer text-black px-6 py-2 rounded-md'>Skills</li></a>

                    <a href="#project"><li className=' bg-[#FAEF5D] mt-2 cursor-pointer text-black px-6 py-2 rounded-md'>Project</li></a>

                    <a href="#about"><li className=' bg-[#FAEF5D] mt-2 cursor-pointer text-black px-6 py-2 rounded-md'>About</li></a>

                    <a href="#educational"><li className=' bg-[#FAEF5D] mt-2 cursor-pointer text-black px-6 py-2 rounded-md'>Educational</li></a>

                    <a href="#contact"><li className=' bg-[#FAEF5D] mt-2 cursor-pointer text-black px-6 py-2 rounded-md'>Contact</li></a>
                    </ul>
                </nav>
        </div>
    );
};

export default NavItem;