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
 Selection sort is a simple and efficient sorting algorithm that works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the list and moving it to the sorted portion of the list. 
 It have n rounds in each round it will find the smallest element from the unsorted portion and add to sorted section.
 ### Advantages 
 - Simplicity 
 - In-Place Sorting: Selection sort is an in-place sorting algorithm, meaning it does not require additional memory for sorting. It sorts the elements directly within the input array.
- Minimum Number of Swaps: Selection sort performs a minimal number of swaps. It makes only one swap for each element in the array, making it an efficient choice when the cost of swapping elements is high.  

### Disadvantages 
- Inefficiency:Selection sort has a time complexity of O(n^2), making it highly inefficient for large datasets. It is considerably slower than more advanced sorting algorithms like quicksort or mergesort, which have O(n log n) time complexity.
- Lack of Adaptiveness: Selection sort does not adapt to the input data. It performs the same number of comparisons and swaps regardless of the initial order of elements, making it inefficient for partially sorted lists.
- Comparison Inefficiency: Selection sort makes a lot of unnecessary comparisons even when it has already found the minimum (or maximum) element. This leads to inefficiency in terms of time complexity.

### Applications 
- Educational Purposes 
- Small Datasets 