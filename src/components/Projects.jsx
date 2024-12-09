import React from "react";
import Portfolio from "../assets/Portfolio.png";
import CurrencyConvertor from "../assets/CurrencyConvertor.png";
import Ecommerce from "../assets/Ecommerce.png";
import Recipe from "../assets/Recipe.png";
import Chatty from "../assets/Chatty.png";
import BMI from "../assets/BMI.png";
import Cards from "./Cards";

const Projects = () => {
  const projectJson = [
    {
      id: 1,
      title: "Full-Stack RealTime Chat-App",
      desc: "I develop and deployed a RealTime chat App using MERN Stack and for real-time changes, I use Socket.io.And also added 32 different themes with the help of daisy-UI",
      image: Chatty,
      live: "https://fullstack-chat-app-el07.onrender.com",
      github: "https://github.com/Star-div/fullstack-chat-app.git",
      aosDelay: "300",
    },
    {
      id: 2,
      title: "Recipe Finder",
      desc: "I developed a Recipe Finder using React vite with Tailwind CSS and fetch data with TheMealDB API.",
      image: Recipe,
      live: "https://recipe-finder-two-gamma.vercel.app/",
      github: "https://github.com/Star-div/Recipe-Finder.git",
      aosDelay: "600",
    },
    {
      id: 3,
      title: "Ecommerce Website ",
      desc: "Its a Beautifull, and Trandy E-commerce Website using React And Tailwind CSS with Beautiful Light and Dark Theme. ",
      image: Ecommerce,
      live: "https://e-commerce--mocha.vercel.app/",
      github: "https://github.com/Star-div/E-commerce.git",
      aosDelay: "900",
    },
    {
      id: 4,
      title: "Landing Page With Light and Dark Themes ",
      desc: "I created a beautiful Landing Page with Animated Photo on hover And also add Light and Dark Theme in it using HTML, CSS, and JavaScript . ",
      image: Portfolio,
      live: "https://star-div.github.io/Landing-Page-With-light-and-Dark-theme/",
      github:
        "https://github.com/Star-div/Landing-Page-With-light-and-Dark-theme.git",
      aosDelay: "300",
    },
    {
      id: 5,
      title: "Currency Converter",
      desc: "I built a fully functional Currency-Converter App Using React. You can convert any currency to any other one easily.",
      image: CurrencyConvertor,
      live: "https://currency-convertor-seven-taupe.vercel.app/",
      github: "https://github.com/Star-div/currencyConvertor.git",
      aosDelay: "600",
    },

    {
      id: 6,
      title: "BMI Calculator",
      desc: "I developed a BMI calculator with sleak and minimal design using HTML, CSS, and JavaScript.",
      image: BMI,
      live: "https://star-div.github.io/BMI-Calculator/",
      github: "https://github.com/Star-div/BMI-Calculator.git",
      aosDelay: "900",
    },
    
  ];

  return (
    <section id="projects" className="relative bg-gray-700 py-10 px-4">
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {projectJson.map((items) => {
            return (
              <Cards
                key={items.id}
                item={items}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
