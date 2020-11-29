const displayNav = () => {
  $('#nav').html(`<nav class="nav-html-page">
  <ul class="navLinks-html-page">
    <li class="nav-link"><a class="hover-index" id="navToBio" href="#">Bio</a></li>
    <li class="nav-link"><a class="hover-index" id="navToTechnologies" href="#">Technologies</a></li>
    <li class="nav-link"><a class="hover-index" id="navToProjects" href="#">Projects</a></li>
  </ul>
  </nav>`);
};

export default { displayNav };
