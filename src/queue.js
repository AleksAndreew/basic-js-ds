const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.base = null;
    this.end = null;
    this.length = 0;
  };

  getUnderlyingList() {
    return this.base;
  };

  enqueue(value) {
    const adds = { value, next: null };
    if (!this.base) {
      this.base = adds;
      this.end = adds;
    } else {
      this.end.next = adds;
      this.end = adds;
    };
  };

  dequeue() {
    let rem = this.base;
    this.base = rem.next;
    return rem.value;
  };
};


module.exports = {
  Queue
};
