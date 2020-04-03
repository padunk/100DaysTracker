import React, { useEffect, useState, Fragment } from "react";
import Divider from "../Divider/Divider";
import AddDetail from "../AddDetail/AddDetail";
import { BASE_URL } from "../../base/baseURL";

interface Props {
    match: {
        params: {
            challengeID: string;
        };
    };
    location: {
        state: {
            hashtag: string;
        };
    };
}

interface IDetail {
    parent_id: string;
    tweet: string;
    date_created: number;
}

const DetailChallenge = (props: Props) => {
    const { hashtag } = props.location.state;
    const id = props.match.params.challengeID;
    const [detailList, setDetailList] = useState<Array<IDetail>>([]);

    async function getAllDetails(url: string) {
        try {
            const response = await fetch(url).then(res => res.json());
            setDetailList(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllDetails(`${BASE_URL}/detail/${id}`);
    }, [id]);

    if (detailList.length === 0) {
        return <div>Loading</div>;
    } else if (detailList[0] === null) {
        return (
            <Fragment>
                <Divider space={10} />
                <h2 className='text-center text-pink-600 text-4xl'>
                    Start your first day now!
                </h2>
                <Divider space={10} />
                <AddDetail
                    id={id}
                    hashtag={hashtag}
                    getAllDetails={getAllDetails}
                />
            </Fragment>
        );
    } else {
        return (
            <Fragment>
                <Divider space={10} />
                <AddDetail
                    id={id}
                    hashtag={hashtag}
                    getAllDetails={getAllDetails}
                />
                <Divider space={5} />
                <ol className='max-w-md mx-auto'>
                    {detailList.map((detail, i) => {
                        return (
                            <li
                                className='px-6 py-2 rounded-md bg-green-400 mb-2 shadow-md border border-green-600'
                                key={`${detail.parent_id}-${i}`}>
                                <p className='first-line-bold whitespace-pre-wrap'>
                                    {detail.tweet}
                                </p>
                            </li>
                        );
                    })}
                </ol>
            </Fragment>
        );
    }
};

export default DetailChallenge;
