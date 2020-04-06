import React, { useState, useEffect } from "react";
import AddSkill from "../AddSkill/AddSkill";
import Divider from "../Divider/Divider";
import SubTitle from "../SubTitle/SubTitle";
import Wrapper from "../Wrapper/Wrapper";
import { BASE_URL } from "../../base/baseURL";
import SkillWish from "../SkillCard/SkillWish";
import SkillProgress from "../SkillCard/SkillInProgress";
import SkillComplete from "../SkillCard/SkillComplete";
import SkillCard from "../SkillCard/SkillCard";

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
    const [errorMessage, setErrorMessage] = useState<string>("");

    async function getAllSkills(url: string) {
        const response = await fetch(`${url}/skills`).then((r) => r.json());
        setAllSkills(response);
    }

    useEffect(() => {
        getAllSkills(BASE_URL);
    }, []);

    const handleChange = (event: React.FormEvent<HTMLInputElement>): void =>
        setNewSkill(event.currentTarget.value);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        function postNewSkill(url: string, data: any) {
            let serverResponse: number;

            fetch(`${url}/skills`, {
                method: "POST",
                mode: "cors",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => {
                    console.log(response);
                    if (!response.ok) {
                        throw new Error(
                            `HTTP error, status = ${response.status}: ${response.statusText}`
                        );
                    }
                    serverResponse = response.status;
                })
                .then(() => getAllSkills(BASE_URL))
                .catch((error) => {
                    setErrorMessage(error.message);
                });
        }

        postNewSkill(BASE_URL, { newSkill });
    };

    return (
        <div>
            <Divider space={5} />
            <SubTitle subtitle='My New SuperSkills' emoji='🚀' />
            <Divider space={10} />
            <AddSkill
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                skill={newSkill}
            />
            <Divider space={8} />
            <p>{errorMessage}</p>
            <Wrapper customClass='flex flex-row flex-wrap mx-auto justify-around mx-auto max-w-full w-8/12 container'>
                <SkillCard
                    id={1}
                    title='Wish List'
                    skills={allSkills.filter((skill) => skill.new_skill === 1)}
                />
                <SkillCard
                    id={2}
                    title='In Progress'
                    skills={allSkills.filter(
                        (skill) => skill.progress_skill === 1
                    )}
                />
                <SkillCard
                    id={3}
                    title='Complete'
                    skills={allSkills.filter((skill) => skill.done_skill === 1)}
                />
            </Wrapper>
        </div>
    );
};

export default Skills;
