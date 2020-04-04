import React, { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Divider from "../Divider/Divider";
import { BASE_URL } from "../../base/baseURL";
import Button from "../Button/Button";

interface Props {
    id: string;
    hashtag: string;
    getAllDetails: Function;
}

const AddDetail = (props: Props) => {
    const [progress, setProgress] = useState<string>(`\n${props.hashtag}`);
    let initialText = `Today I\'m committing to do`;
    const [twitterHref, setTwitterHref] = useState<string>(
        `https://twitter.com/intent/tweet?hashtags=${props.hashtag.slice(
            1
        )}&text=${encodeURI(initialText)}`
    );

    async function saveDetail(url: string) {
        try {
            await fetch(`${url}/detail/${props.id}`, {
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
                    setProgress(`\n${props.hashtag}`);
                })
                .then(() => {
                    props.getAllDetails(`${url}/detail/${props.id}`);
                });
        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (event: any) => {
        let { value: text } = event.currentTarget;
        setProgress(text);
        setTwitterHref(
            `https://twitter.com/intent/tweet?hashtags=${props.hashtag.slice(
                1
            )}&text=${encodeURI(text)}`
        );
    };

    const handleSubmit = (event: any) => {
        if (event.currentTarget instanceof HTMLFormElement) {
            event.preventDefault();
        }
        saveDetail(BASE_URL);
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
                    placeholder={progress}
                    value={progress}
                    onChange={handleChange}></textarea>
                <Divider space={2} />
                <Wrapper classname='flex flex-wrap justify-around'>
                    <Button
                        type='submit'
                        bgColor='teal-200'
                        textColor='teal-700'>
                        Save
                    </Button>
                    <Button
                        type='button'
                        bgColor='teal-700'
                        textColor='teal-100'>
                        <a
                            href={twitterHref}
                            target='_blank'
                            rel='noopener noreferrer'
                            tabIndex={-1}
                            onClick={handleSubmit}>
                            Tweet & Save
                        </a>
                    </Button>
                </Wrapper>
            </div>
        </form>
    );
};

export default AddDetail;
