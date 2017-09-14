'use strict';
const appState = {
  projects: [{
    title: 'Frenchatize Me',
    description: 'A French language learning tool that uses spaced repetition to help ' +
        'learn 10 French vocabulary words',
    tech: ['./images/mongo-icon.png', './images/react-icon.png', './images/redux-icon.png', './images/nodejs-icon.png'],
    links: {
      live: 'https://frenchatize.herokuapp.com/',
      source: 'https://github.com/True14/Francais-Normalisation'
    }
  },
  {
    title: 'Quiz Manager',
    description: 'Application that lets administrators manage required materials for users to take.',
    tech: ['./images/mongo-icon.png', './images/react-icon.png', './images/redux-icon.png', './images/nodejs-icon.png'],
    links: {
      live: 'https://guiz-manager.herokuapp.com/',
      source: 'https://github.com/True14/jonathan-paton-quiz-fullstack'
    }
  },
  {
    title: 'Book-Thing.IO',
    description: 'A community driven, book recommendation application. Users can create lists of their favorite books and have others recommended to them.',
    tech: ['./images/mocha-chai-icon.png', './images/postgresqldb-icon.png', './images/react-icon.png', './images/redux-icon.png', './images/nodejs-icon.png'],
    links: {
      live: 'https://frenchatize.herokuapp.com/',
      source: 'https://github.com/True14/Francais-Normalisation'
    }
  },
  {
    title: 'Coming Soon',
    description: 'This is where a fourth projce will go. Stay tuned!',
    tech: [],
    links: {
      live: '#',
      source: '#'
    }
  }],
  position: 0
};

const renderProject = (state, element) => {
  const pos = state.position;
  let images = '';
  state.projects[pos].tech.forEach(image => {
    images += `<img src="${image}" alt="">`;
  });
  element.html(`<h3 class="project-title">${state.projects[pos].title}</h3>
          <p class="project-description">${state.projects[pos].description}</p>
          <div class="project-image hidden"></div>
          <div class="tech-stack hidden">
            ${images}
          </div>
          <ul class='project-links'>
            <li>
              <a class='view-live-js' href="${state.projects[pos].links.live}">Live Version</a>
            </li>
            <li>
              <a class='view-source-js' href="${state.projects[pos].links.source}">Source Code</a>
            </li>
          </ul>`);
};
const rotateLeft = (state) => {
  if (state.position) {
    state.position--;
    renderProject(state, $('.project-container'));
  }
};

const rotateRight = (state) => {
  if (state.position < state.projects.length - 1) {
    state.position++;
    renderProject(state, $('.project-container'));
  }
};

const evenListeners = (state) => {
  $('.fa-arrow-right').on('click', () => {
    rotateRight(state);
  });
  $('.fa-arrow-left').on('click', () => {
    rotateLeft(state);
  });
};

$().ready(() => {
  renderProject(appState, $('.project-container'));
  evenListeners(appState);
});
