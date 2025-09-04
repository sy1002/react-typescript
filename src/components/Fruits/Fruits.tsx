import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

function Fruits() {
    const items = ['사과', '바나나', '오렌지'].map(data => {return {
        name: data,
        id: uuidv4(),
    }})
    const [fruitList, setFruitList] = useState(items);
    const [inputValue, setInputValue] = useState<string>('');


    const handleOnclick = () => {
        if (inputValue.trim() === '') {
            alert('과일 이름을 입력해주세요!');
            return;
        }
        const fruitExists = fruitList.some(fruit => fruit.name === inputValue);
        if(fruitExists){
            alert('이미 추가된 과일입니다.');
            return
        }
        setFruitList((prevList)=> [...prevList, {name: inputValue, id: uuidv4()}]);
        setInputValue(''); // 입력 후 입력창 비우기
    }

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <>
            <ul>
                {fruitList.map((fruit)=>{
                    return(
                        <li key= {`${fruit.id}`}>{fruit.name}</li>
                    )
                })}
            </ul>

            <ul>
                {fruitList.map((fruit)=>{
                    return(
                        <li key= {`${fruit.id}`}>{fruit.name}</li>
                    )
                })}
            </ul>

            <input type="text" value={inputValue} onChange={handleOnChange} />
            <button onClick={handleOnclick}>과일 추가</button>
        </>
    );
}

export default Fruits;