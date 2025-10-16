import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-[#f3f6fa]'>
            <div className='w-[85%] flex flex-wrap mx-auto border-b py-16 md-lg:pb-10 sm:pb-6'>

                <div className='w-3/12 lg:w-4/12 sm:w-full'>
                    <div className='flex flex-col gap-3'>
                        <img className='w-[190px] h-[70px]' src="http://localhost:3000/images/logo.png" alt="" />
                        <ul className='flex flex-col gap-2 text-gray-600'>
                            <li>Address: 2504 Ivins Avenue, Egg Harbor Township, NJ 08234,</li>
                            <li>Phone: +1237812637812</li>
                            <li>Support: support@sahasok.com</li>
                        </ul>
                    </div>
                </div>

                <div className='w-5/12 lg:w-8/12 sm:w-full'>
                    <div className='flex justify-center sm:justify-start sm:mt-6 w-full'>
                        <div>
                            <h2 className='font-bold text-lg mb-2'>Usefull Links</h2>
                            <div className='flex justify-between gap-[80px] lg:gap-[40px]'>

                                <ul className='flex flex-col gap-2 text-gray-600 text-sm'>
                                    <li>
                                        <Link to='#'>About Us</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>About Our Shop</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>Delivary Information</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>Blogs</Link>
                                    </li>
                                </ul>

                                <ul className='flex flex-col gap-2 text-gray-600 text-sm'>
                                    <li>
                                        <Link to='#'>Our Service</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>Company Profile</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>Delivary Information</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>Blogs</Link>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-4/12 lg:w-full lg:mt-6'>
                    <div className='w-full flex flex-col justify-start gap-5'>
                        <h2 className='font-bold text-lg mb-2'>Join Our Shop</h2>
                        <span>Get email update about our latest and shop specials offers</span>
                        <div className='h-[50px] w-full bg-white border relative'>
                            <input type="text" className='h-full bg-transparent w-full px-3 outline-0' placeholder='Enter Yor Email Hir....' />
                            <button className='h-full absolute right-0 bg-[#059473] text-white upppercase px-4 font-bold text-sm'>Subscribe</button>
                        </div>

                        <ul className='flex justify-start items-center gap-3'>

                            <li><a className='w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white rounded-full' href="#"> <FaFacebookF /> </a></li>

                            <li><a className='w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white rounded-full' href="#"> <FaTwitter /> </a></li>

                            <li><a className='w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white rounded-full' href="#"> <FaLinkedin /> </a></li>

                            <li><a className='w-[38px] h-[38px] hover:bg-[#059473] hover:text-white flex justify-center items-center bg-white rounded-full' href="#"> <FaGithub /> </a></li>

                        </ul>

                    </div>
                </div>

            </div>

            <div className='w-[90%] flex flex-wrap justify-center items-center text-gray-600 mx-auto py-5 text-center'>
            <span>Copyright @ 2025 All Rights Reserved</span>
            </div>

        </footer>
    );
};

export default Footer;