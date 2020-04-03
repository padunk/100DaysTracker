import React, { Fragment, ReactNode } from "react";
import Navigation from "../components/Navigation/Navigation";

interface Props {
    children: ReactNode;
}

function Layout(props: Props) {
    return (
        <Fragment>
            <Navigation />
            {props.children}
        </Fragment>
    );
}

export default Layout;
