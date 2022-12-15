import React from 'react'
import Link from './components/Link'
import Route from './components/Route'
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';

function ProjectThreeApp() {
 return (
    <div className=''>
      <Link to={'/accordion'}>Accordion</Link>
      <Link to={'/button'}>Button</Link>
      <Link to={'/dropdown'}>Dropdown</Link>
      <div>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/button'>
          <ButtonPage />
        </Route>
        <Route path='/dropdown'>
          <DropdownPage />
        </Route>
      </div>
    </div>
  )
}

export default ProjectThreeApp