import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='techContent flex flex-col p-6 mt-22'>
        <div className='flex flex-col gap-5'>
            <h2 className='techHeader text-[3rem] text-green-400'>Selected Projects</h2>
            <p className='techText text-[1.2rem] w-120 text-gray-300'>Here are some of my lastest projects. Carefully built with ReactJs (NextJs), React-vite, Typescript and a number of technologies.</p>
        </div>
        <div className='projects flex mt-22 gap-5 overflow-x-auto hide-scrollbar'>
            <ProjectCard 
                image="/shopin.png"
                title="Shopin Ecommerce App"
                description="Allows users shop their favourite items and make payments online."
                skillOne="ReactJs"
                skillTwo="NextJs"
                skillThree="Sanity"
                linkOne="https://shopin-ecommerce.vercel.app"
                linkTwo="https://github.com/AbaniwoM/Shopin-ecommerce"  
                text="shopin"         
            />
            <ProjectCard 
                image="/ishop.png"
                title="ishop"
                description="The latest products at affordable prices with ease of payment online."
                skillOne="ReactJs"
                skillTwo="NextJs"
                skillThree="Stripe"
                linkOne="https://ishop-beta-teal.vercel.app"
                linkTwo="https://github.com/AbaniwoM/ishop"  
                text="ishop"         
            />
            <ProjectCard 
                image="/paradigma.png"
                title="Paradigma"
                description="Your family's choice of freshly prepared healthy zobo drinks and cooking spicies."
                skillOne="ReactJs"
                skillTwo="Vite"
                skillThree="TailwindCSS"
                linkOne="https://paradigma-pi.vercel.app/home"
                linkTwo="https://github.com/AbaniwoM/paradigma"  
                text="paradigma"         
            />
            <ProjectCard 
                image="/weigh-now-scale.png"
                title="Weigh Now Scale"
                description="An advertisement landing page for the Weigh Now Scale."
                skillOne="ReactJs"
                skillTwo="NextJs"
                skillThree="TypeScript"
                linkOne="https://weigh-now-scale.netlify.app"
                linkTwo="https://github.com/AbaniwoM/weigh-now-scale"  
                text="weigh-now-scale"         
            />
        </div>
    </div>
  )
}

export default Projects