import React, { useState } from 'react'
import Dropdown from './components/Dropdown'


function ProjectThreeApp() {
  const [selection, setSelection] = useState(null)
  const options = [
    {name:'Red', value:'red'},
    {name:'Green', value:'green'},
    {name:'Blue', value:'blue'},
  ];

  const handleSelection=(option)=>{
    setSelection(option)
  }
  return (
    <div>
      <Dropdown options={options} selection={selection} onSelect={handleSelection} />
    </div>
  )
}

export default ProjectThreeApp