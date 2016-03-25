'use strict';

function min() {
  const actions = Array.prototype.slice.call(arguments);

  return actions.reduce(function (previous, current) {
    if (current.utility() < previous.utility()) {
      return current;
    }

    return previous;

  }, actions[0]);
}

class Minimax {

  constructor() {
  }

  decide(/*state*/) {
    return {};
  }

  maxValue(state) {
    return state;
  }

  minValue(state) {
    const actions = state.actions();
    const length = actions.length;

    var i = 1;

    if (length === 0) {
      return state;
    }

    var v = actions[0].apply();

    for (i = 1; i < length; i++) {
      const next = actions[i].apply();

      console.log('looking at next:', next.toString(), 'current is', v.toString());

      v = min(v, this.maxValue(next));
    }

    return v;
  }

}

module.exports = Minimax;

