import React from 'react';

interface PrintValueProps {
    numberValue : number;
    stringValue : string;
    booleanValue : boolean;
    arrayValue : number[];
    objectValue : {id:number, name : string};
    handleClick : () => void;
}

function PrintValue(props: PrintValueProps) {
    const {numberValue, booleanValue, objectValue, arrayValue , stringValue , handleClick} = props

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

export default PrintValue;