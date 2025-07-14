import logo from '../assets/logo2.png'
import { NavBar } from '../UI/NavBar'
import Bottom from '../UI/Bottom'
import { Button } from '../UI/button'
import { FaGoogle, FaGithub} from "react-icons/fa";
const Login = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFF0F5]">
        <NavBar />
        <div className="mt-[100px]"/>
        
        {/* Navigation bar at the top */}
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex flex-col bg-white p-8 rounded-lg shadow-md w-[400px] text-center">
            <div className='flex flex-col items-center mb-6'>
              <img src={logo} alt="Logo" className="h-12 w-12 mb-2" />
              <h1 className="text-2xl font-bold text-[#1F2A38]">Welcome Back</h1>
              <p className='mt-4'>Sign in to your MuraBloom account</p>
            </div>
            <form>
              <div className="flex flex-col justify-right mb-4">
                <label className="block text-m font-mediumtext-gray-700 text-left ml-1">Email Address</label>
                <input
                  
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded-lg sfocus:bg-pink-100 focus:border-[#FFF0F5] focus:outline-none focus:shadow-md focus:shadow-pink-300 transition-all duration-200" />
              </div>
              <div className="flex flex-col justify-right mb-4">
                <label className="block text-m font-medium text-gray-700 text-left ml-1">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded-lg sfocus:bg-pink-100 focus:border-[#FFF0F5] focus:outline-none focus:shadow-md focus:shadow-pink-300 transition-all duration-200" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="mr-2" />
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">Remember me</label>
                </div>
                <a href="/ForgotPassword" className="text-sm text-[#ffb6c1] hover:underline">Forgot password?</a>
              </div>
              <div>
                <Button className="w-full bg-[#ffb6c1] cursor-pointer text-white py-4 mt-2 rounded-lg hover:bg-[#ff9eb6] transition-colors">
                  Login
                </Button>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                Don't have an account? <a href="/Register" className="text-[#ffb6c1] hover:underline">Sign up</a>
              </div>
              <div className="mt-6 flex items-center justify-center">
                <div className="w-full border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">or</span>
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className='mt-6 flex flex-line justify-center items-center space-x-4 mb-6'>
                <Button className="w-full cursor-pointer bg-white text-gray-700 py-4 mt-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <FaGoogle className="mr-2" />
                  Google
                </Button>
                <Button className="w-full bg-white cursor-pointer text-gray-700 py-4 mt-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <FaGithub className="mr-2" />
                  GitHub
                </Button>

              </div>

            </form>
          </div>
          <div className="mt-8 text-gray-600">
            By signing in, you agree to our <a href="#" className="text-[#ffb6c1] hover:underline">Terms of Service</a> and <a href="#" className="text-[#ffb6c1] hover:underline">Privacy Policy</a>.
          </div>
        </div>
        <div className="mt-[100px]"></div> {/* Spacer to push the button down */}
        <Bottom />  {/* Footer component */}
      </div>

        
    </>
  )
}

export default Login