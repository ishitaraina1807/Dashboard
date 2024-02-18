import React from 'react'
import Box from './Box'

const MainPage = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full font-sans'>
            <div className='lg:ml-[-160px]'>
                <div className="flex md:text-3xl text-xl font-bold">
                    <h1 className='text-white'>Hey, <b className='font-medium text-yellow'>Name!</b></h1>
                </div>
                <div className="flex md:text-3xl text-lg font-bold">
                    <h1 className='text-white'>How's your prep for the <b className='text-yellow font-medium'> March SAT </b></h1>
                </div>
            </div>
            <div className="grid md:grid-cols-2 md:grid-rows-2 gap-8 mt-8">
                <Box Date="28/02/2024" Title="Mock" Description="Some short one liner description about the title" />
                <Box Date="12/03/2024" Title="Practice" Description="Some short one liner description about the title" />
                <Box Date="15/02/2024" Title="Mock 2" Description="Some short one liner description about the title" />
                <Box Date="20/02/2024" Title="MCQs" Description="Some short one liner description about the title" />
            </div>
        </div>
    )
}

export default MainPage
