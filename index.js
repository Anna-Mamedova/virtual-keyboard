import KEY_VALUES from './key-values.js';

let language = 'en';
let letterSize = 'default';
let keyButtons;
let rowsWrapper;
let textarea;
let textareaPosition = 0;
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

textarea.addEventListener('click', () => {
  textareaPosition = textarea.selectionStart;
});

function updateTextarea(el, n, l) {
  const FIRST_PART = textarea.value.split('').slice(0, textareaPosition - l);
  const SECOND_PART = textarea.value.split('').slice(textareaPosition, textarea.value.length);
  textarea.value = FIRST_PART.join('') + el + SECOND_PART.join('');
  textareaPosition += n;
  textarea.selectionStart = textareaPosition;
  textarea.setSelectionRange(textareaPosition, textareaPosition);
}

function updateKeyBoard(lang, size, code) {
  rowsWrapper.remove();
  buildKeyboard(lang, size, code);
  addKeyListener();
}

function mouseUp() {
  textarea.focus();
  textarea.setSelectionRange(textareaPosition, textareaPosition);
  if (isShift === 'ShiftRight' || isShift === 'ShiftLeft') {
    isShift = '';
    letterSize = 'default';
    updateKeyBoard(language, letterSize);
  }
}

function mouseDown() {
  if (this.classList.contains('ShiftLeft')) {
    isShift = 'ShiftLeft';
    letterSize = 'shift';
    updateKeyBoard(language, letterSize, isShift);
    return;
  }
  if (this.classList.contains('ShiftRight')) {
    isShift = 'ShiftRight';
    letterSize = 'shift';
    updateKeyBoard(language, letterSize, isShift);
    return;
  }
  if (this.classList.contains('CapsLock') && letterSize !== 'caps') {
    letterSize = 'caps';
    updateKeyBoard(language, letterSize);
    return;
  }
  if (letterSize === 'caps' && this.classList.contains('CapsLock')) {
    letterSize = 'default';
    updateKeyBoard(language, letterSize);
    return;
  }
  if (this.classList.contains('Enter')) {
    const ENTER = '\n';
    updateTextarea(ENTER, 1, 0);
    return;
  }
  if (this.classList.contains('Tab')) {
    updateTextarea('    ', 4, 0);
    return;
  }
  if (this.classList.contains('Backspace') && textareaPosition > 0) {
    updateTextarea('', -1, 1);
    return;
  }
  if (this.classList.contains('Backspace') || this.classList.contains('MetaLeft') || this.classList.contains('MetaRight') || this.classList.contains('ControlLeft') || this.classList.contains('ControlRight') || this.classList.contains('AltLeft') || this.classList.contains('AltRight')) {
    return;
  }
  updateTextarea(this.textContent, 1, 0);
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
    updateKeyBoard(language, letterSize);
  }, 100);
}

document.addEventListener('keydown', (event) => {
  textarea.focus();
  for (let i = 0; i < keyButtons.length; i += 1) {
    if (keyButtons[i].classList.contains(event.code)) {
      keyButtons[i].classList.add('key-button_active');
      if (event.code === 'Backspace' || event.code === 'Enter') {
        return;
      }
      event.preventDefault();
      if (event.code === 'CapsLock') {
        letterSize = 'caps';
        updateKeyBoard(language, letterSize);
        return;
      }
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        letterSize = 'shift';
        isShift = event.code;
        updateKeyBoard(language, letterSize, isShift);
        return;
      }
      if (event.code === 'Tab') {
        updateTextarea('    ', 4, 0);
        return;
      }
      if (keyButtons[54].classList.contains('key-button_active') && event.code === 'MetaLeft') {
        changeLanguage();
        return;
      }
      if (event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'AltLeft' || event.code === 'AltRight' || event.code === 'MetaRight' || event.code === 'MetaLeft') {
        return;
      }
      updateTextarea(keyButtons[i].textContent, 1, 0);
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
        updateKeyBoard(language, letterSize);
        return;
      }
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        letterSize = 'default';
        updateKeyBoard(language, letterSize);
        return;
      }
    }
  }
});
