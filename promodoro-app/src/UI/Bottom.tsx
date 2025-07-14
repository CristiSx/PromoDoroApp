import logo2 from '../assets/logo2.png';
import { FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa";
const bottom = () => {
  return (
   <>
   <div className='flex flex-col justify-center items-center bg-[#FFFFFF] w-screen p-4 border-t border-[#ffb6c1]'>
        <div className='flex items-center text-2xl font-bold '>
            <img src={logo2} alt="Logo" className='h-10 object-contain mr-2' />
            <div className='text-2xl font-bold text-gray-800'>MuraBloom</div>
        </div>
        <div className='text-gray-700 hover:text-[#ffb6c1] mt-4 ml-8'>Stay focused, stay productive, stay cozy.</div>
        <div className='flex flex-line mt-6'>
        <FaInstagram  className='text-2xl text-gray-700 hover:text-[#ffb6c1] cursor-pointer' />
        <FaGithub className='text-2xl text-gray-700 hover:text-[#ffb6c1] ml-6 cursor-pointer' />
        <FaLinkedin className='text-2xl text-gray-700 hover:text-[#ffb6c1] ml-6 cursor-pointer' />
        </div>

   </div>
   </>
  )
}

export default bottom