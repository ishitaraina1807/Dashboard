'use client';

import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

const ContractBox = ({ image, date, title, description, status }) => {
    // Status configuration
    const statusConfig = {
        'Completed': { color: 'text-green-500', icon: <CheckCircle className="text-green-500" /> },
        'In Progress': { color: 'text-yellow-500', icon: <Clock className="text-yellow-500" /> },
        'Pending': { color: 'text-red-500', icon: <AlertCircle className="text-red-500" /> }
    };

    const { color, icon: statusIcon } = statusConfig[status] || statusConfig['Pending'];

    return (
        <div className='bg-white bg-opacity-10 p-6 rounded-xl text-white hover:bg-opacity-20 hover:cursor-pointer transition-all duration-300 shadow-lg'>
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <div className="mr-4">
                        {image}
                    </div>
                    <div>
                        <h2 className='text-2xl font-bold'>{title}</h2>
                        <p className='text-sm text-gray-400'>Contract Date: {date}</p>
                    </div>
                </div>
                <div className={`flex items-center ${color}`}>
                    {statusIcon}
                    <span className='ml-2 font-semibold'>{status}</span>
                </div>
            </div>
            <p className='text-gray-300 mt-2'>{description}</p>
        </div>
    );
};

export default ContractBox;