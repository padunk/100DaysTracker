import React, { ReactElement } from "react";
import Wrapper from "../Wrapper/Wrapper";

interface Props {
    subtitle: string;
    emoji?: string;
}

function SubTitle({ subtitle, emoji }: Props): ReactElement {
    return (
        <Wrapper customClass='max-w-full'>
            <h2 className='text-center text-2xl font-bold'>
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
