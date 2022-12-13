import React from 'react'
import Dropdown from './components/Dropdown'


function ProjectThreeApp() {
  const options = [
    {name:'Red', value:'red'},
    {name:'Green', value:'green'},
    {name:'Blue', value:'blue'},
  ];
  return (
    <div>
      <Dropdown options={options}/>
    </div>
  )
}

export default ProjectThreeApp