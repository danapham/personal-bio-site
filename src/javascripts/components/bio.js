/* eslint-disable max-len */
const displayBio = () => {
  $('#navToBio').on('click', () => {
    $('#app').html('');
    $('#app').html(
      `
      <div class="page-container">
        <div class="bio-description">
          <img class="profile-pic" src="https://lh3.googleusercontent.com/B7gZZb6HdFaPzbkc_tDPQhSkzQz0jRg_kZt4_7uE3fPcB5fEHICEqs_7so21EeJZxgWVBtm51g2LzlYyTzV07OJ40JsWKomOoI_BTM3tsZXnaN1jE5o5TB4bXqGLaWG_JnLXZG99ASz8zf23gtFlOH9kTIZx8pkh7RMgbfekvUlf8JmPbgZ5KML67AmWPEL14BExqr-BaUnHTD6iHh1A1gR-5dHB-lGs-ujsnJ_yq4Fh9XZkEhZkp7ngmbwJs2XkoZPyJoO1o0ZtNIDVzhnyhe6aZ6fBZDVPIXqy35t1sgfZigJf5T799qcAcEs2uqIPa36mwDWTGugBRXRw5zluo1YXy1Ko1C6RZI0dEA-k_Sh6m2rJc99kXRTjXtybxTkeoh7sS6FQJXzjN6AZCepK8RUALFtKEdTNy782qIFUNiitkcMr16XfqtZVVeaepOL38EyAmF_zN-sRC-cdI7mBOIGESsLg7cjAsW37LZkCAKPOmKpGtzn-nlsjrLingP2MnUmmVAzKFjAUYpkHezuys18ouhMTode5lyzAXrPfDje7Fu3y94Gq51kXQj5foDhc0irvBBLcrBNjfdR9GBasMp7OnH43sSREAC313Fs1tVi-d3qB07-tAeWCp3DOZKg-8yEnaacJXD8DGwtPapNMqVU-ygXS8Ztu5ln1SHy-MsUokkcDDHtCfGcguTbH=w2104-h1578-no?authuser=0">
          <p>Hi. I’m Dana - a full-stack engineer from Nashville and part-time student at Nashville Software School.</p>
          <p>My post-college life took me on a meandering path in which I took on titles such as recruiter, English teacher, world traveler, HR coordinator and now — software developer. I’ve spent the last 6 months creating 22 javascript applications and have found that my apps tend to be minimalist and user-focused, with clean, organized code. I love that development is a craft that can be continuously fine-tuned with many different areas of specialization. At the moment, I am most interested in creating apps with React, data manipulation, and animating with code.</p>
          <p>As a developer on your team, you can expect me to place strong emphasis on communication, planning, and team board games.</p>
        </div>
      </div>
      `
    );
  });
};

const initialLoad = () => {
  $('#app').html(
    `
    <div class="page-container">
      <div class="bio-description">
        <img class="profile-pic" src="https://lh3.googleusercontent.com/B7gZZb6HdFaPzbkc_tDPQhSkzQz0jRg_kZt4_7uE3fPcB5fEHICEqs_7so21EeJZxgWVBtm51g2LzlYyTzV07OJ40JsWKomOoI_BTM3tsZXnaN1jE5o5TB4bXqGLaWG_JnLXZG99ASz8zf23gtFlOH9kTIZx8pkh7RMgbfekvUlf8JmPbgZ5KML67AmWPEL14BExqr-BaUnHTD6iHh1A1gR-5dHB-lGs-ujsnJ_yq4Fh9XZkEhZkp7ngmbwJs2XkoZPyJoO1o0ZtNIDVzhnyhe6aZ6fBZDVPIXqy35t1sgfZigJf5T799qcAcEs2uqIPa36mwDWTGugBRXRw5zluo1YXy1Ko1C6RZI0dEA-k_Sh6m2rJc99kXRTjXtybxTkeoh7sS6FQJXzjN6AZCepK8RUALFtKEdTNy782qIFUNiitkcMr16XfqtZVVeaepOL38EyAmF_zN-sRC-cdI7mBOIGESsLg7cjAsW37LZkCAKPOmKpGtzn-nlsjrLingP2MnUmmVAzKFjAUYpkHezuys18ouhMTode5lyzAXrPfDje7Fu3y94Gq51kXQj5foDhc0irvBBLcrBNjfdR9GBasMp7OnH43sSREAC313Fs1tVi-d3qB07-tAeWCp3DOZKg-8yEnaacJXD8DGwtPapNMqVU-ygXS8Ztu5ln1SHy-MsUokkcDDHtCfGcguTbH=w2104-h1578-no?authuser=0">
        <p>Hi. I’m Dana - a full-stack engineer from Nashville and part-time student at Nashville Software School.</p>
        <p>My post-college life took me on a meandering path in which I took on titles such as recruiter, English teacher, world traveler, HR coordinator and now — software developer. I’ve spent the last 6 months creating 22 javascript applications and have found that my apps tend to be minimalist and user-focused, with clean, organized code. I love that development is a craft that can be continuously fine-tuned with many different areas of specialization. At the moment, I am most interested in creating apps with React, data manipulation, and animating with code.</p>
        <p>As a developer on your team, you can expect me to place strong emphasis on communication, planning, and team board games.</p>
      </div>
    </div>
    `
  );
};

export default { displayBio, initialLoad };
