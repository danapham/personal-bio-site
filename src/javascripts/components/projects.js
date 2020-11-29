import projectData from '../helpers/data/projectData';

const displayProjects = () => {
  $('#navToProjects').on('click', () => {
    $('#app').html('');
    $('#app').html('<div id="projectsPage" class="page-container"></div>');

    projectData.getProjects().then((res) => {
      for (let i = 0; i < res.length; i += 1) {
        if (res[i].available === true) {
          $('#projectsPage').append(`
          <div class="project-card">
            <div class="project-card-title">${res[i].title}</div>
            <img class="projects-screenshot" src=${res[i].screenshot} alt="screenshot of ${res[i].title}">
            <div class="project-description">${res[i].description}</div>
            <div class="project-tech">${res[i].technologiesUsed}</div>
            <div>
              <a class="url" href=${res[i].url}>URL</a>
              <a class="github-link" href=${res[i].githubUrl}>Github Link</a>
            </div>
          </div>`);
        }
      }
    });
  });
};

export default { displayProjects };
