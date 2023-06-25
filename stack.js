class Stack {
  constructor() {
    this.items = [];
  }

  // Pushes an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Pops and returns the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Returns true if the stack is empty, false otherwise
  isEmpty() {
    return this.items.length === 0;
  }
}

// Example usage:
let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());  // Output: 30
console.log(stack.pop());  // Output: 20
console.log(stack.isEmpty());  // Output: false
console.log(stack.pop());  // Output: 10
console.log(stack.isEmpty());  // Output: true
console.log(stack.pop());  // Output: "Stack is empty"
