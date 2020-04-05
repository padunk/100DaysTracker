import React, { ReactNode } from "react";
import classNames from "classnames";

interface Props {
    children: ReactNode;
    customClass?: string;
}

const Wrapper = (props: Props) => {
    const wrapperClass = classNames(props.customClass);
    return <div className={wrapperClass}>{props.children}</div>;
};

export default Wrapper;
