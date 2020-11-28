/* eslint-disable max-len */
const displayBio = () => {
  $('#navToBio').on('click', () => {
    $('#technologiesPage').html('');
    $('#projectsPage').html('');
    $('#bioPage').html('<p class="bio-description">Hi. I’m Dana - a full-stack engineer from Nashville and part-time student at Nashville Software School.</p>');
    $('#bioPage').append('<p class="bio-description">My post-college life took me on a meandering path in which I took on titles such as recruiter, English teacher, world traveler, HR coordinator and now — software developer. I’ve spent the last 6 months creating 22 javascript applications and have found that my apps tend to be minimalist and user-focused, with clean, organized code. I love that development is a craft that can be continuously fine-tuned with many different areas of specialization. At the moment, I am most interested in creating apps with React, data manipulation, and animating with code.</p>');
    $('#bioPage').append('<p class="bio-description">As a developer on your team, you can expect me to place strong emphasis on communication, planning, and team board games.</p>');
  });
};

export default { displayBio };
