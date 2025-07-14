import React from "react";
import Timer from "../UI/timer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NavBar } from "../UI/NavBar";
import Bottom from "../UI/Bottom";

const Home = () => {
  const [progress, setProgress] = React.useState<number>(0);
  const [workDuration, setWorkDuration] = React.useState<number | null>(null);
  const [shortBreakDuration, setShortBreakDuration] = React.useState<number | null>(null);

  return (
    <>
      <div className="flex flex-col items-center bg-[#FFF0F5]">
        <NavBar />

        <div className="mt-[100px] bg-white p-8 rounded-[2vw] shadow-lg w-[600px] text-center border-[.1vw] border-[#ffb6c1]">
          <h1 className="text-2xl text-[#1F2A38] font-bold mb-4">
            Welcome to MuraBloom
          </h1>
          <p className="text-gray-600 mb-6">
            A simple and effective way to manage your time.
          </p>
        </div>

        <div className="relative mt-[100px] bg-white p-8 rounded-[2vw] shadow-lg w-[450px] h-[450px] text-center border-[.1vw] border-[#ffb6c1]">
          <h2 className="text-2xl text-[#1F2A38] font-bold mb-4">
            Pomodoro Timer
          </h2>
          <div className="w-[230px] h-[230px] mx-auto mb-4">
            <CircularProgressbar
              value={progress}
              strokeWidth={4}
              styles={buildStyles({
                pathColor: "#ffb6c1",
                trailColor: "#fff0f3",
                strokeLinecap: "butt",
              })}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center mb-[250px] ml-[10px]">
            <Timer
              onProgress={setProgress}
              initialMinutes={workDuration}
              shortBreakMinutes={shortBreakDuration}
            />
          </div>
        </div>

        <div className="relative mt-[100px] bg-white p-8 rounded-[2vw] shadow-lg w-[1000px] h-[250px] text-center border-[.1vw] border-[#ffb6c1]">
          <h2 className="text-2xl text-[#1F2A38] font-bold mb-4">
            Quick Settings
          </h2>

          <div className="flex items-center justify-start mt-[20px] ml-[20px]">
            <h3 className="text-[#374151] mr-4">Work Duration</h3>
            <select
              className="border border-[#ffb6c1] bg-[#fff0f5] rounded-[0.5vw] px-3 py-2"
              onChange={(e) => setWorkDuration(Number(e.target.value))}
              value={workDuration ?? ""}
            >
              <option value="" disabled> Select duration</option>
              <option value={25}>25 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={40}>40 minutes</option>
              <option value={50}>50 minutes</option>
            </select>
          </div>

          <div className="flex items-center justify-start mt-[20px] ml-[20px]">
            <h3 className="text-[#374151] mr-4">Short Break</h3>
            <select
              className="border border-[#ffb6c1] bg-[#fff0f5] rounded-[0.5vw] px-3 py-2"
              onChange={(e) => setShortBreakDuration(Number(e.target.value))}
              value={shortBreakDuration ?? ""}
              >
              <option value="" disabled> Select duration</option>
              <option value={5}>5 minutes</option>
              <option value={10}>10 minutes</option>
              <option value={15}>15 minutes</option>
            </select>
          </div>
        </div>

        <div className="mt-[500px]"></div>
        <Bottom />
      </div>
    </>
  );
};

export default Home;