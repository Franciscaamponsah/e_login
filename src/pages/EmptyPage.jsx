import React from 'react'

const EmptyPage = ({title}) => {
  return (
    <div className='h-screen text-stone-700 text-5xl flex justify-center items-center text-center'>
      <p>{title}</p>
    </div>
  )
}

export default EmptyPage
