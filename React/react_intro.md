
# React
React is an open source javascript library used for building user interface for web applications. It was developed and maintained by facebook. React is mainly known for its component based architecture. We can compose complex UIs from small and isolated pieces of code called “components”.
Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

> React only changes what needs to be changed!

### Advantages of react

- Effortless Maintenance   
Creating large applications with multiple integrations is a complex task; however, maintaining it with changing business requirements can be more complicated and expensive.modular and flexible architecture, leading to modernizing each component independently without affecting others. In addition, objects defined for a particular element can be reassigned to other components to reduce the developer’s effort.

- Fast Rendering  
React JS comprises the in-built functionality of virtual DOM, making the rendering faster and enhancing the overall user experience. In addition, it makes the application lightweight, leading to boost performance and productivity.

  ![Alt text](https://positiwise.com/blog/wp-content/uploads/2023/08/rending-in-react.png)
- Search Engine Friendly  
Many websites cannot reach the top search pages, as JavaScript pages are complex to read and rank across search engines. But, the Virtual DOM feature of ReactJS renders the application more accurate and returns the web app as a typical web page.
Due to this, search bots are able to crawl through the React JS website and effortlessly analyze the relevance and rank the website on the search engine.

- Mobile app developement  
We can develop web application as well as mobile applications. React Native is a popular framework for developing mobile apps  

- Component reusability  
React JS provides the architecture and ecosystem to build business software based on components and reuse each component multiple times.  


### Class components and Variable components
A class component requires you to extend from React.Component and create a render function which returns a React element. It uses state for storing variables.

 A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.
 It uses useState (Which is part of hooks) to store variables  

 > State = Variable  
  setState = change the state  
  props = pass state to child component.  
 
 ### installation  

 ```sh
 npx create-react-app app_name
 ```
