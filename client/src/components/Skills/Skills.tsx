import React, { useState } from "react";
import AddSkill from "../AddSkill/AddSkill";
import Divider from "../Divider/Divider";
import SkillDetail from "../SkillCard/SkillDetail";
import SubTitle from "../SubTitle/SubTitle";
import Wrapper from "../Wrapper/Wrapper";

interface Props {}

const Skills = (props: Props) => {
    const [skill, setSkill] = useState<string | undefined>("");

    const handleChange = (event: React.FormEvent<HTMLInputElement>): void =>
        setSkill(event.currentTarget.value.trim());
    return (
        <div>
            <Divider space={5} />
            <SubTitle subtitle='My New SuperSkills' emoji='🚀' />
            <Divider space={10} />
            <AddSkill handleChange={handleChange} skill={skill} />
            <Divider space={8} />
            <Wrapper customClass='flex flex-row flex-wrap mx-auto justify-around mx-auto max-w-full w-8/12 container'>
                <SkillDetail title='Wish List' />
                <SkillDetail title='In Progress' />
                <SkillDetail title='Complete' />
            </Wrapper>
        </div>
    );
};

export default Skills;
