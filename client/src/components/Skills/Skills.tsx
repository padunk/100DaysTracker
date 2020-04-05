import React, { useState, useEffect } from "react";
import AddSkill from "../AddSkill/AddSkill";
import Divider from "../Divider/Divider";
import SkillDetail from "../SkillCard/SkillDetail";
import SubTitle from "../SubTitle/SubTitle";
import Wrapper from "../Wrapper/Wrapper";
import { BASE_URL } from "../../base/baseURL";

interface Props {}

interface ISkills {
    skill: string;
    new_skill: number;
    progress_skill: number;
    done_skill: number;
    date_created: number;
}

const Skills = (props: Props) => {
    const [newSkill, setNewSkill] = useState<string | undefined>("");
    const [allSkills, setAllSkills] = useState<Array<ISkills>>([]);

    useEffect(() => {
        async function getAllSkills(url: string) {
            const response = await fetch(`${url}/skills`).then((r) => r.json());
            console.log(response);
            setAllSkills(response);
        }

        getAllSkills(BASE_URL);
    }, []);

    const handleChange = (event: React.FormEvent<HTMLInputElement>): void =>
        setNewSkill(event.currentTarget.value.trim());

    return (
        <div>
            <Divider space={5} />
            <SubTitle subtitle='My New SuperSkills' emoji='🚀' />
            <Divider space={10} />
            <AddSkill handleChange={handleChange} skill={newSkill} />
            <Divider space={8} />
            <Wrapper customClass='flex flex-row flex-wrap mx-auto justify-around mx-auto max-w-full w-8/12 container'>
                <SkillDetail
                    title='Wish List'
                    skills={allSkills.filter((skill) => skill.new_skill === 1)}
                />
                <SkillDetail
                    title='In Progress'
                    skills={allSkills.filter(
                        (skill) => skill.progress_skill === 1
                    )}
                />
                <SkillDetail
                    title='Complete'
                    skills={allSkills.filter((skill) => skill.done_skill === 1)}
                />
            </Wrapper>
        </div>
    );
};

export default Skills;
