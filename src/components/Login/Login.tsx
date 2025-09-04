import React from 'react';
import UserView from "./UserView";
import UserInfoView from "./UserInfoView";
import Welcome from "./Welcome";

function Login() {
    const isLoggedIn = true;
    if (isLoggedIn) return (
        <>
            <UserView/>
            <UserInfoView/>
        </>
    )
    return (
        <Welcome/>
    )

}

export default Login;