import React from 'react'
import InsightFragment from '../../fragments/InsightFragment.jsx'

function Insights() {
    return (
        <div className='pb-24'>
            <h2 className='text-center font-playpen capitalize text-5xl font-extrabold mb-2'>A Platform Trusted by <span className='font-outfit text-6xl hover:text-amber-500 transition-colors duration-350 ease-in-out'>Aspirants</span></h2>
            <p className='text-center font-outfit text-xl opacity-90 mb-6'>KartavyaFEED aims to transform not just through words, but provide results with insights!</p>
            
            {/* Insights Section */ }
            <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
                <InsightFragment titleText='15 Lakh+' someInfo='Empowered Aspirants' imgUrl='/student.png' />
                <InsightFragment titleText='10+' someInfo='Curated Resources' imgUrl='/book.png' />
                <InsightFragment titleText='100K+' someInfo='Monthly Learners' imgUrl='/trophy.png' />
            </div>
        </div>
    )
}

export default Insights


