import React from 'react';

function UserV4() {
    const [userInfo, setUserInfo] = React.useState({
        name: '',
        age: 0,
        isAdmin: false,
        contact: {
            email: '',
            phone: ''
        },
        address: {
            home : {
                street: '',
                city: '',
                zipCode: ''
            },
            office : {
                street: '',
                city: '',
                zipCode: ''

            }
        }
    });

    const handleUpdateUserInfo = () => {
        setUserInfo(prevState => ({
            ...prevState,
            name : 'John Doe',
            age: 30,
            contact: {
                ...prevState.contact,
                email : 'sucoding@naver.com'
            }
        }));
    }

    return (
        <>
            <pre>{JSON.stringify(userInfo ,null, 2)}</pre>
            <button onClick={handleUpdateUserInfo}>Update User Info</button>
        </>
    );
}

export default UserV4;