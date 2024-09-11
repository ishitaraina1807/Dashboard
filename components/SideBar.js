'use client';

import React from 'react';
import { Home, Book, Globe, User, LogOut } from 'lucide-react';

const SideBar = () => {
    return (
        <div
            className='md:h-screen md:w-1/3 text-white shadow-xl p-4 font-sans'
            style={{
                background: 'linear-gradient(#354740, #2d2d2d)',
            }}
        >
            <div className="flex text-white items-center gap-2 mb-8">
                <img src="/api/placeholder/50/50" alt="Logo" className="w-12 h-12" />
                <div className='text-3xl'>KRISHIमंडी</div>
            </div>

            <div className='space-y-6'>
                {/* Home */}
                <button className='flex items-center gap-4 w-full bg-white bg-opacity-10 p-4 rounded-xl'>
                    <Home size={24} />
                    <span className='text-xl'>Home</span>
                </button>

                {/* Contracts */}
                <div>
                    <button className='flex items-center gap-4 w-full bg-white bg-opacity-10 p-4 rounded-xl'>
                        <Book size={24} />
                        <span className='text-xl'>Contracts</span>
                    </button>
                    <div className='mt-2 ml-12 space-y-2'>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-green-400'></div>
                            <span>Total Contracts: 5</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-yellow-400'></div>
                            <span>Active Contracts: 2</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 rounded-full bg-blue-400'></div>
                            <span>Ongoing Delivery: 1</span>
                        </div>
                    </div>
                </div>

                {/* Language Selector */}
                <div>
                    <button className='flex items-center gap-4 w-full bg-white bg-opacity-10 p-4 rounded-xl'>
                        <Globe size={24} />
                        <span className='text-xl'>Language</span>
                    </button>
                    <select className='mt-2 w-full p-3 rounded-lg bg-gray-800 text-white text-lg'>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Marathi">Marathi</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Telugu">Telugu</option>
                    </select>
                </div>
            </div>

            <div className='mt-8 space-y-4'>
                <div className='flex items-center gap-4 bg-white bg-opacity-10 p-4 rounded-xl'>
                    <User size={24} />
                    <span className='text-xl'>Farmer Name</span>
                </div>

                <button className="flex items-center gap-4 w-full bg-red-500 bg-opacity-80 p-4 rounded-xl">
                    <LogOut size={24} />
                    <span className='text-xl'>Sign Out</span>
                </button>
            </div>
        </div>
    );
};

export default SideBar;
