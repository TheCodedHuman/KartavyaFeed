import React from 'react'

function AboutView({ title, imgUrl, subTitle, content, isOdd }) {

    return (
        <section className='bg-[#fff0c0] py-4' >
            <h1 className='font-caudex text-3xl lg:text-6xl font-bold italic text-center py-8'>{title}</h1>

            <div className={`px-6 md:px-16 lg:px-48 py-16 flex flex-col ${isOdd ? 'flex-row-reverse' : 'flex-row'} items-center justify-center gap-16`}>
                <img src={imgUrl} alt="hurryStudent" className={`sm:w-[80%] lg:h-84 lg:w-84 aspect-square ${isOdd ? 'rotate-2' : '-rotate-2'} rounded-2xl ring-4 ring-blue-800 transition-all hover:scale-105 hover:drop-shadow-2xl hover:duration-300 ease-out`} />

                <div className='flex justify-between flex-col gap-6 items-center text-[1rem] lg:text-xl'>

                    <p className="list-disc  font-outfit font-semibold">{subTitle}</p>
                    <ul className = "list-disc space-y-3 font-outfit font-semibold w-[90%]" >
                        {content.map((content, index) => (
                            <li key={index}>{content}</li>
                        ))}
                    </ul >
                    
                </div>
            </div>

        </section>
    )
}

export default AboutView
