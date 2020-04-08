import React, { ReactElement, useRef, useEffect } from "react";
import { gsap } from "gsap";

import Wrapper from "../Wrapper/Wrapper";

interface Props {
    subtitle: string;
    emoji?: string;
}

function SubTitle({ subtitle, emoji }: Props): ReactElement {
    let heading: any = useRef(null);

    useEffect(() => {
        gsap.from(heading, .8, {
            delay: .5,
            x: -64,
            opacity: 0,
            ease: "back",
            autoAlpha: 0,
        });
    }, [heading]);

    return (
        <Wrapper customClass='max-w-full'>
            <h2
                className='text-center text-2xl font-bold opacity-100'
                ref={(el) => (heading = el)}>
                <span role='img' aria-label='emoji'>
                    {emoji}
                </span>{" "}
                {subtitle}{" "}
                <span role='img' aria-label='emoji'>
                    {emoji}
                </span>
            </h2>
        </Wrapper>
    );
}

export default SubTitle;
