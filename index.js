const keys = [
  {
    key: 'Backquote',
    rus: {
      lowerCase: 'ё',
      shift: 'Ё',
      caps: 'Ё',
      shiftCaps: 'ё',
    },
    eng: {
      lowerCase: '`',
      shift: '~',
      caps: '`',
      shiftCaps: '~',
    },
  },
  {
    key: 'Digit1',
    rus: {
      lowerCase: '1',
      shift: '!',
      caps: '1',
      shiftCaps: '!',
    },
    eng: {
      lowerCase: '1',
      shift: '!',
      caps: '1',
      shiftCaps: '!',
    },
  },
  {
    key: 'Digit2',
    rus: {
      lowerCase: '2',
      shift: '"',
      caps: '2',
      shiftCaps: '"',
    },
    eng: {
      lowerCase: '2',
      shift: '@',
      caps: '2',
      shiftCaps: '@',
    },
  },
  {
    key: 'Digit3',
    rus: {
      lowerCase: '3',
      shift: '№',
      caps: '3',
      shiftCaps: '№',
    },
    eng: {
      lowerCase: '3',
      shift: '#',
      caps: '3',
      shiftCaps: '#',
    },
  },
  {
    key: 'Digit4',
    rus: {
      lowerCase: '4',
      shift: ';',
      caps: '4',
      shiftCaps: ';',
    },
    eng: {
      lowerCase: '4',
      shift: '$',
      caps: '4',
      shiftCaps: '$',
    },
  },
  {
    key: 'Digit5',
    rus: {
      lowerCase: '5',
      shift: '%',
      caps: '5',
      shiftCaps: '%',
    },
    eng: {
      lowerCase: '5',
      shift: '%',
      caps: '5',
      shiftCaps: '%',
    },
  },
  {
    key: 'Digit6',
    rus: {
      lowerCase: '6',
      shift: ':',
      caps: '6',
      shiftCaps: ':',
    },
    eng: {
      lowerCase: '6',
      shift: '^',
      caps: '6',
      shiftCaps: '^',
    },
  },
  {
    key: 'Digit7',
    rus: {
      lowerCase: '7',
      shift: '?',
      caps: '7',
      shiftCaps: '?',
    },
    eng: {
      lowerCase: '7',
      shift: '&',
      caps: '7',
      shiftCaps: '&',
    },
  },
  {
    key: 'Digit8',
    rus: {
      lowerCase: '8',
      shift: '*',
      caps: '8',
      shiftCaps: '*',
    },
    eng: {
      lowerCase: '8',
      shift: '*',
      caps: '8',
      shiftCaps: '*',
    },
  },
  {
    key: 'Digit9',
    rus: {
      lowerCase: '9',
      shift: '(',
      caps: '9',
      shiftCaps: '(',
    },
    eng: {
      lowerCase: '9',
      shift: '(',
      caps: '9',
      shiftCaps: '(',
    },
  },
  {
    key: 'Digit0',
    rus: {
      lowerCase: '0',
      shift: ')',
      caps: '0',
      shiftCaps: ')',
    },
    eng: {
      lowerCase: '0',
      shift: ')',
      caps: '0',
      shiftCaps: ')',
    },
  },
  {
    key: 'Minus',
    rus: {
      lowerCase: '-',
      shift: '_',
      caps: '-',
      shiftCaps: '_',
    },
    eng: {
      lowerCase: '-',
      shift: '_',
      caps: '-',
      shiftCaps: '_',
    },
  },
  {
    key: 'Equal',
    rus: {
      lowerCase: '=',
      shift: '+',
      caps: '=',
      shiftCaps: '+',
    },
    eng: {
      lowerCase: '=',
      shift: '+',
      caps: '=',
      shiftCaps: '+',
    },
  },
  {
    key: 'Backspace',
    rus: {
      lowerCase: 'Backspace',
      shift: 'Backspace',
      caps: 'Backspace',
      shiftCaps: 'Backspace',
    },
    eng: {
      lowerCase: 'Backspace',
      shift: 'Backspace',
      caps: 'Backspace',
      shiftCaps: 'Backspace',
    },
    specialKey: true,
  },
  {
    key: 'Tab',
    rus: {
      lowerCase: 'Tab',
      shift: 'Tab',
      caps: 'Tab',
      shiftCaps: 'Tab',
    },
    eng: {
      lowerCase: 'Tab',
      shift: 'Tab',
      caps: 'Tab',
      shiftCaps: 'Tab',
    },
    specialKey: true,
  },
  {
    key: 'KeyQ',
    rus: {
      lowerCase: 'й',
      shift: 'Й',
      caps: 'Й',
      shiftCaps: 'й',
    },
    eng: {
      lowerCase: 'q',
      shift: 'Q',
      caps: 'Q',
      shiftCaps: 'q',
    },
  },
  {
    key: 'KeyW',
    rus: {
      lowerCase: 'ц',
      shift: 'Ц',
      caps: 'Ц',
      shiftCaps: 'ц',
    },
    eng: {
      lowerCase: 'w',
      shift: 'W',
      caps: 'W',
      shiftCaps: 'w',
    },
  },
  {
    key: 'KeyE',
    rus: {
      lowerCase: 'у',
      shift: 'У',
      caps: 'У',
      shiftCaps: 'у',
    },
    eng: {
      lowerCase: 'e',
      shift: 'E',
      caps: 'E',
      shiftCaps: 'e',
    },
  },
  {
    key: 'KeyR',
    rus: {
      lowerCase: 'к',
      shift: 'К',
      caps: 'К',
      shiftCaps: 'к',
    },
    eng: {
      lowerCase: 'r',
      shift: 'R',
      caps: 'R',
      shiftCaps: 'r',
    },
  },
  {
    key: 'KeyT',
    rus: {
      lowerCase: 'е',
      shift: 'Е',
      caps: 'Е',
      shiftCaps: 'е',
    },
    eng: {
      lowerCase: 't',
      shift: 'T',
      caps: 'T',
      shiftCaps: 't',
    },
  },
  {
    key: 'KeyY',
    rus: {
      lowerCase: 'н',
      shift: 'Н',
      caps: 'Н',
      shiftCaps: 'н',
    },
    eng: {
      lowerCase: 'y',
      shift: 'Y',
      caps: 'Y',
      shiftCaps: 'y',
    },
  },
  {
    key: 'KeyU',
    rus: {
      lowerCase: 'г',
      shift: 'Г',
      caps: 'Г',
      shiftCaps: 'г',
    },
    eng: {
      lowerCase: 'u',
      shift: 'U',
      caps: 'U',
      shiftCaps: 'u',
    },
  },
  {
    key: 'KeyI',
    rus: {
      lowerCase: 'ш',
      shift: 'Ш',
      caps: 'Ш',
      shiftCaps: 'ш',
    },
    eng: {
      lowerCase: 'i',
      shift: 'I',
      caps: 'I',
      shiftCaps: 'i',
    },
  },
  {
    key: 'KeyO',
    rus: {
      lowerCase: 'щ',
      shift: 'Щ',
      caps: 'Щ',
      shiftCaps: 'щ',
    },
    eng: {
      lowerCase: 'o',
      shift: 'O',
      caps: 'O',
      shiftCaps: 'o',
    },
  },
  {
    key: 'KeyP',
    rus: {
      lowerCase: 'з',
      shift: 'З',
      caps: 'З',
      shiftCaps: 'з',
    },
    eng: {
      lowerCase: 'p',
      shift: 'P',
      caps: 'P',
      shiftCaps: 'p',
    },
  },
  {
    key: 'BracketLeft',
    rus: {
      lowerCase: 'х',
      shift: 'Х',
      caps: 'Х',
      shiftCaps: 'х',
    },
    eng: {
      lowerCase: '[',
      shift: '{',
      caps: '[',
      shiftCaps: '{',
    },
  },
  {
    key: 'BracketRight',
    rus: {
      lowerCase: 'ъ',
      shift: 'Ъ',
      caps: 'Ъ',
      shiftCaps: 'ъ',
    },
    eng: {
      lowerCase: ']',
      shift: '}',
      caps: ']',
      shiftCaps: '}',
    },
  },
  {
    key: 'Backslash',
    rus: {
      lowerCase: '\\',
      shift: '/',
      caps: '\\',
      shiftCaps: '/',
    },
    eng: {
      lowerCase: '\\',
      shift: '|',
      caps: '\\',
      shiftCaps: '|',
    },
  },
  {
    key: 'Delete',
    rus: {
      lowerCase: 'Del',
      shift: 'Del',
      caps: 'Del',
      shiftCaps: 'Del',
    },
    eng: {
      lowerCase: 'Del',
      shift: 'Del',
      caps: 'Del',
      shiftCaps: 'Del',
    },
    specialKey: true,
  },
  {
    key: 'CapsLock',
    rus: {
      lowerCase: 'CapsLock',
      shift: 'CapsLock',
      caps: 'CapsLock',
      shiftCaps: 'CapsLock',
    },
    eng: {
      lowerCase: 'CapsLock',
      shift: 'CapsLock',
      caps: 'CapsLock',
      shiftCaps: 'CapsLock',
    },
    specialKey: true,
  },
  {
    key: 'KeyA',
    rus: {
      lowerCase: 'ф',
      shift: 'Ф',
      caps: 'Ф',
      shiftCaps: 'ф',
    },
    eng: {
      lowerCase: 'a',
      shift: 'A',
      caps: 'A',
      shiftCaps: 'a',
    },
  },
  {
    key: 'KeyS',
    rus: {
      lowerCase: 'ы',
      shift: 'Ы',
      caps: 'Ы',
      shiftCaps: 'ы',
    },
    eng: {
      lowerCase: 's',
      shift: 'S',
      caps: 'S',
      shiftCaps: 's',
    },
  },
  {
    key: 'KeyD',
    rus: {
      lowerCase: 'в',
      shift: 'В',
      caps: 'В',
      shiftCaps: 'в',
    },
    eng: {
      lowerCase: 'd',
      shift: 'D',
      caps: 'D',
      shiftCaps: 'd',
    },
  },
  {
    key: 'KeyF',
    rus: {
      lowerCase: 'а',
      shift: 'А',
      caps: 'А',
      shiftCaps: 'а',
    },
    eng: {
      lowerCase: 'f',
      shift: 'F',
      caps: 'F',
      shiftCaps: 'f',
    },
  },
  {
    key: 'KeyG',
    rus: {
      lowerCase: 'п',
      shift: 'П',
      caps: 'П',
      shiftCaps: 'п',
    },
    eng: {
      lowerCase: 'g',
      shift: 'G',
      caps: 'G',
      shiftCaps: 'g',
    },
  },
  {
    key: 'KeyH',
    rus: {
      lowerCase: 'р',
      shift: 'Р',
      caps: 'Р',
      shiftCaps: 'р',
    },
    eng: {
      lowerCase: 'h',
      shift: 'H',
      caps: 'H',
      shiftCaps: 'h',
    },
  },
  {
    key: 'KeyJ',
    rus: {
      lowerCase: 'о',
      shift: 'О',
      caps: 'О',
      shiftCaps: 'о',
    },
    eng: {
      lowerCase: 'j',
      shift: 'J',
      caps: 'J',
      shiftCaps: 'j',
    },
  },
  {
    key: 'KeyK',
    rus: {
      lowerCase: 'л',
      shift: 'Л',
      caps: 'Л',
      shiftCaps: 'л',
    },
    eng: {
      lowerCase: 'k',
      shift: 'K',
      caps: 'K',
      shiftCaps: 'k',
    },
  },
  {
    key: 'KeyL',
    rus: {
      lowerCase: 'д',
      shift: 'Д',
      caps: 'Д',
      shiftCaps: 'д',
    },
    eng: {
      lowerCase: 'l',
      shift: 'L',
      caps: 'L',
      shiftCaps: 'l',
    },
  },
  {
    key: 'Semicolon',
    rus: {
      lowerCase: 'ж',
      shift: 'Ж',
      caps: 'Ж',
      shiftCaps: 'ж',
    },
    eng: {
      lowerCase: ';',
      shift: ':',
      caps: ';',
      shiftCaps: ':',
    },
  },
  {
    key: 'Quote',
    rus: {
      lowerCase: 'э',
      shift: 'Э',
      caps: 'Э',
      shiftCaps: 'э',
    },
    eng: {
      lowerCase: "'",
      shift: '"',
      caps: "'",
      shiftCaps: '"',
    },
  },
  {
    key: 'Enter',
    rus: {
      lowerCase: 'Enter',
      shift: 'Enter',
      caps: 'Enter',
      shiftCaps: 'Enter',
    },
    eng: {
      lowerCase: 'Enter',
      shift: 'Enter',
      caps: 'Enter',
      shiftCaps: 'Enter',
    },
    specialKey: true,
  },
  {
    key: 'ShiftLeft',
    rus: {
      lowerCase: 'Shift',
      shift: 'Shift',
      caps: 'Shift',
      shiftCaps: 'Shift',
    },
    eng: {
      lowerCase: 'Shift',
      shift: 'Shift',
      caps: 'Shift',
      shiftCaps: 'Shift',
    },
    specialKey: true,
  },
  {
    key: 'KeyZ',
    rus: {
      lowerCase: 'я',
      shift: 'Я',
      caps: 'Я',
      shiftCaps: 'я',
    },
    eng: {
      lowerCase: 'z',
      shift: 'Z',
      caps: 'Z',
      shiftCaps: 'z',
    },
  },
  {
    key: 'KeyX',
    rus: {
      lowerCase: 'ч',
      shift: 'Ч',
      caps: 'Ч',
      shiftCaps: 'ч',
    },
    eng: {
      lowerCase: 'x',
      shift: 'X',
      caps: 'X',
      shiftCaps: 'x',
    },
  },
  {
    key: 'KeyC',
    rus: {
      lowerCase: 'с',
      shift: 'С',
      caps: 'С',
      shiftCaps: 'с',
    },
    eng: {
      lowerCase: 'c',
      shift: 'C',
      caps: 'C',
      shiftCaps: 'c',
    },
  },
  {
    key: 'KeyV',
    rus: {
      lowerCase: 'м',
      shift: 'М',
      caps: 'М',
      shiftCaps: 'м',
    },
    eng: {
      lowerCase: 'v',
      shift: 'V',
      caps: 'V',
      shiftCaps: 'v',
    },
  },
  {
    key: 'KeyB',
    rus: {
      lowerCase: 'и',
      shift: 'И',
      caps: 'И',
      shiftCaps: 'и',
    },
    eng: {
      lowerCase: 'b',
      shift: 'B',
      caps: 'B',
      shiftCaps: 'b',
    },
  },
  {
    key: 'KeyN',
    rus: {
      lowerCase: 'т',
      shift: 'Т',
      caps: 'Т',
      shiftCaps: 'т',
    },
    eng: {
      lowerCase: 'n',
      shift: 'N',
      caps: 'N',
      shiftCaps: 'n',
    },
  },
  {
    key: 'KeyM',
    rus: {
      lowerCase: 'ь',
      shift: 'Ь',
      caps: 'Ь',
      shiftCaps: 'ь',
    },
    eng: {
      lowerCase: 'm',
      shift: 'M',
      caps: 'M',
      shiftCaps: 'm',
    },
  },
  {
    key: 'Comma',
    rus: {
      lowerCase: 'б',
      shift: 'Б',
      caps: 'Б',
      shiftCaps: 'б',
    },
    eng: {
      lowerCase: ',',
      shift: '<',
      caps: ',',
      shiftCaps: '<',
    },
  },
  {
    key: 'Period',
    rus: {
      lowerCase: 'ю',
      shift: 'Ю',
      caps: 'Ю',
      shiftCaps: 'ю',
    },
    eng: {
      lowerCase: '.',
      shift: '>',
      caps: '.',
      shiftCaps: '>',
    },
  },
  {
    key: 'Slash',
    rus: {
      lowerCase: '.',
      shift: ',',
      caps: '.',
      shiftCaps: ',',
    },
    eng: {
      lowerCase: '/',
      shift: '?',
      caps: '/',
      shiftCaps: '?',
    },
  },
  {
    key: 'ArrowUp',
    rus: {
      lowerCase: '▲',
      shift: '▲',
      caps: '▲',
      shiftCaps: '▲',
    },
    eng: {
      lowerCase: '▲',
      shift: '▲',
      caps: '▲',
      shiftCaps: '▲',
    },
  },
  {
    key: 'ShiftRight',
    rus: {
      lowerCase: 'Shift',
      shift: 'Shift',
      caps: 'Shift',
      shiftCaps: 'Shift',
    },
    eng: {
      lowerCase: 'Shift',
      shift: 'Shift',
      caps: 'Shift',
      shiftCaps: 'Shift',
    },
    specialKey: true,
  },
  {
    key: 'ControlLeft',
    rus: {
      lowerCase: 'Ctrl',
      shift: 'Ctrl',
      caps: 'Ctrl',
      shiftCaps: 'Ctrl',
    },
    eng: {
      lowerCase: 'Ctrl',
      shift: 'Ctrl',
      caps: 'Ctrl',
      shiftCaps: 'Ctrl',
    },
    specialKey: true,
  },
  {
    key: 'MetaLeft',
    rus: {
      lowerCase: 'Win',
      shift: 'Win',
      caps: 'Win',
      shiftCaps: 'Win',
    },
    eng: {
      lowerCase: 'Win',
      shift: 'Win',
      caps: 'Win',
      shiftCaps: 'Win',
    },
    specialKey: true,
  },
  {
    key: 'AltLeft',
    rus: {
      lowerCase: 'Alt',
      shift: 'Alt',
      caps: 'Alt',
      shiftCaps: 'Alt',
    },
    eng: {
      lowerCase: 'Alt',
      shift: 'Alt',
      caps: 'Alt',
      shiftCaps: 'Alt',
    },
    specialKey: true,
  },
  {
    key: 'Space',
    rus: {
      lowerCase: ' ',
      shift: ' ',
      caps: ' ',
      shiftCaps: ' ',
    },
    eng: {
      lowerCase: ' ',
      shift: ' ',
      caps: ' ',
      shiftCaps: ' ',
    },
  },
  {
    key: 'AltRight',
    rus: {
      lowerCase: 'Alt',
      shift: 'Alt',
      caps: 'Alt',
      shiftCaps: 'Alt',
    },
    eng: {
      lowerCase: 'Alt',
      shift: 'Alt',
      caps: 'Alt',
      shiftCaps: 'Alt',
    },
    specialKey: true,
  },
  {
    key: 'ArrowLeft',
    rus: {
      lowerCase: '◄',
      shift: '◄',
      caps: '◄',
      shiftCaps: '◄',
    },
    eng: {
      lowerCase: '◄',
      shift: '◄',
      caps: '◄',
      shiftCaps: '◄',
    },
  },
  {
    key: 'ArrowDown',
    rus: {
      lowerCase: '▼',
      shift: '▼',
      caps: '▼',
      shiftCaps: '▼',
    },
    eng: {
      lowerCase: '▼',
      shift: '▼',
      caps: '▼',
      shiftCaps: '▼',
    },
  },
  {
    key: 'ArrowRight',
    rus: {
      lowerCase: '►',
      shift: '►',
      caps: '►',
      shiftCaps: '►',
    },
    eng: {
      lowerCase: '►',
      shift: '►',
      caps: '►',
      shiftCaps: '►',
    },
  },
  {
    key: 'ControlRight',
    rus: {
      lowerCase: 'Ctrl',
      shift: 'Ctrl',
      caps: 'Ctrl',
      shiftCaps: 'Ctrl',
    },
    eng: {
      lowerCase: 'Ctrl',
      shift: 'Ctrl',
      caps: 'Ctrl',
      shiftCaps: 'Ctrl',
    },
    specialKey: true,
  },
];

