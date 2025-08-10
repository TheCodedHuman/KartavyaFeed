import React from 'react'
import TestimonialFragment from '../../fragments/TestimonialFragment.jsx'

function PricingFooter() {

    const dheerComment = '“KartavyaFEED helped me turn my ideas into action. The AI tools are intuitive and genuinely empowering.”'
    const neerComment = '“I never thought civic engagement could be this accessible. The Freemium plan gave me the push I needed.”'
    const veerComment = '“From summarizing complex issues to guiding my research, KartavyaFEED is my go-to platform for impact.”'
    const abeerComment = '“The leadership tools here are next-level. I feel more confident taking initiative in my community.”'

    const commentingUser = [
        { imgUrl: 'user_1.jpg', userName: 'Dheer Shekhawat', comment: dheerComment },
        { imgUrl: 'user_2.jpg', userName: 'Neer Shekhar', comment: neerComment },
        { imgUrl: 'user_3.jpg', userName: 'Veer Swamini', comment: veerComment },
        { imgUrl: 'user_4.jpg', userName: 'Abeer Shashwat', comment: abeerComment }
    ]

    return (
        <div>
            {/* What is Freemium Footer */}
            <section className='bg-gradient-to-b from-[#7DD4FF] to-[#DDFFF8] w-full py-4'>
                <h3 className='font-caudex text-3xl lg:text-5xl font-bold italic text-center py-8'>What is KartavyaFEED Freemium!?</h3>
                
                <div className='px-6 md:px-16 lg:px-48 pt-16 flex flex-col lg:flex-row items-center justify-center gap-16'>

                    <img src="hurry.jpeg" alt="hurryStudent" className='sm:w-[80%] lg:h-108 lg:w-108 aspect-square -rotate-3 rounded-2xl ring-4 ring-blue-800 transition-transform hover:rotate-0 active:rotate-0' />
                    <div className='flex justify-between flex-col gap-6 items-center text-[1rem] lg:text-xl'>
                        <p className="list-disc  font-outfit font-semibold">KartavyaFEED Freemium is a specially crafted plan for college students who aspire to lead, learn, and make a difference.</p>
                        <ul className="list-disc space-y-3 font-outfit font-semibold w-[90%] lg">
                            <li>🎓 Designed for college students with a passion for leadership and learning</li>
                            <li>🧠 Includes access to AI tools like Summarizer, Questify, and ChatBot</li>
                            <li>📚 Helps users stay informed, think critically, and engage with civic issues</li>
                            <li>🚀 Acts as a launchpad for future changemakers and community leaders</li>
                            <li>✅ Verification-based and completely free for eligible students</li>
                        </ul>
                        <button className='bg-[#E71349] hover:bg-[#ff1852] text-sm md:text-lg lg:text-xl cursor-pointer font-gummy py-3 w-[80%] rounded-md font-bold text-white hover:drop-shadow-2xl ease-in-out duration-500'>Apply for Freemium today.</button>

                    </div>
                </div>

            </section>

            {/* Testimonial Footer */}
            <section className='bg-[#DDFFF8] w-full py-4'>
                <h3 className='font-caudex text-5xl font-bold italic text-center p-8'>Testimonials</h3>
                <div className='grid sm:grid-rows-4 sm:grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-1 gap-8 px-4 pb-8'>
                    {commentingUser.map((user, index) => (
                        <TestimonialFragment key={index} imgUrl={user.imgUrl} userName={user.userName} comment={user.comment} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default PricingFooter

