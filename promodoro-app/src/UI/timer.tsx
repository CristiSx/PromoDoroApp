import React from "react";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import StopButton from "./StopButton";

interface State {
  time: number;
  seconds: number;
  minutes: number;
}

type TimerMode = "work" | "break";

export interface SessionData {
  type: TimerMode;
  durationMinutes: number;
  finishedAt: Date;
}

interface TimerProps {
  onProgress: (percentage: number) => void;
  onSessionComplete: (session: SessionData) => void;
  initialMinutes: number | null;
  shortBreakMinutes: number | null;
}

const Timer = ({
  onProgress,
  onSessionComplete,
  initialMinutes,
  shortBreakMinutes,
}: TimerProps) => {
  const [totalTime, setTotalTime] = React.useState<number>(0);
  const [state, setState] = React.useState<State | null>(null);
  const [isPaused, setIsPaused] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<TimerMode>("work");

  const [nextMode, setNextMode] = React.useState<TimerMode | null>(null);
  const [nextDuration, setNextDuration] = React.useState<number | null>(null);

  const startNewTimer = (minutes: number, newMode: TimerMode) => {
    const totalSeconds = minutes * 60;
    setTotalTime(totalSeconds);
    setMode(newMode);
    setState({
      time: totalSeconds,
      minutes: Math.floor(totalSeconds / 60),
      seconds: totalSeconds % 60,
    });
    setIsPaused(false);
    onProgress(0);
  };

  React.useEffect(() => {
    if (nextMode && nextDuration != null) {
      startNewTimer(nextDuration, nextMode);
      setNextMode(null);
      setNextDuration(null);
    }
  }, [nextMode, nextDuration]);

  React.useEffect(() => {
    if (!state || state.time === 0 || isPaused) return;

    const timerId = setTimeout(() => {
      setState((prevState) => {
        if (!prevState) return null;

        const newTime = prevState.time - 1;

        if (newTime <= 0) {
          onSessionComplete({
            type: mode,
            durationMinutes:
              mode === "work"
                ? initialMinutes ?? 0
                : shortBreakMinutes ?? 0,
            finishedAt: new Date(),
          });

          if (mode === "work" && shortBreakMinutes) {
            setNextMode("break");
            setNextDuration(shortBreakMinutes);
          } else {
            stopTimer();
          }
          return null;
        }

        const newPercentage = ((totalTime - newTime) / totalTime) * 100;
        onProgress(newPercentage);

        return {
          time: newTime,
          minutes: Math.floor(newTime / 60),
          seconds: newTime % 60,
        };
      });
    }, 1000);

    return () => clearTimeout(timerId);
  }, [
    state,
    isPaused,
    mode,
    totalTime,
    onProgress,
    initialMinutes,
    shortBreakMinutes,
  ]);

  const startTimer = () => {
    if (initialMinutes == null || initialMinutes <= 0) {
      alert("Please select a work duration first.");
      return;
    }
    startNewTimer(initialMinutes, "work");
  };

  const pauseTimer = () => {
    setIsPaused((prev) => !prev);
  };

  const stopTimer = () => {
    setState(null);
    setIsPaused(false);
    onProgress(0);
    setMode("work");
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {!state && initialMinutes == null && (
                <h2 className="text-[#1F2A38] font-bold text-5xl text-center mt-[350px]">
                    {`00:00`}
                </h2>
            )}

      {!state && initialMinutes != null && (
                <h2 className="text-[#1F2A38] font-bold text-5xl text-center mt-[350px]">
                    {`${initialMinutes}:00`}
                </h2>
            )}

            {state && (
                <>
                    <h3 className="text-[#1F2A38] text-xl font-semibold mt-[350px]">
                        {mode === "work" ? "Work Time" : "Break Time"}
                    </h3>
                    <h2 className="text-[#1F2A38] font-bold text-5xl text-center">
                        {`${state.minutes}:${state.seconds < 10 ? `0${state.seconds}` : state.seconds}`}
                    </h2>
                </>
            )}

      <div className="flex gap-4 mb-4 mt-[130px]">
        <StartButton onStart={startTimer} />
        <PauseButton pauseTimer={pauseTimer} />
        <StopButton stopTimer={stopTimer} />
      </div>
    </div>
  );
};

export default Timer;
