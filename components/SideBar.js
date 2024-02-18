import React from 'react';
import LeaderBoard from './LeaderBoard';

const SideBar = ({ progress }) => {
    const strokeDashoffset = 400 - (400 * progress) / 100;
    return (
        <div
            className='md:h-[100vh] md:w-1/3 text-white shadow-xl p-8 font-sans'
            style={{
                background: 'linear-gradient(#354740, #2d2d2d)',
            }}
        >
            <div className="flex text-white items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white"></div>
                <div className='text-2xl'>Chat<b>Sat</b></div>
            </div>
            <div className='bg-white shadow-white shadow-sm bg-opacity-20 p-3 rounded-xl mt-4'>
                <h1 className='text-md'>New Thread</h1>
            </div>
            <div className="bg-white bg-opacity-20 flex justify-center items-items mt-4 rounded-xl shadow-lg">
                <div className="relative h-32">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        {/* Background circle */}
                        <circle
                            className="text-gray-700 stroke-current"
                            strokeWidth="8"
                            cx="50"
                            cy="50"
                            r="30"
                            fill="transparent"
                        />
                        {/* Progress circle */}
                        <circle
                            className="text-yellow progress-ring__circle stroke-current"
                            strokeWidth="8"
                            strokeLinecap="round"
                            cx="50"
                            cy="50"
                            r="30"
                            fill="transparent"
                            strokeDasharray="400"
                            strokeDashoffset={strokeDashoffset}
                        />
                        {/* Center text */}
                        <text
                            x="50"
                            y="50"
                            fontSize="12"
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            fill="white"
                        >
                            {`4/7`}
                        </text>
                    </svg>
                </div>
                <div>
                    <div className='flex mt-8 leading-20'>
                        <h1 className='text-xl'>0/233</h1>
                        <h1 className='text-yellow text-xl'>XP</h1>
                    </div>
                    <div className='bg-white bg-opacity-20 rounded-lg mt-2 text-center text-yellow p-2 hover:cursor-pointer hover:scale-110 duration-300'>
                        Take a quiz
                    </div>
                </div>
            </div>
            <LeaderBoard />
            <div className='flex items-center gap-3 mt-4'>
                <div className='w-8 h-8 rounded-full bg-white'></div>
                <h1>Name</h1>
            </div>
            <div className="flex items-center gap-3 mt-2">
                <img src='/assets/logout.png' alt='Log Out' width={20} height={20} />
                <h2>Sign out</h2>
            </div>
        </div>
    );
};

export default SideBar;
