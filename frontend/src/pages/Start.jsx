import react from 'react'
import myImage from '../../image/home.png'
import { Link } from 'react-router-dom'


const Start = () => {
  return (
    <div>
        <div className=' bg-cover bg-center bg-[url("../../image/home.png")] h-screen pt-8  flex justify-between flex-col w-full'>
            <img className='w-16 ml-8' src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" alt="" />
            <div className='bg-white py-4 pb-7 px-4'>
                <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>
                    Continue
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Start