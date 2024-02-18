import React from 'react'

const LeaderBoard = () => {
    const users = [
        {
            position: 0o1,
            name: 'John Doe',
            xp: "0",
        },
        {
            position: 0o2,
            name: 'Jane Doe',
            xp: "0",
        },
        {
            position: 0o3,
            name: 'John Smith',
            xp: "0",
        },
        {
            position: 54,
            name: 'You',
            xp: "0",
        },
    ]
  return (
    <div className='bg-white shadow-lg bg-opacity-10 rounded-xl mt-4 pb-3'>
      <div className='bg-white shadow-white shadow-sm bg-opacity-20 rounded-xl p-3 text-center text-lg'>
       Leaderboard
      </div>
      <div>
        {users.map((user, index) => (
          <div
            key={index}
            className='flex justify-between items-center p-3 mx-3 bg-white shadow-white shadow-sm bg-opacity-20 rounded-xl mt-4 text-center text-sm'
          >
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-4'>
                <h1 className='text-md text-yellow'>{user.position}.</h1>
                <div className='w-4 h-4 rounded-full bg-white'></div>
                <h1>{user.name}</h1>
              </div>
            </div>
            <div className="flex gap-2">
            <h1>{user.xp}/233</h1>
            <h1 className='text-yellow'>XP</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LeaderBoard
