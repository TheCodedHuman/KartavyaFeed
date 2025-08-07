import React, { useState, useEffect } from 'react'
import { StepBack, StepForward } from 'lucide-react'

function Carousel() {

    // Literals
    const [currentIndex, setCurrentIndex] = useState(0)
    const images = [
        'homebanner_1.jpg',
        'homebanner_2.jpg',
        'homebanner_3.jpg',
        'homebanner_4.jpg',
        'homebanner_5.jpg'
    ]


    // Defined
    function goPrevious() {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);              // modulo with negatives not allowed
    }

    function goNext() {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }


    // EventListeners
    useEffect(() => {
        console.log("current index set to", currentIndex);
    }, [currentIndex]);


    return (
        <div className='overflow-hidden relative'>

            {/* Sliding image container */}
            <div style={{ transform: `translateX(-${currentIndex * 100}%)` }} className='flex transition-transform duration-700 ease-in-out min-w-full'>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`banner-image-${index}`} className='flex-shrink-0 min-w-full object-cover' />
                ))}
            </div>

            {/* Navigation buttons ~ Stays fixed */}
            <aside className='absolute flex justify-between items-center w-full px-8 top-1/2 -translate-y-1/2 z-2'>
                <span><StepBack size={32} onClick={goPrevious} className='bg-white rounded-md drop-shadow-2xl cursor-pointer' /></span>
                <span><StepForward size={32} onClick={goNext} className='bg-white rounded-md drop-shadow-2xl cursor-pointer' /></span>
            </aside>

            {/* Navigation Ellipses ~ Shows current slide */}
            <div className="absolute z-2 flex justify-center gap-2 bottom-4 left-1/2 -translate-x-1/2">
                {images.map((_, index) => (
                    <span key={index} onClick={() => setCurrentIndex(index)} className={`rounded-full border border-white w-3 h-3 transition-colors duration-200 cursor-pointer ${currentIndex === index ? 'bg-amber-600' : 'bg-transparent'}`}></span>
                ))}
            </div>
        </div>
    )
}



export default Carousel












// import React, { useState, useEffect, useRef } from 'react';


// function Carousel() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const slideRef = useRef(null);
//     const intervalRef = useRef(null);

//     const goToPrevious = () => {
//         setCurrentIndex((prev) => Math.max(prev - 1, 0));
//         resetAutoPlay();
//     };

//     const goToNext = () => {
//         setCurrentIndex((prev) => Math.min(prev + 1, images.length - 1));
//         resetAutoPlay();
//     };

//     const resetAutoPlay = () => {
//         clearInterval(intervalRef.current);
//         intervalRef.current = setInterval(autoPlay, 3000);
//     };

//     const autoPlay = () => {
//         setCurrentIndex((prev) => (prev + 1) % images.length);
//     };

//     useEffect(() => {
//         intervalRef.current = setInterval(autoPlay, 3000);
//         return () => clearInterval(intervalRef.current);
//     }, []);

//     useEffect(() => {
//         if (slideRef.current) {
//             slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
//         }
//     }, [currentIndex]);

//     return (
//         <div className="overflow-hidden relative w-screen h-fit min-w-[100vw]">
//             {/* Images in the scroll */}
//             <div ref={slideRef} className="flex transition-transform duration-700 ease-in-out w-full">
//                 {images.map((src, index) => (
//                     <img
//                         key={index}
//                         src={src}
//                         alt={`Slide ${index}`}
//                         className="w-full min=w-full h-full object-cover"/>
//                 ))}
