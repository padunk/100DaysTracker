import React, { ReactNode} from "react";

interface Props {
    classname: string;
    children: ReactNode;
}

const Wrapper = (props: Props) => {
    return <div className={props.classname}>{props.children}</div>;
};

export default Wrapper;
