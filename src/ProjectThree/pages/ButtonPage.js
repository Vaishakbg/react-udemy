import { GoBell, GoDatabase } from "react-icons/go";
import React from 'react'
import Button from '../components/Button'


function ButtonPage() {
    const handleClick = () => {
        console.log('clicked');
    }
  return (
    <div>
        <div>
            <Button onClick={handleClick} className="mb-2"> <GoBell />Plain</Button>
        </div>
        <div>
            <Button outline rounded primary><GoDatabase />Primary</Button>
        </div>
        <div>
            <Button rounded secondary>Secondary</Button>
        </div>
        <div>
            <Button warning outline>Bye Now!</Button>
        </div>
        <div>
            <Button success rounded>Click Here!</Button>
        </div>
        <div>
            <Button danger outline>Danger</Button>
        </div>
    </div>
  )
}

export default ButtonPage