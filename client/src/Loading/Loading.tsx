import React, { ReactElement, useEffect, useRef } from "react";

import { gsap } from "gsap";

function Loading(): ReactElement {
    let loadingElement: any = useRef(null);

    useEffect(() => {
        let animation = gsap.timeline();
        animation.to(loadingElement, {
            rotate: 9999,
            duration: 2,
            repeat: -1,
            repeatDelay: 0.5,
            ease: "back",
        });
    }, [loadingElement]);
    return (
        <div
            ref={(el) => (loadingElement = el)}
            className='loading w-16 h-16 mx-auto rounded-full border-double border-8 b-t-red b-r-blue b-b-green b-l-yellow'></div>
    );
}

export default Loading;
