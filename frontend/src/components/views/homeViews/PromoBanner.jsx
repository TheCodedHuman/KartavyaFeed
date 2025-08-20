import { Link } from 'react-router-dom';
import FeatureFragment from '../../fragments/FeatureFragment.jsx';

function PromoBanner() {

    return (
        <div className='relative flex flex-col justify-center items-center py-12 gap-y-20 pb-25'>
            
            {/* Text Section */}
            <div className='flex flex-col gap-y-6 items-center px-10 text-center lg:text-left'>
                <h1 className='text-3xl md:text-6xl capitalize font-outfit font-extrabold'>Bharat's <span>Perspective Playground</span><br />for <span className='font-gummy text-white hover:text-5xl active:text-5xl md:hover:text-8xl  duration-500' style={{ textShadow: '-6px 4px 1px #111' }}>Curious</span> Minds</h1>
                <p className='mb-4 text-2xl font-outfit'>Explore ideas, challenge narratives, and grow with KartavyaFeed</p>

                <Link to='/latest' className='py-4 px-10 text-3xl bg-[#ff4f09] text-white hover:bg-[#FF1109] rounded-lg font-gummy duration-350 ease-outdrop-shadow-5xl text-center hover:scale-105 hover:drop-shadow-2xl'>
                    Start FEEDing
                </Link>
            </div>

            
            {/* Feature Section */}
            <div className='grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 gap-8'>
                <FeatureFragment imgUrl='/newspaper.png' titleText='Daily News' info='Current Affairs' />
                <FeatureFragment imgUrl='/ai.png' titleText='AI WorkSpace' info='Your AI Buddy' />
                <FeatureFragment imgUrl='/quality.png' titleText='Freemium Plan' info='Only For College Brats' />
                <FeatureFragment imgUrl='/goal.png' titleText='UPSC Focused' info='Targeted Insights For UPSC' />
            </div>
        </div>
    )
}

export default PromoBanner



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