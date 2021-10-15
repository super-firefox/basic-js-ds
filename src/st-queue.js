const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
module.exports = class Queue {
  constructor(){
    this.queue = null;
    this.size = 0;
  }
  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if(this.size === 0){
      this.queue = new ListNode(value);
    } else {
      let currentQueue = this.queue;
      for(let i = 0; i < this.size-1; i++){
        currentQueue = currentQueue.next;
      }
      currentQueue.next = new ListNode(value);
    }
    this.size++;
  }

  dequeue() {
    let headQueue = this.queue.value;
    this.queue = this.queue.next;
    this.size--;
    return headQueue;
  }
}
