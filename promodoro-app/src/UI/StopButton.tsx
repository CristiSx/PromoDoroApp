import React from "react";
import { FaSquare } from "react-icons/fa6";

interface StopButtonProps {
    stopTimer: () => void;
}

const StopButton: React.FC<StopButtonProps> = ({ stopTimer }) => {
    return (
        <button
            onClick={stopTimer}
            className="bg-[#e5e7eb] text-[#4b5563] w-[45px] h-[60px] rounded-full shadow-md flex items-center justify-center hover:bg-[#d1d4db] transition duration-200"
        >
            <FaSquare />
        </button>
    );
};

export default StopButton;