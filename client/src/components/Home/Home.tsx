import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

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
            <div>
                <Navigation />
                <ul>
                    {challengeList.map(challenge => {
                        return (
                            <li key={challenge.challenge_id}>
                                <Link to={`detail/${challenge.challenge_id}`}>
                                    <p>{challenge.title}</p>
                                    <p>{challenge.goal}</p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
};

export default Home;
