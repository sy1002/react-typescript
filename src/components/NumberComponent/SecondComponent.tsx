import React, {Dispatch, useState} from 'react';

interface SecondComponentProps {
    count: number;
    handleIncrement: () => void;
}

function SecondComponent(props:SecondComponentProps){
    const {count, handleIncrement} = props;

    return (
        <div>
            <h3>Second Component</h3>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );

}

export default SecondComponent;