import React from 'react'

function Prayer({name,time}) {
  return (
    <>
    <div className='name-time'>
    <p className='name-prayer'>{name}</p>
    <p className='time-prayer '>{time}</p>
    </div>
    </>
  )
}

export default Prayer