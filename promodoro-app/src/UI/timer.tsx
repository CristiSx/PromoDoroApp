import React from "react";
import { GiPlayButton } from "react-icons/gi";

interface State {
    time: number;
    seconds: number;
    minutes: number;
}

const Timer = () => {
    const [inputMinutes, setInputMinutes] = React.useState<number>(0);
    const [state, setState] = React.useState<State | null>(null);

    React.useEffect(() => {
        if (!state || state.time === 0) {
            return;
        }

        const timerId = setTimeout(() => {
            setState((prevState) => {
                if (!prevState) return null;

                const newTime = prevState.time - 1;

                return {
                    time: newTime,
                    minutes: Math.floor((newTime) / 60),
                    seconds: newTime % 60,
                };
            });
        }, 1000);

        return () => clearTimeout(timerId);
    }, [state]);

    const startTimer = () => {
        const totalSeconds = inputMinutes * 60;

        setState({
            time: totalSeconds,
            minutes: Math.floor(totalSeconds / 60),
            seconds: totalSeconds % 60,
        });
    };

    return (
        <div className="flex flex-col items-center mt-10">
            <input
                type="number"
                value={inputMinutes}
                onChange={(e) => setInputMinutes(Number(e.target.value))}
                className="mb-4 text-[#1F2A38]"
            />
            <button
                onClick={startTimer}
                className="bg-[#ffb6c1] text-white px-4 py-2 rounded-[10vw] hover:bg-[#ff69b4] shadow-md"
            >
                <GiPlayButton />
            </button>

            {state && (
                <h2 className="text-5xl text-[#1F2A38] font-bold mb-4 mt-20">
                    {`${state.minutes}:${state.seconds < 10 ? `0${state.seconds}`:state.seconds}`}
                </h2>
            )}
        </div>
    );
};

export default Timer;
