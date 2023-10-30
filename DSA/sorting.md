# Sorting Algorithm
A sorting algorithm is a method or process used to arrange a collection of items or data in a specific order. Sorting is a fundamental operation in computer science and is used in various applications, including data organization and retrieval.
## Bouble sort  Best: O(N), Worst: O(N^2)
It is one of the easiest understandable sorting algorithms.
If the array have n elements there will be n rounds. in each round there will be ((n -1) - current_round) comparisson. 
It will compare the adjacent elements in the array if the first one is bigger it will be swapped.  
![Alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--AIAlZIhq--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/euz62qdpc74m9w4gcg09.png)
### Advantages  
 - Good for learning purpose.
 - Easy to implement
 - Minimal memory usage: Bubble sort is an in-place sorting algorithm, meaning it doesn't require additional memory to sort the elements. This can be advantageous when memory usage is a concern.  
 ### Disadvantage  
 - Inefficient for large datasets
 - Poor average-case performance: Bubble sort's average-case performance is also O(n^2), which means it's not a good choice for most sorting tasks. Other sorting algorithms are more efficient on average.
 ### Applications of Buble sort  
 - Educational purposes  
 - Small datasets
 - Sorting nearly sorted data  
 - Small embedded systems  

 ## Selection Sort  Best/Worst: O(N^2)
 

