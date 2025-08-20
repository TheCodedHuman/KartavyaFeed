import { use, useState } from 'react'
import { Search, RefreshCcw } from 'lucide-react'
import { toCapitalized } from "../../../assets/utils/stringUtils.js";
import axios from 'axios'
import countryCodes from '../../../assets/scripts/countryCodes.js'
import newsCategory from '../../../assets/scripts/newsCategory.js';

function Categorize({ setNewsData, setLoading }) {

    // Literals
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('Select Category')
    const [nation, setNation] = useState('Select Country')
    const apiKey = import.meta.env.VITE_NEWSDATA_API_KEY;
    const code = countryCodes[nation.toLowerCase()];
    let queryParts = []

    const fetchNews = async () => {
        try {
            setLoading(true)
            const params = {
                apikey: apiKey,
                language: 'en',
            }

            if (category !== 'social') {
                queryParts.push(category.toLowerCase());
            }
            if (query.trim()) {
                queryParts.push(query.trim().slice(0, 81));
            }
            if (nation !== 'Select All' && code) {
                params.country = code;
            }
            if (queryParts.length > 0) {
                params.q = String(queryParts.join(' AND '))
            }

            const response = await axios.get('https://newsdata.io/api/1/news', { params })
            
            if (!response.data?.results || response.data.results.length === 0) {
                setNewsData([])
            } else {
                setNewsData(response.data.results)
            }

        } catch (error) {
            console.error("Failed to fetch news: ", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 bg-gradient-to-r from-[#fe9901] via-[#ffbe5c] to-[#fe9901] py-6 rounded-b-2xl md:px-4 relative pt-5'>

            {/* Refresh button ~ on 'md' and 'lg' screens */}
            <button 
                className='font-extrabold p-4 text-gray-600 hover:text-black rounded-full bg-[#ffe602] hover:bg-[#ffd102] hover:drop-shadow-2xl hover:scale-105 transition duration-200 ease-out md:block hidden'                
                onClick={() => {
                    setCategory('social')
                    setNation('Select All')
                    setQuery('')
                    fetchNews()
                }}>
                <RefreshCcw size={32} />
            </button>


            {/* Category selection dropdown */}
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border p-6 rounded-xl w-[80%] md:w-[30%]">
                <option value="social">Select Category (All)</option>
                {
                    newsCategory.sort().map((newsType, index) => (
                        <option key={index} value={newsType}>
                            {toCapitalized(newsType)}                       {/* captitalizing each word */}
                        </option>
                    ))
                }
                <option value="other">Other</option>
            </select>


            {/* Country selection dropdown */}
            <select
                value={nation}
                onChange={(e) => setNation(e.target.value)}
                className="border p-6 rounded-xl w-[80%] md:w-[30%]">
                <option value="Select All">Select Country (All)</option>
                {
                    Object.keys(countryCodes).sort().map((countryName) => (
                        <option key={countryName} value={countryName}>
                            {toCapitalized(countryName)}
                        </option>
                    ))
                }
            </select>


            {/* Lower filter section in 'sm' screens */}
            <div className='flex items-center justify-center gap-4 w-[80%] md:w-[30%]'>

                {/* Refresh button ~ only on 'sm' screens */}
                <button
                    className='font-extrabold p-4 text-gray-600 hover:text-black rounded-full bg-[#ffe602] hover:bg-[#ffd102] hover:drop-shadow-2xl hover:scale-105 transition duration-200 ease-out block md:hidden'
                    onClick={() => {
                        setCategory('social')
                        setNation('Select All')
                        setQuery('')
                        fetchNews()
                    }}>
                    <RefreshCcw size={32} />
                </button>

                {/* Search Input */}
                <input type="text"
                    placeholder='Search News...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') fetchNews() }}
                    className="font-outfit border rounded-xl text-xl w-full px-4 py-[1.40rem]" />

                {/* */}


                {/* Search Button */}
                <button title='Search OR Refresh' onClick={fetchNews} className='font-extrabold p-4 rounded-full text-gray-600 hover:text-black bg-[#ffe602] hover:bg-[#ffd102] hover:drop-shadow-2xl hover:scale-105 transition duration-200 ease-out'><Search size={32} /></button>
            </div>

        </div>
    )
}

export default Categorize



// if ((category !== 'social') || (nation !== 'Select All' && code) || (query.trim())) {                // willn't work (yeah willn't and not wouldn't :p)
//     params.country = code;
//     queryParts.push(`${category.toLowerCase()}`);
//     queryParts.push(`${query.trim().slice(0, 81)}`)
//     params.q = queryParts.join(' AND ')
// } it creates more problem in edge cases >:-)

