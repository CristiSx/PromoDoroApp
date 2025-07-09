import React from "react";
import  Timer  from "../UI/timer"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { NavBar } from "../UI/NavBar";
import Bottom from "../UI/Bottom";

const Home = () => {
  const [progress, setProgress] = React.useState<number>(0); // 0-100

  return (
    <>

    <div className="flex flex-col items-center bg-[#FFF0F5] "> {/* Background color changed to light pink */ }
    <NavBar /> {/* Navigation bar at the top */ }
      
        <div className=" mt-[100px] bg-white p-8 rounded-[2vw] shadow-lg w-[600px] text-center border-[.1vw] border-[#ffb6c1]"> {/* Card style for the container */ }
            <h1 className="text-2xl text-[#1F2A38] font-bold mb-4"> Welcome to MuraBloom</h1>
            <p className="text-gray-600 mb-6">A simple and effective way to manage your time.</p>
        </div>


        <div className="relative mt-[100px] bg-white p-8 rounded-[2vw] shadow-lg w-[450px] h-[450px] text-center border-[.1vw] border-[#ffb6c1]">
          <h2 className="text-2xl text-[#1F2A38] font-bold mb-4">Pomodoro Timer</h2>
          <div className="w-[230px] h-[230px] mx-auto mb-4">
              <CircularProgressbar value={progress} strokeWidth={4}
                styles={buildStyles({
                  pathColor: '#ffb6c1', // Light pink color for the progress path
                  trailColor: '#fff0f3', // Lighter shade for the trail
                  strokeLinecap: 'butt',
                })}
              />
            </div>
          <div className="absolute inset-0 flex items-center justify-center mb-[250px] ml-[10px]">
            <Timer onProgress={setProgress} />
          </div>
        </div>
        
        <div className="mt-[500px]"></div> {/* Spacer to push the button down */ }
          <Bottom /> {/* Footer component */ }
        </div>
    </>
  )
}

export default Home