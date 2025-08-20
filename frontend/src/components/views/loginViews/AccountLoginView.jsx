// This is the "component" for account based login / signup

import TermsNotice from '../../fragments/TermsNotice.jsx'

function AccountLoginView({ setMobileLogin, onClose }) {

    function handleSubmit(e) {
        e.preventDefault()

        const mailInput = e.target.account.value            // removes whitespaces before submission
        const passwordInput = e.target.password.value       // removes whitespaces before submission

        const userAccountInfo = {                           // will be sent to backend (when implemented), for now... just logging input
            email: mailInput,
            password: passwordInput
        }
        console.log(userAccountInfo)
    }


    return (
        <div className="text-center flex flex-col justify-center items-center gap-6 w-full max-w-md p-8 rounded-2xl bg-[#ffecb8] shadow-lg">


            {/* Upper Text */}
            <section>
                <h1 className="font-outfit text-2xl md:text-3xl">Login Or Create Account</h1>
                <p className="font-outfit opacity-80 text-sm">Enter your email account and password to proceed</p>
            </section>


            {/* Mobile Input */}
            <form className=" w-fit text-base md:text-[1.35rem] font-outfit" onSubmit={handleSubmit} type='submit'>
                <label htmlFor="account" className="sr-only">Email Account</label>
                <div className="flex flex-col gap-5">

                    <input
                        required
                        className="border p-4 rounded-lg outline-none bg-white/70"
                        id="account"
                        name="account"
                        type="email"
                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"              // regex pattern matching
                        title="Please enter a valid email address"
                        placeholder="Enter your email account" />

                    <input
                        required
                        className="border p-4 rounded-lg outline-none bg-white/70"
                        id="password"
                        name="password"
                        type="password"
                        title="Password must be atleast 6 character long"
                        placeholder="Enter your password" />
                </div>

                <button className="mt-6 font-caudex text-xl md:text-2xl px-10 py-2 rounded-md bg-gradient-to-br from-[#ffd35a] to-[#ff953e] hover:scale-105 duration-300 hover:drop-shadow-xl ease-out" type="submit">Continue</button>
            </form>


            {/*  Lower mobile login button */}
            <section>

                <button
                    onClick={() => setMobileLogin(true)}
                    className='text-center bg-amber-400 px-4 py-2 text-sm opacity-60 hover:opacity-100 active:opacity-100 duration-250 ease-in-out rounded-md font-outfit mt-5'>
                    Login via Mobile Number
                </button>

                {/* Terms and condition lower line */}
                <TermsNotice onClose={onClose} />

            </section>
        </div>
    )
}

export default AccountLoginView


/*

    This input uses a regex pattern to validate basic email addresses.

            Pattern: [^ @\s] + @[^ @\s] +\.[^ @\s] +

        Explanation:
            - Ensures there's a username before the '@' (no spaces or extra '@' symbols)
            - Requires a domain name after the '@'
            - Checks for a dot '.' followed by a domain extension(like.com, .org)
        
            Note: This is a basic validation and may miss certain edge cases. For full accuracy, consider using a dedicated method or function.

*/

