import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience = () => {
  return (
    <div id="experience" >
      <h2 className="mb-12 mt-8 text-center text-4xl font-semibold text-white">
        Experience
      </h2>
      <div className="mx-auto w-full max-w-5xl  px-6 py-8 shadow-lg lg:px-12">
        {EXPERIENCE.map((experience, index) => (
          <div
            key={index}
            className={`mb-10 flex flex-col space-y-4 ${
              index !== EXPERIENCE.length - 1 ? 'border-b-2 pb-6' : ''
            }`}
          >
            <div style={{color: '#bd14ed' }}  className="text-lg font-bold  lg:text-2xl">
              {experience.company}
            </div>
            <h3 className="text-xl font-semibold text-white lg:text-3xl">
              {experience.title}
            </h3>
            <p className="text-md text-white lg:text-lg">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
