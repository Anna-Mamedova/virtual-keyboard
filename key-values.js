const KEY_VALUES = [
  [
    {
      code: 'Backquote',
      ua: {
        default: "'",
        shift: '~',
        caps: "'",
      },
      en: {
        default: '`',
        shift: '~',
        caps: '`',
      },
    },
    {
      code: 'Digit1',
      ua: {
        default: '1',
        shift: '!',
        caps: '1',
      },
      en: {
        default: '1',
        shift: '!',
        caps: '1',
      },
    },
    {
      code: 'Digit2',
      ua: {
        default: '2',
        shift: '"',
        caps: '2',
      },
      en: {
        default: '2',
        shift: '@',
        caps: '2',
      },
    },
    {
      code: 'Digit3',
      ua: {
        default: '3',
        shift: '№',
        caps: '3',
      },
      en: {
        default: '3',
        shift: '#',
        caps: '3',
      },
    },
    {
      code: 'Digit4',
      ua: {
        default: '4',
        shift: '%',
        caps: '4',
      },
      en: {
        default: '4',
        shift: '$',
        caps: '4',
      },
    },
    {
      code: 'Digit5',
      ua: {
        default: '5',
        shift: ':',
        caps: '5',
      },
      en: {
        default: '5',
        shift: '%',
        caps: '5',
      },
    },
    {
      code: 'Digit6',
      ua: {
        default: '6',
        shift: ',',
        caps: '6',
      },
      en: {
        default: '6',
        shift: '^',
        caps: '6',
      },
    },
    {
      code: 'Digit7',
      ua: {
        default: '7',
        shift: '.',
        caps: '7',
      },
      en: {
        default: '7',
        shift: '&',
        caps: '17',
      },
    },
    {
      code: 'Digit8',
      ua: {
        default: '8',
        shift: ';',
        caps: '8',
      },
      en: {
        default: '8',
        shift: '*',
        caps: '8',
      },
    },
    {
      code: 'Digit9',
      ua: {
        default: '9',
        shift: '(',
        caps: '9',
      },
      en: {
        default: '9',
        shift: '(',
        caps: '9',
      },
    },
    {
      code: 'Digit0',
      ua: {
        default: '0',
        shift: ')',
        caps: '0',
      },
      en: {
        default: '0',
        shift: ')',
        caps: '0',
      },
    },
    {
      code: 'Minus',
      ua: {
        default: '-',
        shift: '_',
        caps: '-',
      },
      en: {
        default: '-',
        shift: '_',
        caps: '-',
      },
    },
    {
      code: 'Equal',
      ua: {
        default: '=',
        shift: '+',
        caps: '=',
      },
      en: {
        default: '=',
        shift: '+',
        caps: '=',
      },
    },
    {
      code: 'Backspace',
      ua: {
        default: 'delete',
        shift: 'delete',
        caps: 'delete',
      },
      en: {
        default: 'delete',
        shift: 'delete',
        caps: 'delete',
      },
    },
  ],
  [
    {
      code: 'Tab',
      ua: {
        default: 'tab',
        shift: 'tab',
        caps: 'tab',
      },
      en: {
        default: 'tab',
        shift: 'tab',
        caps: 'tab',
      },
    },
    {
      code: 'KeyQ',
      ua: {
        default: 'й',
        shift: 'Й',
        caps: 'Й',
      },
      en: {
        default: 'q',
        shift: 'Q',
        caps: 'Q',
      },
    },
    {
      code: 'KeyW',
      ua: {
        default: 'ц',
        shift: 'Ц',
        caps: 'Ц',
      },
      en: {
        default: 'w',
        shift: 'W',
        caps: 'W',
      },
    },
    {
      code: 'KeyE',
      ua: {
        default: 'у',
        shift: 'У',
        caps: 'У',
      },
      en: {
        default: 'e',
        shift: 'E',
        caps: 'E',
      },
    },
    {
      code: 'KeyR',
      ua: {
        default: 'к',
        shift: 'К',
        caps: 'К',
      },
      en: {
        default: 'r',
        shift: 'R',
        caps: 'R',
      },
    },
    {
      code: 'KeyT',
      ua: {
        default: 'е',
        shift: 'Е',
        caps: 'Е',
      },
      en: {
        default: 't',
        shift: 'T',
        caps: 'T',
      },
    },
    {
      code: 'KeyY',
      ua: {
        default: 'н',
        shift: 'Н',
        caps: 'Н',
      },
      en: {
        default: 'y',
        shift: 'Y',
        caps: 'Y',
      },
    },
    {
      code: 'KeyU',
      ua: {
        default: 'г',
        shift: 'Г',
        caps: 'Г',
      },
      en: {
        default: 'u',
        shift: 'U',
        caps: 'U',
      },
    },
    {
      code: 'KeyI',
      ua: {
        default: 'ш',
        shift: 'Ш',
        caps: 'Ш',
      },
      en: {
        default: 'i',
        shift: 'I',
        caps: 'I',
      },
    },
    {
      code: 'KeyO',
      ua: {
        default: 'щ',
        shift: 'Щ',
        caps: 'Щ',
      },
      en: {
        default: 'o',
        shift: 'O',
        caps: 'O',
      },
    },
    {
      code: 'KeyP',
      ua: {
        default: 'з',
        shift: 'З',
        caps: 'З',
      },
      en: {
        default: 'p',
        shift: 'P',
        caps: 'P',
      },
    },
    {
      code: 'BracketLeft',
      ua: {
        default: 'х',
        shift: 'Х',
        caps: 'Х',
      },
      en: {
        default: '[',
        shift: '{',
        caps: '[',
      },
    },
    {
      code: 'BracketRight',
      ua: {
        default: 'ї',
        shift: 'Ї',
        caps: 'Ї',
      },
      en: {
        default: ']',
        shift: '}',
        caps: ']',
      },
    },
    {
      code: 'Backslash',
      ua: {
        default: 'ґ',
        shift: 'Ґ',
        caps: 'Ґ',
      },
      en: {
        default: '\\',
        shift: '|',
        caps: '\\',
      },
    },
  ],
  [
    {
      code: 'CapsLock',
      ua: {
        default: 'caps lock',
        shift: 'caps lock',
        caps: 'caps lock',
      },
      en: {
        default: 'caps lock',
        shift: 'caps lock',
        caps: 'caps lock',
      },
    },
    {
      code: 'KeyA',
      ua: {
        default: 'ф',
        shift: 'Ф',
        caps: 'Ф',
      },
      en: {
        default: 'a',
        shift: 'A',
        caps: 'A',
      },
    },
    {
      code: 'KeyS',
      ua: {
        default: 'и',
        shift: 'И',
        caps: 'И',
      },
      en: {
        default: 's',
        shift: 'S',
        caps: 'S',
      },
    },
    {
      code: 'KeyD',
      ua: {
        default: 'в',
        shift: 'В',
        caps: 'В',
      },
      en: {
        default: 'd',
        shift: 'D',
        caps: 'D',
      },
    },
    {
      code: 'KeyF',
      ua: {
        default: 'а',
        shift: 'А',
        caps: 'А',
      },
      en: {
        default: 'f',
        shift: 'F',
        caps: 'F',
      },
    },
    {
      code: 'KeyG',
      ua: {
        default: 'п',
        shift: 'П',
        caps: 'П',
      },
      en: {
        default: 'g',
        shift: 'G',
        caps: 'G',
      },
    },
    {
      code: 'KeyH',
      ua: {
        default: 'р',
        shift: 'Р',
        caps: 'Р',
      },
      en: {
        default: 'h',
        shift: 'H',
        caps: 'H',
      },
    },
    {
      code: 'KeyJ',
      ua: {
        default: 'о',
        shift: 'О',
        caps: 'О',
      },
      en: {
        default: 'j',
        shift: 'J',
        caps: 'J',
      },
    },
    {
      code: 'KeyK',
      ua: {
        default: 'л',
        shift: 'Л',
        caps: 'Л',
      },
      en: {
        default: 'k',
        shift: 'K',
        caps: 'K',
      },
    },
    {
      code: 'KeyL',
      ua: {
        default: 'д',
        shift: 'Д',
        caps: 'Д',
      },
      en: {
        default: 'l',
        shift: 'L',
        caps: 'L',
      },
    },
    {
      code: 'Semicolon',
      ua: {
        default: 'ж',
        shift: 'Ж',
        caps: 'Ж',
      },
      en: {
        default: ';',
        shift: ':',
        caps: ';',
      },
    },
    {
      code: 'Quote',
      ua: {
        default: 'є',
        shift: 'Є',
        caps: 'Є',
      },
      en: {
        default: "'",
        shift: '"',
        caps: "'",
      },
    },
    {
      code: 'Enter',
      ua: {
        default: 'return',
        shift: 'return',
        caps: 'return',
      },
      en: {
        default: 'return',
        shift: 'return',
        caps: 'return',
      },
    },
  ],
  [
    {
      code: 'ShiftLeft',
      ua: {
        default: 'shift',
        shift: 'shift',
        caps: 'shift',
      },
      en: {
        default: 'shift',
        shift: 'shift',
        caps: 'shift',
      },
    },
    {
      code: 'KeyZ',
      ua: {
        default: 'я',
        shift: 'Я',
        caps: 'Я',
      },
      en: {
        default: 'z',
        shift: 'Z',
        caps: 'Z',
      },
    },
    {
      code: 'KeyX',
      ua: {
        default: 'ч',
        shift: 'Ч',
        caps: 'Ч',
      },
      en: {
        default: 'x',
        shift: 'X',
        caps: 'X',
      },
    },
    {
      code: 'KeyC',
      ua: {
        default: 'с',
        shift: 'С',
        caps: 'С',
      },
      en: {
        default: 'c',
        shift: 'C',
        caps: 'C',
      },
    },
    {
      code: 'KeyV',
      ua: {
        default: 'м',
        shift: 'М',
        caps: 'М',
      },
      en: {
        default: 'v',
        shift: 'V',
        caps: 'V',
      },
    },
    {
      code: 'KeyB',
      ua: {
        default: 'і',
        shift: 'І',
        caps: 'І',
      },
      en: {
        default: 'b',
        shift: 'B',
        caps: 'B',
      },
    },
    {
      code: 'KeyN',
      ua: {
        default: 'т',
        shift: 'Т',
        caps: 'Т',
      },
      en: {
        default: 'n',
        shift: 'N',
        caps: 'N',
      },
    },
    {
      code: 'KeyM',
      ua: {
        default: 'ь',
        shift: 'Ь',
        caps: 'Ь',
      },
      en: {
        default: 'm',
        shift: 'M',
        caps: 'M',
      },
    },
    {
      code: 'Comma',
      ua: {
        default: 'б',
        shift: 'Б',
        caps: 'Б',
      },
      en: {
        default: ',',
        shift: '<',
        caps: ',',
      },
    },
    {
      code: 'Period',
      ua: {
        default: 'ю',
        shift: 'Ю',
        caps: 'Ю',
      },
      en: {
        default: '.',
        shift: '>',
        caps: '.',
      },
    },
    {
      code: 'Slash',
      ua: {
        default: '/',
        shift: '?',
        caps: '/',
      },
      en: {
        default: '/',
        shift: '?',
        caps: '/',
      },
    },
    {
      code: 'ArrowUp',
      ua: {
        default: '▲',
        shift: '▲',
        caps: '▲',
      },
      en: {
        default: '▲',
        shift: '▲',
        caps: '▲',
      },
    },
    {
      code: 'ShiftRight',
      ua: {
        default: 'shift',
        shift: 'shift',
        caps: 'shift',
      },
      en: {
        default: 'shift',
        shift: 'shift',
        caps: 'shift',
      },
    },
  ],
  [
    {
      code: 'ControlLeft',
      ua: {
        default: 'control',
        shift: 'control',
        caps: 'control',
      },
      en: {
        default: 'control',
        shift: 'control',
        caps: 'control',
      },
    },
    {
      code: 'AltLeft',
      ua: {
        default: 'option',
        shift: 'option',
        caps: 'option',
      },
      en: {
        default: 'option',
        shift: 'option',
        caps: 'option',
      },
    },
    {
      code: 'MetaLeft',
      ua: {
        default: 'command',
        shift: 'command',
        caps: 'command',
      },
      en: {
        default: 'command',
        shift: 'command',
        caps: 'command',
      },
    },
    {
      code: 'Space',
      ua: {
        default: ' ',
        shift: ' ',
        caps: ' ',
      },
      en: {
        default: ' ',
        shift: ' ',
        caps: ' ',
      },
    },
    {
      code: 'MetaRight',
      ua: {
        default: 'command',
        shift: 'command',
        caps: 'command',
      },
      en: {
        default: 'command',
        shift: 'command',
        caps: 'command',
      },
    },
    {
      code: 'AltRight',
      ua: {
        default: 'option',
        shift: 'option',
        caps: 'option',
      },
      en: {
        default: 'option',
        shift: 'option',
        caps: 'option',
      },
    },
    {
      code: 'ArrowLeft',
      ua: {
        default: '◀',
        shift: '◀',
        caps: '◀',
      },
      en: {
        default: '◀',
        shift: '◀',
        caps: '◀',
      },
    },
    {
      code: 'ArrowDown',
      ua: {
        default: '▼',
        shift: '▼',
        caps: '▼',
      },
      en: {
        default: '▼',
        shift: '▼',
        caps: '▼',
      },
    },
    {
      code: 'ArrowRight',
      ua: {
        default: '▶',
        shift: '▶',
        caps: '▶',
      },
      en: {
        default: '▶',
        shift: '▶',
        caps: '▶',
      },
    },
  ],
];

export default KEY_VALUES;
