import React, { useEffect, useState, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import Divider from "../Divider/Divider";
import { BASE_URL } from "../../base/baseURL";
import Metered from "../Metered/Metered";
import SubTitle from "../SubTitle/SubTitle";

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
    let progress = useRef<number[]>([]);
    const dateOptions = {
        day: "numeric",
        month: "short",
        year: "numeric",
    };

    useEffect(() => {
        async function getAllChallenges(url: string) {
            try {
                const response: Array<IChallenge> = await fetch(
                    url
                ).then((res) => res.json());

                progress.current = await Promise.all(
                    response.map((r) =>
                        getChallengeDetail(BASE_URL, r.challenge_id)
                    )
                );

                setChallengeList(response);
            } catch (error) {
                console.log(error);
            }
        }

        getAllChallenges(BASE_URL);
    }, []);

    async function getChallengeDetail(url: string, id: string) {
        try {
            const response = await fetch(`${url}/detail/${id}`).then((res) =>
                res.json()
            );
            return response.length;
        } catch (error) {
            console.log(error);
            return;
        }
    }

    if (challengeList.length === 0) {
        return <div>Loading</div>;
    } else {
        return (
            <Fragment>
                <Divider space={5} />
                <SubTitle subtitle='My Journey to Awesomeness!' emoji='⭐️' />
                <Divider space={5} />
                <ul className='text-xl max-w-md mx-auto'>
                    {challengeList.map((challenge, idx) => {
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
                                    <p className='text-gray-900 opacity-75 px-4 pt-2'>
                                        {challenge.goal}
                                    </p>
                                    <p className='text-gray-800 opacity-75 text-sm px-4 pb-2'>
                                        {challenge.hash_tag}
                                    </p>
                                </Link>
                                <Metered progress={progress.current[idx]} />
                                <Divider space={2} />
                            </li>
                        );
                    })}
                </ul>
            </Fragment>
        );
    }
};

export default Home;
