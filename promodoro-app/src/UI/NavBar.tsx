
import logo2 from '../assets/logo.png'
import { Button } from './button'


export const NavBar = () => {
  return (
    <>
    <div className='flex justify-between items-center bg-[#FFFFFF] w-screen p-4 border-b border-[#ffb6c1]'>
        <div className='flex justify-between ml-[150px] text-2xl font-bold '>
            <img src={logo2} alt="Logo" className='h-10 object-contain' />
            <div className='text-2xl font-bold text-gray-800'>MuraBloom</div>
            </div>
        
        <nav className='flex space-x-8 mr-[150px]'>
            <Button className='text-gray-700 hover:text-[#ffb6c1] cursor-pointer' onClick={() => window.location.href='/'}>Home</Button>
            <Button className='text-gray-700 hover:text-[#ffb6c1] cursor-pointer' onClick={() => window.location.href='/Friends'}>Friends</Button>
            <Button className='text-gray-700 hover:text-[#ffb6c1] cursor-pointer' onClick={() => window.location.href='/Statistics'}>Statistics</Button>
            <Button className='text-gray-700 hover:text-[#ffb6c1] cursor-pointer' onClick={() => window.location.href='/Settings'}>Settings</Button>
            <Button className='text-gray-700 hover:text-[#ffb6c1] cursor-pointer' onClick={() => window.location.href='/Login'}>Login</Button>
         
 
       </nav>

    </div>
    </>
  )
}
