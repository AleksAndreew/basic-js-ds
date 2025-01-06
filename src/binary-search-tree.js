const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.base = null;
  }
  root() {
    return this.base;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.base) {
      this.base = newNode;
      return;
    }
    this._addNode(this.base, newNode);
  }

  _addNode(node, newNode) {
    const direction = newNode.data < node.data ? 'left' : 'right';
    if (!node[direction]) {
      node[direction] = newNode;
    } else {
      this._addNode(node[direction], newNode);
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return this._findNode(this.base, data);
  }

  _findNode = (node, data) => {
    if (!node) return null;
    if (node.data === data) {
      return node;
    }
    return data < node.data
        ? this._findNode(node.left, data)
        : this._findNode(node.right, data);
  };

  remove(data) {
    this.base = this._removeNode(this.base, data);
  }

  _removeNode = (node, data) => {
    if (!node) return null;
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      const minNode = this._findMinNode(node.right);
      node.data = minNode.data;
      node.right = this._removeNode(node.right, minNode.data);
    }
    return node;
  };

  min() {
    const minNode = this._findMinNode(this.base);
    return minNode ? minNode.data : null;
  }

  _findMinNode(node) {
    return node.left === null
        ? node
        : this._findMinNode(node.left);
  }

  max() {
    if (this.base === null) {
      return null;
    }
    let node = this.base;
    while (node.right !== null) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};