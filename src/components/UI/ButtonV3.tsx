import React from 'react';

interface ButtonProps {
    message: string;
    children: React.ReactNode;
 }


function ButtonV3(props : ButtonProps) {
    const {message, children} = props;

    const handleClick = () => {
        alert(message);
    }

    return (
        <>
            <button
                onClick={handleClick}
            >{children}
            </button>
        </>
    );
}

export default ButtonV3;