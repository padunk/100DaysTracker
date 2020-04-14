import React, { useState, useEffect, Fragment, useRef } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";

import AddSkill from "../AddSkill/AddSkill";
import Gap from "../Gap/Gap";
import SubTitle from "../SubTitle/SubTitle";
import Wrapper from "../Wrapper/Wrapper";
import { BASE_URL } from "../../base/baseURL";
import SkillCard from "../SkillCard/SkillCard";
import ServerStatusText from "../ServerStatusText/ServerStatusText";

interface Props {}

const Skills = (props: Props) => {
  const [newSkill, setNewSkill] = useState<string | undefined>("");
  const [allSkills, setAllSkills] = useState([]);
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const cardGroups = [
    { name: "Wish Skills", data: "new_skill" },
    { name: "In Progress", data: "progress_skill" },
    { name: "Complete", data: "complete_skill" }
  ];
  let refreshContent: any = useRef(null);

  async function getAllSkills(url: string) {
    try {
      const response = await fetch(`${url}/skills`).then(r => {
        if (!r.ok) {
          setStatus("" + r.status);
          throw new Error(
            `HTTP error, status = ${response.status}: ${response.statusText}`
          );
        }
        return r.json();
      });
      setAllSkills(response);
    } catch (error) {
      setMessage(error.message);
    }
  }

  useEffect(() => {
    getAllSkills(BASE_URL);
  }, []);

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void =>
    setNewSkill(event.currentTarget.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    function postNewSkill(url: string, data: any) {
      fetch(`${url}/skills`, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            setStatus("" + response.status);
            throw new Error(
              `HTTP error, status = ${response.status}: ${response.statusText}`
            );
          }
          return response;
        })
        .then((data: any) => {
          setNewSkill("");
          setMessage("Succesfully adding data to the server.");
          setStatus("" + data.status);
          refreshContent.current = setTimeout(() => {
            setMessage("");
            getAllSkills(BASE_URL);
          }, 3000);
        })
        .catch(error => {
          setMessage(error.message);
        });
    }

    postNewSkill(BASE_URL, { newSkill });
  };

  useEffect(() => {
    return () => {
      clearTimeout(refreshContent);
    };
  }, []);

  function deleteSkill(url: string, id: string) {
    fetch(`${url}/skills`, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        Accept: "application/json, text/html",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `HTTP error, status = ${response.status}: ${response.statusText}`
          );
        }
      })
      .then(() => getAllSkills(BASE_URL))
      .catch(error => {
        setMessage(error.message);
      });
  }

  function updateSkillProgress(url: string, id: string, method: string) {
    const updateSkill: any = {};
    updateSkill.id = id;

    if (method === "Delete") {
      deleteSkill(BASE_URL, updateSkill.id);
      return;
    }

    if (method === "Start") {
      updateSkill.new_skill = 0;
      updateSkill.progress_skill = 1;
      updateSkill.complete_skill = 0;
    } else if (method === "Restart") {
      updateSkill.new_skill = 1;
      updateSkill.progress_skill = 0;
      updateSkill.complete_skill = 0;
    } else if (method === "Complete") {
      updateSkill.new_skill = 0;
      updateSkill.progress_skill = 0;
      updateSkill.complete_skill = 1;
    }

    fetch(`${url}/skills`, {
      method: "PATCH",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateSkill)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(
            `HTTP error, status = ${response.status}: ${response.statusText}`
          );
        }
      })
      .then(() => getAllSkills(BASE_URL))
      .catch(error => {
        setMessage(error.message);
      });
  }

  const handleClick = (e: any) => {
    const { id, textContent: method } = e.currentTarget;
    updateSkillProgress(BASE_URL, id, method);
  };

  return (
    <Fragment>
      <Gap className="h-5" />
      <SubTitle subtitle="My New SuperSkills" emoji="🚀" />
      <Gap className="h-4" />
      <AddSkill
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        skill={newSkill}
      />
      <Gap className="h-2" />
      <ServerStatusText message={message} status={status} />
      <Wrapper customClass="md:flex max-w-3xl mx-auto">
        <Flipper
          flipKey={allSkills
            .map(skill => {
              return Object.keys(skill)
                .map(detail => detail)
                .join("");
            })
            .join("")}
          debug={true}
        >
          {allSkills.length > 0 &&
            cardGroups.map((group, idx) => (
              <Flipped flipId={group.name} key={group.name}>
                <SkillCard
                  key={group.name}
                  id={idx + 1}
                  handleClick={handleClick}
                  title={group.name}
                  skills={allSkills.filter(skill => skill[group.data] === 1)}
                />
              </Flipped>
            ))}
        </Flipper>
      </Wrapper>
    </Fragment>
  );
};

export default Skills;
