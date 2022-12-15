import React, { useContext } from 'react'
import NavigationContext from '../../context/navigation';

function Link({to, children}) {
    const {navigate} = useContext(NavigationContext);

    const handleClick = (e)=>{
        if(e.metaKey || e.ctrlKey) { //let User to open link pressing Ctrl key or Command Key
            return;
        }
        e.preventDefault();
        navigate(to);
    };


  return (
    <a href={to} onClick={handleClick}>{children}</a>
  )
};

export default Link