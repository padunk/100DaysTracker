import React from "react";

interface Props {
    space: number;
}

const Divider = (props: Props) => {
    return <div className={`m-${props.space}`}></div>;
};

export default Divider;
