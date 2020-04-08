import React, { ReactElement } from "react";
import classNames from "classnames";

import Wrapper from "../Wrapper/Wrapper";
import SvgShuttle from "../../icons/Shuttle";
import SvgDelete from "../../icons/Delete";
import Gap from "../Gap/Gap";
import SvgUpdateArrow from "../../icons/UpdateArrow";
import SvgCheckmark from "../../icons/Checkmark";

interface ISkills {
    skill_id: string;
    skill_name: string;
    new_skill: number;
    progress_skill: number;
    complete_skill: number;
    date_created: number;
}

interface Props {
    id: number;
    title: string;
    skills: Array<ISkills>;
    handleClick: any;
}

function SkillDetail({ title, skills, id, handleClick }: Props): ReactElement {
    return (
        <Wrapper customClass='flex-1'>
            <Wrapper customClass='bg-gray-800 text-white h-10 flex items-center px-4 border border-gray-100'>
                <h3>{title}</h3>
            </Wrapper>
            <ul>
                {skills.map((skill: ISkills, idx: number) => {
                    const listClassNames = classNames(
                        "flex flex-wrap justify-between items-center py-2 px-4",
                        { "bg-gray-400": idx % 2 !== 0 }
                    );
                    return (
                        <li key={skill.skill_id} className={listClassNames}>
                            <span className='text-lg'>{skill.skill_name}</span>
                            <div className='flex flex-wrap'>
                                {id === 1 && (
                                    <SvgShuttle
                                        id={skill.skill_id}
                                        fill='#3182ce'
                                        className='w-4 h-4'
                                        onClick={handleClick}
                                    />
                                )}
                                {id === 2 && (
                                    <>
                                        <SvgCheckmark
                                            id={skill.skill_id}
                                            fill='#48bb78'
                                            className='w-4 h-4'
                                            onClick={handleClick}
                                        />
                                        <Gap className='w-4' />
                                        <SvgUpdateArrow
                                            id={skill.skill_id}
                                            fill='#9f7aea'
                                            className='w-4 h-4'
                                            onClick={handleClick}
                                        />
                                    </>
                                )}
                                {id === 3 && (
                                    <SvgUpdateArrow
                                        id={skill.skill_id}
                                        fill='#9f7aea'
                                        className='w-4 h-4'
                                        onClick={handleClick}
                                    />
                                )}
                                <Gap className='w-4' />
                                <SvgDelete
                                    id={skill.skill_id}
                                    fill='#e53e3e'
                                    className='w-4 h-4'
                                    onClick={handleClick}
                                />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </Wrapper>
    );
}

export default SkillDetail;
