import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
    return (
        <div id='educational' className='py-16'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold mb-8'>Education</h2>

                {/* Education Item 1 */}
                <div className='flex items-center mb-8'>
                    <div className='mr-4'>
                        <FaGraduationCap size={24} className='text-blue-500' />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>Bachelor of Science in Computer Science</h3>
                        <p className='text-gray-600'>University Name, City, State | Graduation Year</p>
                    </div>
                </div>

                {/* Education Item 2 */}
                <div className='flex items-center mb-8'>
                    <div className='mr-4'>
                        <FaSchool size={24} className='text-blue-500' />
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold mb-2'>High School Diploma</h3>
                        <p className='text-gray-600'>High School Name, City, State | Graduation Year</p>
                    </div>
                </div>

                {/* Add more education items as needed */}
            </div>
        </div>
    );
};

export default Education;
