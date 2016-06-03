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

function max() {
  const actions = Array.prototype.slice.call(arguments);

  return actions.reduce(function (previous, current) {
    if (current.utility() > previous.utility()) {
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
    const actions = state.actions();
    const length = actions.length;

    if (length === 0) {
      return state;
    }

    var i;
    var v = actions[0].apply();

    for (i = 1; i < length; i++) {
      const next = actions[i].apply();

      v = max(v, this.minValue(next));
    }

    return v;
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

      v = min(v, this.maxValue(next));
    }

    return v;
  }

}

module.exports = Minimax;

