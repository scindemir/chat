(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const LoginWindow = require('./ui/loginWindow');
const MainWindow = require('./ui/mainWindow');
const UserName = require('./ui/userName');

module.exports = class {
  constructor() {
    this.ui = {
      loginWindow: new LoginWindow(
        document.querySelector('#login'),
        this.onLogin.bind(this)
      ),
      mainWindow: new MainWindow(
        document.querySelector('#main'),
        this.onLogin.bind(this)
      ),
      userName: new UserName(
        document.querySelector('[data-role=user-name]'),
        this.onLogin.bind(this)
      ),
    };

    this.ui.loginWindow.show();
  }

  async onLogin(name) {
    this.ui.loginWindow.hide();
    this.ui.mainWindow.show();
    this.ui.userName.set(name);
  }
}

},{"./ui/loginWindow":3,"./ui/mainWindow":4,"./ui/userName":5}],2:[function(require,module,exports){
const Chat = require('./chat');

new Chat();

},{"./chat":1}],3:[function(require,module,exports){
module.exports =  class {
  constructor(element, onLogin) {
    this.element = element;
    this.onLogin = onLogin;

    const loginNameInput = element.querySelector('[data-role=login-name-input]');
    const submitButton = element.querySelector('[data-role=login-submit]');
    const loginError = element.querySelector('[data-role=login-error]');

    submitButton.addEventListener('click', () => {
      loginError.textContent = '';

      const name = loginNameInput.value.trim();

      if (!name) {
        loginError.textContent = "Enter your nickname";
      } else {
        this.onLogin(name);
      }
    });
  }

  show() {
    this.element.classList.remove('hidden');
  }

  hide() {
    this.element.classList.add('hidden');
  }
}
},{}],4:[function(require,module,exports){
module.exports = class {
  constructor(element) {
    this.element = element;
  }

  show() {
    this.element.classList.remove('hidden');
  }

  hide() {
    this.element.classList.add('hidden');
  }
}
},{}],5:[function(require,module,exports){
module.exports = class {
  constructor(element) {
    this.element = element;
  }

  set(name) {
    this.name = name;
    this.element.textContent = name;
  }

  get() {
    return this.name;
  }
}
},{}]},{},[2]);
