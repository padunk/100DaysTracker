import React, { ReactNode } from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../Footer/Footer";
import Wrapper from "../components/Wrapper/Wrapper";
import Gap from "../components/Gap/Gap";

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  return (
    <Wrapper customClass="relative min-h-screen mx-auto">
      <Navigation />
      <div className="px-2">{props.children}</div>
      <Gap className="pb-40" />
      <Footer />
    </Wrapper>
  );
}

export default Layout;
