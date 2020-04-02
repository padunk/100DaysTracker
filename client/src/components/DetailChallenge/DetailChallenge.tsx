import React, { useEffect, useState } from "react";

interface Props {
    match: {
        params: {
            challengeID: string;
        };
    };
}

interface IDetail {
    day_number: number;
    parent_id: string;
    tweet: string;
    date_created: number;
}

const DetailChallenge = (props: Props) => {
    const id = props.match.params.challengeID;
    const [detailList, setDetailList] = useState<Array<IDetail>>([]);

    useEffect(() => {
        async function getAllDetails(url: string) {
            try {
                const response = await fetch(url).then(res => res.json());
                setDetailList(response);
            } catch (error) {
                console.log(error);
            }
        }

        getAllDetails(`http://192.168.168.17:5000/detail/${id}`);
    }, [id]);

    if (detailList.length === 0) {
        return <div>Loading</div>;
    } else {
        return (
            <div>
                <ol>
                    {detailList.map(detail => {
                        return (
                            <li
                                key={`${detail.parent_id}-${detail.day_number}`}>
                                {detail.tweet.split("\n").map((t, i) => {
                                    return <p key={i}>{t}</p>;
                                })}
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
};

export default DetailChallenge;
