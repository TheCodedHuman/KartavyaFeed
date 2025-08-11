import { useState, useEffect } from 'react'
import NewsCard from '../components/views/currentViews/NewsCard.jsx'
import Categorize from '../components/views/currentViews/Categorize.jsx'
import axios from 'axios'

function CA() {

  const [newsData, setNewsData] = useState(null)      // null = "loading"
  const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY

  useEffect(() => {
    const cachedNews = localStorage.getItem('cachedNews')
    if (cachedNews) {
      setNewsData(JSON.parse(cachedNews))
      return;
    }
    
    const fetchInitialNews = async () => {
      try {
        const response = await axios.get('https://newsdata.io/api/1/news', {
          params: {
            apikey: apiKey,
            language: 'en',
            country: 'in'
          }
        })
        setNewsData(response.data.results)
        localStorage.setItem('cachednNews', JSON.stringify(newsData))
      } catch (error) {
        console.error("Initial news fetch failed:", error)
        setNewsData([])    // fallback to empty array
      }
    }
    fetchInitialNews()
  }, []) // run only once

  return (
    <div>

      <Categorize setNewsData={setNewsData} />

      <section className='flex flex-row px-4 py-4 flex-wrap gap-6 justify-center items-center min-h-[300px]'>
        {
          newsData === null 
          ? (<p className="text-center text-gray-500">Loading news...</p>)
          : newsData?.length === 0 
          ? (<p className="text-center text-gray-500">No news available.<br />Try refreshing.<br />Or, remove some filters</p>)
          : (newsData.map((news, index) => <NewsCard key={index} data={news} />))
        }
      </section>

    </div>
  )
}

export default CA

