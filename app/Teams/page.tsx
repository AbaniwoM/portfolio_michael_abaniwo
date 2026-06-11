import React from 'react'
import TeamsCard from './TeamsCard'

const Teams = () => {
  return (
    <div className="teamContent flex flex-col p-6 mt-22">
        <div>
            <h2 className='techHeader text-[3rem] text-green-400'>Clients I have worked for</h2>
        </div>
        <div className="teamCard flex mt-18 gap-5 overflow-x-auto hide-scrollbar">
            <TeamsCard 
                image="/proddly.png"
                description="Built the learn module of the proddly application that gives users access to materials in different learning stacks."
                linkOne="https://learn.proddly.com/learn/proddly-guides"
                text="proddly" 
                imgClassName="w-16 h-16 object-contain md:w-40 md:h-30"        
            /> 
            <TeamsCard 
                image="/reveries&knight.jpg"
                description="Built the Reveries & Knight Law firm website with nextjs and modern technologies."
                linkOne="https://reveriesandknight.com"
                text="reveries-and-knight" 
                imgClassName="w-16 h-16 object-contain md:w-40 md:h-30"        
            /> 
            <TeamsCard 
                image="/meava.jpeg"
                description="Fashion Designer."
                linkOne="https://fashion-design-solution.netlify.app"
                text="meava-couture"
                imgClassName="w-16 h-16 object-contain md:w-40 md:h-30"         
            /> 
            <TeamsCard 
                image="/logo.png"
                description="Great Grace Collection."
                linkOne="https://great-grace-collection.netlify.app/"
                text="great-grace-collection"      
                imgClassName="w-16 h-16 object-contain md:w-24 md:h-24"                 
            />
        </div>
    </div>
  )
}

export default Teams