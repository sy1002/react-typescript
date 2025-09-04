import React from 'react';

function Calculator() {
    const [count, setCount] = React.useState<number>(0);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }

    const handleDecrement = () => {
        setCount(prevCount => prevCount - 1);
    }

    const handleReset = () => {
        setCount(0);
    }


    return (
        <>
            <h1>Calculator Component</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}

export default Calculator;