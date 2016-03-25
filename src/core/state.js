'use strict';

class State {

  constructor(name) {
    this.name = name;
  }

  isTerminal() {

  }

  utility() {

  }

  actions() {

  }

  toString() {
    return '[State: ' + this.name + ']';
  }

}

module.exports = State;
