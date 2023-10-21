# Complexity analysis

Complexity analysis is defined as a technique to characterise the time taken by an algorithm with respect to input size (independent from the machine, language and compiler). It is used for evaluating the variations of execution time on different algorithms.

What is the need for Complexity Analysis?

  - Complexity Analysis determines the amount of time and space resources required to execute it.
  - It is used for comparing different algorithms on different input sizes.
  - Complexity helps to determine the difficulty of a problem.
  - often measured by how much time and space (memory) it takes to solve a particular problem

The efficiency of an algorithm depends on two parameters:

  - Time Complexity
  - Space Complexity
  
Time Complexity: It is defined as the number of times a particular instruction set is executed rather than the total time taken. It is because the total time taken also depends on some external factors like the compiler used, the processor’s speed, etc.

Space Complexity: It is the total memory space required by the program for its execution.

![alt text](https://drive.google.com/uc?id=1wJLAure6ub5h89lDiXj9dpMdMzSm3Zkg)

## Asymptotic Notation and Analysis 
Asymptotic notation is a way to describe the running time or space complexity of an algorithm based on the input size. 
 The three most commonly used notations are Big O, Omega, and Theta.
   1. Big O notation (O): Big O Notation in Data Structure is used to express algorithmic complexity using algebraic terms. It describes the upper bound of an algorithm's runtime and calculates the time and amount of memory needed to execute the algorithm for an input value.

   1. Omega notation (Ω): This notation provides a lower bound on the growth rate of an algorithm’s running time or space usage. It represents the best-case scenario, i.e., the minimum amount of time or space an algorithm may need to solve a problem. For example, if an algorithm’s running time is Ω(n), then it means that the running time of the algorithm increases linearly with the input size n or more.

   1. Theta notation (Θ): This notation provides both an upper and lower bound on the growth rate of an algorithm’s running time or space usage. It represents the average-case scenario, i.e., the amount of time or space an algorithm typically needs to solve a problem. For example, if an algorithm’s running time is Θ(n), then it means that the running time of the algorithm increases linearly with the input size n.

### Big O notation

  1. Constant time complexity - O(1)  
  Constant time algorithms will always take same amount of time to be executed.
      ```js
      array.push(2);
      ```
  
  1.  Linear time complexity - O(n)   
  An algorithm has a linear time complexity if the time to execute the algorithm is directly proportional to the input size n. Therefore the time it will take to run the algorithm will increase proportionately as the size of input n increases.
      ```js
      for (let i = 0; i &lt; array.length; i++) 
      {  
        console.log(array[i]);
      }
      ```
  1.  Logarithmic time complexity - O(log n)  
  An algorithm has logarithmic time complexity if the time it takes to run the algorithm is proportional to the logarithm of the input size.
      ```js
      function binarySearch(arr, value) {
        let start = 0
        let end = arr.length - 1
        let middle = Math.floor((start + end) / 2)
        while (arr[middle] !== value && start <= end) {
          if (value < arr[middle]) {
            end = middle - 1
          } else {
            start = middle + 1
          }
          middle = Math.floor((start + end) / 2)
        }
        if (arr[middle] === value) {
          return middle
        }
        return -1
      } 
      ```
      Advantages  
      -  Efficient: Algorithms with O(log N) time complexity are generally very efficient and can solve problems quickly, even as the input size grows larger.
      
      - Scalable: Logarithmic algorithms are highly scalable, meaning that they can handle large input sizes with ease.

      Disadvantage  
      - Limited use cases: Not all problems can be solved using logarithmic algorithms. In some cases, algorithms with higher time complexities like O(N) or O(N^2) may be necessary.

      - Limited flexibility: Logarithmic algorithms often require the input to be sorted or meet other specific requirements, which can limit their flexibility in certain situations.

      - High implementation complexity: Some logarithmic algorithms can be difficult to implement, requiring a deep understanding of mathematical concepts like logarithms and recursive functions.
  1. Quadratic Time - O(n²)  
    The time grows linearly to the square of the number of input elements
      ```js
      function multiplyAll(arr1, arr2) {
        if (arr1.length !== arr2.length) return undefined
        let total = 0
        for (let i of arr1) {
          for (let j of arr2) {
            total += i * j
          }
        }
        return total
      }
      ```
      
  