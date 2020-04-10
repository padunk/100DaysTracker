import React, { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  type: any;
  children: ReactNode;
  customClass?: string;
}

const defaultClass = "hover-nav";

const IconButton = (props: Props & React.HTMLProps<HTMLButtonElement>) => {
  const btnClass = classNames(defaultClass, props.customClass);
  return (
    <button type={props.type} className={btnClass}>
      {props.children}
    </button>
  );
};

export default IconButton;
