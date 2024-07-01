import React from 'react'
import Logo from "../assets/images/ebits-logo 1.png"
import Share from "../assets/images/share-manager.png"
import Bitcoin from "../assets/images/bitcoin-image.jpg"
import PoweredBy from "../assets/images/powered-by.png"
import Forms from '../components/Forms'
import Products from '../components/Products'
import Cards from '../components/Cards'
import Assets from "../assets/icons/assets-logo.svg"
import Resource from "../assets/icons/human-resource-logo.svg"
import Loans from "../assets/icons/loans.svg"
import Banking from "../assets/icons/mobile-bank.svg"


const Login = () => {
    return (
        <>
        
        <div className='h-full flex'>
            <div className=' w-[30.25rem]  '>
                <div className='pt-4 pl-[5.438rem]'>
                    <img className='' src={Logo} alt="company logo" />
                </div>
                <div className='justify-center '>
                    <div className='flex justify-center'>
                        <img className='p-[1.99rem]' src={Share} alt="company logo" />
                    </div>
                    <div className='flex justify-center text-lg leading-5'>
                        <p>Staff Login</p>
                    </div>
                </div>
                <Forms />
                <Products />
                <Cards 
                name="Fixed Assets Manager" icon={Assets}/>
                <Cards name="Human Resource Manager" icon={Resource}/>
                <Cards name="Loans Manager" icon={Loans}/>
                <Cards name="Mobile Banking" icon={Banking}/>
                <div className='mt-[1.438rem] mb-11 flex justify-center '>
                    <img src={PoweredBy} alt="" />
                </div>
            </div>
            <div className=' w-[59.75rem] bg-orange-600'>
                <img src={Bitcoin} className='h-full' alt="bitcoin image" />
            </div>
        </div>
        </>
    )
}

export default Login
