import '../styles/main.scss';
import bio from './components/bio';
import technologies from './components/technologies';
import projects from './components/projects';
import nav from './components/nav';
import title from './components/title';

const init = () => {
  title.displayTitle();
  nav.displayNav();
  bio.displayBio();
  technologies.displayTechnologies();
  projects.displayProjects();
  bio.initialLoad();
};

init();
