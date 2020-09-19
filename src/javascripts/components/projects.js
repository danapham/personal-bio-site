const displayProjects = () => {
  $('#navToProjects').on('click', () => {
    $('#bioPage').html('');
    $('#technologiesPage').html('');
    $('#projectsPage').html(``);
  });
};

export default { displayProjects };
