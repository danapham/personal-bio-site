const displayTechnologies = () => {
  $('#navToTechnologies').on('click', () => {
    $('#app').html('');
    $('#app').html(`
    <div class="page-container">
      <div class="technology-page">
        <div class="list-group">
          <h5>Languages</h5>
          <ul class="technologies-list">
            <li>Javascript</li>
            <li>HTML/CSS/SASS</li>
            <li>Markdown</li>
            <li>Command Line</li>
          </ul>
        </div>
        <div class="list-group">
          <h5>Libraries</h5>
          <ul class="technologies-list">
          <li>React</li>
          <li>ReactStrap</li>
          <li>Bootstrap</li>
          <li>Jquery</li>
          </ul>
        </div>
        <div class="list-group">
          <h5>API Tools</h5>
          <ul class="technologies-list">
          <li>Firebase</li>
          <li>Postman</li>
          <li>Axios</li>
          </ul>
        </div>
        <div class="list-group">
          <h5>Project Management & Planning</h5>
          <ul class="technologies-list">
            <li>Git/Github</li>
            <li>Visual Studio Code</li>
            <li>Figma</li>
            <li>Netlify</li>
            <li>Webpack</li>
          </ul>
        </div>
      </div>
    </div>`);
  });
};

export default { displayTechnologies };
