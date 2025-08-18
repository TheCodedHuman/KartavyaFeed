import { Link } from 'react-router-dom'

function TermsNotice() {
    return (
        <p className="font-outfit text-sm text-center mt-1">
            By continuing, I agree to the{" "}
            <Link to="/terms-and-conditions" className="text-amber-700 hover:text-amber-900 underline inline">
                Terms of Services
            </Link>
        </p>
    )
}

export default TermsNotice