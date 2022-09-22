# ***React JS***

    React is a open source Javascript library for making user interfaces.

- React is not a framework.
- Focuses  on UI.
- Rich ecosystem


## ***Why Learn React?***

- Created and maintained by Facebook
- More than 100k starts on Github.
- Huge community.
- Indemand Skill

*Technical Aspects*:-

- Component based Architecture
- Reusable code
- Declarative
- Seamlessly ingeration of Application,single page.
- React native for mobile applications


## ***Pre-requisite***

- HTML, CSS and JavaScript fundamentals
- ES6
- JavaScript - "this" keyword, filter, map and reduce
- ES6 - let & const, arrow functions, template literals, default parameters, object literals, rest and spread operators and destructuring assignment.


# Content - React JS

1. Fundamentals
2. HTTPGreet
3. Routing
4. Redux
5. Utilities



------------------------------------

# Create new React App

* To create A new React application/Project use following command

```node
npx create-react-app myapp
```

**local installation**

```
npx create-react-app <project_name>
```

**Global installation**
```
npm install create-react-app -g

create-react-app <project-name>
```


# Components

A component is a module which contains user interface.

* Components are usually a javascript file.


## Component types:- 

1. Stateless Functional Component
2. Stateful Class Components


1. Stateless Functional Component
    - They are javascript function that returns regular html

2. Stateful Class Component
    - Class extending Component
    - Render method returning HTML 

# Functional Vs Class Component

|   Functional Component   |  Class Component   |
|--------------------------|--------------------|
|   Simple functions       | More feature rich  |
|Use Func component as much as possible| Maintain their own private data- state}
| Absence of 'this' keyword| Complex UI Logic|
| Solution without using state| Provide lifecycle hooks|
| Mainly responsible for the UI||
|stateless/Dumb/Presentational|Statefull/Smart/Container|


## What is JSX?

    JSX Javascript XML - Extension to the JavaScript language syntax.

- Write XML-like code for elements and components.
- JSX tags have a tagname, attributes and children.
- JSX makes react code simpler and elegant.
- SX ultimately transpiles to pure JavaScript which is understood by the browsers.

### ***Props***
----------------

    Props are the optional input that are provided to a component for data or functionality.


## ***State**
---------------
    State is a initial values or position that are managed.


## State vs Props


|Props|State|
|----------------------|--------------------------|
|Props get passed to the component| State is managed witin the component|
|Functional parameters|Variable declared in the function body|
|props are immutable|state can be changed|
|props - Functional Components<br/>this.props-Class Components| useStae Hook- Functional Components<br/>this.state -Class Components|

## **Event Handling**
------------------------


## Method as Props
---------------------

## Conditional Rendering
_______________________

1. if/else
2. Element Variables
3. Ternary conditional operator
4. Short circuit operator


## Class Component LifeCycle Methods: - 

1. Mounting: - 
    * constructor
    * getDerivedStateFromProps
    * render
    * componentDidMount
2. Updating: -
    * static getDerivedStateFromProps
    * shouldComponentUpdate
    * render
    * getSnapshotBeforeUpdate
    * componentDidUpdate
3. Unmounting: -
    * componentWillUnmount
4. Error Handling: -
    * static getDerivedStateFromError
    * componentDidCatch


## Higher Order component

There is a situtation we often encounter that we have a common functionality or code that is being used by multiple components in a React application. Going In a conventional way, it leads to code redundancy and may affect programming principles.

**HOC**

    A pattern where a function takes a component as an argument and returns a new component.

    ex:
```Typescript
const NewComponent= higherOrderComponent(originalComponent)
const EnhancedComponent = higherOrderComponent(originalComponent)

const IronMan=withSuit(TonyStark)
```


## RenderProps

As we know that we can pass data and methods as a props to a component.

# What are Hooks?

Hooks are a new feature addition in React version 16.8 which allow you to use React features without having to write a class.

Ex: State of a component

Hooks don't work inside classes

# Why Hooks?

- understand how this keyword works in javascript.
- Remember to bind event handler in class component 
- classes don't minify very well and make hot reloading very unreilable.
*Reason 2*
- There is no particular way to reuse stateful component logic
- HOC and render props pattern do address this problem
- Makes the code harder to follow
- There is need a to share stateful logic in a better way.
*Reason 3*
- Create components for complex scenarios sucy as data fetching  and subscribing to events related code is not organized in one place.

ex: Data fetching - didMount and DidUpdate
- Because of stateful logic - cannot break components into smaller ones.

# **Rules of Hooks**

- **Only call Hooks at the Top level**
&nbsp;Dont call Hooks inside loops,conditions, or nested functions

- **Only call Hooks from React Functions**
&nbsp; Call them from within React functional component and not just any regular javascript function.



## useReducer Hook

It is a hook that is used for state management.
- It is an alternative to useState
- *useState* is build using useReducer.
- When to useReducer vs useState?


        useState - state
        useEffect - side effects
        useContext - context API
        useReducer - reducers

### reduce vs useReducer

|reduce in Javascript| useReducer in React|
|--------------------|--------------------|
|array.reduce(reducer,initialValue)|useReducer(reducer,initialState)|
|singleValue=reducer(accumulator,itemValue)|newState=reducer(currentState,action)|
|reduce method returns a single value| useReducer returns a pairs of value [newState,dispatch]|


## useReducer with useContex

- useReducer - Local state management
- Share state between components - Global state management
- useReducer+useContext