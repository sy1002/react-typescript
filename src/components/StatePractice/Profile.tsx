import React, {useState} from 'react';

function Profile() {
    const [name, setName] = useState<string>('jack');
    const [age, setAge] = useState<number>(20);
    const [gender, setGender] = useState<string>('female');

    const handleUpdateProfile = () => {
       setName('john');
       setAge(25);
       setGender('male');
    }

    return (
        <>
            <p>name : {name}</p>
            <p>age :  {age}</p>
            <p>gender : {gender}</p>
            <button onClick={handleUpdateProfile}>Update Profile</button>
        </>
    );
}

export default Profile;