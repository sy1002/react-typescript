import React, {useState} from 'react';
import classNames from "classnames/bind";
import styles from "./ButtonGroup.module.css";

interface ButtonProps {
    id : number;
    label : string;
    icon : string;
    isDisabled : boolean;
    isActive : boolean
    handleClick: (id: number) => void;
}

function Button(props:ButtonProps) {
    const cx = classNames.bind(styles);

    const { id, label, icon, isDisabled, handleClick , isActive } = props;

    return (
        <>
            <li key={`${label}_${id}`}>
                <button
                    className={cx('button', {
                        'active': isActive,
                        'disabled': isDisabled,
                        'highlight': id ===2,
                    })}
                    disabled={isDisabled}
                    onClick={() =>handleClick(id)}
                >
                    {`${icon}${label}`}
                </button>
            </li>
        </>
    );
}

export default Button;