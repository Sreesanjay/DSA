## Geospatial Index:
- Definition:
  A geospatial index is a special type of index in a database that optimizes the storage and retrieval of data associated with locations on the Earth's surface.
- Purpose:
  It allows for efficient querying of data based on proximity, distance, and spatial relationships.
- Example:
  If you have a collection of places with latitude and longitude coordinates, a geospatial index makes it faster to find places near a specific location.  
  ```js
  db.places.createIndex({ location: "2dsphere" });
  ```

## Geospatial Queries:
- Definition:
  Geospatial queries involve searching for and analyzing data based on their geographical location or spatial attributes.
- Types of Queries:
  1. Proximity Queries:
    Find points near a given location.
    Example: Find all restaurants within 5 kilometers of a user's current position.
  2. Distance Queries:
    Measure the distance between points.
    Example: Calculate the distance between two cities.
  3. Bounding Box Queries:
    Find points within a specified rectangular area.
    Example: Find all places within the boundaries of a city.
  4. Polygon Queries:
    Find points within a defined polygonal area.
    Example: Identify all locations within a park boundary.  

    ```js
    db.places.find({
     location: {
      $near: {
       $geometry: { type: "Point", coordinates: [-73.9667, 40.8000] },
       $maxDistance: 2000  // in meters
      }
    }
   });
  ```


## Backup and Restore  
#### Backup:  

  - Definition:
  Backup is the process of creating a copy of your MongoDB data to ensure that you have a safe and restorable version in case of data loss, system failure, or other emergencies.

  - How to Perform Backup:
  Use the **mongodump** command to create a backup of your MongoDB data.  
    ```
    mongodump --db yourDatabaseName --out /path/to/backup/directory
    ```

#### Restore:
- Definition:
  Restore is the process of recovering data from a backup, replacing the current data with the saved version.

- How to Perform Restore:
  Use the mongorestore command to restore data from a previously created backup. 
    ```
    mongorestore --db yourDatabaseName /path/to/backup/directory/yourDatabaseName
    ```  

## CAP Theorom  
IT is a principle in distributed system theory that states that it is impossible for a distributed system to simultaneously guarantee three properties: consistency "C", availability "A", and partition tolerance "P".  

- **Consistency** "C" means that all nodes in a distributed system have the same view of the data at the same time. Any read operation on the system should return the most recent write or an error. In other words, the data remains consistent across all nodes.

- **Availability** "A" means that any client making a request for data gets a response, even if one or more nodes are down. Another way to state this—all working nodes in the distributed system return a valid response for any request, without exception.

- **Partition tolerance** "P" is a communications break within a distributed system—a lost or temporarily delayed connection between two nodes. Partition tolerance means that the cluster must continue to work despite any number of communication breakdowns between nodes in the system.  


## $expr  
It allows us to perform more complex operations by comparing fields in the same documents or using aggregation expression.

- comparing within a document  

  ```js
  db.students.find({
    $expr: { $gt: ["$examScore", "$homeworkScore"] }
  })
  ```
- Aggregation expression  
  ```js
   db.sales.find({
    $expr: {
      $gt: [
        { $subtract: ["$totalSales", "$discount"] },
        1000
      ]
    }
  })
  ```  

## $addToSet  
It is used when we want to add some values to the array only if they are not present in the array .
It ensures the elements in the array are unique.  

  ```js
    db.users.updateOne(
      { _id: 123 },
      { $addToSet: { hobbies: "reading" } }
    )
  ```
## $push  
It is used to add values to the array regardles of whether they are already present in the array or not.  
```js
  db.users.updateOne(
    { _id: 123 },
    { $push: { interests: "swimming" } }
  )
``` 

## Indexing  
Mongodb used indexing inorder to make the query processing more efficiently. Indexes are special datastructure that stores some information related to the documents such that it becomes easy for mongodb to find the right data. 
The **createIndex()** method is used to create indexes.  

Types of indexing  
- Single field index  
You can create an index on a single field to speed up queries that filter, sort, or project on that field.  

  ```js
  db.collection.createIndex({ fieldName: 1 });
  ```  
  > 1 indicates ascending order, and -1 indicates descending order.

- Compount index  
You can create an index on multiple fields to optimize queries that filter, sort, or project on a combination of those fields.  

  ```js
  db.collection.createIndex({ field1: 1, field2: -1 });
  ``` 

