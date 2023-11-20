# Graph Datastrucutre 
1

![Alt text](https://media.geeksforgeeks.org/wp-content/uploads/20200630111809/graph18.jpg)  


## Components of graph  
 - vertices : It is also known as vertex, nodes which holds the data. 
 - Edges : Edges are used to connect between two nodes. It can be directed or undirected.  
## Properties of a graph  
 - Degree of a vertex : Degree of a vertex is the number of edges connected to the vertex. In directed graph a vertex may have both in-degree and out-degree. 
 - Cycles : A cycle is a closed path in the graph that starts and ends at the same vertex.   

## Types of graphs 
- Undirected graph : Edges don't have any direction. 
- Directed graph : Edges have direction init. 
- Weighted graph : A weighted graph is defined as a special type of graph in which the edges are assigned some weights which represent cost, distance, and many other relative measuring units.  
- cyclic graph : A graph that contains atleast one cycle is called cyclic graph. 
- Sparse Graph : The number of edges in the graph is less than the maximum possible edges in the graph.  
- connected graph : There is a path between every pair of vertices in the graph.
- Bipartite Graphs : In a bipartite graph its vertices can be devided into to  disjoined sets. No two veretices in the same set are adjacent. Every edges that connect to a vertex in one set is connected to the vertix of other set. 
- Complete graph : Each vertex is connected to all other vertices in a graph.

## Graph representaiton 
- Adjacency Matrix : It is a 2D array with v rows and v columns where v is the number of vertices in the graph. g[i][j] = 1 means in the graph there is an edge between vertex i and vertex j. We can also represent weighted greaphs using adjacency matrix g[i][j] = w where w is the weight.  
- Adjacency List : Each vertices contains its neighboring vertices. 
