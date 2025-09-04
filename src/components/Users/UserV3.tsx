import React from 'react';

function UserV3() {
    const [userInfo, setUserInfo] = React.useState({
        name: '',
        age: 0,
        isAdmin: false
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('e',e.target)
        const { name, value, checked } = e.target;

        setUserInfo(prevState => ({
            ...prevState,
            [name ]: name === 'isAdmin' ? checked : value

        }));
    }


    return (
        <>
            <h1>User : name : {userInfo.name} || age:   {userInfo.age} || isAdmin :  {userInfo.isAdmin.toString()}</h1>
            <p>이름 : <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} /></p>
            <p>나이 : <input type="number" name="age" value={userInfo.age} onChange={handleInputChange} /></p>
            <p>
                관리자 계정 :
                <input
                    type="checkbox"
                    name="isAdmin"
                    checked={userInfo.isAdmin}
                    onChange={handleInputChange}
                />
            </p>
        </>
    );
}

export default UserV3;