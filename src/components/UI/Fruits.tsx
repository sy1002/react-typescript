import React, {useState} from 'react';

function Fruits() {
    const [fruits, setFruits] = useState<string[]>(['사과', '바나나', '오렌지']);
    const handleAddFruit = () => {
        // 원본 데이터를 변경하지 않는 선에서 데이터를 업데이트 해야한다.
        setFruits(prevFruits => [...prevFruits, '망고']);
        setFruits(prevFruits => [...prevFruits.slice(0,1), '멜론', ...prevFruits.slice(1)]);
    }


    return (
        <>
            <p>{fruits.join(',')}</p>
            <button onClick={handleAddFruit}>update fruits</button>
        </>
    );
}

export default Fruits;