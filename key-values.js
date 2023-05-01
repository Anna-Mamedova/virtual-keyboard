const KEY_VALUES = [
  [
    {
      code: 'Backquote',
      ua: {
        default: "'",
        shift: '~',
        caps: "'",
        option: ']',
      },
      en: {
        default: '`',
        shift: '~',
        caps: '`',
        option: '`',
      },
    },
    {
      code: 'Digit1',
      ua: {
        default: '1',
        shift: '!',
        caps: '1',
        option: '!',
      },
      en: {
        default: '1',
        shift: '!',
        caps: '1',
        option: '¡',
      },
    },
    {
      code: 'Digit2',
      ua: {
        default: '2',
        shift: '"',
        caps: '2',
        option: '@',
      },
      en: {
        default: '2',
        shift: '@',
        caps: '2',
        option: '™',
      },
    },
    {
      code: 'Digit3',
      ua: {
        default: '3',
        shift: '№',
        caps: '3',
        option: '#',
      },
      en: {
        default: '3',
        shift: '#',
        caps: '3',
        option: '£',
      },
    },
    {
      code: 'Digit4',
      ua: {
        default: '4',
        shift: '%',
        caps: '4',
        option: '$',
      },
      en: {
        default: '4',
        shift: '$',
        caps: '4',
        option: '¢',
      },
    },
    {
      code: 'Digit5',
      ua: {
        default: '5',
        shift: ':',
        caps: '5',
        option: '%',
      },
      en: {
        default: '5',
        shift: '%',
        caps: '5',
        option: '∞',
      },
    },
    {
      code: 'Digit6',
      ua: {
        default: '6',
        shift: ',',
        caps: '6',
        option: '^',
      },
      en: {
        default: '6',
        shift: '^',
        caps: '6',
        option: '§',
      },
    },
    {
      code: 'Digit7',
      ua: {
        default: '7',
        shift: '.',
        caps: '7',
        option: '&',
      },
      en: {
        default: '7',
        shift: '&',
        caps: '7',
        option: '¶',
      },
    },
    {
      code: 'Digit8',
      ua: {
        default: '8',
        shift: ';',
        caps: '8',
        option: '*',
      },
      en: {
        default: '8',
        shift: '*',
        caps: '8',
        option: '•',
      },
    },
    {
      code: 'Digit9',
      ua: {
        default: '9',
        shift: '(',
        caps: '9',
        option: '(',
      },
      en: {
        default: '9',
        shift: '(',
        caps: '9',
        option: 'ª',
      },
    },
    {
      code: 'Digit0',
      ua: {
        default: '0',
        shift: ')',
        caps: '0',
        option: ')',
      },
      en: {
        default: '0',
        shift: ')',
        caps: '0',
        option: 'º',
      },
    },
    {
      code: 'Minus',
      ua: {
        default: '-',
        shift: '_',
        caps: '-',
        option: '–',
      },
      en: {
        default: '-',
        shift: '_',
        caps: '-',
        option: '–',
      },
    },
    {
      code: 'Equal',
      ua: {
        default: '=',
        shift: '+',
        caps: '=',
        option: '»',
      },
      en: {
        default: '=',
        shift: '+',
        caps: '=',
        option: '≠',
      },
    },
    {
      code: 'Backspace',
      ua: {
        default: 'delete',
        shift: 'delete',
        caps: 'delete',
        option: 'delete',
      },
      en: {
        default: 'delete',
        shift: 'delete',
        caps: 'delete',
        option: 'delete',
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
        option: 'tab',
      },
      en: {
        default: 'tab',
        shift: 'tab',
        caps: 'tab',
        option: 'tab',
      },
    },
    {
      code: 'KeyQ',
      ua: {
        default: 'й',
        shift: 'Й',
        caps: 'Й',
        option: 'ј',
      },
      en: {
        default: 'q',
        shift: 'Q',
        caps: 'Q',
        option: 'œ',
      },
    },
    {
      code: 'KeyW',
      ua: {
        default: 'ц',
        shift: 'Ц',
        caps: 'Ц',
        option: 'џ',
      },
      en: {
        default: 'w',
        shift: 'W',
        caps: 'W',
        option: '∑',
      },
    },
    {
      code: 'KeyE',
      ua: {
        default: 'у',
        shift: 'У',
        caps: 'У',
        option: 'ќ',
      },
      en: {
        default: 'e',
        shift: 'E',
        caps: 'E',
        option: '´',
      },
    },
    {
      code: 'KeyR',
      ua: {
        default: 'к',
        shift: 'К',
        caps: 'К',
        option: '®',
      },
      en: {
        default: 'r',
        shift: 'R',
        caps: 'R',
        option: '®',
      },
    },
    {
      code: 'KeyT',
      ua: {
        default: 'е',
        shift: 'Е',
        caps: 'Е',
        option: '†',
      },
      en: {
        default: 't',
        shift: 'T',
        caps: 'T',
        option: '†',
      },
    },
    {
      code: 'KeyY',
      ua: {
        default: 'н',
        shift: 'Н',
        caps: 'Н',
        option: 'њ',
      },
      en: {
        default: 'y',
        shift: 'Y',
        caps: 'Y',
        option: '¥',
      },
    },
    {
      code: 'KeyU',
      ua: {
        default: 'г',
        shift: 'Г',
        caps: 'Г',
        option: 'ѓ',
      },
      en: {
        default: 'u',
        shift: 'U',
        caps: 'U',
        option: '¨',
      },
    },
    {
      code: 'KeyI',
      ua: {
        default: 'ш',
        shift: 'Ш',
        caps: 'Ш',
        option: 'ѕ',
      },
      en: {
        default: 'i',
        shift: 'I',
        caps: 'I',
        option: 'ˆ',
      },
    },
    {
      code: 'KeyO',
      ua: {
        default: 'щ',
        shift: 'Щ',
        caps: 'Щ',
        option: 'ў',
      },
      en: {
        default: 'o',
        shift: 'O',
        caps: 'O',
        option: 'ø',
      },
    },
    {
      code: 'KeyP',
      ua: {
        default: 'з',
        shift: 'З',
        caps: 'З',
        option: '‘',
      },
      en: {
        default: 'p',
        shift: 'P',
        caps: 'P',
        option: 'π',
      },
    },
    {
      code: 'BracketLeft',
      ua: {
        default: 'х',
        shift: 'Х',
        caps: 'Х',
        option: '“',
      },
      en: {
        default: '[',
        shift: '{',
        caps: '[',
        option: '“',
      },
    },
    {
      code: 'BracketRight',
      ua: {
        default: 'ї',
        shift: 'Ї',
        caps: 'Ї',
        option: 'ъ',
      },
      en: {
        default: ']',
        shift: '}',
        caps: ']',
        option: '‘',
      },
    },
    {
      code: 'Backslash',
      ua: {
        default: 'ґ',
        shift: 'Ґ',
        caps: 'Ґ',
        option: 'ё',
      },
      en: {
        default: '\\',
        shift: '|',
        caps: '\\',
        option: '«',
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
        option: 'caps lock',
      },
      en: {
        default: 'caps lock',
        shift: 'caps lock',
        caps: 'caps lock',
        option: 'caps lock',
      },
    },
    {
      code: 'KeyA',
      ua: {
        default: 'ф',
        shift: 'Ф',
        caps: 'Ф',
        option: 'ƒ',
      },
      en: {
        default: 'a',
        shift: 'A',
        caps: 'A',
        option: 'å',
      },
    },
    {
      code: 'KeyS',
      ua: {
        default: 'и',
        shift: 'И',
        caps: 'И',
        option: 'ы',
      },
      en: {
        default: 's',
        shift: 'S',
        caps: 'S',
        option: 'ß',
      },
    },
    {
      code: 'KeyD',
      ua: {
        default: 'в',
        shift: 'В',
        caps: 'В',
        option: 'ћ',
      },
      en: {
        default: 'd',
        shift: 'D',
        caps: 'D',
        option: '∂',
      },
    },
    {
      code: 'KeyF',
      ua: {
        default: 'а',
        shift: 'А',
        caps: 'А',
        option: '÷',
      },
      en: {
        default: 'f',
        shift: 'F',
        caps: 'F',
        option: 'ƒ',
      },
    },
    {
      code: 'KeyG',
      ua: {
        default: 'п',
        shift: 'П',
        caps: 'П',
        option: '©',
      },
      en: {
        default: 'g',
        shift: 'G',
        caps: 'G',
        option: '©',
      },
    },
    {
      code: 'KeyH',
      ua: {
        default: 'р',
        shift: 'Р',
        caps: 'Р',
        option: '}',
      },
      en: {
        default: 'h',
        shift: 'H',
        caps: 'H',
        option: '˙',
      },
    },
    {
      code: 'KeyJ',
      ua: {
        default: 'о',
        shift: 'О',
        caps: 'О',
        option: '°',
      },
      en: {
        default: 'j',
        shift: 'J',
        caps: 'J',
        option: '∆',
      },
    },
    {
      code: 'KeyK',
      ua: {
        default: 'л',
        shift: 'Л',
        caps: 'Л',
        option: 'љ',
      },
      en: {
        default: 'k',
        shift: 'K',
        caps: 'K',
        option: '˚',
      },
    },
    {
      code: 'KeyL',
      ua: {
        default: 'д',
        shift: 'Д',
        caps: 'Д',
        option: '∆',
      },
      en: {
        default: 'l',
        shift: 'L',
        caps: 'L',
        option: '¬',
      },
    },
    {
      code: 'Semicolon',
      ua: {
        default: 'ж',
        shift: 'Ж',
        caps: 'Ж',
        option: '…',
      },
      en: {
        default: ';',
        shift: ':',
        caps: ';',
        option: '…',
      },
    },
    {
      code: 'Quote',
      ua: {
        default: 'є',
        shift: 'Є',
        caps: 'Є',
        option: 'э',
      },
      en: {
        default: "'",
        shift: '"',
        caps: "'",
        option: 'æ',
      },
    },
    {
      code: 'Enter',
      ua: {
        default: 'return',
        shift: 'return',
        caps: 'return',
        option: 'return',
      },
      en: {
        default: 'return',
        shift: 'return',
        caps: 'return',
        option: 'return',
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
        option: 'shift',
      },
      en: {
        default: 'shift',
        shift: 'shift',
        caps: 'shift',
        option: 'shift',
      },
    },
    {
      code: 'KeyZ',
      ua: {
        default: 'я',
        shift: 'Я',
        caps: 'Я',
        option: 'я',
      },
      en: {
        default: 'z',
        shift: 'Z',
        caps: 'Z',
        option: 'z',
      },
    },
    {
      code: 'KeyX',
      ua: {
        default: 'ч',
        shift: 'Ч',
        caps: 'Ч',
        option: '≈',
      },
      en: {
        default: 'x',
        shift: 'X',
        caps: 'X',
        option: '≈',
      },
    },
    {
      code: 'KeyC',
      ua: {
        default: 'с',
        shift: 'С',
        caps: 'С',
        option: '≠',
      },
      en: {
        default: 'c',
        shift: 'C',
        caps: 'C',
        option: 'ç',
      },
    },
    {
      code: 'KeyV',
      ua: {
        default: 'м',
        shift: 'М',
        caps: 'М',
        option: 'µ',
      },
      en: {
        default: 'v',
        shift: 'V',
        caps: 'V',
        option: '√',
      },
    },
    {
      code: 'KeyB',
      ua: {
        default: 'і',
        shift: 'І',
        caps: 'І',
        option: 'и',
      },
      en: {
        default: 'b',
        shift: 'B',
        caps: 'B',
        option: '∫',
      },
    },
    {
      code: 'KeyN',
      ua: {
        default: 'т',
        shift: 'Т',
        caps: 'Т',
        option: '™',
      },
      en: {
        default: 'n',
        shift: 'N',
        caps: 'N',
        option: '˜',
      },
    },
    {
      code: 'KeyM',
      ua: {
        default: 'ь',
        shift: 'Ь',
        caps: 'Ь',
        option: '~',
      },
      en: {
        default: 'm',
        shift: 'M',
        caps: 'M',
        option: 'µ',
      },
    },
    {
      code: 'Comma',
      ua: {
        default: 'б',
        shift: 'Б',
        caps: 'Б',
        option: '≤',
      },
      en: {
        default: ',',
        shift: '<',
        caps: ',',
        option: '≤',
      },
    },
    {
      code: 'Period',
      ua: {
        default: 'ю',
        shift: 'Ю',
        caps: 'Ю',
        option: '≥',
      },
      en: {
        default: '.',
        shift: '>',
        caps: '.',
        option: '≥',
      },
    },
    {
      code: 'Slash',
      ua: {
        default: '/',
        shift: '?',
        caps: '/',
        option: '“',
      },
      en: {
        default: '/',
        shift: '?',
        caps: '/',
        option: '÷',
      },
    },
    {
      code: 'ArrowUp',
      ua: {
        default: '▲',
        shift: '▲',
        caps: '▲',
        option: '▲',
      },
      en: {
        default: '▲',
        shift: '▲',
        caps: '▲',
        option: '▲',
      },
    },
    {
      code: 'ShiftRight',
      ua: {
        default: 'shift',
        shift: 'shift',
        caps: 'shift',
        option: 'shift',
      },
      en: {
        default: 'shift',
        shift: 'shift',
        caps: 'shift',
        option: 'shift',
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
        option: 'control',
      },
      en: {
        default: 'control',
        shift: 'control',
        caps: 'control',
        option: 'control',
      },
    },
    {
      code: 'AltLeft',
      ua: {
        default: 'option',
        shift: 'option',
        caps: 'option',
        option: 'option',
      },
      en: {
        default: 'option',
        shift: 'option',
        caps: 'option',
        option: 'option',
      },
    },
    {
      code: 'MetaLeft',
      ua: {
        default: 'command',
        shift: 'command',
        caps: 'command',
        option: 'command',
      },
      en: {
        default: 'command',
        shift: 'command',
        caps: 'command',
        option: 'command',
      },
    },
    {
      code: 'Space',
      ua: {
        default: ' ',
        shift: ' ',
        caps: ' ',
        option: ' ',
      },
      en: {
        default: ' ',
        shift: ' ',
        caps: ' ',
        option: ' ',
      },
    },
    {
      code: 'MetaRight',
      ua: {
        default: 'command',
        shift: 'command',
        caps: 'command',
        option: 'command',
      },
      en: {
        default: 'command',
        shift: 'command',
        caps: 'command',
        option: 'command',
      },
    },
    {
      code: 'AltRight',
      ua: {
        default: 'option',
        shift: 'option',
        caps: 'option',
        option: 'option',
      },
      en: {
        default: 'option',
        shift: 'option',
        caps: 'option',
        option: 'option',
      },
    },
    {
      code: 'ArrowLeft',
      ua: {
        default: '◀',
        shift: '◀',
        caps: '◀',
        option: '◀',
      },
      en: {
        default: '◀',
        shift: '◀',
        caps: '◀',
        option: '◀',
      },
    },
    {
      code: 'ArrowDown',
      ua: {
        default: '▼',
        shift: '▼',
        caps: '▼',
        option: '▼',
      },
      en: {
        default: '▼',
        shift: '▼',
        caps: '▼',
        option: '▼',
      },
    },
    {
      code: 'ArrowRight',
      ua: {
        default: '▶',
        shift: '▶',
        caps: '▶',
        option: '▶',
      },
      en: {
        default: '▶',
        shift: '▶',
        caps: '▶',
        option: '▶',
      },
    },
  ],
];

export default KEY_VALUES;
