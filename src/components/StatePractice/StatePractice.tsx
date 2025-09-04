import React from 'react';

function StatePractice(props) {
    let name = 'mike';
    let age = 20;

    const handleClick = () => {
        name = 'jane';
        age = 25;
        console.log(`Name: ${name}, Age: ${age}`);
    };

    return (
        <>
            <div>
                <h1>State Practice</h1>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <button onClick={handleClick}>Change State</button>
            </div>
        </>
    );
}

export default StatePractice;