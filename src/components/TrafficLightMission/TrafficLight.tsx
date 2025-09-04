import React, {useState} from 'react';
import LightButton from "./LightButton";
import styled from "styled-components";

function TrafficLight() {
    const makeLightInitialState = (color : string) => {
        return {
            color : color,
            isActive: false,
        }
    }
    const [lightsArray, setLightsArray] = useState(['red', 'yellow', 'green '].map(data=> makeLightInitialState(data)));
    const handleClick = (color: string) => {
        const result = lightsArray.find(data => data.color === color);
        if (result) {
            setLightsArray(lightsArray.map(data => {
                return data.color === color ? {...data, isActive: true} : {...data, isActive: false};
            }));
        }

    }

    const LightWrapper = styled.div`
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #333;
        width: 120px;
        height: 320px;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 20px 0;
    `


    return (
        <LightWrapper>
                {lightsArray.map(data=> {
                    return (
                        <>
                            <li>
                                <LightButton
                                    color={data.color}
                                    isActive={data.isActive}
                                    onClick={() => handleClick(data.color)}
                                />
                            </li>
                        </>
                    )
                })}
        </LightWrapper>
    );
}

export default TrafficLight;