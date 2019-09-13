(() => {
  'use strict';

  const CONTENT_ID = 'content';
  const contentSelector = document.getElementById(CONTENT_ID);

  let i = 2;

  setInterval(() => {
    contentSelector.innerHTML += `<p id="nextElem${i}">${new Array(i).fill(' Cookie 🍪')}</p>`;
    document.getElementById(`nextElem${i}`).scrollIntoView();
    i++;
  }, 500);

})();
