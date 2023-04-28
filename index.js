import KEY_VALUES from './key-values.js';

let language = 'en';
let letterSize = 'default';
let isShift = '';
let isCaps = false;
let keyButtons;
let rowsWrapper;
let textarea;
let textareaPosition = 0;

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
  if (size === 'caps' || isCaps) {
    keyButtons[28].classList.add('key-button_active');
  }
  if (size === 'shift' || isShift.length > 0) {
    if (code === 'ShiftLeft' || isShift === 'ShiftLeft') {
      keyButtons[41].classList.add('key-button_active');
    }
    if (code === 'ShiftRight' || isShift === 'ShiftRight') {
      keyButtons[53].classList.add('key-button_active');
    }
  }
  if (size === 'option') {
    if (code === 'AltLeft') {
      keyButtons[55].classList.add('key-button_active');
    }
    if (code === 'AltRight') {
      keyButtons[59].classList.add('key-button_active');
    }
  }
  if (code === 'ControlLeft' || code === 'MetaLeft') {
    keyButtons[54].classList.add('key-button_active');
    keyButtons[56].classList.add('key-button_active');
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
}

function changeLanguage(time, code) {
  if (language === 'en') {
    language = 'ua';
  } else language = 'en';
  setTimeout(() => {
    updateKeyBoard(language, letterSize, code);
  }, time);
}

document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('key-button')) {
    if (event.target.classList.contains('ShiftLeft')) {
      isShift = 'ShiftLeft';
      letterSize = 'shift';
      updateKeyBoard(language, letterSize, isShift);
      return;
    }
    if (event.target.classList.contains('ShiftRight')) {
      isShift = 'ShiftRight';
      letterSize = 'shift';
      updateKeyBoard(language, letterSize, isShift);
      return;
    }
    if (event.target.classList.contains('AltLeft')) {
      letterSize = 'option';
      updateKeyBoard(language, letterSize, 'AltLeft');
      return;
    }
    if (event.target.classList.contains('AltRight')) {
      letterSize = 'option';
      updateKeyBoard(language, letterSize, 'AltRight');
      return;
    }
    if (event.target.classList.contains('CapsLock') && letterSize !== 'caps') {
      letterSize = 'caps';
      isCaps = true;
      updateKeyBoard(language, letterSize);
      return;
    }
    if (letterSize === 'caps' && event.target.classList.contains('CapsLock')) {
      letterSize = 'default';
      updateKeyBoard(language, letterSize);
      return;
    }
    if (event.target.classList.contains('Enter')) {
      const ENTER = '\n';
      updateTextarea(ENTER, 1, 0);
      return;
    }
    if (event.target.classList.contains('Tab')) {
      updateTextarea('    ', 4, 0);
      return;
    }
    if (event.target.classList.contains('Backspace') && textareaPosition > 0) {
      updateTextarea('', -1, 1);
      return;
    }
    if (event.target.classList.contains('Backspace') || event.target.classList.contains('MetaLeft') || event.target.classList.contains('MetaRight') || event.target.classList.contains('ControlLeft') || event.target.classList.contains('ControlRight') || event.target.classList.contains('AltLeft') || event.target.classList.contains('AltRight')) {
      return;
    }
    updateTextarea(event.target.textContent, 1, 0);
  }
});

document.addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('key-button')) {
    textarea.focus();
    textarea.setSelectionRange(textareaPosition, textareaPosition);
    if (event.target.classList.contains('ShiftRight') || event.target.classList.contains('ShiftLeft')) {
      letterSize = 'default';
      updateKeyBoard(language, letterSize);
    }
    if (event.target.classList.contains('AltRight') || event.target.classList.contains('AltLeft')) {
      letterSize = 'default';
      updateKeyBoard(language, letterSize);
    }
  }
});

document.addEventListener('keydown', (event) => {
  textarea.focus();
  for (let i = 0; i < keyButtons.length; i += 1) {
    if (keyButtons[i].classList.contains(event.code)) {
      keyButtons[i].classList.add('key-button_active');
      event.preventDefault();
      if (event.code === 'Enter') {
        const ENTER = '\n';
        updateTextarea(ENTER, 1, 0);
        return;
      }
      if (event.code === 'Backspace' && textareaPosition > 0) {
        updateTextarea('', -1, 1);
        return;
      }
      if (event.code === 'CapsLock') {
        letterSize = 'caps';
        isCaps = true;
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
      if ((keyButtons[54].classList.contains('key-button_active') && event.code === 'MetaLeft') || (keyButtons[56].classList.contains('key-button_active') && event.code === 'ControlLeft')) {
        const SET_TIME = 100;
        changeLanguage(SET_TIME, event.code);
        return;
      }
      if (event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'MetaRight' || event.code === 'MetaLeft' || event.code === 'Backspace') {
        return;
      }
      if (event.code === 'AltLeft' || event.code === 'AltRight') {
        letterSize = 'option';
        updateKeyBoard(language, letterSize, event.code);
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
        isCaps = false;
        if (isShift.length > 0) {
          letterSize = 'shift';
          updateKeyBoard(language, letterSize);
          return;
        }
        letterSize = 'default';
        updateKeyBoard(language, letterSize);
        return;
      }
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        isShift = '';
        if (isCaps) {
          letterSize = 'caps';
          updateKeyBoard(language, letterSize);
          return;
        }
        letterSize = 'default';
        updateKeyBoard(language, letterSize);
        return;
      }
      if (event.code === 'AltLeft' || event.code === 'AltRight') {
        letterSize = 'default';
        updateKeyBoard(language, letterSize);
        return;
      }
    }
  }
});

function setLocalStorage() {
  localStorage.setItem('language', language);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
    if (language === 'en') {
      language = 'ua';
    } else language = 'en';
    const SET_TIME = 0;
    changeLanguage(SET_TIME);
  }
}
window.addEventListener('load', getLocalStorage);
