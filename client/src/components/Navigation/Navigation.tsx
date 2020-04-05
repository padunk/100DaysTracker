import React from "react";
import { NavLink } from "react-router-dom";
import SvgSkill from '../../icons/Skill'
import SvgAdd from '../../icons/Add'

interface Props {}

const Navigation = (props: Props) => {
    return (
        <nav className='w-screen bg-indigo-500 flex flex-wrap justify-around py-6 shadow-xl border-t-4 border-pink-500 items-center'>
            <div className='hover-nav text-xl'>
                <NavLink to='/skills'>
                    <SvgSkill className='w-12 h-12' />
                </NavLink>
            </div>
            <div className='hover-nav'>
                <NavLink to='/'>
                    <h1 className='font-bold text-3xl text-center uppercase '>
                        #<span role='img' aria-label='100 emoji'>💯</span>Days-Tracker
                    </h1>
                </NavLink>
            </div>
            <div className='hover-nav-svg w-12 h-12'>
                <NavLink to='/add'>
                    <SvgAdd className='w-10 h-10' />
                </NavLink>
            </div>
        </nav>
    );
};

export default Navigation;
