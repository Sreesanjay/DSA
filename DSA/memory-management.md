# Memory Management

The term memory can be defined as a collection of data in a specific format. It is used to store instructions and process data.
Memory management is the process of controlling and coordinating a computer's main memory. It ensures that blocks of memory space are properly managed and allocated so the operating system (OS), applications and other running processes have the memory they need to carry out their operations.

## Memory allocation

process of assigning memory to different processes or programs running on a computer system. There are two types of memory allocation techniques that operating systems use: contiguous and non-contiguous memory allocation.

-    Contiguous Memory Allocation

     Contiguous memory allocation is a technique where the operating system allocates a contiguous block of memory to a process. This memory is allocated in a single, continuous chunk, making it easy for the operating system to manage and for the process to access the memory. Contiguous memory allocation is suitable for systems with limited memory sizes and where fast access to memory is important.

     Contiguous memory allocation can be done in two ways

     -    Fixed Partitioning - the memory is divided into fixed-size partitions, and each partition is assigned to a process. This technique is easy to implement but can result in wasted memory if a process does not fit perfectly into a partition.
          ![Alt text](https://media.geeksforgeeks.org/wp-content/uploads/444-4.png)

     -    Dynamic Partitioning − In dynamic partitioning, the memory is divided into variablesize partitions, and each partition is assigned to a process. This technique is more efficient as it allows the allocation of only the required memory to the process, but it requires more overhead to keep track of the available memory.

          ![Alt text](https://media.geeksforgeeks.org/wp-content/uploads/20230703073901/222-12.webp)

     Advantages

     -    Simplicity − Contiguous memory allocation is a relatively simple and straightforward technique for memory management. It requires less overhead and is easy to implement.

     -    Efficiency − Contiguous memory allocation is an efficient technique for memory management. Once a process is allocated contiguous memory, it can access the entire memory block without any interruption.

     -    Low fragmentation − Since the memory is allocated in contiguous blocks, there is a lower risk of memory fragmentation. This can result in better memory utilization, as there is less memory wastage.

     Disadvantages

     -    Limited flexibility − Contiguous memory allocation is not very flexible as it requires memory to be allocated in a contiguous block. This can limit the amount of memory that can be allocated to a process.

     -    Memory wastage − If a process requires a memory size that is smaller than the contiguous block allocated to it, there may be unused memory, resulting in memory wastage.

     -    Difficulty in managing larger memory sizes − As the size of memory increases, managing contiguous memory allocation becomes more difficult. This is because finding a contiguous block of memory that is large enough to allocate to a process becomes challenging.

     -    External Fragmentation − Over time, external fragmentation may occur as a result of memory allocation and deallocation, which may result in non − contiguous blocks of free memory scattered throughout the system.

-    Non-contiguous Memory Allocation

     Non-contiguous memory allocation, on the other hand, is a technique where the operating system allocates memory to a process in non-contiguous blocks. The blocks of memory allocated to the process need not be contiguous, and the operating system keeps track of the various blocks allocated to the process. Non-contiguous memory allocation is suitable for larger memory sizes and where efficient use of memory is important.

     Non-contiguous memory allocation can be done in two ways

     -    Paging − In paging, the memory is divided into fixed-size pages, and each page is assigned to a process. This technique is more efficient as it allows the allocation of only the required memory to the process.

     -    Segmentation − In segmentation, the memory is divided into variable-sized segments, and each segment is assigned to a process. This technique is more flexible than paging but requires more overhead to keep track of the allocated segments.

## Memory Leak

memory leaks are pieces of memory that the application have used in the past but is not needed any longer but has not yet been return back to the OS or the pool of free memory.

Common Sources of Memory Leaks in JavaScript Code

1. Accidental global variables

     - assigning value to the undeclared variable,
     - using 'this' that points to the global object.

     ```js
     function createGlobalVariables() {
          leaking1 = "I leak into the global scope"; // assigning value to the undeclared variable
          this.leaking2 = "I also leak into the global scope"; // 'this' points to the global object
     }
     createGlobalVariables();
     window.leaking1; // 'I leak into the global scope'
     window.leaking2;
     ```

     How to prevent it: Strict mode ("use strict") will help to prevent memory leaks and trigger console errors in the example above

1. Closures

     Function-scoped variables will be cleaned up after the function has exited the call stack and if there aren't any references left outside of the function pointing at them. The closure will keep the variables referenced and alive although the function has finished executing and its execution context and variable environment are long gone.

     ```js
       outer() {
        potentiallyHugeArray = [];
          return function inner() {
            potentiallyHugeArray.push('Hello'); // function inner is closed over the potentiallyHugeArray variable
            console.log('Hello');
          };
       };
      const sayHello = outer(); // contains definition of the function inner

      function repeat(fn, num) {
        for (let i = 0; i < num; i++){
        fn();
        }
      }
      repeat(sayHello, 10); // each sayHello call pushes another 'Hello' to the potentiallyHugeArray

      // now imagine repeat(sayHello, 100000)
     ```
     In this example, potentiallyHugeArray is never returned from any of the functions and cannot be reached, but its size can grow infinitely depending on how many times we call the function inner().

    **How to prevent it**: Closures are an unavoidable and an integral part of JavaScript, so it is important to:

    - understand when the closure has been created and what objects are retained by it,
    - understand closure's expected lifespan and usage (especially if used as a callback).