let lang = localStorage.getItem('lang');
if (!lang || lang === 0 || lang === '0') {
  lang = 'eng';
}
window.addEventListener('beforeunload', () => localStorage.setItem('lang', lang));

const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', '<p>Операционная система: Windows</p>');
body.insertAdjacentHTML('afterbegin', '<p>Комбинация для переключения языка: левыe ctrl + alt</p>');
body.insertAdjacentHTML('afterbegin', '<div class="keyboard"></div>');
body.insertAdjacentHTML('afterbegin', '<textarea rows="2" columns="15" class="textarea"></textarea>');
body.insertAdjacentHTML('afterbegin', '<h1>RSS Virtual Keyboard</h1>');
const keyboard = body.querySelector('.keyboard');
const textarea = body.querySelector('.textarea');

const allKeys = [];
let currState = 'lowerCase';

class Key {
  constructor(obj) {
    Object.assign(this, obj);
    this.curr = this[lang].lowerCase;
    this.createKey();
    this.createEvents();
  }

  createKey() {
    keyboard.insertAdjacentHTML('beforeend', `<div class="key ${this.key}"><span class="key__text">${this[lang].lowerCase}</span></div>`);
    this.elem = keyboard.querySelector(`.${this.key}`);
  }

  createEvents() {
    body.addEventListener('keydown', (event) => {
      if (event.code === this.key) {
        this.elem.classList.add('active');
        if (!this.specialKey) {
          this.changeText();
        } else {
          this.useSpecialKey();
        }
      }
    });

    body.addEventListener('keyup', (event) => {
      if (event.code === this.key && (!(event.code === 'CapsLock') || currState === 'lowerCase' || currState === 'shift')) {
        this.elem.classList.remove('active');
      }
    });

    this.elem.addEventListener('mousedown', (event) => {
      this.elem.classList.add('active');
      event.preventDefault();
      textarea.focus();
      if (!this.specialKey) {
        this.changeText();
      } else if (this.key === 'CapsLock' && !(event.shiftKey)) {
        currState = (currState === 'caps' ? 'lowerCase' : 'caps');
        allKeys.forEach((x) => {
          document.querySelector(`.${x.key}`).children[0].innerText = x[lang][currState];
        });
      } else if (this.key === 'CapsLock') {
        currState = 'shiftCaps';
        allKeys.forEach((x) => {
          document.querySelector(`.${x.key}`).children[0].innerText = x[lang][currState];
        });
      } else if (this.eng.lowerCase === 'Shift') {
        currState = (currState === 'caps') ? 'shiftCaps' : 'shift';
        allKeys.forEach((x) => {
          document.querySelector(`.${x.key}`).children[0].innerText = x[lang][currState];
        });
      }
      if (this.specialKey) {
        this.useSpecialKey();
      }
    });

    this.elem.addEventListener('mouseup', () => {
      if (!(this.key === 'CapsLock') || currState === 'lowerCase' || currState === 'shift') {
        this.elem.classList.remove('active');
      }
      if (this.eng.lowerCase === 'Shift') {
        currState = (currState === 'shiftCaps') ? 'caps' : 'lowerCase';
        allKeys.forEach((x) => {
          document.querySelector(`.${x.key}`).children[0].innerText = x[lang][currState];
        });
      }
    });

    this.elem.addEventListener('mouseout', () => {
      if (!(this.key === 'CapsLock')) {
        this.elem.classList.remove('active');
      }
    });
  }

