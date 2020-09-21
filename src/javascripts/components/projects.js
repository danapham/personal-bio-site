/* eslint-disable no-plusplus */
import projects from '../helpers/data/projectData';

const displayProjects = () => {
  $('#navToProjects').on('click', () => {
    $('#bioPage').html('');
    $('#technologiesPage').html('');
    $('#projectsPage').html('');

    const projectsArray = projects.getProjects();
    for (let i = 0; i < projectsArray.length; i++) {
      if (projectsArray[i].available === true) {
        $('#projectsPage').append(`
        <div class="project-card">
          <div class="project-card-title">${projectsArray[i].title}</div>
          <img class="projects-screenshot" src=${projectsArray[i].screenshot} alt="screenshot of ${projectsArray[i].title}">
          <div class="project-description">${projectsArray[i].description}</div>
          <div class="project-tech">${projectsArray[i].technologiesUsed}</div>
          <div>
            <a class="url" href=${projectsArray[i].url}>URL</a>
            <a class="github-link" href=${projectsArray[i].githubUrl}>Github Link</a>
          </div>
        </div>`);
      }
    }
  });
};

export default { displayProjects };
