import React from 'react'
import TeamsCard from './TeamsCard'

const Teams = () => {
  return (
    <div className="teamContent flex flex-col p-6 mt-22">
        <div>
            <h2 className='techHead text-[3rem] text-green-400'>Clients I have worked for</h2>
        </div>
        <div className="teamCard flex mt-18 gap-5 overflow-x-auto hide-scrollbar">
            <TeamsCard 
                image="/proddly.png"
                description="Built the learn module of the proddly application that gives users access to materials in different learning stacks."
                linkOne="https://proddly-creators-app.netlify.app/"
                text="proddly"         
            /> 
            <TeamsCard 
                image="/reveries&knight.jpg"
                description="Built the Reveries & Knight Law firm website with nextjs and modern technologies."
                linkOne="https://reveriesandknight.com"
                text="reveries-and-knight"         
            /> 
        </div>
    </div>
  )
}

export default Teams