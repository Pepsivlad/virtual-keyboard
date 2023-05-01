import readFileSync from 'fs';

const keys = JSON.parse(readFileSync('./betterKeys.json'));

const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', '<p>Операционная система: Windows</p>');
body.insertAdjacentHTML('afterbegin', '<p>Комбинация для переключения языка: левыe ctrl + alt</p>');
body.insertAdjacentHTML('afterbegin', '<div class="keyboard"></div>');
body.insertAdjacentHTML('afterbegin', '<textarea rows="2" columns="15" class="textarea"></textarea>');
body.insertAdjacentHTML('afterbegin', '<h1>RSS Virtual Keyboard</h1>');
const keyboard = body.querySelector('.keyboard');
const textarea = body.querySelector('.textarea');

let lang = 'eng';

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
      this.curr = this[lang].lowerCase;
      if (event.code === this.key) {
        this.elem.classList.add('active');
        if (!this.specialKey) {
          textarea.value += this.curr;
        }
      }
    });

    body.addEventListener('keyup', (event) => {
      if (event.code === this.key) {
        this.elem.classList.remove('active');
      }
    });

    this.elem.addEventListener('mousedown', (event) => {
      const cursor = textarea.selectionEnd;
      this.elem.classList.add('active');
      event.preventDefault();
      textarea.focus();
      if (!this.specialKey) {
        textarea.value += this.curr;
        textarea.selectionEnd = cursor + 1;
      }
    });

    this.elem.addEventListener('mouseup', () => {
      this.elem.classList.remove('active');
    });

    this.elem.addEventListener('mouseout', () => {
      this.elem.classList.remove('active');
    });
  }
}

keys.forEach((x) => new Key(x));

body.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (event.altKey && event.ctrlKey) {
    lang = (lang === 'rus' ? 'eng' : 'rus');
  }
});
