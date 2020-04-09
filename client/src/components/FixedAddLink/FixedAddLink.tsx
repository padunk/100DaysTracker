import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import SvgAdd from "../../icons/Add";

interface Props {}

function FixedAddLink({}: Props): ReactElement {
  return (
    <div className="bottom-1rem right-2rem fixed">
      <NavLink
        exact
        to="/add"
        className="opacity-75"
        activeClassName="opacity-0"
      >
        <SvgAdd className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
      </NavLink>
    </div>
  );
}

export default FixedAddLink;