  changeText(text = this[lang][currState], backspace = 0, del = 0) {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const finText = textarea.value.substring(0, start - backspace)
                    + text
                    + textarea.value.substring(end + del);
    textarea.value = finText;
    textarea.selectionEnd = end + text.length - backspace;
  }

  useSpecialKey() {
    if (this.key === 'Tab') {
      this.changeText('    ');
    } else if (this.key === 'Backspace') {
      this.changeText('', 1);
    } else if (this.key === 'Delete') {
      this.changeText('', 0, 1);
    } else if (this.key === 'Enter') {
      this.changeText('\n');
    }
  }
}

keys.forEach((x) => allKeys.push(new Key(x)));

body.addEventListener('keydown', (event) => {
  event.preventDefault();
  let somethingChanged = false;
  if (event.shiftKey) {
    if (currState === 'shiftCaps' && event.code !== 'CapsLock') {
      currState = 'shiftCaps';
    } else if (currState === 'shift' && event.code === 'CapsLock') {
      currState = 'shiftCaps';
    } else {
      currState = (currState === 'caps') ? 'shiftCaps' : 'shift';
    }
    somethingChanged = true;
  } else if (event.code === 'CapsLock') {
    currState = (currState === 'caps' ? 'lowerCase' : 'caps');
    somethingChanged = true;
  }
  if (event.altKey && event.ctrlKey) {
    lang = (lang === 'rus' ? 'eng' : 'rus');
    somethingChanged = true;
  }
  if (somethingChanged) {
    allKeys.forEach((x) => {
      document.querySelector(`.${x.key}`).children[0].innerText = x[lang][currState];
    });
  }
});

body.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    currState = (currState === 'shiftCaps') ? 'caps' : 'lowerCase';
  }
  allKeys.forEach((x) => {
    document.querySelector(`.${x.key}`).children[0].innerText = x[lang][currState];
  });
});
