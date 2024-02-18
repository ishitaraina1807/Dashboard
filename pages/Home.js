import React from 'react'
import SideBar from '@/components/SideBar'
import MainPage from '@/components/MainPage'

const Home = () => {
  return (
    <div className='md:flex'>
      <SideBar progress={30} />
      <MainPage/>
    </div>
  )
}

export default Home
