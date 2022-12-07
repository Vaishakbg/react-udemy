import './Animals.css';
import React, { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)]
}
function Animals() {
    const [animals, setAnimals] = useState([])
    const handleClick = ()=> {
        setAnimals([...animals,getRandomAnimal()]);
    }
    const renderedAnimals = animals.map((animal,index) => {
      return <AnimalShow type={animal} key={index} />;
    });

  return (
    <div className="container app">
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}

export default Animals