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

    useEffect(() => {
        async function getAllChallenges(url: string) {
            try {
                const response = await fetch(url).then(res => res.json());
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
                <Divider space={10} />
                <ul className='text-xl max-w-md mx-auto'>
                    {challengeList.map(challenge => {
                        return (
                            <li
                                key={challenge.challenge_id}
                                className='bg-purple-400 rounded-lg shadow-lg border border-pink-600 mb-4'>
                                <Link
                                    className='py-4 px-6 block'
                                    to={{
                                        pathname: `detail/${challenge.challenge_id}`,
                                        state: {
                                            hashtag: challenge.hash_tag,
                                        },
                                    }}>
                                    <p>
                                        Title:{" "}
                                        <strong className='font-bold'>
                                            {challenge.title}
                                        </strong>
                                    </p>
                                    <p>
                                        Personal goal:{" "}
                                        <strong className='font-bold'>
                                            {challenge.goal}
                                        </strong>
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
