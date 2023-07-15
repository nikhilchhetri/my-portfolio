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
          Achievement-oriented, techno-savvy professional offering nearly 2
          years of rich and extensive experience in analysis, design,
          development, customization and implementation of software application.
          In-depth knowledge of Software Development Lifecycle (SDLC) right from
          requirement analysis, documentation (functional specifications,
          technical design), coding and testing (preparation of test cases with
          implementation) for maintaining proposed applications
        </p>
        <br />
        <p className="text-xl">
          Skilled in analyzing information system needs, evaluating end-user
          requirements, custom designing solutions, troubleshooting for complex
          information systems management
        </p>
      </div>
    </div>
  );
};

export default About;
