import React from "react";
import { GiPauseButton } from "react-icons/gi";

interface PauseButtonProps {
    pauseTimer: () => void;
}

const PauseButton: React.FC<PauseButtonProps> = ({ pauseTimer }) => {
    return (
        <button
            onClick={pauseTimer}
            className="bg-[#e5e7eb] text-[#4b5563] w-[45px] h-[60px] rounded-full shadow-md flex items-center justify-center hover:bg-[#d1d4db] transition duration-200"
        >
            <GiPauseButton />
        </button>
    );
};

export default PauseButton;