import { NavBar } from "../UI/NavBar"
import Bottom from "../UI/Bottom"
import { Button } from "../UI/button"
import logo from '../assets/logo2.png'

const ForogotPassword = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-[#FFF0F5]">
        <NavBar />
        <div className="mt-[100px]" />
        <div className="flex flex-col bg-white p-8 rounded-lg shadow-md w-[400px] text-center mt-20">
          <div className='flex flex-col items-center mb-6'>
            <img src={logo} alt="Logo" className="h-12 object-contain mb-2" />
            <h1 className="text-2xl font-bold text-[#1F2A38]">Forgot Password</h1>
            <p className='mt-4'>Enter your email to reset your password</p>
          </div>

          <form>
            <div className="flex flex-col justify-right mb-4">
              <label className="block text-m font-medium text-gray-700 text-left ml-1">Email Address</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-lg focus:bg-pink-100 focus:border-[#FFF0F5] focus:outline-none focus:shadow-md focus:shadow-pink-300 transition-all duration-200" />
            </div>

            <div>
              <Button className="w-full bg-[#ffb6c1] cursor-pointer text-white py-4 mt-2 rounded-lg hover:bg-[#ff9eb6] transition-colors">
                Reset Password
              </Button>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Remembered your password? <a href="/Login" className="text-[#ffb6c1] hover:underline">Sign in</a>
            </div>
          </form>
        </div>

        <div className="mt-[200px]"></div>
        <Bottom />
      </div>
    </>
  )
}

export default ForogotPassword