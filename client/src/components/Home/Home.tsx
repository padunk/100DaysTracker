import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Divider from "../Divider/Divider";
import { BASE_URL } from "../../base/baseURL";

interface Props {}

interface IChallenge {
    challenge_id: string;
    title: string;
    hash_tag: string;
    goal: string;
    date_created: number;
}

const Home = (props: Props) => {
    const [challengeList, setChallengeList] = useState<Array<IChallenge>>([]);
    const dateOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
    };

    useEffect(() => {
        async function getAllChallenges(url: string) {
            try {
                const response = await fetch(url).then((res) => res.json());
                setChallengeList(response);
            } catch (error) {
                console.log(error);
            }
        }

        getAllChallenges(BASE_URL);
    }, []);

    if (challengeList.length === 0) {
        return <div>Loading</div>;
    } else {
        return (
            <Fragment>
                <Divider space={5} />
                <div className='max-w-full'>
                    <h2 className='text-center text-2xl font-bold'>
                        <span role='img' aria-label='star emoji'>⭐️</span> My Journey to Awesomeness! <span role='img' aria-label='star emoji'>⭐️</span>
                    </h2>
                </div>
                <Divider space={5} />
                <ul className='text-xl max-w-md mx-auto'>
                    {challengeList.map((challenge) => {
                        return (
                            <li
                                key={challenge.challenge_id}
                                className='rounded-lg border border-purple-600 mb-4 card'>
                                <Link
                                    className='block'
                                    to={{
                                        pathname: `detail/${challenge.challenge_id}`,
                                        state: {
                                            hashtag: challenge.hash_tag,
                                        },
                                    }}>
                                    <div className='flex flex-wrap justify-between capitalize  bg-purple-400 p-4'>
                                        <h3 className='inline-flex font-bold'>
                                            {challenge.title}
                                        </h3>
                                        <p className='inline-flex text-gray-900 opacity-75 text-sm'>
                                            {new Intl.DateTimeFormat(
                                                "default",
                                                dateOptions
                                            ).format(challenge.date_created)}
                                        </p>
                                    </div>
                                    <p className='text-gray-800 opacity-75 px-4 pt-2'>
                                        {challenge.goal}
                                    </p>
                                    <p className='text-gray-800 opacity-75 text-sm px-4 pb-4'>
                                        {challenge.hash_tag}
                                    </p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
};

export default Home;
