import React from 'react';

interface LoginUserProps{
    handleLogout: () => void;
}

function LoginUser(props : LoginUserProps) {
    const { handleLogout } = props;
    return (
        <>
            <h3>"환영합니다, 사용자 !"</h3>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default LoginUser;