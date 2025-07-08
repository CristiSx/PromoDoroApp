import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> 

export const Button = ({className, ...rest}: ButtonProps) => {
    
    return ( 
        <button 
            className={clsx(    
                "",
                className
            )}
            {...rest}
        >
           
        </button>

    )

};