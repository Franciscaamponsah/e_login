import React from 'react'

const Cards = ({ name, icon }) => {
    return (
        <div className='flex justify-center space-x-3 grid-rows-4 grid-flow-col'>
            <div className='w-[9.313rem] h-24 border rounded-lg flex justify-center items-center mt-[1.438rem] hover:bg-[#E0F2FE] hover:border-[#0086C9] hover:text-[#0086C9] cursor-pointer focus:bg-[#0086C9] active:bg-[#E0F2FE]'>
                <div className='flex flex-col justify-center text-center items-center'>
                    {/* <img className='pb-3 hover:border-[#0086C9]' src={icon} alt="" /> */}
                    <svg className='pb-3 h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"'>{icon}</svg>
                    <p className='leading-5'>{name}</p>
                </div>
            </div>
            {/* <div className='w-[9.313rem] h-24 border rounded-lg px-[1.125rem] flex justify-center items-center mt-[1.438rem]'>
                <p className='w-[7.313rem] h-[2.5rem] leading-5 text-center'>{name}</p>
            </div> */}
        </div>
    )
}

export default Cards
