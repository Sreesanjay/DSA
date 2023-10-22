# Searching Algorithms

## Sequential Search 
In this, the list or array is traversed sequentially and every element is checked. For example: Linear Search.
### linear search - O(n)
```js
let search = (arr , key) = >{
    for(let i = 0; i < arr.length;i++){
        if(arr[i] == key){
            return i+1;
        }
    }
    return -1;
}
```  
## Interval Search  
These algorithms are specifically designed for searching in sorted data-structures. These type of searching algorithms are much more efficient than Linear Search as they repeatedly target the center of the search structure and divide the search space in half. For Example: Binary Search.  
### Binary Search - O(log n) 
```js
    let binarySearch=(arr,key)=>{
    let left=0;
    let right=arr.length-1;
    while(left<=right){
        let middle=Math.floor((right+left)/2)
        console.log(left,right,middle)
        if(arr[middle]==key) {
            return middle+1;
        }
        if(key<arr[middle]){
            right=middle-1;
        }
        else{
            left=middle+1
        }
    }
    return -1
}
console.log(binarySearch([1,2,3,4,5,6,7,10],10));
```  
### Recursive Binary search - O(log n)
```js
let binarySearch = (arr, key) => {
    return search(arr, key, 0, arr.length - 1)
}
const search = (arr, key, left, right) => {
    if (left > right) return -1
    let middle = Math.floor((left + right) / 2)
    if (arr[middle] === key) {
        return middle + 1
    }
    if (key < arr[middle]) return search(arr, key, left, middle - 1)
    if (key > arr[middle]) return search(arr, key, middle + 1, right)
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 10], 10));

```
