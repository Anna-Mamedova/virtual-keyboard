import KEY_VALUES from './key-values.js';

let language = 'en';
let letterSize = 'default';
let keyButtons;
let rowsWrapper;
let textarea;
let textareaPosition = 0;
const ACTIVE_BUTTON = new Set();

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

function buildKeyboard(lang, size) {
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
  ACTIVE_BUTTON.forEach((button) => keyButtons.forEach((key) => {
    if (key.classList.contains(button)) {
      key.classList.add('key-button_active');
    }
  }));
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

function updateKeyBoard(lang, size) {
  rowsWrapper.remove();
  buildKeyboard(lang, size);
}

function changeLanguage() {
  if (language === 'en') {
    language = 'ua';
  } else language = 'en';
  updateKeyBoard(language, letterSize);
}

function checkSize() {
  if (ACTIVE_BUTTON.has('CapsLock')) {
    letterSize = 'caps';
    updateKeyBoard(language, letterSize);
    return;
  }
  if (ACTIVE_BUTTON.has('AltLeft') || ACTIVE_BUTTON.has('AltRight')) {
    letterSize = 'option';
    updateKeyBoard(language, letterSize);
    return;
  }
  if (ACTIVE_BUTTON.has('ShiftLeft') || ACTIVE_BUTTON.has('ShiftRight')) {
    letterSize = 'shift';
    updateKeyBoard(language, letterSize);
  }
}

document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('key-button')) {
    ACTIVE_BUTTON.add(event.target.classList[1]);
    textarea.focus();
    if (event.target.classList.contains('ShiftLeft') || event.target.classList.contains('ShiftRight')) {
      letterSize = 'shift';
      updateKeyBoard(language, letterSize);
      return;
    }
    if (event.target.classList.contains('AltLeft') || event.target.classList.contains('AltRight')) {
      letterSize = 'option';
      updateKeyBoard(language, letterSize);
      return;
    }
    if (event.target.classList.contains('CapsLock') && letterSize !== 'caps') {
      letterSize = 'caps';
      updateKeyBoard(language, letterSize);
      return;
    }
    if (letterSize === 'caps' && event.target.classList.contains('CapsLock')) {
      if (ACTIVE_BUTTON.has('ShiftLeft') || ACTIVE_BUTTON.has('ShiftRight') || ACTIVE_BUTTON.has('AltLeft') || ACTIVE_BUTTON.has('AltRight')) {
        checkSize();
        return;
      }
      letterSize = 'default';
      ACTIVE_BUTTON.delete(event.target.classList[1]);
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
    ACTIVE_BUTTON.delete(event.target.classList[1]);
    textarea.focus();
    textarea.setSelectionRange(textareaPosition, textareaPosition);
    if (event.target.classList.contains('ShiftRight') || event.target.classList.contains('ShiftLeft')) {
      if (ACTIVE_BUTTON.has('CapsLock') || ACTIVE_BUTTON.has('AltLeft') || ACTIVE_BUTTON.has('AltRight')) {
        checkSize();
        return;
      }
      letterSize = 'default';
      updateKeyBoard(language, letterSize);
    }
    if (event.target.classList.contains('AltRight') || event.target.classList.contains('AltLeft')) {
      if (ACTIVE_BUTTON.has('ShiftLeft') || ACTIVE_BUTTON.has('ShiftRight') || ACTIVE_BUTTON.has('CapsLock')) {
        checkSize();
        return;
      }
      letterSize = 'default';
      updateKeyBoard(language, letterSize);
    }
  }
});

document.addEventListener('keydown', (event) => {
  ACTIVE_BUTTON.add(event.code);
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
        updateKeyBoard(language, letterSize);
        return;
      }
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        letterSize = 'shift';
        updateKeyBoard(language, letterSize);
        return;
      }
      if (event.code === 'Tab') {
        updateTextarea('    ', 4, 0);
        return;
      }
      if ((keyButtons[54].classList.contains('key-button_active') && event.code === 'MetaLeft') || (keyButtons[56].classList.contains('key-button_active') && event.code === 'ControlLeft')) {
        changeLanguage(event.code);
        return;
      }
      if (event.code === 'ControlLeft' || event.code === 'ControlRight' || event.code === 'MetaRight' || event.code === 'MetaLeft' || event.code === 'Backspace') {
        return;
      }
      if (event.code === 'AltLeft' || event.code === 'AltRight') {
        letterSize = 'option';
        updateKeyBoard(language, letterSize);
        return;
      }
      updateTextarea(keyButtons[i].textContent, 1, 0);
      return;
    }
  }
});

document.addEventListener('keyup', (event) => {
  ACTIVE_BUTTON.delete(event.code);
  event.preventDefault();
  for (let i = 0; i < keyButtons.length; i += 1) {
    if (keyButtons[i].classList.contains(event.code)) {
      keyButtons[i].classList.remove('key-button_active');
      if (event.code === 'CapsLock') {
        if (ACTIVE_BUTTON.has('ShiftLeft') || ACTIVE_BUTTON.has('ShiftRight') || ACTIVE_BUTTON.has('AltLeft') || ACTIVE_BUTTON.has('AltRight')) {
          checkSize();
          return;
        }
        letterSize = 'default';
        updateKeyBoard(language, letterSize);
        return;
      }
      if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        if (ACTIVE_BUTTON.has('CapsLock') || ACTIVE_BUTTON.has('AltLeft') || ACTIVE_BUTTON.has('AltRight')) {
          checkSize();
          return;
        }
        letterSize = 'default';
        updateKeyBoard(language, letterSize);
        return;
      }
      if (event.code === 'AltLeft' || event.code === 'AltRight') {
        if (ACTIVE_BUTTON.has('ShiftLeft') || ACTIVE_BUTTON.has('ShiftRight') || ACTIVE_BUTTON.has('CapsLock')) {
          checkSize();
          return;
        }
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
    changeLanguage();
  }
}
window.addEventListener('load', getLocalStorage);
