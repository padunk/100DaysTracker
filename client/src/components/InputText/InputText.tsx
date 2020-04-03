import React, { ReactElement } from "react";

interface Props {
    name: string;
    placeholder: string;
    handleChange: Function;
    req: boolean;
    val: string;
}

export default function InputText(props: Props): ReactElement {
    return (
        <input
            className='just-self-start px-4 py-1 rounded-sm outline-none w-full'
            type='text'
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            onChange={event => props.handleChange(event)}
            required={props.req}
            value={props.val}
        />
    );
}
