import React from 'react'
import Logo from "../assets/images/ebits-logo 1.png"
import Share from "../assets/images/share-manager.png"


const Login = () => {
    return (
        <div className='h-screen w-full bg-amber-300'>
            <div className=' h-screen w-[30.25rem] bg-white'>
                <div className='pt-4 pl-[5.438rem]'>
                    <img className='' src={Logo} alt="company logo" />
                </div>
                <div className='flex justify-center items-center'>
                    <img className='p-[1.99rem]' src={Share} alt="company logo" />
                </div>
            </div>
        </div>
    )
}

export default Login
