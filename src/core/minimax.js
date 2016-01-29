'use strict';

function action(name, utility) {
  return { action: name, utility: utility };
}

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

  maxValue(/*state*/) {
    return 0;
  }

  minValue(state) {
    if (this._terminationFn(state)) {
      return action(null, this._utilityFn(state));
    }

    return { action: {}, utility: {} };
  }

}

module.exports = Minimax;

