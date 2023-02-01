import './ProjectMediaApp.css';
import ProjectMedia from "./ProjectMedia";
import { Provider } from 'react-redux';
import { store } from './store';

function ProjectMediaApp() {
    return (
        <Provider store={store}>
        <ProjectMedia />
        </Provider>
    );
  }
  
  export default ProjectMediaApp;
  