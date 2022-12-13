import React from 'react'
import Accordion from './components/Accordion';
import ButtonPage from "./pages/ButtonPage";


function ProjectThreeApp() {
  const items = [
    {
      id:'sdfds',
      label: 'Can I use React on a project?',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet temporibus quas suscipit eos ipsum nam corrupti odit, quaerat sint. Error esse dolore eius id corporis animi consequatur, quas praesentium cupiditate'
    },
    {
      id:'guytutyuy',
      label: 'Can I use Javascript on a project?',
      content: 'Sit amet consectetur adipisicing elit. Amet temporibus quas suscipit eos ipsum nam corrupti odit, quaerat sint. Error esse.'
    },
    {
      id:'bcvreer',
      label: 'Can I use CSS on a project?',
      content: 'Lorem ipsum met temporibus quas suscipit eos ipsum nam corrupti odit, quaerat sint. Error esse dolore eius id corporis animi consequatur, quas praesentium cupiditate'
    }
  ]
  return (
    <div>
        {/* <ButtonPage /> */}
        <Accordion items={items} />
    </div>
  )
}

export default ProjectThreeApp