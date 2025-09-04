import React from 'react';

type TrafficLightColor = 'red' | 'yellow' | 'green';

interface TrafficLightProps {
    light : TrafficLightColor;
    handleClick: (color: TrafficLightColor) => void;
}

function TrafficLight(props :TrafficLightProps) {
    const { light, handleClick } = props;

    switch (light) {
        case "red":
            return (
                <>
                    <h1>Light ❤️❤️❤️</h1>
                    <button onClick={() => handleClick('red')}>Change Color</button>
                </>
            );
        case "yellow":
            return (
                <>
                    <h1>Light 💛💛💛</h1>
                    <button onClick={() => handleClick('yellow')}>Change Color</button>
                </>
            );
        case "green":
            return (
                <>
                    <h1>Light 💚💚💚</h1>
                    <button onClick={() => handleClick('green')}>Change Color</button>
                </>
            );

    }
}

export default TrafficLight;