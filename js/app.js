'use strict';
const appState = {
  projects: [{
    title: 'Frenchatize Me',
    description: 'A French language learning tool that uses spaced repetition to help ' +
        'learn 10 French vocabulary words',
    screenShot: './images/frenchatize.png',
    tech: ['./images/mongo-icon.png', './images/react-icon.png', './images/redux-icon.png', './images/nodejs-icon.png'],
    links: {
      live: 'https://frenchatize.herokuapp.com/',
      source: 'https://github.com/True14/Francais-Normalisation'
    }
  },
  {
    title: 'Quiz Manager',
    description: 'Application that lets administrators manage required materials for users to take.',
    screenShot: './images/login-screen.png',
    tech: ['./images/mongo-icon.png', './images/react-icon.png', './images/redux-icon.png', './images/nodejs-icon.png'],
    links: {
      live: 'https://guiz-manager.herokuapp.com/',
      source: 'https://github.com/True14/jonathan-paton-quiz-fullstack'
    }
  },
  {
    title: 'Book-Thing.IO',
    description: 'A community driven, book recommendation application. Users can create lists of their favorite books and have others recommended to them.',
    screenShot: './images/login.png',
    tech: ['./images/mocha-chai-icon.png', './images/postgresqldb-icon.png', './images/react-icon.png', './images/redux-icon.png', './images/nodejs-icon.png'],
    links: {
      live: 'https://book-thing.herokuapp.com/',
      source: 'https://github.com/thinkful-c11/book-thing.io'
    }
  },
  {
    title: 'Coming Soon',
    description: 'This is where another project will go. Stay tuned!',
    screenShot: './images/coming_soon.png',
    tech: [],
    links: {
      live: '#',
      source: '#'
    }
  }],
  position: 0
};

const renderProject = (state, element) => {
  let projects = '';
  let pos = 0;
  state.projects.forEach(project => {
    let images = '';
    project.tech.forEach(image => {
      images += `<img src="${image}" alt="">`;
    });
    if (!(pos % 2)) {
      projects += '<div class="project-row">';
    }
    projects += `<div class="project-container">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-image">
        <img src="${project.screenShot}">
      </div>
      <div class="tech-stack">
        ${images}
      </div>
      <ul class='project-links'>
        <li>
          <a class='view-live-js' href="${project.links.live}">Live Version</a>
        </li>
        <li>
          <a class='view-source-js' href="${project.links.source}">Source Code</a>
        </li>
      </ul>
    </div>`;
    if (pos % 2) {
      projects += '</div>';
    }
    pos++;
  });

  element.html(projects);
};
const scroll = (link, destination) => {
  $(link).click(() => {
    const path = $(destination).offset().top;
    $('body').animate({
      scrollTop: path
    }, 1000);
  });
};

const evenListeners = () => {
  scroll('.about-page-link', '.about');
  scroll('.work-page-link', '.work');
  scroll('.contact-page-link', '.contact');
};

$().ready(() => {
  renderProject(appState, $('.projects'));
  evenListeners();
});
