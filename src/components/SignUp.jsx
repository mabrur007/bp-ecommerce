import "../styles/custom.css"
const SignUp = () => {
  return (
    <section>
        <div className="w-fit mx-auto bg-white p-4 rounded-md shadow-secondary shadow-lg mt-12 mb-16">
            <form className="space-y-4">
                <div className="md:flex gap-2">
                    <div>
                        <p>First Name</p>
                        <input type="text" className="focus:outline-none max-md:w-full" />
                    </div>
                    <div>
                        <p>Last Name</p>
                        <input type="text" className="focus:outline-none max-md:w-full" />
                    </div>
                </div>

                <div>
                    <p>Email</p>
                    <input type="email" placeholder="Type Email" className="focus:outline-none w-full" />
                </div>

                <div>
                    <p>Phone</p>
                    <div className="flex gap-2">
                        <input type="text" placeholder="+880" className="focus:outline-none w-1/3" />
                        <input type="text" placeholder="Phone" className="focus:outline-none w-full" />
                    </div>
                </div>

                <div>
                    <p>Create Password</p>
                    <input type="password" placeholder="At least 6 characters" className="focus:outline-none w-full" />
                </div>

                <div>
                    <p>Repeat Password</p>
                    <input type="password" className="focus:outline-none w-full" />
                </div>

                <button className="mx-auto block px-8 py-2 rounded-md bg-primary text-white">Login</button>

                <div className="pt-2 pb-6 border-b border-border">
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check"> I agree with Terms and Conditions</label>
                </div>

                <div className="mt-4 text-center">
                    <p>Already have account? <span className="text-primary cursor-pointer">Sign in</span></p>
                </div>
            </form>
        </div>
    </section>
  )
}

export default SignUp
