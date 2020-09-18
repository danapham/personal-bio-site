const projects = [
  {
    title: "Digital Sorting Hat",
    screenshot: "images/sortinghat.png",
    description: "A sorting hat for the modern age. Geared towards the next generation of Hogwarts professors, this web application speeds up the house-sorting process. Simply enter a first year's name and the digial sorting hat sorts the student in less than a second. Less time sorting, more time feasting!",
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Bootstrap, Github",
    available: true,
    url: "https://sortinghatapp.netlify.app/",
    githubUrl: "https://github.com/danapham/sorting-hat",
  },
  {
    title: "Cool Project",
    screenshot: "https://lh3.googleusercontent.com/DLYdTiveMR_LuwO2oMhPNVVAuOAx8KKL3awjesyHrhvduCYXKKgZurutKCGPqRJhx-77AVGCCPVCHzaHVPiF8UT0ZhswWV13Z1sx6kEXOnreFfdjPHBP552iwDwYWiV9DcEYLL6KQA=w2400",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project",
    screenshot: "https://lh3.googleusercontent.com/DLYdTiveMR_LuwO2oMhPNVVAuOAx8KKL3awjesyHrhvduCYXKKgZurutKCGPqRJhx-77AVGCCPVCHzaHVPiF8UT0ZhswWV13Z1sx6kEXOnreFfdjPHBP552iwDwYWiV9DcEYLL6KQA=w2400",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project",
    screenshot: "https://lh3.googleusercontent.com/DLYdTiveMR_LuwO2oMhPNVVAuOAx8KKL3awjesyHrhvduCYXKKgZurutKCGPqRJhx-77AVGCCPVCHzaHVPiF8UT0ZhswWV13Z1sx6kEXOnreFfdjPHBP552iwDwYWiV9DcEYLL6KQA=w2400",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
  {
    title: "Cool Project",
    screenshot: "https://lh3.googleusercontent.com/DLYdTiveMR_LuwO2oMhPNVVAuOAx8KKL3awjesyHrhvduCYXKKgZurutKCGPqRJhx-77AVGCCPVCHzaHVPiF8UT0ZhswWV13Z1sx6kEXOnreFfdjPHBP552iwDwYWiV9DcEYLL6KQA=w2400",
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
  },
];

const printToDom = (elementId, stringToPrint) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML = stringToPrint;
};

const createProjectCards = (array) => {
  let domString = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i].available === true) {
      domString += `<div class="project-card">`;
      domString +=    `<div class="project-card-title">${array[i].title}</div>`;
      domString +=    `<img class="projects-screenshot" src=${array[i].screenshot} alt="screenshot of project">`;
      domString +=    `<div class="project-description">${array[i].description}</div>`;
      domString +=    `<div class="project-tech">${array[i].technologiesUsed}</div>`;
      domString +=    `<div><a class="url" href=${array[i].url}>URL</a>`;
      domString +=    `<a class="github-link" href=${array[i].githubUrl}>Github Link</a></div>`;
      domString += `</div>`;
    }

    printToDom("projectsPage", domString);
  }
};

const init = () => {
  createProjectCards(projects);
}

init();
