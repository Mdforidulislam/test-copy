import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to server)
        console.log('Form submitted:', formData);
    };


 // Assuming you have contact information
 const phoneNumber = '+1 123-456-7890';
 const address = '123 Main St, City, Country';
 const emailAddress = 'info@example.com';

    return (
        <div id='contact' className='py-16'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold mb-8'>Contact</h2>

                <div className='block sm:flex'>
                    {/* Left side with text */}
                    <div className='mr-8 sm:w-2/4'>
                    <p className='text-white'>
                            Have a question or want to connect? Feel free to drop me a message using the form below. I'll get back to you as soon as possible.
                        </p>

                        {/* Additional Information with Icons */}
                        <ul className='mt-6'>
                            <li className='flex items-center mb-2'>
                                <FaPhone className='mr-2 text-blue-500' />
                                {phoneNumber}
                            </li>
                            <li className='flex items-center mb-2'>
                                <FaMapMarkerAlt className='mr-2 text-blue-500' />
                                {address}
                            </li>
                            <li className='flex items-center'>
                                <FaEnvelope className='mr-2 text-blue-500' />
                                {emailAddress}
                            </li>
                        </ul>
                    </div>

                    {/* Right side with form */}
                    <div className='flex-1'>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label htmlFor='name' className='block text-white font-semibold mb-2'>Name</label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 '
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='email' className='block text-white font-semibold mb-2'>Email</label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='address' className='block text-white font-semibold mb-2'>Address</label>
                                <input
                                    type='text'
                                    id='address'
                                    name='address'
                                    value={formData.address}
                                    onChange={handleChange}
                                    className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor='message' className='block text-white font-semibold mb-2'>Message</label>
                                <textarea
                                    id='message'
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows='4'
                                    className='w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500'
                                    required
                                />
                            </div>
                            <button type='submit' className='bg-[#FAEF5D] text-black py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue'>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
