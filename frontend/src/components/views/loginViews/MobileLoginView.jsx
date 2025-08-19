// This is the "component" for mobile number based login / signup

import TermsNotice from '../../fragments/TermsNotice.jsx'

function MobileLoginView({ setMobileLogin, onClose }) {

    // Defined
    function inputFilter(e) {
        let value = e.target.value.replace(/\D/g, '');                      // Remove non-digits
        value = value.slice(0, 10)                                          // just for validation

        if (value.length > 5) {
            value = value.slice(0, 5) + ' ' + value.slice(5);               // Insert space after 5 digits
        }
        e.target.value = value;
    }

    function handleSubmit(e) {
        e.preventDefault()
        const finalInput = e.target.mobile.value.replace(/\s/g, '')         // removes whitespaces before submission

        const userMobileNumber = {
            mobile: finalInput
        }
        console.log(userMobileNumber)                                       // will be sent to backend (when implemented), for now... just logging input
    }


    return (
        <div className="text-center flex flex-col justify-center items-center gap-6 w-full max-w-md p-8 rounded-2xl bg-[#ffecb8] shadow-lg">


            {/* Upper Text */}
            <section>
                <h1 className="font-outfit text-2xl md:text-3xl">Login Or Create Account</h1>
                <p className="font-outfit opacity-80 text-sm">Enter your mobile number to proceed</p>
            </section>


            {/* Mobile Input */}
            <form className=" w-fit text-base md:text-[1.35rem] font-outfit" onSubmit={handleSubmit} type='submit'>
                <label htmlFor="mobile" className="sr-only">Mobile Number</label>
                <div className="flex">

                    <span className="border p-4 rounded-lg rounded-tr-none rounded-br-none bg-white/70">+91</span>

                    <input
                        required
                        className="border border-l-0 p-4 rounded-lg outline-none rounded-tl-none rounded-bl-none bg-white/70"
                        id="mobile"
                        name="mobile"
                        type="tel"
                        onInput={inputFilter}
                        maxLength="11"
                        inputMode="numeric"
                        placeholder="Enter mobile number" />
                </div>
                <button className="mt-6 font-caudex text-xl md:text-2xl px-10 py-2 rounded-md bg-gradient-to-br from-[#ffd35a] to-[#ff953e] hover:scale-105 duration-300 hover:drop-shadow-xl ease-out" type="submit">Continue</button>
            </form>


            {/* Lower account login button */}
            <section>

                <button
                    onClick={() => setMobileLogin(false)}
                    className='text-center bg-amber-400 px-4 py-2 text-sm opacity-60 hover:opacity-100 active:opacity-100 duration-250 ease-in-out rounded-md font-outfit mt-5'>
                    Login via Email Account
                </button>

                {/* Terms and condition lower line */}
                <TermsNotice onClose={onClose} />

            </section>


        </div>
    )
}

export default MobileLoginView