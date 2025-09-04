import React from 'react';


function PrintValueV2({numberValue , stringValue, booleanValue , arrayValue, objectValue, handleClick} : {
    numberValue : number;
    stringValue : string;
    booleanValue : boolean;
    arrayValue : number[];
    objectValue : {id : number, name : string};
    handleClick : () => void
})
{

    return (
        <>
            <h1>PrintValue</h1>
            <p>number : {numberValue} </p>
            <p>string : {stringValue} </p>
            <p>boolean : {booleanValue.toString()} </p>
            <p>array : {arrayValue} </p>
            <p>object : {JSON.stringify(objectValue)} </p>
            <p>handleClick : {handleClick.toString()}</p>

        </>
    );
}

export default PrintValueV2;