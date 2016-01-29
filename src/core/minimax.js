'use strict';

class Minimax {

  constructor(actionFn, transitionFn, terminationFn, utilityFn) {
    this._actionFn      = actionFn;
    this._transitionFn  = transitionFn;
    this._terminationFn = terminationFn;
    this._utilityFn     = utilityFn;
  }

  decide(/*state*/) {
    return {};
  }
}

module.exports = Minimax;

