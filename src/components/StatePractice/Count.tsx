import React, {useState} from 'react';

function Count() {
    const [count, setCount] = useState<number>(0);
    const [countV2, setCountV2] = useState<number>(0);


    const handleIncrementV2 = () => {
        // batch와 클로저로 인해 항상 1씩 증가 한다.
        setCountV2(countV2 + 1); // 0 + 1
        setCountV2(countV2 + 1); // 0 + 1
        setCountV2(countV2 + 1); // 0 + 1
    }

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    };


    return (
        <>
            <p>count : {count} || countV2 : {countV2}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleIncrementV2}>Increment V2</button>
        </>
    );
}

export default Count;