import React from 'react';
import User from "./Users/User";
import PrintValue from "./PrintValue";
import UserV2 from "./Users/UserV2";
import Button from "./Button";
import UIButton from "./UI/Button";
import UIButtonV2 from "./UI/ButtonV2";
import UserProfile from "./Users/UserProfile";
import Table from "./Table/Table";
import FormV2 from "./UI/FormV2";
import ButtonV3 from "./UI/ButtonV3";
import StatePractice from "./StatePractice/StatePractice";
import StatePracticeV2 from "./StatePractice/StatePracticeV2";
import Profile from "./StatePractice/Profile";
// import Count from "./StatePractice/Count";
import UserV3 from "./Users/UserV3";
import FirstComponent from "./NumberComponent/FirstComponent";
import SecondComponent from "./NumberComponent/SecondComponent";
import NumberComponent from "./NumberComponent/NumberComponent";
import Count from "./CalculatorV3/Count";

function Main(props) {
    const referenceArray = [1,2,3,4];
    const referenceObject = {name : "hennie", age:30};
    const referenceFunction = () => "함수 리턴값!";
    const referenceDate = new Date();
    const referenceRegExp = /react/i;
    const referenceMap = new Map([
        ["key1", "value1"],
        ["key2", "value2"]
    ])
    const referenceSet = new Set([1,2,3,4]);

    const numberValue = 2;
    const stringValue = 'test';
    const booleanValue = true;
    const arrayValue = [1,2,3,5];
    const objectValue = {id:2 , name : 'test'};
    const handleClick = () => alert('버튼이 클릭되었습니다!');
    const handleClickV2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(`event`,event);
        alert(event.currentTarget.innerText);
    }


    const userObject = {
        username: "hennie",
        email: "hennie92@naver.com"
    }

    return (
        <>
            <h1>Main Component</h1>
            <User name ={"hennie"} age={20} />
            <p>배열 : {referenceArray}</p>
            <p>객체 : {JSON.stringify(referenceObject)}</p>
            <p>배열 : {referenceFunction.toString()}</p>
            <p>정규 표현식 : {referenceRegExp.toString()}</p>
            <p>Date : {referenceDate.toDateString()}</p>
            <p>Map : {JSON.stringify(Array.from(referenceMap))}</p>
            <p>Set : {JSON.stringify(Array.from(referenceSet))}</p>
            <PrintValue
                numberValue = {numberValue}
                stringValue = {stringValue}
                booleanValue = {booleanValue}
                arrayValue = {arrayValue}
                objectValue= {objectValue}
                handleClick ={handleClick}
            />
            <UserV2 {...userObject} />
            {/*<Button onClick={handleClick}>Login</Button>*/}
            <UserProfile name={'Alice'} age={30} isAdmin={true}/>
            <UserProfile name={'Bob'} age={25} isAdmin={false}/>
            <UIButton onClick={handleClick}>Click Me</UIButton>
            <UIButtonV2 handleClick={handleClickV2}> Click Me Too </UIButtonV2>
            <FormV2/>
            <ButtonV3 message='this is button for Login!'>Login Please</ButtonV3>
            {/* section5. STATE */}
            <StatePractice/>
            <StatePracticeV2/>
            <Profile/>
            {/*<Count/>*/}
            <UserV3/>
            <NumberComponent/>
            {/*<Count/>*/}
            <Count/>
        </>
    );
}

export default Main;