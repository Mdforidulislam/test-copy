import React, { useState } from 'react';
import images from '../assets/logo.jpg';
import { FiMenu } from "react-icons/fi";
import NavItem from './NavItem';
import MobileNav from './MobileNav';



const Navbar = () => {
    const [open, setOpen] = useState(false)
    console.log(open);
    return (
        <div className=' flex sm:block justify-between bg-[#2D3250] p-4 w-full  items-center sm:h-screen h-[100px]'>
            {/* logo section */}
            <div className='flex justify-center '>
                <img className='sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] rounded-full mb-5 ' src={images} alt="" />
            </div>
            {/* mobile section nave items */}
            <div className='flex sm:hidden text-3xl text-white'>
                <FiMenu onClick={() => setOpen(!open)} />
                <div onClick={()=>setOpen(!open)} className={open ? 'visible absolute -ml-40' : 'hidden'}>
                    <MobileNav />
                </div>
            </div>

            {/* Nav items section */}
            <div className='hidden sm:flex w-full'><NavItem  /></div>
            
        </div>
    );
};

export default Navbar;