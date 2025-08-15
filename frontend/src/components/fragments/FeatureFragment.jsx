import React from 'react'

function FeatureFragment({ imgUrl, titleText, info }) {
  return (
    <div className='p-5 rounded-2xl flex justify-center items-center flex-row md:flex-col gap-8 text-center bg-white/50 hover:bg-white duration-300 ease-out hover:shadow-xl'>
        <img className='h-48 m-auto' src={imgUrl} alt="logo" />
        <div>
            <h3 className='font-outfit font-semibold text-2xl'>{titleText}</h3>
            <p className='font-outfit text-lg opacity-90'>{info}</p>
        </div>
    </div>
  )
}

export default FeatureFragment