- Text index  
  Used for text search on string content. It supports language-specific stemming and stop words  
  ```js
  db.collection.createIndex({ content: "text" });
  ```
- Geospatial Index  
  Used for queries involving geospatial data (e.g., location-based queries).  
  ```js
  db.collection.createIndex({ location: "2dsphere" });
  ```
- Hashed Index  
  Used for equality queries. It hashes the indexed field's values, making it efficient for equality comparisons.  
  ```js
  db.collection.createIndex({ hashedField: "hashed" });
  ```  

## View  
A view is a read-only queryable object whose content are defined by an aggregation pipeline.  
MongoDB does not persist the view contents to disk. When a client queries the view its content get computed on-demand.

- creating view  
  create a view that is limited to first year students:
  ```js
    db.createView(
      "firstYears",
      "students",
      [ { $match: { year: 1 } } ]
    )
  ```
- View to join two collection  
  ```js
  db.createView( "sales", "orders", [
   {
      $lookup:
         {
            from: "inventory",
            localField: "prodId",
            foreignField: "prodId",
            as: "inventoryDocs"
         }
   },
   {
      $project:
         {
           _id: 0,
           prodId: 1,
           orderId: 1,
           numPurchased: 1,
           price: "$inventoryDocs.price"
         }
   },
      { $unwind: "$price" }
  ] )
  ```
- Recreate View 
1. Drop and recreate 
2. Use collMod command  

   ```js
   db.runCommand( {
    collMod: "lowStock",
    viewOn: "products",
    "pipeline": [ { $match: { quantity: { $lte: 10 } } } ]
   } )
   ```
## ACID Property  
ACID property are set of characteristics that ensures the consistency and reliablility of transactions in a database system.   
These properties are essential for maintaining the integrity of data and ensures the success of transactions.  

1. Atomicity
  The whole transaction treated as a single  unit. if any of the operation fails the whole transaction will fail.Either all the operations within the transaction are completed successfully, or none of them are.
1. Consistency  
  The database should be in consistent state before and after the transaction. 
1. Isolation 
  If multiple transaction occures concurrently, Each transaction treated separatedly.   
1. Durability 
  If a transaction is commited, Its changes are permanent and will survive any subsequent failure. 

## Capped collection  
Capped collection is a special type of collection with a fixed size. when the size exceeded it will automatically removes the oldest document in the collection. 
  ```js
  db.createCollection("myCappedCollection", { capped: true, size: 1000000 })
  ```
## Utility commands  
The utility commands are used for various administrative tasks.  
- use  
- show 
- status()
- currentOp()
- getProfilingStatus()
- shutdownServer()   

## Scalling 
Scalling generally refers to the ability to handle increased load. Load may occure in terms of large volume of data, concurret users or transaction rates.   
There are two types of scalling. 
- **Vertical Scalling**
It is the process of adding more resource to a single server, such as increasing cpu, memory,etc. 
- **Horizontal Scalling**
It is the process of adding more servers to the system. Distributing the load accross multiple machines. 

## Sharding  
In sharding , we devide our collection into different parts and store in different servers. It will imporove the scallability and performance of the large scale database. The goal of sharding is to horizontally partition a database, breaking into smaller, more managable pieces called shards. Each shard is hosted on separated server,and collectively, they handle the overall database workload.  

key concepts  
- Shard : A shard is a subset of tha data in the database. Each shard i stored on separate server or node in a distribured system.  
- Shard key : is a field or set of fields choosen to ditermine how data is distributed accross shards.  
- Mongos : Mongos is a routing service in mongodb that directs clients request to appropriate shards based on the shard key. 
- Config servers : Config servers stores the metadata about the sharded cluster. Including information abou the ranges of shard keys. 

## Replica set  
Replica set is a group of mongodb servers that maintains the same data set. providing high availability and fault tolerance. A replica set consists of multiple mongodb instances , including a primary node and one or more secondary nodes.The primary node will receive all the write operations, while the secondary nodes replicate the primary nodes data and serve read operation.   

## Accumulators  
Accumulators are used in group stage in aggregation.It will perform a specific operation on a set of values and accumulate the results. 
- $sum ,$avg, $min, $max, $first, $last,etc.  

## Cluster  
 a collection of datasets distributed across many shards (servers) in order to achieve horizontal scalability and better performance in read and write operations.  


