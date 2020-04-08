import React from "react";
import { NavLink } from "react-router-dom";
import SvgSkill from "../../icons/Skill";
import SvgAdd from "../../icons/Add";
import Gap from "../Gap/Gap";

interface Props {}

const Navigation = (props: Props) => {
  return (
    <nav className="bg-indigo-800 text-indigo-100 py-2 px-4 shadow-lg flex justify-between sm:justify-around sm:py-4">
      <Gap className="hidden lg:block lg:w-12 lg:h-12" />
      <NavLink
        exact
        to="/"
        className="grid pli-center hover-nav opacity-50"
        activeClassName="opacity-100"
      >
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          #
          <span role="img" aria-label="100 emoji">
            💯
          </span>
          Days-Tracker
        </h1>
      </NavLink>
      <NavLink
        exact
        to="/skills"
        className="hover-nav opacity-50"
        activeClassName="opacity-100"
      >
        <SvgSkill className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
      </NavLink>
      {/* <div className="">
        <NavLink to="/add">
          <SvgAdd className="w-8 h-8" />
        </NavLink>
      </div> */}
    </nav>
  );
};

export default Navigation;
