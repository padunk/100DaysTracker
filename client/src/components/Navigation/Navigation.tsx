import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Navigation = (props: Props) => {
    return (
        <nav>
            <div>
                <Link to='/skill-list'>Skill List</Link>
            </div>
            <div>
                <Link to='/'>
                    <h1>#100Days-Tracker</h1>
                </Link>
            </div>
            <div>
                <Link to='/add'>+</Link>
            </div>
        </nav>
    );
};

export default Navigation;
