import React from "react";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import materialUI from "../assets/material-ui.png";
import reduxToolkit from "../assets/redux.png";
import typescript from "../assets/typescript.png";
import hashstudioz from "../assets/hashstudioz.png"; // Add logo images
import cognizant from "../assets/cognizant.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: typescript, title: "TypeScript", style: "shadow-blue-500" },
    { id: 5, src: reactImage, title: "React", style: "shadow-blue-600" },
    {
      id: 6,
      src: reduxToolkit,
      title: "Redux Toolkit",
      style: "shadow-purple-600",
    },
    { id: 7, src: materialUI, title: "Material UI", style: "shadow-sky-400" },
    { id: 8, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 9, src: github, title: "GitHub", style: "shadow-gray-400" },
  ];

  const companies = [
    {
      id: 1,
      src: hashstudioz,
      name: "HashStudioz Technologies",
      duration: "Sept 2023 - Present",
      description:
        "Implemented debouncing for search functionality, improved performance, resolved bugs, and developed an admin portal for hotel management.",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: cognizant,
      name: "Cognizant Technology Solutions",
      duration: "July 2021 - June 2023",
      description:
        "Developed and optimized front-end components, collaborated in Agile teams, followed Test-Driven Development, and ensured 100% client satisfaction.",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full">
      <div className="max-w-screen-lg mx-auto p-4 w-full h-full flex flex-col justify-center text-white">
        <div>
          <p className="text-5xl font-bold border-b-4 inline p-2 border-gray-500">
            Experience
          </p>
        </div>

        <div className="p-5">
          {/* Companies Section */}
          <div className="mb-5 mt-5">
            <div>
              <p className="text-2xl inline border-gray-500 mt-10">Companies</p>
              <p className="py-2">These are the Companies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
              {companies.map(
                ({ id, src, name, duration, description, style }) => (
                  <div
                    key={id}
                    className={`shadow-md hover:scale-105 duration-500 py-4 px-6 rounded-lg ${style}`}>
                    <img
                      src={src}
                      alt={name}
                      className="mx-auto w-24 h-24 object-contain"
                    />
                    <h3 className="mt-4 text-xl font-bold">{name}</h3>
                    <p className="text-sm text-gray-400">{duration}</p>
                    <p className="mt-2 text-sm">{description}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div>
            <div>
              <p className="text-2xl inline border-gray-500">Skills</p>
              <p className="py-2">
                These are the Technologies I've worked with
              </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                  <img src={src} alt={title} className="mx-auto w-20" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
