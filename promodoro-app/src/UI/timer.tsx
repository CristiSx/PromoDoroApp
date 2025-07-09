import React from "react";
import StartButton from "./StartButton";
import PauseButton from "./PauseButton";
import StopButton from "./StopButton";

interface State {
    time: number;
    seconds: number;
    minutes: number;
}

interface TimerProps {
    onProgress: (percentage: number) => void;
}

const Timer = ({ onProgress }: TimerProps) => {
    const [inputMinutes, setInputMinutes] = React.useState<number>(0);
    const [totalTime, setTotalTime] = React.useState<number>(0);
    const [state, setState] = React.useState<State | null>(null);
    const [isPaused, setIsPaused] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (!state || state.time === 0 || isPaused) return;

        const timerId = setTimeout(() => {
            setState((prevState) => {
                if (!prevState) return null;

                const newTime = prevState.time - 1;
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
    }, [state, isPaused]);

    const startTimer = () => {
        const totalSeconds = inputMinutes * 60;

        setTotalTime(totalSeconds); // salvezi timpul total
        setState({
            time: totalSeconds,
            minutes: Math.floor(totalSeconds / 60),
            seconds: totalSeconds % 60,
        });
        setIsPaused(false);
        onProgress(0); // progresul pornește de la 0%
    };

    const pauseTimer = () => {
        setIsPaused((prev) => !prev);
    };

    const stopTimer = () => {
        setState(null);
        setIsPaused(false);
        onProgress(0);
    };

    return (
        <div className="flex flex-col items-center mt-10">
            {!state && (
                <input
                    value={inputMinutes}
                    onChange={(e) => setInputMinutes(Number(e.target.value))}
                    className="text-[#1F2A38] font-bold focus:outline-none text-5xl text-center mt-[340px]"
                />
            )}
            {state && (
                <h2 className="text-[#1F2A38] font-bold text-5xl text-center mt-[340px]">
                    {`${state.minutes}:${state.seconds < 10 ? `0${state.seconds}` : state.seconds}`}
                </h2>
            )}
            <div className="flex gap-4 mb-4 mt-[140px]">
                <StartButton onStart={startTimer} />
                <PauseButton pauseTimer={pauseTimer} />
                <StopButton stopTimer={stopTimer} />
            </div>
        </div>
    );
};

export default Timer;

