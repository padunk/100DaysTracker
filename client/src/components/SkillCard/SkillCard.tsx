import React, { ReactElement } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Divider from "../Divider/Divider";
import SvgShuttle from "../../icons/Shuttle";
import SvgDelete from "../../icons/Delete";
import Gap from "../Divider/Gap";
import SvgUpdateArrow from "../../icons/UpdateArrow";
import SvgCheckmark from "../../icons/Checkmark";

interface ISkills {
    skill: string;
    new_skill: number;
    progress_skill: number;
    done_skill: number;
    date_created: number;
}

interface Props {
    id: number;
    title: string;
    skills: Array<ISkills>;
}

function SkillDetail({ title, skills, id }: Props): ReactElement {
    let iconsToShow: Array<JSX.Element> = [];

    if (id === 1) {
        iconsToShow = [<SvgShuttle fill='#3182ce' className='w-4 h-4' />];
    } else if (id === 2) {
        iconsToShow = [
            <SvgCheckmark fill='#48bb78' className='w-4 h-4' />,
            <Gap className='w-4' />,
            <SvgUpdateArrow fill='#9f7aea' className='w-4 h-4' />,
        ];
    } else if (id === 3) {
        iconsToShow = [<SvgUpdateArrow fill='#9f7aea' className='w-4 h-4' />];
    }

    return (
        <Wrapper customClass='flex-1'>
            <Wrapper customClass='bg-gray-800 text-white h-10 flex items-center px-4 border border-gray-100'>
                <h3>{title}</h3>
            </Wrapper>
            <Divider space={2} />
            <div>
                <ul className='px-4'>
                    {skills.map((skill: any, id: number) => {
                        return (
                            <li
                                key={skill - id}
                                className='flex flex-wrap justify-between items-center py-2'>
                                <span className='text-lg'>{skill.skill}</span>
                                <div className='flex flex-wrap'>
                                    {iconsToShow.map((icons) => icons)}
                                    <Gap className='w-4' />
                                    <SvgDelete
                                        fill='#e53e3e'
                                        className='w-4 h-4'
                                    />
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Wrapper>
    );
}

export default SkillDetail;
