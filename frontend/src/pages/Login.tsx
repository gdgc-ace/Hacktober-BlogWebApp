import { Link } from "react-router-dom"

const Login = () => {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="relative flex items-center justify-center mt-32 bg-white shadow-lg p-8 rounded-lg max-w-md w-full">
                <div className="absolute top-0 -left-16 flex items-center">
                    <div className="h-24 w-12 bg-[#ea4335] rounded-md mr-4"></div>
                    <div className="h-12 w-8 bg-[#4285f4] rounded-md"></div>
                </div>
                <div className="absolute top-0 -right-16 flex items-center">
                    <div className="h-12 w-8 bg-[#0f9d58] rounded-md mr-4"></div>
                    <div className="h-24 w-12 bg-[#fbbc04] rounded-md"></div>
                </div>
                <div className="text-center w-full">
                    <h2 className="text-2xl font-semibold text-gray-700">Login</h2>
                    <p className="text-gray-500 mb-6">Hey, Enter your details to get sign in to your account</p>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter Email"
                            className="w-full px-4 py-4 border rounded-lg text-sm focus:outline-none focus:border-yellow-400"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-4 border rounded-lg text-sm focus:outline-none focus:border-yellow-400"
                        />
                        <button type="submit" className="w-full bg-yellow-400 py-2 text-white rounded-lg font-medium hover:bg-yellow-500">
                            Sign in
                        </button>
                    </form>
                    <p className="my-4 text-gray-500">Or sign in with</p>
                    <div className="flex space-x-4 justify-center">
                        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                            <img src="https://pngimg.com/d/google_PNG19635.png" alt="Google" className="h-6 w-6" />
                        </button>
                        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Apple" className="h-6 w-6" />
                        </button>
                        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Facebook" className="h-6 w-6" />
                        </button>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        <Link to="/signup">Dont have an account? <span className="text-blue-500 cursor-pointer">Register Now</span></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login