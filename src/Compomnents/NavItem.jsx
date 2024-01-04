import React from 'react';

const NavItem = () => {
    return (
        <div className='w-full'>
             <nav className=''>
                    <ul className='space-y-2  w-full'>
                      <li className=' bg-[#FAEF5D] cursor-pointer text-black px-6 py-2 rounded-md'><a href="#Home">Home</a></li>
                      <li className='bg-[#FAEF5D] cursor-pointer  text-black px-6 py-2 rounded-md'><a href="#skils">Skilss</a></li>
                      <li className='bg-[#FAEF5D]  cursor-pointer text-black px-6 py-2 rounded-md'><a href="#project">Project</a></li>
                      <li className='bg-[#FAEF5D]  cursor-pointer text-black px-6 py-2 rounded-md'><a href="#about">About</a></li>

                      <li className='bg-[#FAEF5D]  cursor-pointer text-black px-6 py-2 rounded-md'><a href="#educational">Educational</a></li>
                      <li className='bg-[#FAEF5D]  cursor-pointer text-black px-6 py-2 rounded-md'><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
        </div>
    );
};

export default NavItem;