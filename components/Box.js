'use client'
import React from 'react'
import Image from 'next/image'
import increase from '../public/assets/increase.png'

const Box = ({Date, Title, Description}) => {
  return (
    <div className='bg-white xl:w-80 w-60 bg-opacity-10 py-3 px-8 shadow-xl border-gray-500 border-[0.1px] rounded-xl text-gray-400 hover:bg-opacity-20 hover:cursor-pointer hover:scale-110 duration-300'>
      <p className='text-sm'>Last Practice Linear etc etc</p>
      <p>{Date}</p>
      <Image className='w-28' src={increase} alt='increase' />
      <h1 className='text-2xl text-white'>{Title}</h1>
      <p className='text-gray-300 text-sm mt-2'>{Description}</p>
    </div>
  )
}

export default Box
