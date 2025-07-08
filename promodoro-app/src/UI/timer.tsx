import React from "react";

interface State {
    time: number;
    seconds: number;
    minutes: number;
}

const Timer = ({ time }: { time: number }) => {
    debugger;
    const [state, setState] = React.useState<State>({
        time,
        seconds: time-Math.floor((time-1)/60)*60-1,
        minutes: Math.floor((time-1)/60),
    });

    React.useEffect(() => {
        setTimeout(() => {
            if(state.time === 0) {
                return;
            }

            setState({
                time: state.time - 1,
                minutes:  Math.floor((state.time-1)/60),
                seconds: state.time - Math.floor((state.time-1)/60)*60 - 1,
            });
    }, 1000);
    }, [state.time]);

    return (
        <h2 className="text-5xl text-[#1F2A38] font-bold mb-4 mt-20">
            {`${state.minutes}: ${state.seconds <= 10 ? `0 ${state.seconds}` : state.seconds}`}
        </h2>
    );
};

export default Timer;