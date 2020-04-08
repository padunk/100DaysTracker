import React from "react";

interface Props {}

const Gap = (props: Props & React.HTMLProps<HTMLDivElement>) => {
    return <div {...props}></div>;
};

export default Gap;
