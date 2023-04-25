import KEY_VALUES from './key-values.js';

let language = 'en';

function bildKeyboard() {
  const ROWS_WRAPPER = document.createElement('div');
  ROWS_WRAPPER.classList.add('rows-wrapper');
  document.body.append(ROWS_WRAPPER);
  for (let i = 0; i < KEY_VALUES.length; i += 1) {
    const ROW = document.createElement('div');
    ROW.classList.add('row');
    for (let j = 0; j < KEY_VALUES[i].length; j += 1) {
      ROW.innerHTML += `
        <button class='key-button ${KEY_VALUES[i][j].code}'> ${KEY_VALUES[i][j][language].default} </button>
      `;
    }
    ROWS_WRAPPER.append(ROW);
  }
}

bildKeyboard();
