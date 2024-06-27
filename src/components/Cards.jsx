import React from 'react'

const Cards = ({name, image}) => {
    return (
        <div className='flex justify-center space-x-3 '>
            <div className='w-[9.313rem] h-24 border rounded-lg px-[1.125rem] flex justify-center items-center mt-[1.438rem] hover:bg-[#E0F2FE] hover:border-[#0086C9] hover:text-[#0086C9] cursor-pointer focus:bg-[#0086C9] active:bg-[#E0F2FE]'>
                <p className=' leading-5 text-center '>{name}</p>
            </div>
            {/* <div className='w-[9.313rem] h-24 border rounded-lg px-[1.125rem] flex justify-center items-center mt-[1.438rem]'>
                <p className='w-[7.313rem] h-[2.5rem] leading-5 text-center'>{name}</p>
            </div> */}
        </div>
    )
}

export default Cards
