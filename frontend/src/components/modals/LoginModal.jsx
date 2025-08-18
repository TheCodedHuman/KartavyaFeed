import { useState } from 'react'
import { X } from 'lucide-react'
import MobileLoginView from '../views/loginViews/MobileLoginView.jsx'
import { createPortal } from 'react-dom'
import AccountLoginView from '../views/loginViews/AccountLoginView.jsx'

function LoginModal({ isOpen, onClose }) {

    // Literals
    const [mobileLogin, setMobileLogin] = useState(true)


    // Defined
    function handleBackdropClick(e) {
        if (e.target.id === 'modal-backdrop') onClose()
    }


    if (!isOpen) return null;

    return createPortal(
        <div
            id="modal-backdrop"                         // used in handleBackdropClick(e)
            onClick={handleBackdropClick}
            className='fixed inset-0 backdrop-blur-2xl flex justify-center items-center z-10'>

            <div
                onClick={(e) => e.stopPropagation()}
                className='relative'>

                {/* Top Right Button */}
                <button
                    onClick={onClose}
                    className='absolute top-2 right-2 text-gray-600 hover:text-black duration-200 ease-out'>
                    <X size={32} />
                </button>

                {/* The Inner Content */}
                {mobileLogin
                    ? <MobileLoginView setMobileLogin={setMobileLogin} />
                    : <AccountLoginView setMobileLogin={setMobileLogin} />
                }

            </div>
        </div>,
        document.getElementById('login-modal')      // gets injected in the #login-modal div
    )
}

export default LoginModal

