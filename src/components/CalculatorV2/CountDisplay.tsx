import React from 'react';

interface CountDisplayProps {
    count: number;

}

function CountDisplay(props :CountDisplayProps) {
    const {count} = props;

    return (
        <>
            <h3>CountDisplay</h3>
            <p>count : {count}</p>
        </>
    );
}

export default CountDisplay;