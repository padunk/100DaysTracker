import * as React from "react";

function SvgAdd(props) {
    return (
        <svg height='512pt' viewBox='0 0 512 512' width='512pt' {...props}>
            <linearGradient
                id='add_svg__a'
                gradientUnits='userSpaceOnUse'
                x1={256}
                x2={256}
                y1={0}
                y2={512}>
                <stop offset={0} stopColor='#f6ad55' />
                <stop offset={1} stopColor='#dd6b20' />
            </linearGradient>
            <path
                d='M437.02 74.98C388.668 26.63 324.379 0 256 0S123.332 26.629 74.98 74.98C26.63 123.332 0 187.621 0 256s26.629 132.668 74.98 181.02C123.332 485.37 187.621 512 256 512s132.668-26.629 181.02-74.98C485.37 388.668 512 324.379 512 256s-26.629-132.668-74.98-181.02zM256 472c-119.102 0-216-96.898-216-216S136.898 40 256 40s216 96.898 216 216-96.898 216-216 216zm20-236.02h90v40h-90v90h-40v-90h-90v-40h90v-90h40zm0 0'
                fill='url(#add_svg__a)'
            />
        </svg>
    );
}

export default SvgAdd;
