import { Button } from "../UI/button"
import  Timer  from "../UI/timer"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Home = () => {

    const handleClick = () => {
        console.log("send to login");
        window.location.href = "/login"; // Redirect to login page
    }
  return (
    <>
    <div className="flex flex-col items-center bg-[#FFF0F5] "> {/* Background color changed to light pink */ }

      
        <div className=" mt-[100px] bg-white p-8 rounded-lg shadow-md w-[600px] text-center"> {/* Card style for the container */ }
            <h1 className="text-2xl text-[#1F2A38] font-bold mb-4"> Welcome to Pomodoro App</h1>
            <p className="text-gray-600 mb-6">A simple and effective way to manage your time.</p>
        </div>

        <div className="mt-[100px] bg-white p-8 rounded-lg shadow-md w-[400px] h-[400px] text-center" >
          <h2 className="text-2xl text-[#1F2A38] font-bold mb-4">Pomodoro Timer</h2>
              <CircularProgressbar value={66} 
                styles={buildStyles({
                  pathColor: '#ffb6c1', // Light pink color for the progress path
                  trailColor: '#fff0f3', // Lighter shade for the trail
                })}
              />
          <Timer time={425}/>
        </div>
        
        <div className="mt-[500px]">
        </div> {/* Spacer to push the button down */ }
    </div>
    </>
  )
}

export default Home