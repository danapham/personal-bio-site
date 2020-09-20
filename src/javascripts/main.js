import '../styles/main.scss';
import bio from './components/bio';
import technologies from './components/technologies';
import projects from './components/projects';

const init = () => {
  bio.displayBio();
  technologies.displayTechnologies();
  projects.displayProjects();
};

init();
