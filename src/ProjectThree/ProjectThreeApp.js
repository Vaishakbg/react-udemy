import React from 'react'
import Route from './components/Route'
import Sidebar from './components/Sidebar';
import AccordionPage from './pages/AccordionPage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';
import ModalPage from './pages/ModalPage';

function ProjectThreeApp() {
 return (
    <div className='mx-auto grid grid-cols-6 gap-4 mt-4'>
      <Sidebar />
      <div className='col-span-5'>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/button'>
          <ButtonPage />
        </Route>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
      </div>
    </div>
  )
}

export default ProjectThreeApp