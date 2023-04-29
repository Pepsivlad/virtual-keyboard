import keys from './betterKeys.json' assert {type: 'json'} 

const body = document.querySelector('body');
body.insertAdjacentHTML('afterbegin', '<div class="keyboard"></div>');
let lang = 'eng';

class Key {

  constructor(obj) {
    Object.assign(this, obj);
    this.createKey();
  }

  createKey() {
    const keyboard = body.querySelector('.keyboard');
    keyboard.insertAdjacentHTML('beforeend', `<span class="key ${this.key}">${this[lang].lowerCase}<span>`)
  }

}

keys.forEach(x => new Key(x));