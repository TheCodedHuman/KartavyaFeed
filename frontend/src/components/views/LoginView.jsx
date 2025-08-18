// now deprecated, this will be deleted

import LoginModal from '../modals/LoginModal.jsx'
import Login from '../../pages/Login.jsx'

function LoginView({ isOpen, onClose }) {

    return (
        <LoginModal isOpen={isOpen} onClose={onClose}>
            <Login />
        </LoginModal>
    )
}

export default LoginView

// 🧘 Modal Philosophy:
// This modal is rendered via React’s virtual DOM to preserve modularity, clarity, and future-proofing.
// We intentionally avoid touching index.html to maintain separation of concerns.
// If layering or accessibility demands arise, we may refactor using ReactDOM.createPortal().

// update: nah buddy, createPortal is better and way very easy eventho have to tweak index.html