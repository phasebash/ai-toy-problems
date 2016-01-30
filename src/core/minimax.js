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

  maxValue(state) {
    return state;
  }

  minValue(state) {
    if (this._terminationFn(state)) {
      return action(null, this._utilityFn(state));
    }

    var v = action({}, {});

    /*
    this._actionFn(state).forEach((action) => {
      const next = this._transitionFn(state, action);

      v = min(v, this.maxValue(next));
    });
    */

    return v;
  }

}

module.exports = Minimax;

