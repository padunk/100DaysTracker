import React, { useState } from "react";
import Divider from "../Divider/Divider";
import Wrapper from "../Wrapper/Wrapper";
import InputLabel from "../InputLabel/InputLabel";
import InputText from "../InputText/InputText";

interface Props {}

const AddChallenge = (props: Props) => {
    const inputWrapperClass = "grid grid-cols-1 col-gap-4 px-4 sm:grid-cols-2";

    const [title, setTitle] = useState<string>("");
    const [hashtag, setHashtag] = useState<string>("");
    const [goal, setGoal] = useState<string>("");

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        try {
            await fetch("http://192.168.168.17:5000/add", {
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
                className='container mx-auto bg-pink-400 py-4 rounded-lg max-w-md shadow-lg'
                onSubmit={handleSubmit}>
                <Wrapper classname={inputWrapperClass}>
                    <InputLabel for='title' />
                    <InputText
                        name='title'
                        req={true}
                        val={title}
                        placeholder='Learn JavaScript'
                        handleChange={(event: any) =>
                            setTitle(event.target.value)
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
                            setHashtag(event.target.value)
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
                            setGoal(event.target.value)
                        }
                    />
                </Wrapper>
                <Divider space={5} />
                <Wrapper classname='flex justify-center'>
                    <button
                        type='submit'
                        className='font-bold bg-purple-600 rounded-sm px-5 py-2 text-white hover:bg-purple-500 hover:text-gray-900 transition duration-300 shadow-md'>
                        Add Challenge
                    </button>
                </Wrapper>
            </form>
        </div>
    );
};

export default AddChallenge;
