import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function TermsNotice({ onClose }) {

    const navigate = useNavigate();

    // for slow internet users this will be better as using onClose() on <Link> directly will make things more glitchy as route is changed first, then the modal is closed
    // this can be glitchy too, but slightly lesser than the <Link onClick={onClose}> method
    function handleTermsClick() {           
        onClose()
        navigate('/terms-and-conditions')
    }

    return (
        <p className="font-outfit text-sm text-center mt-1">
            By continuing, I agree to the{" "}
            <Link onClick={handleTermsClick} to="/terms-and-conditions" className="text-amber-700 hover:text-amber-900 underline inline">
                Terms of Services
            </Link>
        </p>
    )
}

export default TermsNotice

