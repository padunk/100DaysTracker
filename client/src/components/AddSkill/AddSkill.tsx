import React from "react";
import InputText from "../InputText/InputText";
import Button from "../Button/Button";

interface Props {
    skill: string | undefined;
    handleChange: React.FormEventHandler<HTMLInputElement>;
}

const AddSkill = (props: Props) => {
    return (
        <form action='POST' className='max-w-xs mx-auto flex justify-center'>
            <InputText
                name='add-skill'
                placeholder='Concurrency'
                req={true}
                handleChange={props.handleChange}
                val={props.skill}
                customClass='bg-gray-400 rounded-tl-full rounded-bl-full placeholder-green-500'
            />
            <Button
                type='submit'
                customClass='bg-gray-400 rounded-br-full rounded-tr-full border-l-2 border-gray-500 px-4'>
                Add
            </Button>
        </form>
    );
};

export default AddSkill;
