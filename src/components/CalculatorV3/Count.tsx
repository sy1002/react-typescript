import React, {useReducer} from 'react';


function counterReducer(count:number, action : {type:string}) {
    switch (action.type) {
        case 'increment':
            return count+1;
        case 'decrement':
            return count -1;
        case 'reset':
            return 0;
        default:
            throw count;
    }
}


function Count(props) {
    const [count, countDispatch] = useReducer(counterReducer,0);

    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={()=>countDispatch({type: "increment"})}>Increment</button>
            <button onClick={()=>countDispatch({type: "decrement"})}>Decrement</button>
            <button onClick={()=>countDispatch({type: "reset"})}>Reset</button>
        </>
    );
}

export default Count;