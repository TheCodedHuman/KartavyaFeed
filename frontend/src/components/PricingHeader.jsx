import React from 'react'

function PricingHeader() {

    return (
        <section className='flex flex-col space-evenly items-center bg-gradient-to-br from-[#FF8000] via-[#D9D9D9] to-[#1C8C00] py-8 gap-12 backdrop-blur-2xl'>

            <div className="sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-playpen uppercase text-white text-center tracking-wide" style={{ textShadow: '-4px 4px 1px #000' }}>

                <h1 className='relative lg:right-24 right-4 mb-1'>Let <span className='sm:text-2xl md:text-4xl lg:text-6xl'>AI</span> Clear The Path</h1>
                <h1 className='relative lg:left-24 left-4'>So You Can <span className='sm:text-2xl md:text-4xl lg:text-6xl'>Lead</span> The Nation</h1>

            </div>

            <p className='text-center font-outfit text-xl opacity-75 tracking-wider'><span>KartavyaFEED empowers future leaders with AI-driven insights, tools, and civic knowledge</span><span className='block lg:inline'>—all in one place.”</span></p>

            <div>
                <p className='font-semibold mb-2'>Length Of Subscription</p>
                <select name="subscriptionLength" id="subscriptionLength" className='bg-[#7DD4FF] rounded-md font-outfit py-4 px-8 border border-blue-500 text-indigo-700'>
                    <option value="48">12 months <span className='font-sm'>(BEST VALUE)</span></option>
                    <option value="24">6 months</option>
                    <option value="12">3 months</option>
                    <option value="1">1 month</option>
                </select>
            </div>

        </section>
    )

}

export default PricingHeader