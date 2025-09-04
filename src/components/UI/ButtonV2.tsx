import React from 'react';

interface ButtonProps {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;

}


function ButtonV2({handleClick, children }: ButtonProps ) {
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    );
}

export default ButtonV2;