import React from 'react';

function LoginV3(props) {
    const isLoggedIn = props.isLoggnedIn;

    return (
        <>
            {isLoggedIn && <h1>Welcome Back!</h1>}
            {!isLoggedIn && <h1>Please Sign In</h1>}
        </>
    );
}

export default LoginV3;