## $regex  
The $regex is used for search for documents based on specific pattern. 
1. Basic query operation with $regex  
- Find the documents where the field starts with 'abc'
  ```js
   db.collection.find({field_name: {$regex: /^abc/}})
  ```
2. Case-Insensitive Search:
-  To make a case sensitive search, use 'i' as option.  
   ```js  
   db.collection.find({ fieldName: { $regex: /^abc/, $options: 'i' } });
   ```
 3. Containing a Substring:  
 - find documents where a field contains a specific substring
   ```js
   db.collection.find({ fieldName: { $regex: /substring/ } });
   ```
4. Wildcard Search:
- use .* to match any characters
  ```js
  db.collection.find({ fieldName: { $regex: /part-of-string.*/ } });
  ```
5. Numeric Ranges: 
  ```js
  db.collection.find({ fieldName: { $regex: /^1\d\d$/ } });
  ``` 
6. Escape Special Characters: 
- If you need to search for a string containing regex special characters, escape them with a backslash:
  ```js
  db.collection.find({ fieldName: { $regex: "special\\(characters\\)" } });
  ```  
7. $regex with $or operator  
  ```js
  db.collection.find({
   $or: [
     { fieldName1: { $regex: /pattern1/ } },
     { fieldName2: { $regex: /pattern2/ } }
   ]
  });
  ```
8. Anchors and Boundary Matchers  
- Use ^ and $ for the start and end of a line, respectively:
  ```js
  // Documents where fieldName starts with "abc" and ends with "xyz"
  db.collection.find({ fieldName: { $regex: /^abc.*xyz$/ } });
  ```
9. Use of $regexMatch Stage in Aggregation:  
- In aggregation pipelines, the $regexMatch stage can be used for more complex regex operations.  
  ```js
    db.collection.aggregate([
    {
      $match: {
       fieldName: {
         $regexMatch: {
           pattern: "pattern",
           options: "i" // case-insensitive
         }
       }
     }
   }
  ]);
 
  ```  

