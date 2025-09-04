import React, {Dispatch, useState} from 'react';


interface FirstComponentProps {
    count: number;
    handleIncrement: () => void;
}

function FirstComponent(props:FirstComponentProps){
    const {count, handleIncrement} = props;

    console.log('FirstComponent rendered');

    return (
        <div>
            <h3>First Component</h3>
            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
}

export default FirstComponent;