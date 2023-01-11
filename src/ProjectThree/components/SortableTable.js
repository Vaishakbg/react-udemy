import React from "react";
import Table from "./Table";
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa";
import useSort from "../../hooks/use-sort";


function SortableTable(props) {
 
  const { config, data } = props;

  const { sortBy, sortOrder, sortedData, setSortColumn} = useSort(data, config)

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th className="cursor-pointer px-3 py-1 hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
          <div className="flex items-center">
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
          </div>
        </th>
      ),
    };
  });
  
  

  return (
        <Table {...props} data={sortedData} config={updatedConfig} />
  );
}

function getIcons(label, sortBy, sortOrder){
  if(label !== sortBy){
    return <FaSort />
  }

  if(sortOrder === null){
    return <FaSort />
  } else if(sortOrder === 'asc') {
    return <FaSortUp />
  } else if(sortOrder === 'desc') {
    return <FaSortDown />
  }
}

export default SortableTable;
