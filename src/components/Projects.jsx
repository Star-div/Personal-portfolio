import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import CurrencyConvertor from '../assets/CurrencyConvertor.png'
import Ecommerce from "../assets/Ecommerce.png"
import BMI from '../assets/BMI.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          id:1,
          title: 'Ecommerce Website ',
          desc: 'Its a Beautifull, and Trandy E-commerce Website using React And Tailwind with Beautiful Light and Dark Theme. ',
          image: Ecommerce,
          live: "https://e-commerce--mocha.vercel.app/",
          github: "https://github.com/Star-div/E-commerce.git"
        },
        {
          id:2,
          title: 'Landing Page With Light and Dark Themes ',
          desc: 'I created a beautiful Landing Page with Animated Photo on hover And also add Light and Dark Theme in it using HTML, CSS, and JavaScript . ',
          image: Portfolio,
          live: "https://star-div.github.io/Landing-Page-With-light-and-Dark-theme/",
          github: "https://github.com/Star-div/Landing-Page-With-light-and-Dark-theme.git"
        },
        {
          id:3,
          title: 'Currency Converter',
          desc: 'I built a fully functional Currency-Converter App Using React. You can convert any currency to any other one easily.',
          image: CurrencyConvertor,
          live: "https://currency-convertor-seven-taupe.vercel.app/",
          github: "https://github.com/Star-div/currencyConvertor.git"
        },
        
        {
          id:4,
          title: 'BMI Calculator',
          desc: 'I developed a BMI calculator with sleak and minimal design using HTML, CSS, and JavaScript.',
          image: BMI,
          live: "https://star-div.github.io/BMI-Calculator/",
          github: "https://github.com/Star-div/BMI-Calculator.git"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards key={items.id} item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
