import React, { ReactElement } from "react";
import classNames from "classnames";

import Wrapper from "../Wrapper/Wrapper";
import SvgShuttle from "../../icons/Shuttle";
import SvgDelete from "../../icons/Delete";
import Gap from "../Gap/Gap";
import SvgUpdateArrow from "../../icons/UpdateArrow";
import SvgCheckmark from "../../icons/Checkmark";
import IconButton from "../Button/IconButton";

interface ISkills {
  skill_id: string;
  skill_name: string;
  new_skill: number;
  progress_skill: number;
  complete_skill: number;
  date_created: number;
}

interface Props {
  id: number;
  title: string;
  skills: Array<ISkills>;
  handleClick: any;
}

function SkillDetail({ title, skills, id, handleClick }: Props): ReactElement {
  return (
    <Wrapper customClass="flex-1 pt-4 max-w-sm mx-auto">
      <Wrapper customClass="bg-gray-800 text-white h-10 flex items-center px-4 border border-gray-100">
        <h3>{title}</h3>
      </Wrapper>
      <ul>
        {skills.map((skill: ISkills, idx: number) => {
          const listClassNames = classNames(
            "flex flex-wrap justify-between items-center py-2 px-4",
            { "bg-gray-400": idx % 2 !== 0, "bg-gray-100": idx % 2 === 0 }
          );
          return (
            <li key={skill.skill_id} className={listClassNames}>
              <span className="text-lg">{skill.skill_name}</span>
              <div className="flex flex-wrap">
                {id === 1 && (
                  <IconButton type="button">
                    <SvgShuttle
                      id={skill.skill_id}
                      fill="#3182ce"
                      className='w-4 h-4'
                      onClick={handleClick}
                    />
                  </IconButton>
                )}
                {id === 2 && (
                  <>
                    <IconButton type="button">
                      <SvgCheckmark
                        id={skill.skill_id}
                        fill="#48bb78"
                        className='w-4 h-4'
                        onClick={handleClick}
                      />
                    </IconButton>
                    <Gap className="w-4" />
                    <IconButton type="button">
                      <SvgUpdateArrow
                        id={skill.skill_id}
                        fill="#9f7aea"
                        className='w-4 h-4'
                        onClick={handleClick}
                      />
                    </IconButton>
                  </>
                )}
                {id === 3 && (
                  <IconButton type="button">
                    <SvgUpdateArrow
                      id={skill.skill_id}
                      fill="#9f7aea"
                      className='w-4 h-4'
                      onClick={handleClick}
                    />
                  </IconButton>
                )}
                <Gap className="w-4" />
                <IconButton type="button">
                  <SvgDelete
                    id={skill.skill_id}
                    fill="#e53e3e"
                    className='w-4 h-4'
                    onClick={handleClick}
                  />
                </IconButton>
              </div>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
}

export default SkillDetail;
