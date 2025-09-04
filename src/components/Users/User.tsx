import React from 'react';

function User(props : { name : string; age:number}) {
    const {name,age} = props

    return (
        <div>
            <h3>this is name : {name}</h3>
            <h3>this is age : {age}</h3>
        </div>
    );
}

export default User;