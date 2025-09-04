import React, {useState} from 'react';
import Button from "./Button";
import styles from "./ButtonGroup.module.css";
import classNames from "classnames/bind";


function ButtonGroup(props) {
    const initialButtons = [
        { id: 1, label: "Button 1", icon: "🔥", isDisabled: false },
        { id: 2, label: "Button 2", icon: "💧", isDisabled: false },
        { id: 3, label: "Button 3", icon: "🌱", isDisabled: true },
        { id: 4, label: "Button 4", icon: "⚡", isDisabled: false },
    ];
    const initialState = initialButtons.map(item => {
        return {
            ...item,
            isActive: false
        }
    })

    const [buttonsActiveList , setButtonsList] = useState(initialState)


    const handleButtonClick = (id) => {
        const find = buttonsActiveList.find((item) => item.id === id);
        if (find && !find.isDisabled) {
            const updatedButtons = buttonsActiveList.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        isActive: !item.isActive
                    };
                }
                return item;
            });
            setButtonsList(updatedButtons);
        }
    }
    const handleReset = () => {
        setButtonsList(initialState);
    }
    const cx = classNames.bind(styles);



    return (
        <div>
            <h1>Active {buttonsActiveList.filter(data => data.isActive)?.length}</h1>
            <ul>
                {buttonsActiveList.map((item)=> {
                    return (
                        <>
                            <Button
                                key={`${item.label}_${item.id}`}
                                id={item.id}
                                label={item.label}
                                icon={item.icon}
                                isActive={item.isActive}
                                isDisabled={item.isDisabled}
                                handleClick={handleButtonClick}
                            />
                        </>
                    )
                })}
            </ul>
            <button className={cx('button')} onClick={handleReset}>Reset</button>
        </div>
    );
}

export default ButtonGroup;