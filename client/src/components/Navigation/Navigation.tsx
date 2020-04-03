import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Navigation = (props: Props) => {
    return (
        <nav className='w-screen bg-indigo-400 flex flex-wrap justify-around py-8 text-3xl shadow-outline shadow-xl'>
            <div className='hover-nav'>
                <Link to='/skill-list'>Skill List</Link>
            </div>
            <div className='hover-nav'>
                <Link to='/'>
                    <h1 className='font-bold text-center '>#100Days-Tracker</h1>
                </Link>
            </div>
            <div className='hover-nav-svg w-8 h-8'>
                <Link to='/add'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 477.867 477.867'
                        className='w-8'>
                        <path d='M392.533 0h-307.2C38.228.056.056 38.228 0 85.333v307.2c.056 47.105 38.228 85.277 85.333 85.333h307.2c47.105-.056 85.277-38.228 85.333-85.333v-307.2C477.81 38.228 439.638.056 392.533 0zm51.2 392.533c0 28.277-22.923 51.2-51.2 51.2h-307.2c-28.277 0-51.2-22.923-51.2-51.2v-307.2c0-28.277 22.923-51.2 51.2-51.2h307.2c28.277 0 51.2 22.923 51.2 51.2v307.2z' />
                        <path d='M324.267 221.867H256V153.6c0-9.426-7.641-17.067-17.067-17.067s-17.067 7.641-17.067 17.067v68.267H153.6c-9.426 0-17.067 7.641-17.067 17.067S144.174 256 153.6 256h68.267v68.267c0 9.426 7.641 17.067 17.067 17.067S256 333.692 256 324.267V256h68.267c9.426 0 17.067-7.641 17.067-17.067s-7.642-17.066-17.067-17.066z' />
                    </svg>
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;
