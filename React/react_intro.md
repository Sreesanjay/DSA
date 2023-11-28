# React

React is an open source javascript library used for building user interface for web applications. It was developed and maintained by facebook. React is mainly known for its component based architecture. We can compose complex UIs from small and isolated pieces of code called “components”.
Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser DOM.

> React only changes what needs to be changed!

### Advantages of react

-    Effortless Maintenance  
     Creating large applications with multiple integrations is a complex task; however, maintaining it with changing business requirements can be more complicated and expensive.modular and flexible architecture, leading to modernizing each component independently without affecting others. In addition, objects defined for a particular element can be reassigned to other components to reduce the developer’s effort.

-    Fast Rendering  
     React JS comprises the in-built functionality of virtual DOM, making the rendering faster and enhancing the overall user experience. In addition, it makes the application lightweight, leading to boost performance and productivity.

     ![Alt text](https://positiwise.com/blog/wp-content/uploads/2023/08/rending-in-react.png)

-    Search Engine Friendly  
     Many websites cannot reach the top search pages, as JavaScript pages are complex to read and rank across search engines. But, the Virtual DOM feature of ReactJS renders the application more accurate and returns the web app as a typical web page.
     Due to this, search bots are able to crawl through the React JS website and effortlessly analyze the relevance and rank the website on the search engine.

-    Mobile app developement  
     We can develop web application as well as mobile applications. React Native is a popular framework for developing mobile apps

-    Component reusability  
     React JS provides the architecture and ecosystem to build business software based on components and reuse each component multiple times.

## DOM concepts in Javascript

Dom is a way to represent the webpage in a structured hierarchial way so that it wil become easier to access and modify the document.

### Why DOM is important

Javascript can't understand the HTML document directly. So when the web page loads in the browser it creates a tree like structure composed with objects of the webpage. So js can easily interact with the DOM. JS can't understand the `<h1>` tag but it can understand the object h1 in the DOM.

### Applications of DOM

-    Dynamic web pages : DOM enables interactive and responsive web experience, Such as updating content without reloading the entire page or responding to the user acion instantly.
-    Cross browser capability : DOM provides a standard way to interact with the webpage elements.
-    Single Page Applications : Applications build with React or Angular heavily relay on the DOM for efficient rendering and updating of content within a single HTML page without reloading the entire page.

### Difference between actual DOM and virtual DOM

-    The actual DOM is a tree like structure that represent the structure of the html document.
-    When we are changing the structure or the content of the web page we are actually interacting with the actual DOM.
-    Manipulating the Actual DOM directly will leads to performance bottlenecks. It will slow down the performance. And it will creates a new DOM if the element updates.
-    The vitual DOM is a abstraction of the actual DOM and it is used by some frameworks like React to optimize the process of updating the user interface.
-    Instead of directly updating the actual DOM, these framework creates a virtual representation of the DOM in memory.
-    When any changes occures the changes will first applied to the virtual DOM . This process is much faster than modifing the real DOM.
-    After changes occured in the virtual DOM a process called reconciliation will perform. This involves comparing the current virtual DOM with the previous version to identify the differences(diffing).
-    Only the differences are then applied to the actual dom.

## Single page applications

-    In single page applications there is only single html page and whenever user interacts with the website it will dynamically rewrite the content rather than loading an entire new page from the server.
-    Navingation within the application is done by javascript.
-    Javascript will manipulate the DOM to show or hide content. without triggering a full page reload.

#### Advantages

-    Enhanced user experience due to faster transition between views.
-    Reduce the server reloads . Only the data is exchanged during interactions.

#### Disadvantages

-    Initial page load might take some time because the entire application need to loaded.
-    SEO can be a challenge. But techniques like serverside rendering can help. \

### Difference between single-page applications and multi-page applications

#### Loading approach

-    SPA loads a single page and dynamically updates the contents.
-    MPA loads a new HTML page from the server in each interactions.

#### User Experience

-    Due to fewer full page reloads SPA provides a smoother user experience .
-    MPA's initial fast page reload.

#### Server interactions

-    SPA interact with the server for fetch data and updates the contents without reloading the entire page.
-    MPA loads a new HTML page from the server in each interactions.

#### SEO

-    SPA faces challenges with SEO, But techniques like serverside rendering can help.
-    MPA is more SEO friendly, as each page has a separate url.

## CSR vs SSR

### Client side rendering

-    It is the process of rendering the web pages on the client side using javascript.
-    Server sends a initial HTML file and cliet then uses javascript to dynamically update the page as needed.
-    Client can update a specific part of the web page without reloading the whole page.
-    commonly used for web applications that require high amount of user interactivity

#### Advantages

-    More dynamic and interactive web applications
-    Smoother user experience
-    reduce the need of additional server requests.

#### Disadvantages

-    Slower initial load time
-    Less SEO friendly

### Server side rendering

-    The process of rendering the web pages on the server side and sending the fully rendered HTML to the client.
-    commonly used for content heavly applications.

#### Advantages

-    Faster initial page laod
-    improved SEO optimization

#### Disadvantages

-    Require more server resource and maintenance
-    slower subsequent page loads

## Concept of reusability

Reusability allows developers to create modular and maintainable code. React provides a component based architute. It allows to create small reusable ui elements, this can be combosed to create larger and more complex UI's.

### Key aspect of reusability in react

-    Components : A component is a small and reusable ui element. It can be a button or cards etc.
-    Props : It is a way to pass data from parent component to child component.
-    composition : It is a practice of combining small and simple component to create large and complex ui.
-    Higher order component : Higher order components take a components and return another component with additional functionality.
-    Custom hooks : Custom hooks are functions that encapsulate reusable logic and can be shared across components.

## Javascript XML (JSX)

-    JSX allows us to write html code inside javascript and place them into the DOM without any createElement and appendChild.
-    browsers can't understand JSX. So it converts jsx to plain JavaScript using the tool babel.

### Difference between JSX and HTML

-    html will directly interpret by browser. JSX needs to convert to javascript before it can be rendered in a browser. \
-    JSX uses className instead of class
-    Attribute name should be in camelCasing format.
-    Inline styles are specified using objects.

## Components

-    A component is a independent reusable piece of ui.
-    We can create large and complex UI's by combining these components.
-    It returns a piece of JSX code which tells what should be rendered on the browser.

Types of components

### Functional component

Functional components are javascript functions this function may or may not receive props and return react elements.

### Class component

Class components are ES6 classes that extend from React.Component. They can have local state and lifecycle methods.

#### Life cycle methods

Mounting

-    constructor : When a component is initialised the constructor function will call first. The initial state and other initial vlaues will setup here. It will have an argument called props.

-    getDerivedStateFromProps : This method will call right before rendering the element in DOM. Here we can set the initial state based on the initial props. It takes state as argument and returns an object with changes to the state.
-    render : It is a required method. It will render the html to the DOM.
-    componentDidMount : It is called after the component is rendered.

Updating

-    getDerivedStateFromProps : This method will call right before rendering the element.
-    shouldComponentUpdate : This method will return a boolean value. we can specify whether react continue with the render or not.
-    render : It will render the HTML to the DOM.
-    getSnapshotBeforeUpdate : We have access to the previous props and states after the update if we are using this method we should use componentDidUpdate.
-    ComponentDidUpdate : This method will call right after the component is updated.

Unmount

-    componentWillUnmount : It will call when the component is about to remove from the DOM.

## Dynamic rendering

Dynamic rendering is the process of generating and displaying content on website or application based on user interaction.In the context of web development, this often involves updating the user interface (UI) in response to user input or changes in the underlying data.

## Hooks

-    Hooks allows functional components to have access to states and life cycle features in functional components.  
### Hook rules  
- Hooks can only be called inside the React functional component. 
- hooks can only called at the top level of a React component. 
- hooks cannot be conditional. 

### useState

allows functional components to have local states. it takes an initial value as argument and returns an array with two elements.current state and other is the function to update the state.

### useEffect

The useEffect hook in React is used to handle the side effects in React such as fetching data, and updating DOM. This hook runs on every render but there is also a way of using a dependency array using which we can control the effect of rendering
It has two arguments, function and dependency.

### useMemo

useMemo is a hook that takes a function and a list of dependencies as arguments, and returns a value that is the result of calling the function. The value is stored in a cache and is only re-computed if one of the dependencies has changed.

### useContext

useContext provides a way to pass data or state through the component tree without having to pass props down manually through each nested component. there are two methods are there , createContext() , useContext().

### useRef

It allows to create a reference to the DOM element in the funcitonal component. Unlike useState if we change a value in useRef it will not re-render the webpage

### useReducer

The useReducer() hook is similar to useState() since it also provides a way to manage state changes and updates in a functional component but is intended to handle more complex state changes more efficiently.
It takes takes three arguments and returns array containing current state value and dispatch() funciton that can be trigger state changes by dispatching actions to the reducer.

-    reducer(state , action) - returns new state.
-    initial state

```js
import { useReducer } from "react";

const initialState = { name: "John", age: 30 };

const reducer = (state, action) => {
     switch (action.type) {
          case "updateName":
               return { ...state, name: action.payload };
          case "updateAge":
               return { ...state, age: action.payload };
          default:
               return state;
     }
};

const UserForm = () => {
     const [state, dispatch] = useReducer(reducer, initialState);

     return (
          <form>
               <label>
                    Name:
                    <input
                         type="text"
                         value={state.name}
                         onChange={(e) =>
                              dispatch({
                                   type: "updateName",
                                   payload: e.target.value,
                              })
                         }
                    />
               </label>
               <label>
                    Age:
                    <input
                         type="number"
                         value={state.age}
                         onChange={(e) =>
                              dispatch({
                                   type: "updateAge",
                                   payload: e.target.value,
                              })
                         }
                    />
               </label>
          </form>
     );
};
```

### useCallback

useCallback is a react hook which is used for the memorisation of the callback function as we know in react every component re-rendered so its function also re created and so avoid the recreation of complex functions we used the concept of
useCallback which takes a function as a arguement and a dependency list for which condition the component are going to create itself;

```js
import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

const App = () => {
     const [count, setCount] = useState(0);
     const [todos, setTodos] = useState([]);

     const increment = () => {
          setCount((c) => c + 1);
     };
     const addTodo = useCallback(() => {
          setTodos((t) => [...t, "New Todo"]);
     }, [todos]);

     return (
          <>
               <Todos todos={todos} addTodo={addTodo} />
               <hr />
               <div>
                    Count: {count}
                    <button onClick={increment}>+</button>
               </div>
          </>
     );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

## Lazy loading

If we are having a big applications like content management system with customer portel and admin portel etc. , its not a good idea to load the complete application. because customer does not use the most of the features of admin and admin doesn't use the most of the features of customer. So its better to load the required contents only.
In situations where we know that certain code/features will not be accessible to all the users or the user does not access it frequently, it is best to load them when the user requests for it. This improves user experience as well as initial loading time.

We can do this in two ways

- Using React Suspence

```js
import React, { Suspense } from "react";
const Customer = React.lazy(() => import("./Customer.js"));
const Admin = React.lazy(() => import("./Admin.js"));

//Instead of regular import statements, we will use the above approach for lazy loading

export default (props) => {
     if (props.user === "admin") {
          return (
               // fallback component is rendered until our main component is loaded
               <Suspense fallback={<div>Loading</div>}>
                    <Admin />
               </Suspense>
          );
     } else if (props.user === "customer") {
          return (
               <Suspense fallback={<div>Loading</div>}>
                    <Customer />
               </Suspense>
          );
     } else {
          return <div> Invalid User </div>;
     }
};
```
- Using Higher Order Component(HOC) 


## Dynamic imports  
Allows you to dynamically import modules at runtime rather than the initial loading. this will improve the performance and load time  of your application. This technique is perticularly useful for code splitting and lazy loading ensuring that only necessary code will loaded when needed.  
The import() will return a promise that resolves to the module that we want to import.  This kind of import is async. 

## Pure component  
It is like the class component. but it extends the class PureComponent instead of Component. The key difference is it will compare the current state and props with the new state and props and checks is there any changes occure or not and determines whether it should re render or not. 

## Controlled component and uncontrolled component  
In controlled component the form elements are handle by the react component and kept in the components state. 
In Uncontrolled component the form elements are handle by the DOM. To access the values we can use <u> ref </u>.

## Error boundaries 
Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them. 
```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
```
```js
<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>
```

## Synthetic event  
Same event have different properties and behaviors in different browsers. React will abstract the native browser event into a cross browser compatible format.  

## Porps validation  
It is the process of checking the data passed to the component meet certain criterias. It will prevent errors by ensuring that invalid datas are not effecting the applications state and functionality.  
```js
Component.PropTypes = {
     prop_name : PropTypes.type_of_prop
} 
```

## Fragment  
It is used to return multiple elements from a component . It will let you to group a list of children without adding extra nodes to the DOM.  
```js
<React.Fragment>
     <Component1/>
     <Component2/>
</React.Fragment>
```

## Profiler  
ReactJS Profilers is a tool for profiling the react components, It measures how many times the react Application is rendered and how much time the components take to be rendered. It helps to identify the parts of the application that are slow so that the developer can optimize it for better performance. It is lightweight and no third-party dependency is required.

## Render props  
It is a technique used for sharing code to child component as props whose value will  be a function. Child component takes that prop as a function and call it instead for implementing its own render logic. 

