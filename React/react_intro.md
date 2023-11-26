
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

## DOM concepts in Javascript
Dom is a way to represent the webpage in a structured hierarchial way so that it wil become easier to access and modify the document.
### Why DOM is important 
Javascript can't understand the HTML document directly. So when the web page loads in the browser it creates a tree like structure composed with objects of the webpage. So js can easily interact with the DOM. JS can't understand the `<h1>` tag but it can understand the object h1 in the DOM.  
### Applications of DOM 
- Dynamic web pages : DOM enables interactive and responsive web experience, Such as updating content without reloading the entire page or responding to the user acion instantly. 
- Cross browser capability :  DOM provides a standard way to interact with the webpage elements. 
- Single Page Applications : Applications build with React or Angular heavily relay on the DOM for efficient rendering and updating of content within a single HTML page without reloading the entire page. 
### Difference between actual DOM and virtual DOM 
- The actual DOM is a tree like structure that represent the structure of the html document. 
- When we are changing the structure or the content of the web page we are actually interacting with the actual DOM.
- Manipulating the Actual DOM directly will leads to performance  bottlenecks. It will slow down the performance. And it will creates a new DOM if the element updates. 
- The vitual DOM is a abstraction of the actual DOM and it is used by some frameworks like React to optimize the process of updating the user interface. 
- Instead of directly updating the actual DOM, these framework creates a virtual representation of the DOM in memory.
- When any changes occures the changes will first applied to the virtual DOM . This process is much faster than modifing the real DOM.
- After changes occured in the virtual DOM a process called reconciliation will perform. This involves comparing the current virtual DOM with the previous version to identify the differences(diffing).  
- Only the differences are then applied to the actual dom.

## Single page applications 
- In single page applications there is only single html page and whenever user interacts with the website it will dynamically rewrite the content rather than loading an entire new page from the server.
- Navingation within the application is done by javascript. 
- Javascript will manipulate the DOM to show or hide content. without triggering a full page reload. 
#### Advantages 
- Enhanced user  experience due to faster transition between views.
- Reduce the server reloads . Only the data is exchanged during interactions. 
#### Disadvantages 
- Initial page load might take some time because the entire application need to loaded. 
- SEO can be a challenge. But techniques like serverside rendering can help. \

### Difference between single-page applications and multi-page applications
#### Loading approach
- SPA loads a single page and dynamically updates the contents.
- MPA loads a new HTML page from the server in each interactions. 
#### User Experience 
- Due to fewer full page reloads SPA provides a smoother user experience . 
- MPA's initial fast page reload. 
#### Server interactions 
- SPA interact with the server for fetch data and updates the contents without reloading the entire page. 
- MPA loads a new HTML page from the server in each interactions. 
#### SEO
- SPA faces challenges with SEO, But techniques like serverside rendering can help. 
- MPA is more SEO friendly, as each page has a separate url. 
## CSR vs SSR 
### Client side rendering 
- It is the process of rendering the web pages on the client side using javascript. 
- Server sends a initial HTML file and cliet then uses javascript to dynamically update the page as needed.   
- Client can update a specific part of the web page without reloading the whole page. 
- commonly used for web applications that require high amount of user interactivity
#### Advantages 
- More dynamic and interactive web applications
- Smoother user experience 
- reduce the need of additional server requests. 
#### Disadvantages 
- Slower initial load time 
- Less SEO friendly 

### Server side rendering 
- The process of rendering the web pages on the server side and sending the fully rendered HTML to the client. 
- commonly used for content heavly applications. 

#### Advantages  
- Faster initial page laod 
- improved SEO optimization 

#### Disadvantages  
- Require more server resource and maintenance
- slower subsequent page loads 

## Concept of reusability 
Reusability allows developers to create modular and maintainable code. React provides a component based architute. It allows to create small reusable ui elements, this can be combosed to create larger and more complex UI's. 

### Key aspect of reusability in react 
- Components : A component is a small and reusable ui element. It can be a button or cards etc. 
- Props : It is a way to pass data from parent component to child component. 
- composition : It is a practice of combining small and simple component to create large and complex ui. 
- Higher order component : Higher order components take a components and return another component with additional functionality. 
- Custom hooks : Custom hooks are functions that encapsulate reusable logic and can be shared across components. 







