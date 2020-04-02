import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Navigation = (props: Props) => {
    return (
        <nav className='w-screen bg-indigo-400 flex flex-wrap justify-around py-8 text-3xl shadow-outline shadow-xl'>
            <div>
                <Link to='/skill-list'>Skill List</Link>
            </div>
            <div>
                <Link to='/'>
                    <h1 className='font-bold text-center'>#100Days-Tracker</h1>
                </Link>
            </div>
            <div>
                <Link to='/add'>+</Link>
            </div>
        </nav>
    );
};

export default Navigation;
