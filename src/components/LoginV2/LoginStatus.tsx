import React from 'react';
import LoginUser from "./LoginUser";
import LogoutUser from "./LogoutUser";

interface LoginStatusProps {
    isLoggedIn: boolean;
    handleLogin: () => void;
    handleLogout: () => void;
}


function LoginStatus(props) {
    const { isLoggedIn, handleLogin, handleLogout } = props;

    return (
        <>
            <h1>LoginStatus</h1>
            {isLoggedIn ? <LoginUser handleLogout={handleLogout} /> : <LogoutUser handleLogin={handleLogin} />}
        </>
    );
}

export default LoginStatus;