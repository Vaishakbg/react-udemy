import "bulma/css/bulma.css";
import "./style.css";
import React from "react";
import ProjectReduxApp from "./ProjectReduxApp";
import { store } from "./store";
import { Provider } from "react-redux";

function ProjectRedux() {
  return (
    <Provider store={store}>
      <ProjectReduxApp />
    </Provider>
  );
}

export default ProjectRedux;
