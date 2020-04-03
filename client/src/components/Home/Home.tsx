import React, { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Divider from "../Divider/Divider";

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

    useEffect(() => {
        async function getAllChallenges(url: string) {
            try {
                const response = await fetch(url).then(res => res.json());
                setChallengeList(response);
            } catch (error) {
                console.log(error);
            }
        }

        getAllChallenges("http://192.168.168.17:5000");
    }, []);

    if (challengeList.length === 0) {
        return <div>Loading</div>;
    } else {
        return (
            <Fragment>
                <Divider space={10} />
                <ul className='text-xl max-w-md mx-auto'>
                    {challengeList.map(challenge => {
                        return (
                            <li
                                key={challenge.challenge_id}
                                className='bg-purple-400 rounded-lg shadow-2xl border border-pink-600'>
                                <Link
                                    className='py-4 px-6 block'
                                    to={`detail/${challenge.challenge_id}`}>
                                    <p>
                                        Title:{" "}
                                        <span className='font-bold'>
                                            {challenge.title}
                                        </span>
                                    </p>
                                    <p>
                                        Personal goal:{" "}
                                        <span className='font-bold'>
                                            {challenge.goal}
                                        </span>
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
