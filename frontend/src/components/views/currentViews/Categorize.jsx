import { useState } from 'react'
import { Search } from 'lucide-react'
import axios from 'axios'


function Categorize({ setNewsData }) {

    // Literals
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('All')
    const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY;


    const fetchNews = async () => {
        try {
            const params = {
                apikey: apiKey,
                language: 'en',
                country: 'in'
            }

            if (query) params.q = query;
            if (category !== 'All') params.q = category.toLowerCase()

            const response = await axios.get('https://newsdata.io/api/1/news', { params })
            setNewsData(response.data.results)
        
        } catch (error) {
            console.error("Failed to fetch news: ", error)
        }
    }

    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-x-16 gap-y-4 bg-[#ffd697] py-8 rounded-b-2xl'>

            <div className='flex gap-4 w-[80%] md:w-[30%]'>
                <input type="text" 
                    placeholder='Search News...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border px-4 rounded-xl text-xl w-full"/>

                <button title='Search OR Refresh' onClick={fetchNews} className='font-extrabold p-4 text-white rounded-full bg-blue-600 hover:bg-blue-700 transition duration-250'><Search size={36} /></button>
            </div>

            <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                className="border p-6 rounded-xl w-[80%] md:w-[30%]">
                    <option value="All">All</option>
                    <option value="Geography">Geography</option>
                    <option value="Polity">Polity</option>
                    <option value="Economics">Economics</option>
                    <option value="Defence">Defence</option>
            </select>

        </div>
    )
}

export default Categorize

