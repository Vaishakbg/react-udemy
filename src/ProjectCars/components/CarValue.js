import React from 'react'
import { useSelector } from 'react-redux'

function CarValue() {
  const totalCost = useSelector(({cars:{data,searchTerm}})=>{
    const filteredCars = data.filter((car)=>{
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    // let cost = 0;
    // for (const car of filteredCars) {
    //   cost += Number(car.cost)
    // }
    // return cost;
    return filteredCars.reduce((acc,car)=>{
      return acc + car.cost
    }, 0)
  })
  return (
    <div className="car-value">
      Total Cost: ${totalCost}
    </div>
  )
}

export default CarValue