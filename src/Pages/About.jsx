import React from 'react';
import { FaCode, FaServer, FaDatabase } from 'react-icons/fa';
import images from '../assets/logo.jpg'

const About = () => {
    return (
        <div id='about' className='h-screen flex flex-col justify-center items-center text-center'>
            <div className='mb-6'>
                <h1 className='text-4xl font-bold mb-2'>About Me</h1>
                <p className='text-gray-500'>MERN Stack Developer</p>
            </div>
            <div className='flex items-center justify-center mb-6'>
                {/* Add your personal logo or avatar here */}
                <img src={images} alt="Your Logo" className="rounded-full h-20 w-20 mr-4" />
                <div>
                    <p className='text-xl font-bold'>Your Full Name</p>
                    <p className='text-gray-500'>MERN Stack Developer</p>
                </div>
            </div>
            <div className='text-white'>
                <p className='mb-4'>
                    Hello! I'm a passionate MERN Stack Developer with experience in both front-end and back-end development.
                </p>
                <p className='mb-4'>
                    I enjoy crafting user-friendly interfaces and building robust and scalable server-side solutions. 
                    My journey involves working on diverse projects, leveraging technologies such as MongoDB, Express.js, React.js, and Node.js.
                </p>
                <p className='mb-4'>
                    Always eager to learn and explore new technologies, I thrive on turning ideas into reality through clean and efficient code.
                </p>
            </div>
            <div className='flex mt-6'>
                <div className='mr-4'>
                    <FaCode size={40} className='text-blue-500' />
                    <p>Front-end Development</p>
                </div>
                <div className='mr-4'>
                    <FaServer size={40} className='text-green-500' />
                    <p>Back-end Development</p>
                </div>
                <div>
                    <FaDatabase size={40} className='text-yellow-500' />
                    <p>Database Management</p>
                </div>
            </div>
        </div>
    );
};

export default About;
