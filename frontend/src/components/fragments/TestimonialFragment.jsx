import React from 'react'

function TestimonialFragment({ imgUrl, userName, comment }) {
  return (
      <div className='bg-[#7DD4FF] p-4 w-full rounded-xl shadow-md hover:scale-105 hover:duration-300 ease-in-out transition-transform'>
        
        <div className='flex justify-between items-center mb-2 p-2'>
            <img src={imgUrl} alt="userImg" className='w-16 h-16 rounded-full' />
            <h4 className='font-semibold text-lg md:text-xl font-outfit'>{userName}</h4>
        </div>

        <p className='text-lg italic font-gummy p-2 font-medium'>{comment}</p>

    </div>
  )
}

export default TestimonialFragment




