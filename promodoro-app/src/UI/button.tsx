import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> 

export const Button = ({className, ...rest}: ButtonProps) => {
    return ( 
        <button 
            className={clsx(    
                "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600",
                className
            )}
            {...rest}
        >
           
        </button>

    )

};