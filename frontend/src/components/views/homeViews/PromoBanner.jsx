import React from 'react'

function PromoBanner() {
    return (
        <div className='relative flex flex-col lg:flex-row justify-around items-center px-8 py-12 bg-[#f5f5f5] gap-y-10 pb-25'>
            
            {/* Text Section */}
            <div className='flex flex-col gap-y-2'>
                <h1 className='text-4xl uppercase font-gummy font-extrabold w-[80%]'>Bharat's <span>Trusted & Affordable</span><br />Educational Platform</h1>
                <p className='mb-4 font-outfit w-[70%]'>Unlock your potential by signing up with Physics Wallah</p>
                <button className='py-4 px-10 text-md bg-[#ff4f09] text-white hover:bg-[#FF1109] rounded-md font-gummy hover:font-bold duration-300 ease-out w-[40%] lg:m-0 m-auto'>Start FEEDing</button>
            </div>
            
            {/* Visual Section */}
            <div className='w-56 h-56 bg-amber-600'>
                <p>KartavyaFEED someImage</p>
            </div>
            
            {/* Feature Section */}
            <div className='absolute bottom-[-40px] left-0 right-0 text-center z-2 bg-[#f3cfcf] p-8 w-[80%] m-auto grid grid-cols-2 gird-rows-2 lg:grid-cols-4 lg:grid-rows-1'>
                <span>something</span>
                <span>something</span>
                <span>something</span>
                <span>something</span>
            </div>
        </div>
    )
}

export default PromoBanner








//     < div>
//         {/* Left */ }
//         < div class="flex flex-col max-w-md space-y-4" >
//     <p class="text-2xl font-bold">Bharat's Trusted & Affordable Educational Platform</p>
//     <p class="text-gray-600">Unlock your potential by signing up with Physics Wallah</p>
//     <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Get Started</button>
//   </div >

//     {/* Right */ }
//     < div class="relative w-full md:w-1/2 h-64" >
//         {/* Simulated characters and speech bubbles */ }
//         < div class="absolute top-0 left-0 w-24 h-24 bg-gray-300 rounded-full" ></div >
//     <p class="absolute top-4 left-28 bg-white p-2 rounded shadow">Alakh Sir, What is PW?</p>
//     <p class="absolute top-20 left-40 bg-white p-2 rounded shadow">PW is where students learn with love...</p>
//   </div >

//     {/* Feature */ }
//     < div class="absolute bottom-[-80px] left-0 right-0 flex justify-around px-6" >
//         {/* Feature cards */ }
//         < div class="text-center" >
//       <img src="..." alt="Live Classes" />
//       <p>Daily Live Interactive Classes</p>
//     </div >
//     < !--Repeat for other features-- >
//   </div >
// </div >