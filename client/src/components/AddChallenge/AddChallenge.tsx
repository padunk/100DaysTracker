import React, { useState } from "react";
import Divider from "../Divider/Divider";
import Wrapper from "../Wrapper/Wrapper";
import InputLabel from "../InputLabel/InputLabel";
import InputText from "../InputText/InputText";
import { BASE_URL } from "../../base/baseURL";
import Button from "../Button/Button";

interface Props {}

const AddChallenge = (props: Props) => {
    const inputWrapperClass =
        "grid grid-cols-1 col-gap-4 px-4 sm:grid-cols-form";

    const [title, setTitle] = useState<string>("");
    const [hashtag, setHashtag] = useState<string>("");
    const [goal, setGoal] = useState<string>("");

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            await fetch(`${BASE_URL}/add`, {
                method: "POST",
                mode: "cors",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, hashtag, goal }),
            }).then(() => {
                console.log("success add data to server");
                setTitle("");
                setHashtag("");
                setGoal("");
            });
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <Divider space={10} />
            <form
                action='post'
                className='container mx-auto bg-teal-400 py-4 rounded-lg max-w-md shadow-lg'
                onSubmit={handleSubmit}>
                <Wrapper classname={inputWrapperClass}>
                    <InputLabel for='title' />
                    <InputText
                        name='title'
                        req={true}
                        val={title}
                        placeholder='Learn JavaScript'
                        handleChange={(event: any) =>
                            setTitle(event.target.value.trim())
                        }
                    />
                </Wrapper>
                <Divider space={2} />
                <Wrapper classname={inputWrapperClass}>
                    <InputLabel for='hashtag' />
                    <InputText
                        name='hashtag'
                        req={true}
                        val={hashtag}
                        placeholder='#100DaysOfCode'
                        handleChange={(event: any) =>
                            setHashtag(event.target.value.trim())
                        }
                    />
                </Wrapper>
                <Divider space={2} />
                <Wrapper classname={inputWrapperClass}>
                    <InputLabel for='personalGoal' />
                    <InputText
                        name='personalGoal'
                        req={false}
                        val={goal}
                        placeholder='Cool Web Developer'
                        handleChange={(event: any) =>
                            setGoal(event.target.value.trim())
                        }
                    />
                </Wrapper>
                <Divider space={5} />
                <Wrapper classname='flex justify-center'>
                    <Button
                        type='submit'
                        bgColor='teal-700'
                        textColor='teal-100'>
                        Add Challenge
                    </Button>
                </Wrapper>
            </form>
        </div>
    );
};

export default AddChallenge;
