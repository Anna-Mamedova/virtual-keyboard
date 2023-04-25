import KEY_VALUES from './key-values.js';

let language = 'en';
let rowsWrapper;
let textarea;

function buildKeyboard() {
  rowsWrapper = document.createElement('div');
  rowsWrapper.classList.add('rows-wrapper');
  document.body.append(rowsWrapper);
  for (let i = 0; i < KEY_VALUES.length; i += 1) {
    const ROW = document.createElement('div');
    ROW.classList.add('row');
    for (let j = 0; j < KEY_VALUES[i].length; j += 1) {
      ROW.innerHTML += `
        <button class='key-button ${KEY_VALUES[i][j].code}'>${KEY_VALUES[i][j][language].default}</button>
      `;
    }
    rowsWrapper.append(ROW);
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
  textarea = document.createElement('textarea');
  textarea.classList.add('text-area');
  document.body.prepend(textarea);
  const KEY_TITLE = document.createElement('h1');
  KEY_TITLE.classList.add('key-title');
  KEY_TITLE.textContent = 'Виртуальная клавиатура';
  document.body.prepend(KEY_TITLE);
}

getAllEl();

const KEY_BUTTONS = document.querySelectorAll('.key-button');

function getFocus() {
  textarea.focus();
}

document.addEventListener('keydown', (event) => {
  getFocus();
  for (let i = 0; i < KEY_BUTTONS.length; i += 1) {
    if (KEY_BUTTONS[i].classList.contains(event.code)) {
      KEY_BUTTONS[i].classList.add('key-button_active');
    }
  }
});

document.addEventListener('keyup', (event) => {
  for (let i = 0; i < KEY_BUTTONS.length; i += 1) {
    if (KEY_BUTTONS[i].classList.contains(event.code)) {
      KEY_BUTTONS[i].classList.remove('key-button_active');
    }
  }
});
