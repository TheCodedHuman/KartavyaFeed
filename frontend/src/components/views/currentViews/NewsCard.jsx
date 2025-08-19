import Flag from 'react-world-flags'
import countryCodes from '../../../assets/countryCodes.js';
import { toCapitalized } from "../../../assets/Utils/stringUtils.js";


function NewsCard({ data }) {

  // api response optimization
  const { title, image_url, description, source_url, country, source_name, pubDate } = data;
  const shortTitle = title?.slice(0, 50) + '...';
  const shortDescription = description?.slice(0, 90) + '...';
  const fallbackBackgroundImage = '/logo.png';
  const formattedDate = new Date(pubDate).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  })


  // flag side logo literals
  const countryCode = countryCodes[country] || 'un';
  const countryNameCapitalized = toCapitalized(country?.[0] || 'Unknown Country'); 

  return (
    <a
      href={source_url || '#'}
      target='_blank'
      title='Open link in new tab ?'
      rel="noopener noreferrer"
      className='relative ounded-md w-[90%] h-fit md:h-108 md:w-76 bg-white text-black p-2 shadow-lg flex items-center md:flex-col flex-row gap-6 overflow-ellipsis pb-8 hover:drop-shadow-xl hover:scale-103 transition-transform duration-300 ease-out'>

      {/* Image/Logo */}
      <div className='relative w-[35%] h-[120px] md:w-full md:h-[50%] mb-2 md:mr-2 aspect-[4/3]'>
        <img src={image_url || fallbackBackgroundImage} alt="NewsImage" className={`w-full h-full aspect-square ${image_url ? 'object-cover' : 'object-contain'} rounded-md`} />

        <span title={countryNameCapitalized} className='absolute bottom-2 right-2'>
          {countryCode && countryCode !== 'un' && <Flag code={countryCode} style={{ width: '32px', height: '28px' }} />}
        </span>
      </div>


      {/* Title and Description */}
      <div>
        <h3 title={title} className='sm:text-md md:text-xl lg:text-xl font-semibold text-md font-outfit mb-3'>{shortTitle}</h3>
        <p title={description} className='text-sm md:text-md lg:text-base font-outfit text-medium opacity-80'>{shortDescription}</p>
      </div>

      {/* Publish Date and Source Name */}
      <p title={`Source: ${source_name}`} className='absolute bottom-2 right-2 text-[0.75rem] opacity-80 font-outfit'><strong>{source_name}</strong></p>        {/* just for SEO */}
      <p title={`News Dated: ${pubDate}`} className='absolute bottom-2 left-2 text-[0.75rem] opacity-80 font-outfit'><strong>{formattedDate}</strong></p>        {/* just for SEO */}

    </a>
  )
}

export default NewsCard

