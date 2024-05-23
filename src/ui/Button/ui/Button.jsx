import cls from "./Button.module.scss"
import {useState} from "react";

const Button = (props) => {

    const {children, variant} = props

    const btnClass = cls[variant]

    return (
        <button id= "btn" className={btnClass}>
            {children}
        </button>
    );
};

export  {Button};