import React from 'react';

interface LogoutUserProps {
    handleLogin: () => void;
}

function LogoutUser(props :LogoutUserProps) {
    const { handleLogin } = props;

    return (
        <>
            <h3>"로그인이 필요합니다"</h3>
            <button onClick={handleLogin}>Login</button>
        </>
    );
}

export default LogoutUser;