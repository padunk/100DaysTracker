import React, { useState, useEffect } from "react";
import Gap from "../Gap/Gap";
import Wrapper from "../Wrapper/Wrapper";
import InputLabel from "../InputLabel/InputLabel";
import InputText from "../InputText/InputText";
import { BASE_URL } from "../../base/baseURL";
import Button from "../Button/Button";
import SubTitle from "../SubTitle/SubTitle";
import ServerStatusText from "../ServerStatusText/ServerStatusText";

interface Props {
  history: {
    push: Function;
  };
}

const AddChallenge = (props: Props) => {
  const inputWrapperClass = "grid grid-cols-1 col-gap-4 px-4 sm:grid-cols-form";

  const [title, setTitle] = useState<string | undefined>("");
  const [hashtag, setHashtag] = useState<string | undefined>("");
  const [goal, setGoal] = useState<string | undefined>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState("");
  let redirectHomeTimeoutId: NodeJS.Timeout;

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    await fetch(`${BASE_URL}/add`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, hashtag, goal })
    })
      .then(response => {
        console.log(response);
        if (!response.ok) {
          setStatus("" + response.status);
          throw new Error(
            `HTTP error, status = ${response.status}: ${response.statusText}`
          );
        }
        return response;
      })
      .then((data: any) => {
        setMessage("Succesfully adding data to the server.");
        setStatus("" + data.status);
        setTitle("");
        setHashtag("");
        setGoal("");

        redirectHomeTimeoutId = setTimeout(() => props.history.push("/"), 1500);
      })
      .catch(error => {
        setMessage(error.message);
      });
  };

  useEffect(() => {
    return () => clearTimeout(redirectHomeTimeoutId);
  });

  return (
    <Wrapper customClass="px-2">
      <Gap className="h-8" />
      <SubTitle subtitle="Add new challenge" emoji="🔥" />
      <Gap className="h-5" />
      <form
        action="post"
        className="container mx-auto bg-teal-400 py-4 rounded-lg max-w-md shadow-lg"
        onSubmit={handleSubmit}
      >
        <Wrapper customClass={inputWrapperClass}>
          <InputLabel for="title" />
          <InputText
            name="title"
            req={true}
            val={title}
            placeholder="Learn JavaScript"
            handleChange={(event: React.FormEvent<HTMLInputElement>): void =>
              setTitle(event.currentTarget.value)
            }
          />
        </Wrapper>
        <Gap className="h-2" />
        <Wrapper customClass={inputWrapperClass}>
          <InputLabel for="hashtag" />
          <InputText
            name="hashtag"
            req={true}
            val={hashtag}
            placeholder="100DaysOfCode"
            handleChange={(event: React.FormEvent<HTMLInputElement>): void =>
              setHashtag(event.currentTarget.value)
            }
          />
        </Wrapper>
        <Gap className="h-2" />
        <Wrapper customClass={inputWrapperClass}>
          <InputLabel for="personalGoal" />
          <InputText
            name="personalGoal"
            req={false}
            val={goal}
            placeholder="Cool Web Developer"
            handleChange={(event: React.FormEvent<HTMLInputElement>): void =>
              setGoal(event.currentTarget.value)
            }
          />
        </Wrapper>
        <Gap className="h-5" />
        <Wrapper customClass="flex justify-center">
          <Button type="submit" customClass="bg-teal-700 text-teal-100">
            Add Challenge
          </Button>
        </Wrapper>
      </form>
      <ServerStatusText message={message} status={status} />
    </Wrapper>
  );
};

export default AddChallenge;
