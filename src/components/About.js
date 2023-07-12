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
          Lorem ipsum dolor sit amet. Non corporis doloremque in modi
          reprehenderit sit impedit minus et eveniet possimus ut corporis fuga
          qui sint placeat ut reprehenderit earum. Non velit cumque sit illo
          voluptatem est aliquam alias eos repudiandae dolores.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet. Non corporis doloremque in modi
          reprehenderit sit impedit minus et eveniet possimus ut corporis fuga
          qui sint placeat ut reprehenderit earum. Non velit cumque sit illo
          voluptatem est aliquam alias eos repudiandae dolores.
        </p>
      </div>
    </div>
  );
};

export default About;
