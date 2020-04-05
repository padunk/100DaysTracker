import React, { ReactNode } from "react";
import classNames from "classnames";

interface Props {
    type: any;
    children: ReactNode;
    customClass?: string;
}

const defaultClass = "px-3 py-1 font-bold rounded-md";

const Button = (props: Props) => {
    const btnClass = classNames(defaultClass, props.customClass);
    return (
        <button type={props.type} className={btnClass}>
            {props.children}
        </button>
    );
};

export default Button;