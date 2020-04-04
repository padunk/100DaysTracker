import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Divider from "../Divider/Divider";
import { BASE_URL } from "../../base/baseURL";

interface Props {
    id: string;
    hashtag: string;
    getAllDetails: Function;
}

const AddDetail = (props: Props) => {
    const [progress, setProgress] = useState<string>(`\n${props.hashtag}`);
    const [twitterHref, setTwitterHref] = useState<string>("");

    const handleChange = (event: any) => {
        let { value: text } = event.currentTarget;
        setProgress(text);
        setTwitterHref(
            `https://twitter.com/intent/tweet?hashtags=${props.hashtag.slice(
                1
            )}&text="${encodeURI(text)}"`
        );
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log("add-detail", props.id);
        try {
            await fetch(`${BASE_URL}/detail/${props.id}`, {
                method: "POST",
                mode: "cors",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ progress }),
            })
                .then(() => {
                    console.log("Succeed posting data to server.");
                    setProgress("");
                })
                .then(() => {
                    props.getAllDetails(`${BASE_URL}/detail/${props.id}`);
                });
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmitAndTweet = (event: any) => {
        event.preventDefault();
    };

    return (
        <form
            action='POST'
            onSubmit={handleSubmit}
            className='max-w-md p-4 rounded-md bg-teal-400 mx-auto border-teal-600 border shadow-lg'>
            <div>
                <textarea
                    className='w-full rounded-md px-4 py-1 shadow-inner bg-gray-300 resize-none'
                    name='progress'
                    id='progress'
                    rows={5}
                    maxLength={140}
                    required
                    placeholder={progress}
                    value={progress}
                    onChange={handleChange}></textarea>
                <Divider space={2} />
                <Wrapper classname='flex flex-wrap justify-around'>
                    <button type='submit' className='btn btn-teal-400'>
                        Save
                    </button>
                    <button type='submit' className='btn btn-teal-400 text-indigo-700'>
                        <a
                            href={twitterHref}
                            target='_blank'
                            rel='noopener noreferrer'
                            tabIndex={-1}>
                            Tweet & Save
                        </a>
                    </button>
                </Wrapper>
            </div>
        </form>
    );
};

export default AddDetail;
