'use strict';

function min() {
  const states = Array.prototype.slice.call(arguments);

  return states.reduce(function (previous, current) {
    if (current.utility() < previous.utility()) {
      return current;
    }

    return previous;

  }, states[0]);
}

function max() {
  const states = Array.prototype.slice.call(arguments);

  return states.reduce(function (previous, current) {
    if (current.utility() > previous.utility()) {
      return current;
    }

    return previous;

  }, states[0]);
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
    var targetState = actions[0].apply();

    for (i = 1; i < length; i++) {
      const next = actions[i].apply();

      targetState = max(targetState, this.minValue(next));
    }

    return targetState;
  }

  minValue(state) {
    const actions = state.actions();
    const length = actions.length;

    var i = 1;

    if (length === 0) {
      return state;
    }

    var targetState = actions[0].apply();

    for (i = 1; i < length; i++) {
      const next = actions[i].apply();

      targetState = min(targetState, this.maxValue(next));
    }

    return targetState;
  }

}

module.exports = Minimax;

