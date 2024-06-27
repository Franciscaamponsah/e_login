import React from 'react'

const Select = () => {
  return (
    <div className='flex flex-col'>
    <label htmlFor='category' className='text-[0.875rem] leading-5 pb-[0.375rem]'>
        {/* {label} */}
        Login as
    </label>
    <select id="category" name='category'
        className='w-[16.375rem] rounded-lg px-[0.875rem] py-[0.625rem] border space-x-[0.375rem]'
    />
</div>

  )
}

export default Select
