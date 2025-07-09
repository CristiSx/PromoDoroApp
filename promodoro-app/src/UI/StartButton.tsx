import React from "react";
import { GiPlayButton } from "react-icons/gi";

interface StartButtonProps {
    onStart: () => void;
}

const StartButton: React.FC<StartButtonProps> = ({ onStart }) => {
    return (
        <button
            onClick={onStart}
            className="bg-[#ffb6c1] text-white w-[45px] h-[60px] rounded-full shadow-md flex items-center justify-center hover:bg-[#ff69b4] transition duration-200"
        >
            <GiPlayButton className="text-white text-2xl" />
        </button>
    );
};

export default StartButton;
