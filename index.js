import KEY_VALUES from './key-values.js';

let language = 'en';
let letterSize = 'default';
let keyButtons;
let rowsWrapper;
let textarea;
let isShift = '';

function getAllEl() {
  textarea = document.createElement('textarea');
  textarea.classList.add('text-area');
  document.body.prepend(textarea);
  const KEY_TITLE = document.createElement('h1');
  KEY_TITLE.classList.add('key-title');
  KEY_TITLE.textContent = 'Виртуальная клавиатура';
  document.body.prepend(KEY_TITLE);
  const KEY_INFO = document.createElement('div');
  KEY_INFO.classList.add('key-info');
  KEY_INFO.innerHTML = `
    <p>Клавиатура создана в операционной системе macOS</p>
    <p>Для переключения языка комбинация: control + command(левый)</p>
  `;
  document.body.append(KEY_INFO);
}

getAllEl();

function buildKeyboard(lang, size, code) {
  rowsWrapper = document.createElement('div');
  rowsWrapper.classList.add('rows-wrapper');
  textarea.after(rowsWrapper);
  for (let i = 0; i < KEY_VALUES.length; i += 1) {
    const ROW = document.createElement('div');
    ROW.classList.add('row');
    for (let j = 0; j < KEY_VALUES[i].length; j += 1) {
      ROW.innerHTML += `
      <button class='key-button ${KEY_VALUES[i][j].code}'>${KEY_VALUES[i][j][lang][size]}</button>
      `;
    }
    rowsWrapper.appendChild(ROW);
  }
  keyButtons = document.querySelectorAll('.key-button');
  if (size === 'caps') {
    keyButtons[28].classList.add('key-button_active');
  }
  if (size === 'shift') {
    if (code === 'ShiftLeft') {
      keyButtons[41].classList.add('key-button_active');
    }
    if (code === 'ShiftRight') {
      keyButtons[53].classList.add('key-button_active');
    }
  }
}

buildKeyboard(language, letterSize);

function mouseUp() {
  textarea.focus();
}

function mouseDown() {
  textarea.focus();
  textarea.value += this.textContent;
}

function addKeyListener() {
  for (let i = 0; i < keyButtons.length; i += 1) {
    keyButtons[i].addEventListener('mousedown', mouseDown);
    keyButtons[i].addEventListener('mouseup', mouseUp);
  }
}

addKeyListener();

function changeLanguage() {
  if (language === 'en') {
    language = 'ua';
  } else language = 'en';
  setTimeout(() => {
    rowsWrapper.remove();
    buildKeyboard(language, letterSize);
    addKeyListener();
  }, 100);
}

document.addEventListener('keydown', (event) => {
  textarea.focus();
  for (let i = 0; i < keyButtons.length; i += 1) {
    if (keyButtons[i].classList.contains(event.code)) {
      keyButtons[i].classList.add('key-button_active');
      if (event.code === 'Backspace') {
        return;
      }
      if (event.code === 'Enter') {
        return;
      }
      event.preventDefault();
      if (event.code === 'CapsLock') {
        letterSize = 'caps';
        rowsWrapper.remove();
        buildKeyboard(language, letterSize);
        addKeyListener();
        return;
      }
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        letterSize = 'shift';
        isShift = event.code;
        rowsWrapper.remove();
        buildKeyboard(language, letterSize, isShift);
        addKeyListener();
        return;
      }
      if (event.code === 'Tab') {
        textarea.value += '    ';
        return;
      }
      if (keyButtons[54].classList.contains('key-button_active') && event.code === 'MetaLeft') {
        changeLanguage();
        return;
      }
      if (event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'AltLeft' || event.code === 'AltRight' || event.code === 'MetaRight' || event.code === 'MetaLeft') {
        return;
      }
      textarea.value += keyButtons[i].textContent;
      return;
    }
  }
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  for (let i = 0; i < keyButtons.length; i += 1) {
    if (keyButtons[i].classList.contains(event.code)) {
      keyButtons[i].classList.remove('key-button_active');
      if (event.code === 'CapsLock') {
        letterSize = 'default';
        rowsWrapper.remove();
        buildKeyboard(language, letterSize);
        addKeyListener();
        return;
      }
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        letterSize = 'default';
        rowsWrapper.remove();
        buildKeyboard(language, letterSize);
        addKeyListener();
        return;
      }
    }
  }
});
