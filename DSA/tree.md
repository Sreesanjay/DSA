# Tree 
A tree data structure is a hierarchical structure that is used to represent and organize data in a way that is easy to navigate and search. It is a collection of nodes that are connected by edges and has a hierarchical relationship between the nodes.  
### Basic tree terminologies  
- Node  
Node represents an element or data point within the tree. Each node contains data and zero or more links (often called "child" links or references) to other nodes.  
- Root  
In a tree data structure, the "root" is the topmost node in the hierarchy, and it serves as the starting point for navigating the tree.   
- Parent and Child  
A "parent" node is a node in a tree that has one or more child nodes directly connected to it.  
A "child" node is a node in a tree that is directly connected to a parent node.
Child nodes are at a lower level in the hierarchy than their parent node.  
- Leaf  
In a tree data structure, a "leaf" (or "leaf node") is a node that has no child nodes  
- Sibling  
In a tree data structure, "siblings" are nodes that share the same parent node. Sibling nodes are at the same level in the hierarchy and have the same immediate ancestor.  
- Depth 
In a tree data structure, "depth" refers to the level or distance of a node from the root node. It is a measure of how deep a particular node is in the tree hierarchy.  
- Height  
The height of a node refers to the length of the longest path from that node to a leaf node in the tree. Height of the tree is the height of the root node. 

#### Applications of Tree  
- File Systems: The file system of a computer is often represented as a tree. Each folder or directory is a node in the tree, and files are the leaves.
- XML Parsing: Trees are used to parse and process XML documents. An XML document can be thought of as a tree, with elements as nodes and attributes as properties of the nodes.
- Database Indexing: Many databases use trees to index their data. The B-tree and its variations are commonly used for this purpose.
- Compiler Design: The syntax of programming languages is often defined using a tree structure called a parse tree. This is used by compilers to understand the structure of the code and generate machine code from it.
- Artificial Intelligence: Decision trees are often used in artificial intelligence to make decisions based on a series of criteria.  

#### Advantages of Tree 
- Efficient searching: Trees are particularly efficient for searching and retrieving data. The time complexity of searching in a tree is typically O(log n).  
- Flexible size: Trees can grow or shrink dynamically depending on the number of nodes that are added or removed. This makes them particularly useful for applications where the data size may change over time.  
- Easy to traverse: Traversing a tree is a simple operation, and it can be done in several different ways depending on the requirements of the application.   
- Easy to maintain: Trees are easy to maintain because they enforce a strict hierarchy and relationship between nodes.  

#### Disadvantages of Tree  
- Memory overhead: Trees can require a significant amount of memory to store, especially if they are very large. This can be a problem for applications that have limited memory resources.  
- Imbalanced trees: If a tree is not balanced, it can result in uneven search times.  
- Inefficient for certain operations: While trees are very efficient for searching and retrieving data, they are not as efficient for other operations like sorting or grouping. 
### Binary Tree  

A binary tree is a hierarchical data structure in computer science and mathematics. It consists of nodes connected by edges, with each node having at most two children, which are referred to as the left child and the right child. The topmost node in a binary tree is called the root, and it serves as the starting point for traversing the tree.  
- complete binary tree  :  a binary tree in which every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. 

### Binary Search Tree  
It is a type of binary tree in which each node has at most two child nodes, typically referred to as the "left" child and the "right" child. The key property of a binary search tree is that it maintains a specific order among its elements, making it suitable for efficient searching, insertion, and deletion operations.

Each node has a value (key), and for any given node:
- All nodes in its left subtree have values less than the node's value.
- All nodes in its right subtree have values greater than the node's value.  
#### Traversal
1. Depth First Search (DFS)  
Depth-first search algorithms first read all of the node values in a particular subtree. The subtree is traversed deeply, all the way to the bottom leaves, before moving on to the next subtree.  
- Inorder traversal  
In the In-order Traversal, the left subtree is visited first, followed by the Root node and finally the right subtree. A binary tree will provide sorted key values in  ascending order if it is traversed in-order.  

  > LEFT → ROOT → RIGHT  
  ```js
  function TreePreorder(node) {
    if (node == null) return;
    console.log(node.value)
    TreePreorder(node.left);
    TreePreorder(node.right);  
  }
  ```    
- Preorder traversal  
The Preorder tree traversal is a technique where the root node will be traversed first and then it will traverse the left subtree followed by the right subtree.  
  > ROOT → LEFT → RIGHT
  ```js
  function TreePreorder(node) {
    if (node == null) return;
    console.log(node.value)
    TreePreorder(node.left);
    TreePreorder(node.right);
  }
  ```
- Post order traversal  
In post order traversal the left node will traversed first and the right node will be traversed and finally the root node will be traversed  
  >  LEFT → RIGHT → ROOT  
  ```js
  function TreePreorder(node) {
    if (node == null) return;
    TreePreorder(node.left);
    TreePreorder(node.right);
    console.log(node.value)
  }
  ```  
2. Breadth First Searh (BFS)  
Breadth-first, also known as level-order, search algorithms read the value of all the nodes at a particular level in a tree before moving on to the next level. The progression of the algorithm as it traverses the tree and reads the node values is breadth-first. It starts at the root node and moves down the tree level by level.

    ```js
    bfsTravel(){
        let queue = [];
        queue.push(this.root)
        while(queue.length){
            let node = queue.shift();
            console.log(node.value);
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    ```
### Balanced Binary Tree
A balanced tree is a type of tree data structure in which the heights of subtrees of any node do not differ by a large amount, ensuring that the tree remains relatively shallow. Balancing is important to maintain efficient search, insert, and delete operations in a tree, especially in binary search trees (BSTs) and other tree-based data structures
- AVL tree  
An AVL tree is a self-balancing binary search tree in which the heights of the left and right subtrees of any node differ by at most one. This strict balancing ensures that the tree height remains logarithmic, resulting in efficient O(log n) search, insert, and delete operations.

- Red-Black Tree  
A red-black tree is another type of self-balancing binary search tree. It enforces balancing by coloring the edges (links) of the tree and adhering to specific rules. Red-black trees provide a balance guarantee that allows for efficient O(log n) operations.

### complexity of a binary search tree
1. Traversal - O(n). 
1. Insertion and Deletion - averagae case - O(log n), worst case - O(n). 
1. Deletion - O(n).  

### Heap  
A heap is a tree based datastructure in which the tree is a complete binary tree. 
- Max Heep - for every node, its child node value should be less than or equal to that nodes value. So the greatest value in the heap will be the root node.
- Min Heep - for every node, its child node value should be greater than or equal to that nodes value.    

#### Operations in Heep  
- Heapify: a process of creating a heap from an array.
- Insertion: process to insert an element in existing heap time complexity O(log N).
- Deletion: deleting the top element of the heap or the highest priority element, and then organizing the heap and returning the element with time complexity O(log N).
- Peek: to check or find the first (or can say the top) element of the heap.

#### Applications of Heap 







