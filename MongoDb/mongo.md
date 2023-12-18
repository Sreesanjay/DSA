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

- **Availability** "A" ensures that every request made to a distributed system receives a response, regardless of system failures or disruptions. The system remains operational and responsive to user requests, providing uninterrupted services.

- **Partition tolerance** "P" refers to the system's ability to continue functioning and providing services even in the presence of network partitions or failures. Network partitions occur when communication between nodes is disrupted, leading to the formation of separate groups of nodes.


