# Queue
A Queue is defined as a linear data structure that is open at both ends and the operations are performed in First In First Out (FIFO) order.  

### FIFO Principle of Queue:
- A Queue is like a line waiting to purchase tickets, where the first person in line is the first person served. (i.e. First come first serve).
- Position of the entry in a queue ready to be served, that is, the first entry that will be removed from the queue, is called the front of the queue(sometimes, head of the queue), similarly, the position of the last entry in the queue, that is, the one most recently added, is called the rear (or the tail) of the queue. See the below figure.   

### Characteristics of Queue:
- Queue can handle multiple data.
- We can access both ends.
- They are fast and flexible.

### Applications of Queue
- CPU scheduling- to keep track of processes for the CPU
- Handling website traffic - by implementing a virtual HTTP request queue
- Printer Spooling - to store print jobs
- In routers - to control how network packets are transmitted or discarded
- Traffic management - traffic signals use queues to manage intersections

### Advantages of Queue  
- A large amount of data can be managed efficiently with ease.
- Operations such as insertion and deletion can be performed with ease as it follows the first in first out rule.
- Queues are useful when a particular service is used by multiple consumers.
- Queues are fast in speed for data inter-process communication.
- Queues can be used in the implementation of other data structures.   

### Disadvantages of queue
- The operations such as insertion and deletion of elements from the middle are time consuming.
- Limited Space.
- In a classical queue, a new element can only be inserted when the existing elements are deleted from the queue.
- Searching an element takes O(N) time.
- Maximum size of a queue must be defined prior.
