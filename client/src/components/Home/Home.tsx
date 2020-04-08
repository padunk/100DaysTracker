import React, { useEffect, useState, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import { BASE_URL } from "../../base/baseURL";
import Gap from "../Gap/Gap";
import Metered from "../Metered/Metered";
import SubTitle from "../SubTitle/SubTitle";
import Loading from "../../Loading/Loading";
import Wrapper from "../Wrapper/Wrapper";
import bgImage from "../../icons/svg/undraw_dev_focus.svg";

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

    // GSAP ANIMATION
    let cardElement: any = useRef(null);

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
        return (
            <Wrapper customClass='container'>
                <Gap className='h-16' />
                <Loading />
            </Wrapper>
        );
    } else {
        return (
            <Fragment>
                <Gap className='h-5' />
                <SubTitle subtitle='My Journey to Awesomeness!' emoji='⭐️' />
                <Gap className='h-5' />
                <div
                    className='container bg-no-repeat bg-fixed bg-top-2 h-screen lg:bg-bg-lg lg:h-auto'
                    style={{
                        backgroundImage: `url(${bgImage})`,
                    }}>
                    <Gap className='h-64 lg:h-auto' />
                    <ul className='text-xl max-w-md mx-auto static lg:relative lg:transform lg:-translate-x-1/2'>
                        {challengeList.map((challenge, idx) => {
                            return (
                                <li
                                    key={challenge.challenge_id}
                                    className='rounded-lg border border-purple-600 mb-4 overflow-hidden card'>
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
                                                ).format(
                                                    challenge.date_created
                                                )}
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
                                    <Gap className='h-4' />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Fragment>
        );
    }
};

export default Home;
