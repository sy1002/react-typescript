import React from 'react';

interface UserProfileProps {
    name : string;
    age : number;
    isAdmin : boolean;
}

function UserProfile(props :UserProfileProps) {
    const {name, age, isAdmin} = props;

    return (
        <div>
            <p>이름 : {name}</p>
            <p>나이 : {age}</p>
            <p>{isAdmin ? '관리자 계정' : '일반 사용자'}</p>
        </div>
    );
}

export default UserProfile;