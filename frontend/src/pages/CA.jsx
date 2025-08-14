import { useState, useEffect } from 'react'
import NewsCard from '../components/views/currentViews/NewsCard.jsx'
import Categorize from '../components/views/currentViews/Categorize.jsx'
import axios from 'axios'

function CA() {

  const [newsData, setNewsData] = useState([])
  const [loading, setLoading] = useState(false)
  const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY

  useEffect(() => {
    
     const fetchInitialNews = async () => {
       setLoading(true)
       try {
        const response = await axios.get('https://newsdata.io/api/1/news', {
          params: {
            apikey: apiKey, 
            language: 'en'
          }
        })
        setNewsData(response.data.results)
      } catch (error) {
        console.error("Initial news fetch failed:", error)
        setNewsData([])    // fallback to empty array
      } finally {
        setLoading(false)
      }
    }
    fetchInitialNews()
  }, []) // run only once

  return (
    <div>

      <Categorize setNewsData={setNewsData} setLoading={setLoading} />

      {loading && (
        <p className="text-center font-semibold text-red-500 text-xl py-2 bg-yellow-100 rounded-md mx-4 mt-4">
          🔄 Searching news... Please wait.
        </p>
      )}

      <section className='flex flex-row px-4 py-4 flex-wrap gap-7 justify-center items-center min-h-[300px]'>
        {
          newsData.length === 0 
          ? (<p className="text-center text-gray-500">No news available.<br />Try Searching.<br />Or, remove some filters</p>)
          : (newsData.map((news, index) => <NewsCard key={index} data={news} />))
        }
      </section>

    </div>
  )
}

export default CA

