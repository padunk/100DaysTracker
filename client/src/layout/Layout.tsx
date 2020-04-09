import React, { Fragment, ReactNode } from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  return (
    <Wrapper customClass="relative min-h-screen mx-auto">
      <Navigation />
      <div className="px-2">{props.children}</div>
      <Footer />
    </Wrapper>
  );
}

export default Layout;
