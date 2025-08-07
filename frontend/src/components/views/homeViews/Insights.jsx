import React from 'react'
import InsightFragment from '../../fragments/InsightFragment.jsx'

function Insights() {
    return (
        <div className='py-24'>
            <h1 className='text-center font-playpen capitalize text-4xl font-extrabold mb-2'>A Platform Trusted by Aspirants</h1>
            <p className='text-center font-outfit text-xl opacity-90 mb-6'>KartavyaFEED aims to transform not just through words, but provide results with numbers!</p>
            <div className='flex w-[80%] justify-around m-auto p-8 bg-rose-200 flex-col md:flex-row'>
                <InsightFragment />
                <InsightFragment />
                <InsightFragment />
            </div>
        </div>
    )
}

export default Insights