import React from "react";
import Timer from "../UI/timer";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NavBar } from "../UI/NavBar";
import Bottom from "../UI/Bottom";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { GoClockFill } from "react-icons/go";
import { HiMiniFire } from "react-icons/hi2";
import { FaCoffee } from "react-icons/fa";
import { PiSuitcaseSimpleFill } from "react-icons/pi";

type SessionType = "work" | "break";

interface SessionRecord {
  type: SessionType;
  durationMinutes: number;
  finishedAt: Date;
}

interface UserStats {
  sessionsToday: number;
  focusTimeMinutes: number;
  dayStreak: number;
  recentSessions: SessionRecord[];
}

const initialUserStats: UserStats = {
  sessionsToday: 0,
  focusTimeMinutes: 0,
  dayStreak: 0,
  recentSessions: [],
};

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
          <div className="relative mt-[100px] mr-[100px] bg-white p-8 rounded-[2vw] shadow-lg w-[300px] h-[200px] text-center border-[.1vw] border-[#ffb6c1]">
            <GoClockFill className="text-[#ffb6c1] w-[55px] h-[55px] ml-[95px]" />
            <div className="absolute text-3xl font-bold mt-[10px] ml-[75px]">
              {Math.floor(userStats.focusTimeMinutes / 60)}h{" "}
              {userStats.focusTimeMinutes % 60}m
              </div>
            <h3 className="absolute mt-[50px] ml-[80px] text-[#4c5663]">Focus Time</h3>
          </div>
          <div className="relative mt-[100px] bg-white p-8 rounded-[2vw] shadow-lg w-[300px] h-[200px] text-center border-[.1vw] border-[#ffb6c1]">
            <HiMiniFire className="text-[#ffb6c1] w-[55px] h-[55px] ml-[90px]" />
            <div className="absolute text-3xl font-bold mt-[10px] ml-[110px]">{userStats.dayStreak}</div>
            <h3 className="absolute mt-[50px] ml-[85px] text-[#4c5663]">Day Streak</h3>
          </div>
      </div>

      <div className="relative mt-[100px] bg-white p-8 rounded-[2vw] shadow-lg w-[1000px] h-auto text-center border-[.1vw] border-[#ffb6c1]">
        <h2 className="text-2xl text-[#1F2A38] font-bold mb-4">
          Recent Sessions
        </h2>
        <ul className="space-y-2">
          {userStats.recentSessions.map((session, index) => (
            <li
              key={index}
              className="flex justify-between p-3 rounded-[1vw] bg-[#fff0f5]"
            >
              <div className="flex items-center gap-4">
                {session.type === "work" ? 
                  (<PiSuitcaseSimpleFill className="w-6 h-6 rounded-full text-[#ffb6c1]" />) : 
                  (<FaCoffee className="w-6 h-6 rounded-full text-[#4ade80]" />)
                }
                <div className="text-left">
                  <div className="font-bold">
                    {session.type === "work" ? "Work Session" : "Short Break"}
                  </div>
                  <div className="text-gray-600">
                    {session.durationMinutes} minutes
                  </div>
                </div>
              </div>
              <div className="text-gray-500 text-sm mt-[10px]">
                {formatTimeAgo(session.finishedAt)}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Settings */}
      <div className="relative mt-[100px] bg-white p-8 rounded-[2vw] shadow-lg w-[1000px] h-auto text-center border-[.1vw] border-[#ffb6c1]">
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
            <option value="" disabled>
              Select duration
            </option>
            <option value={1}>1 minute</option>
            <option value={25}>25 minutes</option>
            <option value={30}>30 minutes</option>
            <option value={40}>40 minutes</option>
            <option value={50}>50 minutes</option>
          </select>
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
