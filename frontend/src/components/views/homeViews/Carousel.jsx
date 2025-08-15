import React, { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function Carousel() {

    // Literals
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = [
        'home_slide_1.jpg',
        'home_slide_2.jpg',
        'home_slide_3.jpg',
        'home_slide_4.jpg',
        'home_slide_5.jpg'
    ]
    

    
    // QuerySelectors
    const slideRef = useRef(null)
    const intervalRef = useRef(null)



    // EventListeners
    useEffect(() => {
      intervalRef.current = setInterval(autoPlay, 3000) 
      return () => (clearInterval(intervalRef.current))
    }, [])


    useEffect(() => {
        // console.log("current index:", currentIndex);           // for debug
        (slideRef.current) && (slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`)
    }, [currentIndex]);

    

    // Defined
    function goPrevious() {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);              // modulo with negatives not allowed
        resetAutoPlay()
    }    

    function goNext() {
        setCurrentIndex((prev) => (prev + 1) % images.length)
        resetAutoPlay()
    }    

    function autoPlay() {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    function resetAutoPlay() {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(autoPlay, 3000)
    }


    return (
        <div className='overflow-hidden relative group'>

            {/* Sliding image container */}
            <div ref={slideRef} style={{ transform: `translateX(-${currentIndex * 100}%)` }} className='flex transition-transform duration-700 ease-in-out min-w-full'>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`banner-image-${index}`} className='flex-shrink-0 min-w-full object-cover' />
                ))}
            </div>

            {/* Navigation buttons ~ Stays fixed */}
            <aside className='absolute flex justify-between items-center w-full px-5 top-1/2 -translate-y-1/2 z-2 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-out '>
                <span><ChevronLeft size={64} onClick={goPrevious} className='text-white rounded-md cursor-pointer active:scale-75' /></span>
                <span><ChevronRight size={64} onClick={goNext} className='text-white rounded-md cursor-pointer active:scale-75' /></span>
            </aside>

            {/* Navigation Ellipses ~ Shows current slide */}
            <div className="absolute z-2 flex justify-center gap-2 bottom-4 left-1/2 -translate-x-1/2 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-out">
                {images.map((_, index) => (
                    <span key={index} onClick={() => setCurrentIndex(index)} className={`rounded-full border border-white w-3 h-3 transition-colors duration-200 cursor-pointer ${currentIndex === index ? 'bg-amber-600' : 'bg-transparent'}`}></span>
                ))}
            </div>
        </div>
    )
}   

export default Carousel

