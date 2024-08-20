import React from 'react'

const Landing = () => {
    return (
        
        <div className='bg-[#1090CB1A] flex w-full h-full px-20 py-24 font-poppins'>

        <div className='left flex flex-col gap-10 lg:w-1/2 md:w-full'>
            <div>
                <p className='text-5xl font-bold'>
                    Empowering Your Business with <span className='text-[#1090CB]'> Innovative Technology Solutions</span>
                </p>
            </div>
            <div>
                <p className='text-base text-[#5C5C5C]'>
                    At Cyan Cloud Technologies, we provide cutting-edge solutions tailored to optimize your business operations. Whether you’re managing a medical practice, automating workflows, or analyzing complex data, our tools are designed to simplify your processes and deliver results
                </p>
            </div>
            <div className='flex items-center gap-5'>
                <button className='px-10 py-2 rounded-lg bg-[#1090CB] text-white border-2 transition hover:border-[#1090CB] hover:bg-white hover:text-[#1090CB]'>Contact Us</button>
                <button className='px-10 py-2 rounded-lg hover:bg-[#1090CB] bg-white hover:text-white border-2 transition border-[#1090CB] text-[#1090CB]'>View More</button>
            </div>

        </div>
        <div className='right w-1/2 lg:flex hidden'>
            <img src='land.svg' />
        </div>
    </div>
          
    )
}

export default Landing