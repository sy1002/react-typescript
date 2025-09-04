import React, {Dispatch} from 'react';

interface CountButtonProps {
    handleIncrement: () => void;
    handleDecrement: () => void;
    handleReset: () => void;
}

function CountButton(props:CountButtonProps) {
    const {handleIncrement , handleDecrement , handleReset} = props;

    return (
        <>
            <button name="increment" onClick={handleIncrement}>increment</button>
            <button name="decrement" onClick={handleDecrement}>decrement</button>
            <button name="reset" onClick={handleReset}>reset</button>
        </>
    );
}

export default CountButton;