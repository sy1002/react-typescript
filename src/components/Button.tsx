import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    message: string;

}



function Button({children , message}: ButtonProps) {
    console.log('this is message');
    const handleClick = () => alert(message);

    return (
        <>
            <button onDoubleClick={handleClick}>{children}</button> // 매개변수가 없을떄
            <button onClick={()=> handleClick()}>{children}</button> //매개변수가 존재할때 위와 같이 작성

        </>
    );
}

export default Button;