import React, {useState} from 'react';

function StatePracticeV3() {
    const [state, setState] = useState<number | string>(0);

    const handleSetToOne = () => {
        setState("10");
        console.log(`State changed to: ${state}`);
    }


    return (
        <>
            <h1>state : {state}</h1>
            <button onClick={handleSetToOne}>Change State to 10</button>
        </>
    );
}

export default StatePracticeV3;