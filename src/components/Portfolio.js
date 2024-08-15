import React from "react";
import flixTube from "../assets/portfolio/flixTube.JPG";
import foodVilla from "../assets/portfolio/foodVilla.JPG";
import dashboard from "../assets/portfolio/dashboard.jpg";
import movieApp from "../assets/portfolio/movie-app.jpg";
import foodAppPrice from "../assets/portfolio/food-app-price.jpg";
import fakeShop from "../assets/portfolio/fake-shop.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: flixTube,
      hrefDemo: "https://flixtube-nikhilchhetri.vercel.app/",
      hrefCode: "https://github.com/nikhilchhetri/FlixTube",
    },
    {
      id: 2,
      src: foodVilla,
      hrefDemo: "https://foodvilla-nikhilchhetri.vercel.app/",
      hrefCode: "https://github.com/nikhilchhetri/FoodVilla",
    },
    {
      id: 3,
      src: dashboard,
      hrefDemo: "https://dashboard-nikhilchhetri.vercel.app/",
      hrefCode: "https://github.com/nikhilchhetri/Dashboard",
    },
    {
      id: 4,
      src: movieApp,
      hrefDemo: "https://movie-app-green-psi.vercel.app/",
      hrefCode: "https://github.com/nikhilchhetri/Movie-App",
    },
    {
      id: 5,
      src: foodAppPrice,
      hrefDemo: "https://food-app-roan-pi.vercel.app/",
      hrefCode: "https://github.com/nikhilchhetri/FoodApp",
    },
    {
      id: 6,
      src: fakeShop,
      hrefDemo: "https://fake-shop-lake.vercel.app/",
      hrefCode: "https://github.com/nikhilchhetri/FakeShop",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, hrefDemo, hrefCode }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={hrefDemo} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={hrefCode} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
