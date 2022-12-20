import React from "react";
import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    {
      label: "Fruits",
      render: (fruit) => fruit.name,
    },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  function init(){
    // const data = [5,3,2,10];
    // console.log(data.sort());
    // console.log(data.sort((a,b)=> a-b));
    // const str=["t","A","c","a"]
    // console.log(str.sort());
    // console.log(str.sort((a,b)=> a.localeCompare(b)));

    //***** Object Sorting */
    const data = [
      { name: 'Tomato', cost: 10, weight: 5 },
      { name: 'Onion', cost: 5, weight: 2 },
      { name: 'Carrot', cost: 20, weight: 4 },
    ]

    function getSortValue(veg){
      return veg.name
    }

    const sortOrder = 'desc';

    let sortedData = data.sort( (a,b) => {
      const valA = getSortValue(a);
      const valB = getSortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;
      
      if(typeof valA === 'string'){
        return valA.localeCompare(valB) * reverseOrder
      } else {
        return (valA - valB) * reverseOrder;
      }
      
    });
    console.log(sortedData);
  }
  init();

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;
