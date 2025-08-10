import { useState } from 'react'
import NewsCard from '../components/views/currentViews/NewsCard.jsx'
import Categorize from '../components/views/currentViews/Categorize.jsx'

function CA() {

  const [newsData, setNewsData] = useState([])

  return (
    <div>

      <Categorize setNewsData={setNewsData} />

      <section className='flex flex-row px-4 py-2 flex-wrap gap-6 justify-center items-center min-h-[300px]'>
        {newsData?.length === 0 ? (
          <p className="text-center text-gray-500">No news available.<br />Try refreshing.<br />Or, remove some filters</p>
        ) : newsData?.map((news, index) => (
          <NewsCard key={index} data={news} />
        ))}
      </section>
      
    </div>
  )
}

export default CA

