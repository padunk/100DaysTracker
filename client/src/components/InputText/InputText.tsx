import React, { ReactElement } from "react";
import classNames from "classnames";

interface Props {
    name: string;
    handleChange: React.FormEventHandler<HTMLInputElement>;
    customClass?: string;
    placeholder?: string;
    req?: boolean;
    val?: string | undefined;
}

const defaultInputClass: string = "px-4 py-1 rounded-sm outline-none";

export default function InputText(props: Props): ReactElement {
    const inputClass = classNames(defaultInputClass, props.customClass);
    return (
        <input
            className={inputClass}
            type='text'
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            // onChange={(event) => props.handleChange(event)}
            onChange={props.handleChange}
            required={props.req}
            value={props.val}
            autoComplete='off'
        />
    );
}
