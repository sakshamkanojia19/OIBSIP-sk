import React from "react";
import { SKILLS } from "../constants";

const Skills = () => {
  return (
    <div
      className="container mx-auto" id="skills">
        <h2 className="mb-12 mt-20 text-center text-4xl">Skills</h2>
        <div className="mx-2 flex flex-col rounded-xl  px-4  py-10 lg:px-20">
          {SKILLS.map((skills, index) => (
            <div key={index} className="mb-8 flex items-center justify-between">
              <div className="flex items-center">
                {skills.icon}
                <h3 className="px-6 text-xl lg:text-3xl">
                  {skills.name}
                </h3>
              </div>
              <div className="text-md border-b-2 border-purple-500 font-semibold lg:text-xl">
                <span >{skills.experience}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Skills;
