# Linked List
A linked list is a data structure that consists of a sequence of elements, each of which contains a reference (or "link") to the next element in the sequence. The first element is called the head and the last element is called the tail. 

### Types of linked list  
- Singly Linked List: Every node contains some data and a pointer to the next node of the same data type. The node contains a pointer to the next node means that the node stores the address of the next node in the sequence. A single linked list allows the traversal of data only in one way.
- Doubly or Two Way Linked List: A doubly linked list or a two-way linked list is a more complex type of linked list that contains a pointer to the next as well as the previous node in sequence, Therefore, it contains three parts of data, a pointer to the next node, and a pointer to the previous node. This would enable us to traverse the list in the backward direction as well.
- Circular Linked List: A circular linked list is one in which the last node contains the pointer to the first node of the list. While traversing a circular linked list, one can begin at any node and traverse the list in any direction forward and backward until reaching the same node where it started. Thus, a circular linked list has no beginning and no end.
- Circular Doubly Linked List: A Doubly Circular linked list or a circular two-way linked list is a more complex type of linked-list that contains a pointer to the next as well as the previous node in the sequence. The difference between the doubly linked and circular doubly list is the same as that between a singly linked list and a circular linked list. The circular doubly linked list does not contain null in the previous field of the first node.
- Header Linked List: A header linked list is a linked with additional header node which stores the extra information about the linked list.

### Applications of linked list  
- Image viewer – Previous and next images are linked and can be accessed by the next and previous buttons.
- Previous and next page in a web browser – We can access the previous and next URL searched in a web browser by pressing the back and next buttons since they are linked as a linked list.
- Music Player – Songs in the music player are linked to the previous and next songs. So you can play songs either from starting or ending of the list.
- GPS navigation systems- Linked lists can be used to store and manage a list of locations and routes, allowing users to easily navigate to their desired destination.
- Robotics- Linked lists can be used to implement control systems for robots, allowing them to navigate and interact with their environment.
- Task Scheduling- Operating systems use linked lists to manage task scheduling, where each process waiting to be executed is represented as a node in the list.  

### Advantages of linked list   
- Dynamic data structure: A linked list is a dynamic arrangement so it can grow and shrink at runtime by allocating and deallocating memory. So there is no need to give the initial size of the linked list.
- No memory wastage: In the Linked list, efficient memory utilization can be achieved since the size of the linked list increase or decrease at run time so there is no memory wastage and there is no need to pre-allocate the memory.
- Implementation: Linear data structures like stacks and queues are often easily implemented using a linked list.
- Insertion and Deletion Operations: Insertion and deletion operations are quite easier in the linked list. There is no need to shift elements after the insertion or deletion of an element only the address present in the next pointer needs to be updated. 
- Flexible: This is because the elements in Linked List  are not stored in contiguous memory locations unlike the array.
- Efficient for large data: When working with large datasets linked lists play a crucial role as it can grow and shrink dynamically.
- Scalability: Contains the ability to add or remove elements at any position.  

### disadvantages of linked list  
- Memory usage: More memory is required in the linked list as compared to an array. Because in a linked list, a pointer is also required to store the address of the next element and it requires extra memory for itself.
- Traversal: In a Linked list traversal is more time-consuming as compared to an array. Direct access to an element is not possible in a linked list as in an array by index. For example, for accessing a node at position n, one has to traverse all the nodes before it.
- Reverse Traversing: In a singly linked list reverse traversing is not possible, but in the case of a doubly-linked list, it can be possible as it contains a pointer to the previously connected nodes with each node. For performing this extra memory is required for the back pointer hence, there is a wastage of memory.
- Random Access: Random access is not possible in a linked list due to its dynamic memory allocation.
- Lower efficiency at times: For certain operations, such as searching for an element or iterating through the list, can be slower in a linked list.
- Complex implementation:  The linked list implementation is more complex when compared to array. It requires a complex programming understanding.
- Difficult to share data: This is because it is not possible to directly access the memory address of an element in a linked list.
- Not suited for small dataset: Cannot provide any significant benefits on small dataset compare to that of an array.

