import React from 'react'
import PricingFragment from './fragments/PricingFragment.jsx'

function PricingHero() {
  return (
    <div className='w-full h-fit grid md:grid-cols-3 md:grid-rows-1 p-4 grid-cols-1 m-auto text-center'>
        <PricingFragment />
        <PricingFragment />
        <PricingFragment />
    </div>
  )
}

export default PricingHero