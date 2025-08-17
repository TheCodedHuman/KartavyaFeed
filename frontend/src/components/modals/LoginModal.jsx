import { X } from 'lucide-react';

function LoginModal({ children, isOpen, onClose }) {

    function handleBackdropClick(e) {
        if (e.target.id === 'modal-backdrop') {
            onClose()
        }
    }


    if (!isOpen) return null;
    
    return (
        <div
            id="modal-backdrop"
            onClick={handleBackdropClick}
            className='fixed inset-0 backdrop-blur-2xl flex justify-center items-center z-10'>
            <div
                onClick={(e) => e.stopPropagation()}
                className='relative'>

                <button
                    onClick={onClose}
                    className='absolute top-2 right-2 text-gray-600 hover:text-black duration-200 ease-out'>
                    <X size={32} />
                </button>
                {children}

            </div>
        </div>
    )
}

export default LoginModal

