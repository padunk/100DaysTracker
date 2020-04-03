import React, { ReactElement } from "react";

interface Props {
    for: string;
}

export default function InputLabel(props: Props): ReactElement {
    return (
        <label
            htmlFor={props.for}
            className='capitalize py-1 font-bold'>
            {props.for}
        </label>
    );
}
