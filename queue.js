class Queue {
    constructor() {
      this.items = [];
    }
  
    // Adds an element to the end of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Removes and returns the front element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.items.shift();
    }
  
    // Returns true if the queue is empty, false otherwise
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Example usage:
  let queue = new Queue();
  
  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);
  
  console.log(queue.dequeue());  // Output: 10
  console.log(queue.dequeue());  // Output: 20
  console.log(queue.isEmpty());  // Output: false
  console.log(queue.dequeue());  // Output: 30
  console.log(queue.isEmpty());  // Output: true
  console.log(queue.dequeue());  // Output: "Queue is empty"
  