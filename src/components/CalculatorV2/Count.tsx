import React, {useReducer, useState} from 'react';
import CountDisplay from "./CountDisplay";
import CountButton from "./CountButton";
import counterReducer from "../../reducer/counterReducer";

function Count() {

    const [count, countDispatch] = useReducer(counterReducer,0);

    const handleIncrement = () => countDispatch({type: "INCREMENT"});
    const handleDecrement = () => countDispatch({type: "DECREMENT"});
    const handleReset = () => countDispatch({type: "RESET"});


    return (
        <>
            <h3>This is Count App</h3>
            <CountDisplay count={count} />
            <CountButton
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleReset={handleReset}
            />

        </>
    );
}

export default Count;