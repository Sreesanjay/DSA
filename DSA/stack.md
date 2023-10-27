# Stack
a stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. It means that the last element added to the stack is the first one to be removed. Stacks can be thought of as a collection of elements with two main operations.  
- Push: This operation is used to add an element to the top of the stack. It is similar to placing an item on top of a stack of books.

- Pop: This operation is used to remove the top element from the stack. It's similar to taking the top book from the stack.

- Peek (or Top): This operation allows you to view the top element of the stack without removing it.

### Applications of Stack
- Function Call Stack: Stacks are used to keep track of function calls in most programming languages. When a function is called, its context is pushed onto the stack, and when the function returns, its context is popped off the stack.

- Expression Evaluation: Stacks are used in evaluating expressions, especially mathematical expressions, by converting them from infix notation to postfix (or Reverse Polish Notation, RPN) and then evaluating the RPN expression using a stack.

- Undo Mechanisms: Stacks can be used to implement undo functionality in applications, where the state of the application at each step is pushed onto the stack, and the user can "pop" the stack to undo their actions.

- Browser History: Stacks are used to keep track of visited web pages in a browser's history.

- Backtracking Algorithms: Stacks can be used in backtracking algorithms, such as depth-first search in graph traversal.  

### Advantages of stack
- Easy implementation: Stack data structure is easy to implement using arrays or linked lists, and its operations are simple to understand and implement.
- Efficient memory utilization: Stack uses a contiguous block of memory, making it more efficient in memory utilization as compared to other data structures.
- Fast access time: Stack data structure provides fast access time for adding and removing elements as the elements are added and removed from the top of the stack.
- Helps in function calls: Stack data structure is used to store function calls and their states, which helps in the efficient implementation of recursive function calls.
- Supports backtracking: Stack data structure supports backtracking algorithms, which are used in problem-solving to explore all possible solutions by storing the previous states.
- Used in Compiler Design: Stack data structure is used in compiler design for parsing and syntax analysis of programming languages.
- Enables undo/redo operations: Stack data structure is used to enable undo and redo operations in various applications like text editors, graphic design tools, and software development environments.  

### Disadvantages  
- Limited capacity: Stack data structure has a limited capacity as it can only hold a fixed number of elements. If the stack becomes full, adding new elements may result in stack overflow, leading to the loss of data.
- No random access: Stack data structure does not allow for random access to its elements, and it only allows for adding and removing elements from the top of the stack. To access an element in the middle of the stack, all the elements above it must be removed.
- Memory management: Stack data structure uses a contiguous block of memory, which can result in memory fragmentation if elements are added and removed frequently.
- Not suitable for certain applications: Stack data structure is not suitable for applications that require accessing elements in the middle of the stack, like searching or sorting algorithms.
- Stack overflow and underflow: Stack data structure can result in stack overflow if too many elements are pushed onto the stack, and it can result in stack underflow if too many elements are popped from the stack.
- Recursive function calls limitations: While stack data structure supports recursive function calls, too many recursive function calls can lead to stack overflow, resulting in the termination of the program.



```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const poppedData = this.top.data;
    this.top = this.top.next;
    this.size--;
    return poppedData;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.data;
  }

  getSize() {
    return this.size;
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Peek:", stack.peek()); // Output: 3
console.log("Pop:", stack.pop());   // Output: 3
console.log("Stack size:", stack.getSize()); // Output: 2

```

