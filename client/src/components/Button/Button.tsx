import React, { ReactNode } from "react";

interface Props {
    type: any;
    bgColor: string;
    textColor: string;
    children: ReactNode;
}

const defaultClass = "px-3 py-1 font-bold rounded-md";

const Button = (props: Props) => {
    const classnames = defaultClass.concat(
        ` bg-${props.bgColor} text-${props.textColor}`
    );
    return (
        <button type={props.type} className={classnames}>
            {props.children}
        </button>
    );
};

export default Button;
