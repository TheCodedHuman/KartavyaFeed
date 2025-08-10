function NewsCard({ data }) {

  const { title, image_url, description, source_url } = data
  const shortTitle = title?.slice(0, 50) + '...';
  const shortDescription = description?.slice(0, 70) + '...';
  const fallbackBackgroundImage = '/logo.png'

  return (
    <a
      href={source_url || '#'}
      target='_blank'
      rel="noopener noreferrer"
      className='rounded-md w-[90%] h-fit md:1h-96 md:w-64 bg-white text-black p-2 shadow-lg flex items-center md:flex-col flex-row gap-6'>

      <div className='w-[35%] h-[120px] md:w-full md:h-[50%] mb-2 md:mr-2 aspect-[4/3]'>
        <img src={image_url || fallbackBackgroundImage} alt="NewsImage" className={`w-full h-full aspect-square ${image_url ? 'object-cover' : 'object-contain'} rounded-md`} />
      </div>

      <div>
        <h3 title={title} className='sm:text-md md:text-xl lg:text-2xl font-semibold text-md font-caudex'>{shortTitle}</h3>
        <p title={description} className='text-sm md:text-md lg:text-xl font-outfit text-medium opacity-90'>{shortDescription}</p>
      </div>

    </a>
  )
}

export default NewsCard

