const displayTechnologies = () => {
  $('#navToTechnologies').on('click', () => {
    $('#bioPage').html('');
    $('#projectsPage').html('');
    $('#technologiesPage').html(`
    <ul>
      <li>Javascript</li>
      <li>HTML/CSS</li>
      <li>Git/Github</li>
      <li>ZSH Terminal</li>
      <li>Webpack</li>
      <li>Bootstrap</li>
      <li>SASS</li>
      <li>Visual Studio Code</li>
      <li>Figma</li>
    </ul>`);
  });
};

export default { displayTechnologies };
