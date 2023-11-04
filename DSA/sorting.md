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

 ![Alt text](https://res.cloudinary.com/practicaldev/image/fetch/s--992IFucj--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/43gibzc1hne0ie73cmp1.png)
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

## Insertion Sort   
Time : Best - O(N), Averagae - O(N^2) , Worst - O(N^2), Space : O(N)   

Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.  
To sort an array of size N in ascending order iterate over the array and compare the current element (key) to its predecessor, if the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.
 
<img src = "https://media.geeksforgeeks.org/wp-content/uploads/insertionsort.png" style = "width:400px; height:auto;">  

### Advantages  
- Simple Implementation  
- Efficiency for Small Data Sets  -
- Online Sort: It can be used for online sorting, where data is received continuously, and you want to keep the sorted portion of the data up to date. Other sorting algorithms might require periodic re-sorting, which can be inefficient.
- In-Place Sorting: It doesn't require additional memory allocation (it's an in-place sorting algorithm), which can be important when working with limited memory.  

### Disadvantage  
- Inefficient for Large Data Sets  
- Not Suitable for Reverse-Sorted Data: Insertion sort performs poorly when dealing with data that is reverse-sorted or nearly reverse-sorted. In these cases, it requires a significant number of comparisons and shifts, which can make it very slow.  
- High Number of Comparisons: In insertion sort, each element is compared with all previous elements until it finds its correct position in the sorted portion of the array. This can result in a high number of comparisons, especially for larger data sets.  
- Limited Use Cases  

### Applications  
- Online Sorting  
- Partial Sorting: Insertion sort is adaptive and performs well on partially sorted data. When you have a list that is almost sorted, insertion sort can quickly complete the sorting process with relatively few comparisons and swaps.  
- Teaching and Learning   

## Merge Sort   
Time : O(N log N), Space : O(N)   


Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.  
Merge sort is a recursive algorithm that continuously splits the array in half until it cannot be further divided i.e., the array has only one element left (an array with one element is always sorted). Then the sorted subarrays are merged into one sorted array.  


<img src = 'https://media.geeksforgeeks.org/wp-content/uploads/20230706153706/Merge-Sort-Algorithm-(1).png' style = "width:700px;">

### Advantages  
- Stability: Merge sort is a stable sorting algorithm, which means it maintains the relative order of equal elements in the input array.
- Guaranteed worst-case performance: Merge sort has a worst-case time complexity of O(N logN), which means it performs well even on large datasets.
- Parallelizable: Merge sort is a naturally parallelizable algorithm, which means it can be easily parallelized to take advantage of multiple processors or threads.  

### disadvantages  
- Space complexity: Merge sort requires additional memory to store the merged sub-arrays during the sorting process. 
- Not in-place: Merge sort is not an in-place sorting algorithm, which means it requires additional memory to store the sorted data. This can be a disadvantage in applications where memory usage is a concern.
- Not always optimal for small datasets: For small datasets, Merge sort has a higher time complexity than some other sorting algorithms, such as insertion sort. This can result in slower performance for very small datasets.  

### Applications  
- Sorting large datasets: Merge sort is particularly well-suited for sorting large datasets due to its guaranteed worst-case time complexity of O(n log n).
- External sorting: Merge sort is commonly used in external sorting, where the data to be sorted is too large to fit into memory.
- Custom sorting: Merge sort can be adapted to handle different input distributions, such as partially sorted, nearly sorted, or completely unsorted data.   

## Quick Sort  

Time : best - O(n log n), average - O(n log n), worst - o(n^2), Space : O(n)  

QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.  

The key process in quickSort is a partition(). The target of partitions is to place the pivot (any element can be chosen to be a pivot) at its correct position in the sorted array and put all smaller elements to the left of the pivot, and all greater elements to the right of the pivot.

Partition is done recursively on each side of the pivot after the pivot is placed in its correct position and this finally sorts the array.  

<img src = "https://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/QuickSort2.png" >  

### Advantages  
- It is a divide-and-conquer algorithm that makes it easier to solve problems.
- It is efficient on large data sets.
- It has a low overhead, as it only requires a small amount of memory to function.  
### Disadvantages  
- It has a worst-case time complexity of O(N2), which occurs when the pivot is chosen poorly.
- It is not a good choice for small data sets.
- It is not a stable sort, meaning that if two elements have the same key, their relative order will not be preserved in the sorted output in case of quick sort, because here we are swapping elements according to the pivot’s position (without considering their original positions)  
### Application  
- Database Management: Many database systems use quick sort to efficiently retrieve and display sorted data to users. It's also used in indexing structures like B-trees to keep data organized.

- Language Implementations: Quick sort is often used in the standard libraries of programming languages for sorting arrays and collections. For example, many programming languages, including Python, C++, and Java, use quick sort for their built-in sorting functions.

- Search Algorithms: Quick sort can be employed as a component of search algorithms like binary search. In these cases, the data must be sorted before binary search can be applied efficiently.

- Operating Systems: Quick sort is utilized in various operating system tasks, such as process scheduling, file system management, and memory management. It's valuable in scenarios where items need to be ordered or prioritized.

