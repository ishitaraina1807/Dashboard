'use client';

import React from 'react';
import Image from 'next/image';
import ContractBox from './Box';

const MainPage = () => {
    return (
        <div className='flex flex-col items-center w-full font-sans p-6'>
            <div className='w-full max-w-4xl'>
                <div className="flex items-center mb-4">
                    <div>
                        <h1 className='text-3xl font-bold text-white'>
                            Welcome, <span className='text-yellow-400'>Farmer Name!</span>
                        </h1>
                        <p className='text-xl text-gray-300'>Here's your crop contract status</p>
                    </div>
                </div>
                
                {/* Dashboard for contracts */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <ContractBox 
                        image={
                            <Image
                                src="/wheat.jpg" // Ensure this path is correct
                                alt="Wheat"
                                width={80}
                                height={80}
                                className="object-cover rounded-lg"
                            />
                        }
                        date="28/02/2024" 
                        title="Wheat Contract" 
                        description="Price: ₹1500/qtl. Delivery due: 10/03/2024" 
                        status="In Progress" 
                    />
                    <ContractBox 
                        image={
                            <Image
                                src="/rice.jpg"
                                alt="Rice"
                                width={80}
                                height={80}
                                className="object-cover rounded-lg"
                            />
                        }
                        date="12/03/2024" 
                        title="Rice Contract" 
                        description="Price: ₹1300/qtl. Delivery due: 18/03/2024" 
                        status="Pending"
                    />
                    <ContractBox 
                        image={
                            <Image
                                src="/corn.jpg"
                                alt="Corn"
                                width={80}
                                height={80}
                                className="object-cover rounded-lg"
                            />
                        }
                        date="15/02/2024" 
                        title="Corn Contract" 
                        description="Price: ₹1200/qtl. Delivered on: 20/02/2024" 
                        status="Completed"
                    />
                    <ContractBox 
                        image={
                            <Image
                                src="/soyabean.jpg"
                                alt="Soybean"
                                width={80}
                                height={80}
                                className="object-cover rounded-lg"
                            />
                        }
                        date="20/02/2024" 
                        title="Soybean Contract" 
                        description="Price: ₹1700/qtl. Delivery due: 28/02/2024" 
                        status="In Progress" 
                    />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
