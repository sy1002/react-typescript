import React, {useState} from 'react';
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

function NumberComponent() {
    const [count, setCount] = useState<number>(0);

    // 캡슐화 : 직접 상태업데이트를 props로 전달하지 않고, 함수를 만들어 전달.
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    }


    return (
        <>
            <FirstComponent count={count} handleIncrement={handleIncrement} />
            <SecondComponent count={count} handleIncrement={handleIncrement} />
        </>
    );
}

export default NumberComponent;