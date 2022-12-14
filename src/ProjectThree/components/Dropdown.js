import React, { useState } from 'react'

function Dropdown({options, selection, onSelect}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = ()=> {
    setIsOpen(!isOpen);
  }

  const handleOptionClick = (option)=> {
    setIsOpen(false);//CLOSE Dropdown
    onSelect(option)
  }

  const renderedOptions = options.map((option)=> {
    return <div key={option.value} onClick={()=>handleOptionClick(option)}>{option.name}</div>
  });

   
  return (
    <div>
      <div onClick={handleClick}>{selection?.name || 'Select...'}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  )
}

export default Dropdown