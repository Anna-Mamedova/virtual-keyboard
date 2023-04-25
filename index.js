import KEY_VALUES from './key-values.js';

let language = 'en';

function buildKeyboard() {
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

buildKeyboard();

function getAllEl() {
  const KEY_INFO = document.createElement('div');
  KEY_INFO.classList.add('key-info');
  KEY_INFO.innerHTML = `
    <p>Клавиатура создана в операционной системе macOS</p>
    <p>Для переключения языка комбинация: control + shift(левый)</p>
  `;
  document.body.append(KEY_INFO);
  const AREA = document.createElement('textarea');
  AREA.classList.add('text-area');
  document.body.prepend(AREA);
  const KEY_TITLE = document.createElement('h1');
  KEY_TITLE.classList.add('key-title');
  KEY_TITLE.textContent = 'Виртуальная клавиатура';
  document.body.prepend(KEY_TITLE);
}

getAllEl();
