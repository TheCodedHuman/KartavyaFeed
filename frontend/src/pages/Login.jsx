import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

  // Defined
  function inputFilter(e) {
    let value = e.target.value.replace(/\D/g, '');                    // Remove non-digits
    value = value.slice(0, 10)                                        // just for validation

    if (value.length > 5) {
      value = value.slice(0, 5) + ' ' + value.slice(5);               // Insert space after 5 digits
    }
    e.target.value = value;
  }

  function handleSubmit(e) {
    e.preventDefault()
    const finalInput = e.target.mobile.value.replace(/\s/g, '')       // removes whitespaces before submission
    console.log("User entered:", finalInput)                          // will be sent to backend (when implemented), for now... just logging input
  }


  return (
    <div className="text-center flex flex-col justify-center items-center gap-6 w-fit p-8 rounded-2xl bg-[#ffecb8] shadow-lg">


      {/* Upper Text */}
      <section>
        <h1 className="font-outfit text-3xl">Login Or Create Account</h1>
        <p className="font-outfit opacity-80 text-sm">Enter your mobile number to proceed</p>
      </section>


      {/* Mobile Input */}
      <form className=" w-fit text-[1.35rem] font-outfit" onSubmit={handleSubmit} type='submit'>
        <label htmlFor="mobile" className="sr-only">Mobile Number</label>
        <div className="flex bg-white/70">

          <span className="border p-4 rounded-lg rounded-tr-none rounded-br-none">+91</span>

          <input
            required
            className="border border-l-0 p-4 rounded-lg outline-none rounded-tl-none rounded-bl-none"
            id="mobile"
            name="mobile"
            type="tel"
            onInput={inputFilter}
            maxLength="11"
            inputMode="numeric"
            placeholder="Enter mobile number" />
        </div>
        <button className="mt-6 font-caudex text-2xl px-10 py-2 rounded-md bg-gradient-to-br from-[#ffd35a] to-[#ff953e] hover:scale-105 duration-300 hover:drop-shadow-xl ease-out" type="submit">Continue</button>
      </form>


      {/* Lower button and Text */}
      <section>

        <p className="font-outfit text-sm">
          By continuing, I agree to the{" "}
          <Link to="/terms-and-conditions" className="text-amber-700 hover:text-amber-900 underline inline">Terms of Services</Link>
        </p>
      </section>

    </div>
  )
}

export default Login

