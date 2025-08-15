import React from 'react'
import FooterFragment from '../fragments/FooterFragment.jsx'
import { Link } from 'react-router-dom'

function Footer() {
    return (

        <footer className='bg-gradient-to-tr from-[#262626] via-[#3d3d3d] to-[#383737] backdrop-blur text-white rounded-t-md'>
            <section className='grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-4 w-[85%] m-auto pt-8 pb-6'>

                <FooterFragment 
                    title="Author"
                    fragmentArray={[
                        { label: "TheCodedHuman", url: "https://github.com/TheCodedHuman" },
                        { label: "Moksh Mahawar" }
                    ]}/>

                <FooterFragment 
                    title="Our Products"
                    fragmentArray={[
                        { label: "Tillu Don: Your AI Companion", info: " (coming soon...)" },
                        { label: "AI Summerize", info: " (coming soon...)" },
                        { label: "AI Questify", info: " (coming soon...)" },
                        { label: "AI Answerly", info: " (coming soon...)" }
                    ]}/>

                <FooterFragment 
                    title="Resources Used"
                    fragmentArray={[
                        { label: "Newsdata API", url: "https://newsdata.io/" },
                        { label: "Flaticon Icons", url: "https://www.flaticon.com/" },
                        { label: "My API", info: " (will be used soon...)" }
                    ]}/>

                <FooterFragment 
                    title="Pricing"
                    fragmentArray={[
                        { label: "Basic" },
                        { label: "Freemium", info: " (coming soon...)" },
                        { label: "Premium", info: " (coming soon...)" }
                    ]}/>

            </section>

            <section className='bg-gradient-to-r from-[#CC1543] via-[#c53563] to-[#CC1543] backdrop-blur bg-opacity-60 rounded-t-md shadow-md flex flex-col-reverse md:flex-row px-8 py-4 justify-between '>
                <span>
                    <Link to="/privacy-policy" aria-label='privacy policy' className='text-[0.75rem] lg:text-lg hover:text-[#fff566] transition-colors duration-300'>Privacy Policy</Link>
                    <span className='text-xl font-thin'>&nbsp; | &nbsp;</span>
                    <Link to="/terms-and-conditions" aria-label='terms and conditions' className='text-[0.75rem] lg:text-lg hover:text-[#fff566] transition-colors duration-300'>Terms of use</Link>
                </span>
                <h5 className='text-[0.75rem] lg:text-lg text-white tracking-wide font-outfit'>
                    <span className='block md:inline'>Copyright &nbsp;©&nbsp; {new Date().getFullYear()} &nbsp;~&nbsp; All Rights Reserved &nbsp;|&nbsp;</span> 
                    <span className='block md:inline'>KartavyaFEED &nbsp;|&nbsp; TheCodedHuman</span>
                </h5>
            </section>
        </footer>

    )
}

export default Footer


