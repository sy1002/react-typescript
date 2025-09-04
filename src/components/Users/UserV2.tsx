import React from 'react';

interface UserProps {
    username: string;
    email: string;
}


function UserV2(props :UserProps) {
    console.log('this is props',props)
    const {username, email } = props;

    return (
        <>
            <h2>User Information</h2>
            <p>User: {username}</p>
            <p>Email: {email}</p>
        </>
    );
}

export default UserV2;