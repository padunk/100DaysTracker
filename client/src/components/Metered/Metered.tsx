import React from "react";

interface Props {
    progress: number;
}

const Metered = (props: Props) => {
    return (
        <div className='px-4 h-8 flex flex-wrap items-center'>
            <div
                style={{ height: "10px" }}
                className='rounded-full w-1/2 border border-gray-600'>
                <div
                    style={{
                        width: `${props.progress}%`,
                    }}
                    className='bg-pink-500 h-2 rounded-full opacity-75'
                />
            </div>
            <span className='text-gray-800 opacity-75 text-sm pl-2'>
                {props.progress}/100
            </span>
        </div>
    );
};

export default Metered;
