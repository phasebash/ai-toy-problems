function* id() {
    var i = 0;

    while(true) {
        yield i++;
    }
}

const ids = id();

class Node {

  constructor(children) {
    this._id = ids.next().value;
    this._children = children;
  }

  get id() {
      return this._id;
  }

  * children() {
    for (var i in this._children) {
        yield this._children[i];
    }
  }
}

module.exports = Node;
