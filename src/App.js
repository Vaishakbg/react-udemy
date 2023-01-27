import React from "react";
import ProjectRedux from "./ProjectRedux/ProjectRedux";
import "bulma/css/bulma.css";
import { store } from "./ProjectRedux/store";
import { Provider } from "react-redux";
// import ProjectThreeApp from "./ProjectThree/ProjectThreeApp";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <ProjectThreeApp /> */}
        <ProjectRedux />
      </div>
    </Provider>
  );
}

export default App;
