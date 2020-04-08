import React, { useEffect, useState, Fragment, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";

import { BASE_URL } from "../../base/baseURL";
import Gap from "../Gap/Gap";
import Metered from "../Metered/Metered";
import SubTitle from "../SubTitle/SubTitle";
import Loading from "../../Loading/Loading";
import Wrapper from "../Wrapper/Wrapper";
import bgImage from "../../icons/svg/undraw_dev_focus.svg";
import { ReactComponent as BgImage } from "../../icons/svg/undraw_dev_focus.svg";
import SvgAdd from "../../icons/Add";

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
  let progress: any = useRef([]);
  const dateOptions = {
    day: "numeric",
    month: "short",
    year: "numeric"
  };

  useEffect(() => {
    async function getAllChallenges(url: string) {
      try {
        const response: Array<IChallenge> = await fetch(url)
          .then(res => res.json())
          .catch(err => {
            if (err) {
              throw new Error(err.message);
            }
          });

        progress.current = await Promise.all(
          response.map(r => getChallengeDetail(BASE_URL, r.challenge_id))
        ).catch(err => {
          if (err) {
            throw new Error(err.message);
          }
        });

        setChallengeList(response);
      } catch (error) {
        console.log(error);
      }
    }

    getAllChallenges(BASE_URL);
  }, []);

  // GSAP ANIMATION
  let cardElement: any = useRef([]);
  useEffect(() => {
    gsap.from(cardElement.current, {
      delay: 0.2,
      duration: 1.5,
      y: 64,
      opacity: 0,
      autoAlpha: 0,
      stagger: 0.2,
      ease: "back"
    });
  });

  async function getChallengeDetail(url: string, id: string) {
    try {
      const response = await fetch(`${url}/detail/${id}`).then(res =>
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
      <Wrapper customClass="container mx-auto">
        <Gap className="h-16" />
        <Loading />
      </Wrapper>
    );
  } else {
    return (
      <Fragment>
        <Gap className="h-5" />
        <SubTitle subtitle="My Journey to Awesomeness!" emoji="⭐️" />
        <div>
          <div className="md:pt-8 md:w-1/3 md:absolute md:left-2rem lg:left-4rem">
            <img
              src={`${bgImage}`}
              alt="web developer"
              className="w-3/4 mx-auto md:hidden"
            />
            <ul className="px-2 w-md mx-auto sm:px-6 lg:w-lg">
              {challengeList.map((challenge, idx) => {
                return (
                  <li
                    ref={el => cardElement.current.push(el)}
                    key={challenge.challenge_id}
                    className="rounded-lg bg-purple-100 border border-purple-400 mb-4 overflow-hidden card"
                  >
                    <Link
                      className="block"
                      to={{
                        pathname: `detail/${challenge.challenge_id}`,
                        state: {
                          hashtag: challenge.hash_tag
                        }
                      }}
                    >
                      <div className="flex flex-wrap justify-between capitalize  bg-purple-400 p-4">
                        <h3 className="sm:text-lg">{challenge.title}</h3>
                        <p className="text-gray-900 opacity-75 text-sm">
                          {new Intl.DateTimeFormat(
                            "default",
                            dateOptions
                          ).format(challenge.date_created)}
                        </p>
                      </div>
                      <p className="capitalize text-gray-900 opacity-75 px-4 pt-2">
                        {challenge.goal}
                      </p>
                      <p className="text-gray-600 opacity-75 text-sm px-4 pb-2">
                        {challenge.hash_tag}
                      </p>
                      <Metered progress={progress.current[idx]} />
                    </Link>
                    <Gap className="h-4" />
                  </li>
                );
              })}
            </ul>
          </div>
          <BgImage className="hidden fixed right-2 max-w-lg right-6rem bottom-1rem w-1/2  md:block" />
        </div>
        <div className="bottom-1rem right-2rem fixed">
          <NavLink exact to="/add" className="opacity-75" activeClassName="opacity-0">
            <SvgAdd className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          </NavLink>
        </div>
      </Fragment>
    );
  }
};

export default Home;
