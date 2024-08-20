import React from 'react'

const Benefits = () => {
  return (
    <div className='px-20 py-24 font-poppins'>
        <div className='flex flex-col gap-5 px-10  justify-center items-center text-center'>
          <p className='text-3xl font-semibold'>Why Choose Us?</p>
          <p className='text-lg text-[#868686] text-center'>We are more than just software provider we are your tech partners. Our solutions are designed to streamline your workflow, save costs, and increase productivity.</p>
        </div>
        <div className='flex w-full mt-32 '>
          <div className='flex flex-col w-1/2 gap-16'>
            <div className='flex gap-5 justify-start items-center'>
              <div className='w-14 h-14 flex rounded-full justify-center items-center bg-[#08D3BB]'> 
                 <img src='happy.svg' />
              </div>
              <p className='text-base font-medium'>Scalability</p>
            </div>
            <p className='text-4xl font-semibold'>
              <span className='text-[#1090CB]'>
            Grow without limits</span> with our flexible solutions
              </p>
            <p className='text-base text-[#545454]'>
            Our software is built with scalability in mind, ensuring that as your business expands, our solutions grow with you. Whether you're managing a small practice or a large enterprise, our systems can handle increasing workloads, users, and data without compromising performance
            </p>
          </div>
          <div className='w-1/2'>
            <img src='placeholder.svg' />
          </div>
        </div>
        <div className='flex flex-row-reverse w-full mt-32 '>
          <div className='flex flex-col w-1/2 gap-16'>
            <div className='flex gap-5 justify-start items-center'>
              <div className='w-14 h-14 flex rounded-full justify-center items-center bg-[#1090CB]'> 
                 <img src='happy.svg' />
              </div>
              <p className='text-base font-medium'>Customization</p>
            </div>
            <p className='text-4xl font-semibold'>
              <span className='text-[#1090CB]'>
              Tailored technology </span>to fit your unique business needs
              </p>
            <p className='text-base text-[#545454]'>
            We understand that every business operates differently, which is why our solutions are highly customizable. From workflow automation to specific data reporting, we offer features that can be tailored to fit your exact requirements.With Cyan Cloud Technologies, you’re not just getting generic software, you’re getting a personalized solution that works the way you do.            </p>
          </div>
          <div className='w-1/2'>
            <img src='placeholder.svg' />
          </div>
        </div>
        <div className='flex w-full mt-32 '>
          <div className='flex flex-col w-1/2 gap-16'>
            <div className='flex gap-5 justify-start items-center'>
              <div className='w-14 h-14 flex rounded-full justify-center items-center bg-[#9208D3]'> 
                 <img src='happy.svg' />
              </div>
              <p className='text-base font-medium'>24/7 Support</p>
            </div>
            <p className='text-4xl font-semibold'>
              <span className='text-[#1090CB]'>
              Around-the-clock support,</span> whenever you need it.
              </p>
            <p className='text-base text-[#545454]'>
            We pride ourselves on offering unmatched customer support. Our dedicated team is available 24/7 to ensure that any issues you face are quickly resolved. From troubleshooting to feature walkthroughs, we’re here for you, so you can focus on what matters most—running your business efficiently.            </p>
          </div>
          <div className='w-1/2'>
            <img src='placeholder.svg' />
          </div>
        </div>
      </div>
  )
}

export default Benefits