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

### Binary Tree  

A binary tree is a hierarchical data structure in computer science and mathematics. It consists of nodes connected by edges, with each node having at most two children, which are referred to as the left child and the right child. The topmost node in a binary tree is called the root, and it serves as the starting point for traversing the tree.  

#### Binary Search Tree  
It is a type of binary tree in which each node has at most two child nodes, typically referred to as the "left" child and the "right" child. The key property of a binary search tree is that it maintains a specific order among its elements, making it suitable for efficient searching, insertion, and deletion operations.

Each node has a value (key), and for any given node:
- All nodes in its left subtree have values less than the node's value.
- All nodes in its right subtree have values greater than the node's value.  
#### Traversal  
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
#### Searching  
- Depth first search  



