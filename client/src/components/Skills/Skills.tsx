import React, { useState, useEffect, Fragment, useRef } from "react";
import AddSkill from "../AddSkill/AddSkill";
import Gap from "../Gap/Gap";
import SubTitle from "../SubTitle/SubTitle";
import Wrapper from "../Wrapper/Wrapper";
import { BASE_URL } from "../../base/baseURL";
import SkillCard from "../SkillCard/SkillCard";
import ServerStatusText from "../ServerStatusText/ServerStatusText";

interface Props {}

interface ISkills {
  skill_id: string;
  skill_name: string;
  new_skill: number;
  progress_skill: number;
  complete_skill: number;
  date_created: number;
}

const Skills = (props: Props) => {
  const [newSkill, setNewSkill] = useState<string | undefined>("");
  const [allSkills, setAllSkills] = useState<Array<ISkills>>([]);
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState("");
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
        Accept: "application/json, application/text",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id })
    })
      .then(response => {
        console.log(response);
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
      console.log("delete");
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
        console.log(response);
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
        <SkillCard
          id={1}
          handleClick={handleClick}
          title="Wish Skills"
          skills={allSkills.filter(skill => skill.new_skill === 1)}
        />
        <SkillCard
          id={2}
          handleClick={handleClick}
          title="In Progress"
          skills={allSkills.filter(skill => skill.progress_skill === 1)}
        />
        <SkillCard
          id={3}
          handleClick={handleClick}
          title="Complete"
          skills={allSkills.filter(skill => skill.complete_skill === 1)}
        />
      </Wrapper>
      <Gap className="pb-40" />
    </Fragment>
  );
};

export default Skills;
