import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react';

function NavBar() {
    
    const [isOpen, setIsOpen] = useState(false);
    
    // only forSake of fixing mess
    const baseLoginClass = `text-white px-4 py-2 rounded hover:bg-[#9A2A4D] font-semibold transition duration-300 ease-in-out font-gummy text-md focus:outline-none focus:ring cursor-pointer`;
    const loginClassForHeader = `hidden md:inline-block bg-[#E71349] ${baseLoginClass}`;
    const loginClassForDrawer = `outline-none w-full md:hidden bg-[#7E1F37] ${baseLoginClass}`;
    
    
    const navLinks = [
        { path: '/', label: 'Home' },                   // users may not tap on logo on mobile screns to go at home page
        { path: '/latest', label: 'Current Affairs' },
        { path: '/workspace', label: 'AI Workspace' },
        { path: '/pricing', label: 'Pricing' },
        { path: '/about', label: 'About' }
    ]

    return (
        <>
            <header className='h-fit bg-gradient-to-r from-orange-400 to-orange-600 rounded-b-md flex items-center justify-between p-2 sticky top-0 z-50 shadow-md'>
                <nav role='navigation' className='flex items-center gap-x-4'>

                    {/* Logo */}
                    <Link to='/' className='text-white hover:underline text-2xl pl-2' aria-label='Go To HomePage'>
                        <img className='lg:h-[5rem] md:h-[4rem] h-[3.5rem] hover:scale-110 transition-transform duration-300' src="/logo.png" alt="KartavyaFEED_Logo" />
                    </Link>


                    {/* Nav-Links */}
                    <ul className='hidden md:flex justify-between items-center gap-x-8 font-outfit font-semibold'>
                        {navLinks.map(({ path, label }) => (
                            <li key={path}>
                                <Link to={path} aria-label={`Go to ${label}`} className='lg:text-xl md:text-sm hover:text-yellow-300 transition-colors duration-300'>
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </nav>


                {/* Login Button & Menu */}
                <div className="flex items-center gap-x-4">
                    <Link to='/login'>
                        <button type='button' className={loginClassForHeader} aria-label="Login to KartavyaFEED" aria-expanded={isOpen}>SignUp / Login</button>
                    </Link>

                    <button onClick={() => setIsOpen(!isOpen)} className='md:hidden text-white p-2 transition-opacity opacity-75 ease-in-out hover:opacity-100 duration-700 ' aria-label='Toggle menu'>
                        {isOpen ? <X size='28' /> : <Menu size='28' />}
                    </button>
                </div>
            </header>


            {/* BackDrop Blur */}
            { isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
                    aria-hidden="true"
                />
            )}

            {/* Navigation Drawer */}
            <div className={`md:hidden bg-[#CC1543] text-white transition-transform duration-500 ease-in-out z-40 ${isOpen ? 'translate-y-0' : '-translate-y-full'} fixed top-[4rem] left-0 w-full rounded-b-xl pt-2 overflow-y-auto max-h-[80vh]`}>
                {/* Nav Links Row */}
                <ul className='flex flex-col justify-around items-center pt-4 font-outfit gap-2'>
                    {navLinks.map(({ path, label }) => (
                        <li key={path}>
                            <Link to={path} onClick={() => setIsOpen(false)} className="block active:text-yellow-300 active:bg-red-500 transition-colors duration-300 relative text-xl rounded-md px-26 py-2">
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Button Below */}
                <div className="flex justify-center py-6">
                    <Link to='/login' className='w-[80%]'>
                        <button onClick={() => setIsOpen(false)}  type='button' className={loginClassForDrawer} aria-label="Login to KartavyaFEED" aria-expanded={isOpen}>
                            SignUp / Login
                        </button>
                    </Link>
                </div>
            </div>


        </>
    )
}

export default NavBar

// pt - 1 = 0.25rem = 4px
// 1rem = 16px
// top-[4.5rem] → 4.5 × 16px = 72px
// The 0.5rem portion → 0.5 × 16px = 8px
// And of course, 1rem = 16px

