import React from "react";
import './ProjectCarsApp.css';
import { Provider } from "react-redux";
import ProjectCar from "./ProjectCar";
import {store} from './store';

function ProjectCarsApp() {
  return (
      <Provider store={store}>
        <ProjectCar />
      </Provider>
  );
}

export default ProjectCarsApp;
