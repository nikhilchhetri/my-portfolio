import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white bg-gradient-to-b from bg-gray-800 to to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg mx-auto p-4">
        <div className="pb-8">
          <h1 className="text-4xl inline font-bold border-b-4 border-gray-500">
            About
          </h1>
        </div>
        <p className="text-xl mt-20">
        I am a dedicated Software Engineer with over 3 years of experience specializing in front-end development. My expertise lies in building dynamic and responsive web applications using technologies like React, Redux Toolkit, and TypeScript. I am skilled in creating intuitive user interfaces, optimizing performance, and ensuring cross-device compatibility with frameworks like Material-UI and Bootstrap. My professional journey includes significant contributions at companies like HashStudioz Technologies and Cognizant, where I've enhanced user experiences, resolved complex bugs, and collaborated effectively in Agile environments. I am passionate about writing clean, maintainable code and continuously improving my skills to deliver high-quality software solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
